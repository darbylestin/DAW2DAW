/*
  DAW2DAW app logic
  -----------------
  Reads the list in data.js and shows matching cards.
  No network calls, no AI service, no keys.
*/

// ---------- Search helpers ----------

// Make text easy to compare: lowercase, and treat different ways of
// writing the same key (Command, ⌘, Cmd) as the same thing.
function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/⌘|command/g, "cmd")
    .replace(/⌥|option/g, "opt")
    .replace(/⌃|control/g, "ctrl")
    .replace(/⇧/g, "shift")
    .replace(/\s+/g, " ")
    .trim();
}

// "Cmd+Z or Cmd+Opt+Z" -> ["cmd+z", "cmd+opt+z"]
function shortcutList(value) {
  if (!value) return [];
  return String(value).split(" or ").map(function (part) {
    return normalize(part.replace(/\(.*?\)/g, "")).replace(/ /g, "");
  }).filter(Boolean);
}

function entryShortcuts(entry) {
  if (!entry || entry.exists === false) return [];
  return shortcutList(entry.mac).concat(shortcutList(entry.win));
}

// Does one search word appear in the text?
// One-letter words only match the start of a word, so "r" does not match everything.
function textHas(text, word) {
  if (word.length === 1) {
    return text.split(/[^a-z0-9]+/).some(function (w) { return w.indexOf(word) === 0; });
  }
  return text.indexOf(word) !== -1;
}

// Returns a score (higher = better match), or 0 for no match.
function scoreConcept(concept, query, fromId, toId) {
  var q = normalize(query);
  if (!q) return 1;

  var from = concept.entries[fromId];
  var to = concept.entries[toId];
  var fromName = normalize(from && from.name);
  var keys = entryShortcuts(from).concat(entryShortcuts(to));
  var fromKeys = entryShortcuts(from);

  // A search like "cmd+t" is treated as a shortcut and must match exactly.
  if (q.indexOf("+") !== -1) {
    var wanted = q.replace(/ /g, "");
    if (fromKeys.indexOf(wanted) !== -1) return 3;
    if (keys.indexOf(wanted) !== -1) return 2;
    return 0;
  }

  // A single character (like "r" or "k") is treated as a one-key shortcut.
  if (q.length === 1) {
    if (fromKeys.indexOf(q) !== -1) return 3;
    if (keys.indexOf(q) !== -1) return 2;
    return 0;
  }

  // Everything searchable as text: the concept, its keywords, and every DAW's name for it.
  var names = Object.keys(concept.entries).map(function (id) {
    return concept.entries[id].name || "";
  });
  var allText = normalize([concept.concept].concat(concept.keywords || [], names).join(" | "));

  var words = q.split(" ");
  var everyWordFound = words.every(function (word) {
    return textHas(allText, word) || keys.indexOf(word) !== -1;
  });
  if (!everyWordFound) return 0;

  // Rank matches on the name you already know first.
  if (fromName && words.every(function (word) { return textHas(fromName, word); })) return 3;
  if (fromKeys.indexOf(q) !== -1) return 3;
  return 2;
}

function search(data, query, fromId, toId) {
  return data.concepts
    .map(function (concept, index) {
      return { concept: concept, score: scoreConcept(concept, query, fromId, toId), index: index };
    })
    .filter(function (item) { return item.score > 0; })
    .sort(function (a, b) { return b.score - a.score || a.index - b.index; })
    .map(function (item) { return item.concept; });
}

// ---------- Page ----------

if (typeof document !== "undefined") {
  (function () {
    var data = window.DAW2DAW_DATA;
    var fromSelect = document.getElementById("fromDaw");
    var toSelect = document.getElementById("toDaw");
    var swapButton = document.getElementById("swap");
    var input = document.getElementById("q");
    var status = document.getElementById("status");
    var results = document.getElementById("results");


    function el(tag, className, text) {
      var node = document.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }

    function dawById(id) {
      return data.daws.filter(function (d) { return d.id === id; })[0];
    }

    function shortcutCell(value, fallback) {
      var dd = el("dd");
      if (!value) {
        dd.appendChild(el("span", "none", fallback));
        return dd;
      }
      String(value).split(" or ").forEach(function (part, i) {
        if (i > 0) dd.appendChild(document.createTextNode(" or "));
        dd.appendChild(el("kbd", "", part));
      });
      return dd;
    }

    function row(label, cell) {
      var wrap = el("div", "row");
      wrap.appendChild(el("dt", "", label));
      wrap.appendChild(cell);
      return wrap;
    }

    function fromBlock(daw, entry) {
      var box = el("div", "side from");
      var head = el("div", "side-head");
      head.appendChild(el("span", "", "In " + daw.name));
      box.appendChild(head);

      if (!entry) {
        box.appendChild(el("p", "name", "Not added yet"));
      } else if (entry.exists === false) {
        box.appendChild(el("p", "name", "No direct equivalent"));
      } else {
        box.appendChild(el("p", "name", entry.name));
        var keys = [entry.mac, entry.win].filter(Boolean)
          .filter(function (k, i, list) { return list.indexOf(k) === i; });
        if (keys.length) box.appendChild(el("p", "from-keys", keys.join("  /  ")));
      }
      return box;
    }

    function toBlock(daw, entry) {
      var missing = !entry || entry.exists === false;
      var box = el("div", "side to" + (missing ? " missing" : ""));
      var head = el("div", "side-head");
      head.appendChild(el("span", "", "In " + daw.name));
      box.appendChild(head);

      var rows = el("dl", "rows");

      if (!entry) {
        box.appendChild(el("p", "name", "Not added yet"));
        rows.appendChild(row("Note", el("dd", "", "This DAW does not have an entry for this concept in data.js yet.")));
      } else if (entry.exists === false) {
        box.appendChild(el("p", "name", "No direct equivalent in " + daw.name));
        rows.appendChild(row("Closest workaround", el("dd", "", entry.workaround)));
      } else {
        box.appendChild(el("p", "name", entry.name));
        rows.appendChild(row("Mac", shortcutCell(entry.mac, "No default shortcut")));
        rows.appendChild(row("Windows", shortcutCell(entry.win, daw.macOnly ? "Not available (Mac only)" : "No default shortcut")));
        rows.appendChild(row("Where is it", el("dd", "", entry.where)));
      }
      box.appendChild(rows);
      return box;
    }

    function card(concept, fromDaw, toDaw) {
      var box = el("article", "card");
      box.appendChild(el("h2", "", concept.concept));
      box.appendChild(fromBlock(fromDaw, concept.entries[fromDaw.id]));
      box.appendChild(toBlock(toDaw, concept.entries[toDaw.id]));
      return box;
    }

    // ----- Animation helpers (purely visual) -----
    var lastResults = "";    // which cards were on screen, so they only pop in when the list changes
    var lastStatus = "";

    // Restart a one-off CSS animation by removing and re-adding its class.
    function replay(node, className) {
      node.classList.remove(className);
      void node.offsetWidth;
      node.classList.add(className);
    }

    var eq = document.getElementById("eq");
    var meter = document.getElementById("meter");

    function setStatus(text) {
      status.textContent = text;
      eq.hidden = !text;
      if (text && text !== lastStatus) {
        replay(status, "bump");
        replay(eq, "play");
      }
      lastStatus = text;
    }

    function render() {
      var fromDaw = dawById(fromSelect.value);
      var toDaw = dawById(toSelect.value);
      var query = input.value;
      results.textContent = "";

      if (fromDaw.id === toDaw.id) {
        setStatus("");
        lastResults = "";
        results.appendChild(el("div", "empty", "Pick two different DAWs to see a translation."));
        return;
      }

      var found = search(data, query, fromDaw.id, toDaw.id);

      if (!found.length) {
        setStatus("");
        lastResults = "";
        results.appendChild(el("div", "empty",
          'Nothing found for "' + query.trim() + '". Try a simpler word, like "export" or "loop", or clear the search to browse everything.'));
        return;
      }

      setStatus(query.trim()
        ? found.length + (found.length === 1 ? " match" : " matches")
        : "Showing all " + found.length + " entries. Type to narrow them down.");

      var signature = fromDaw.id + ">" + toDaw.id + ":" + found.map(function (c) { return c.id; }).join(",");
      var animate = signature !== lastResults;
      lastResults = signature;
      found.forEach(function (concept, index) {
        var node = card(concept, fromDaw, toDaw);
        if (animate) {
          node.classList.add("enter");
          node.style.setProperty("--i", Math.min(index, 6));
        }
        results.appendChild(node);
      });
    }

    function fill(select, chosenId) {
      data.daws.forEach(function (daw) {
        var option = el("option", "", daw.name);
        option.value = daw.id;
        select.appendChild(option);
      });
      select.value = chosenId;
    }

    // Remember the last two DAWs picked, on this phone only.
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem("daw2daw-picks")) || {}; } catch (e) {}
    fill(fromSelect, dawById(saved.from) ? saved.from : "logic");
    fill(toSelect, dawById(saved.to) ? saved.to : "fl");

    function savePicks() {
      try {
        localStorage.setItem("daw2daw-picks", JSON.stringify({ from: fromSelect.value, to: toSelect.value }));
      } catch (e) {}
    }

    fromSelect.addEventListener("change", function () { savePicks(); render(); });
    toSelect.addEventListener("change", function () { savePicks(); render(); });
    input.addEventListener("input", function () {
      replay(meter, "hit");
      render();
    });
    swapButton.addEventListener("click", function () {
      var keep = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = keep;
      savePicks();
      replay(swapButton, "spin");
      replay(fromSelect, "flip");
      replay(toSelect, "flip");
      render();
    });

    render();
  })();
}

// Installable app: save the app's files on the phone so it opens offline.
// Only works on a real web address (https), such as GitHub Pages, or localhost for testing.
if (typeof navigator !== "undefined" && "serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () { /* app still works online */ });
  });
}

// Lets the search be tested outside a browser. Ignored on the web page.
if (typeof module !== "undefined") {
  module.exports = { normalize: normalize, search: search };
}
