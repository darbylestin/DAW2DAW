/*
  DAW2DAW data file
  -----------------
  This is the only file you need to edit to add or correct entries.

  HOW IT IS ORGANIZED
  - "daws" lists each DAW once.
  - "concepts" lists each idea once (for example "Split a clip").
    Inside each concept, "entries" has one entry per DAW.

  EACH DAW ENTRY HAS
    name     : what this DAW calls the feature
    mac      : Mac shortcut, or null if there is no default shortcut
    win      : Windows shortcut, or null if there is no default shortcut
    where    : short note on where to find it

  WHEN A DAW DOES NOT HAVE THE FEATURE, USE
    exists     : false
    workaround : the closest thing you can do instead

  TO ADD A NEW DAW LATER
    1. Add one line to "daws" with a short id and a display name.
    2. Add an entry with that id inside each concept.
       (Concepts without an entry show "not added yet" in the app.)

  Shortcut style: write keys joined with + (Cmd+Shift+N).
  If there are two shortcuts, separate them with " or ".
*/

window.DAW2DAW_DATA = {
  daws: [
    { id: "logic", name: "Logic Pro", macOnly: true },
    { id: "fl", name: "FL Studio" },
    { id: "ableton", name: "Ableton Live" },
    { id: "protools", name: "Pro Tools" },
    { id: "reaper", name: "Reaper" },
    { id: "studioone", name: "Studio One" },
    { id: "garageband", name: "GarageBand", macOnly: true }
  ],

  concepts: [
    {
      id: "play-stop",
      concept: "Play / stop",
      keywords: ["play", "stop", "start", "pause", "transport", "playback"],
      entries: {
        logic:      { name: "Play / Stop", mac: "Space", win: null, where: "Control bar at the top of the main window." },
        fl:         { name: "Play / Pause", mac: "Space", win: "Space", where: "Transport panel in the top toolbar. Check the Pat/Song switch next to it: Pat plays one pattern, Song plays the whole Playlist." },
        ableton:    { name: "Play / Stop", mac: "Space", win: "Space", where: "Control Bar at the top of the window." },
        protools:   { name: "Play / Stop", mac: "Space", win: "Space", where: "Transport window, or the transport buttons at the top of the Edit window." },
        reaper:     { name: "Play / Stop", mac: "Space", win: "Space", where: "Transport bar under the track area." },
        studioone:  { name: "Start / Stop", mac: "Space", win: "Space", where: "Transport bar at the bottom of the window." },
        garageband: { name: "Play / Stop", mac: "Space", win: null, where: "Control bar at the top of the window." }
      }
    },
    {
      id: "record",
      concept: "Record",
      keywords: ["record", "recording", "arm", "capture", "take"],
      entries: {
        logic:      { name: "Record", mac: "R", win: null, where: "Red Record button in the control bar. Recording starts on the selected, record-enabled track." },
        fl:         { name: "Record", mac: "R", win: "R", where: "Record button in the Transport panel. R arms recording; then press Space to start. A pop-up may ask what you want to record." },
        ableton:    { name: "Arrangement Record", mac: "F9", win: "F9", where: "Record button in the Control Bar. Arm the track first with its Arm button." },
        protools:   { name: "Record", mac: "Cmd+Space or F12 or Numpad 3", win: "Ctrl+Space or F12 or Numpad 3", where: "Record button in the Transport window. Record-enable the track first. On a Mac, Cmd+Space may open Spotlight instead." },
        reaper:     { name: "Record", mac: "Cmd+R", win: "Ctrl+R", where: "Record button in the transport bar. Arm the track first with its red record-arm button." },
        studioone:  { name: "Record", mac: null, win: null, where: "Record button in the Transport bar. Record-enable the track first." },
        garageband: { name: "Record", mac: "R", win: null, where: "Red Record button in the control bar. Recording goes to the selected track." }
      }
    },
    {
      id: "undo",
      concept: "Undo",
      keywords: ["undo", "redo", "step back", "history", "mistake"],
      entries: {
        logic:      { name: "Undo", mac: "Cmd+Z", win: null, where: "Edit menu > Undo. Edit > Undo History shows the full list." },
        fl:         { name: "Undo / Redo (toggle) and Undo step", mac: "Cmd+Z or Cmd+Opt+Z", win: "Ctrl+Z or Ctrl+Alt+Z", where: "Edit menu. Pressing the first shortcut twice redoes what you just undid. Use the second shortcut to keep stepping back." },
        ableton:    { name: "Undo", mac: "Cmd+Z", win: "Ctrl+Z", where: "Edit menu > Undo." },
        protools:   { name: "Undo", mac: "Cmd+Z", win: "Ctrl+Z", where: "Edit menu > Undo. Window > Undo History shows the full list." },
        reaper:     { name: "Undo", mac: "Cmd+Z", win: "Ctrl+Z", where: "Edit menu > Undo. View > Undo History shows every step." },
        studioone:  { name: "Undo", mac: "Cmd+Z", win: "Ctrl+Z", where: "Edit menu > Undo. Edit > History shows every step." },
        garageband: { name: "Undo", mac: "Cmd+Z", win: null, where: "Edit menu > Undo." }
      }
    },
    {
      id: "metronome",
      concept: "Metronome / click",
      keywords: ["metronome", "click", "click track", "tempo click", "beat"],
      entries: {
        logic:      { name: "Metronome Click", mac: "K", win: null, where: "Metronome button in the control bar, on the right side of the display." },
        fl:         { name: "Metronome", mac: "Cmd+M", win: "Ctrl+M", where: "Metronome icon in the top toolbar, next to the transport buttons." },
        ableton:    { name: "Metronome", mac: "O", win: "O", where: "Metronome switch at the top left of the Control Bar. The O shortcut is from Live 12; older versions have no default shortcut." },
        protools:   { name: "Click", mac: "Numpad 7", win: "Numpad 7", where: "Metronome button in the Transport window. You need a click track first: Track menu > Create Click Track." },
        reaper:     { name: "Metronome", mac: null, win: null, where: "Metronome button in the transport bar. Right-click it for metronome settings." },
        studioone:  { name: "Metronome (Click)", mac: "C", win: "C", where: "Click button in the Transport bar." },
        garageband: { name: "Metronome", mac: "K", win: null, where: "Metronome button in the control bar." }
      }
    },
    {
      id: "count-in",
      concept: "Count-in before recording",
      keywords: ["count in", "count-in", "countoff", "count off", "countdown", "pre-roll", "precount"],
      entries: {
        logic:      { name: "Count-in", mac: "Shift+K", win: null, where: "The 1234 button next to the Metronome button in the control bar." },
        fl:         { name: "Countdown before recording", mac: "Cmd+P", win: "Ctrl+P", where: "The 3-2-1 icon in the top toolbar, near the metronome." },
        ableton:    { name: "Count-In", mac: null, win: null, where: "Click the small arrow next to the Metronome switch and choose a Count-In length." },
        protools:   { name: "Countoff", mac: "Numpad 8", win: "Numpad 8", where: "Count Off button in the Transport window (shows the number of bars)." },
        reaper:     { name: "Count-in before recording", mac: null, win: null, where: "Right-click the metronome button > Metronome settings, and turn on Count-in before recording." },
        studioone:  { name: "Precount", mac: null, win: null, where: "Precount button in the Transport bar, next to the Click button." },
        garageband: { name: "Count-in", mac: "Shift+K", win: null, where: "Count-in button (1234) next to the metronome in the control bar." }
      }
    },
    {
      id: "loop-section",
      concept: "Loop a section of the song during playback",
      keywords: ["cycle", "loop", "loop playback", "repeat section", "loop region", "loop brace"],
      entries: {
        logic:      { name: "Cycle", mac: "C", win: null, where: "Cycle button in the control bar. Drag in the top half of the ruler to set the yellow cycle area." },
        fl:         { name: "Time selection (loops in Song mode)", mac: "Cmd+drag on the timeline", win: "Ctrl+drag on the timeline", where: "In the Playlist, hold the key and drag along the bar numbers at the top. The highlighted area loops. Double-click the timeline to clear it." },
        ableton:    { name: "Loop (Arrangement Loop)", mac: "Cmd+L", win: "Ctrl+L", where: "Select a time range in Arrangement View and press the shortcut, or use the Loop switch in the Control Bar." },
        protools:   { name: "Loop Playback", mac: "Cmd+Shift+L or Numpad 4", win: "Ctrl+Shift+L or Numpad 4", where: "Options menu > Loop Playback. Then select the range you want to loop in the Edit window." },
        reaper:     { name: "Repeat (loop) on time selection", mac: "R (toggle repeat)", win: "R (toggle repeat)", where: "Drag in the ruler at the top to set the loop points, then turn on the Repeat button in the transport bar." },
        studioone:  { name: "Loop", mac: "L", win: "L", where: "Loop button in the Transport bar. Drag in the ruler to set the loop range." },
        garageband: { name: "Cycle", mac: "C", win: null, where: "Cycle button in the control bar. Drag in the ruler to set the yellow cycle area." }
      }
    },
    {
      id: "split",
      concept: "Split (cut) a clip in two",
      keywords: ["split", "cut", "slice", "separate", "scissors", "razor", "divide", "chop", "split at playhead"],
      entries: {
        logic:      { name: "Split Regions at Playhead", mac: "Cmd+T", win: null, where: "Edit menu > Split > Regions at Playhead. Select the region first." },
        fl:         { name: "Slice tool", mac: "C", win: "C", where: "Razor icon in the Playlist toolbar. Press C, then drag across the clip where you want the cut. Press P to go back to the draw tool. FL Studio cuts where you drag, not at the playhead." },
        ableton:    { name: "Split", mac: "Cmd+E", win: "Ctrl+E", where: "Edit menu > Split. Click in the clip where you want the cut first." },
        protools:   { name: "Separate Clip At Selection", mac: "Cmd+E", win: "Ctrl+E", where: "Edit menu > Separate Clip > At Selection. Click in the clip where you want the cut first." },
        reaper:     { name: "Split items at edit cursor", mac: "S", win: "S", where: "Click where you want the cut, select the item, and press S. Also Item menu > Split items at cursor." },
        studioone:  { name: "Split at cursor", mac: "Opt+X", win: "Alt+X", where: "Select the event, place the cursor, then Edit menu > Split at Cursor. The Split tool (3) also cuts where you click." },
        garageband: { name: "Split Regions at Playhead", mac: "Cmd+T", win: null, where: "Edit menu > Split Regions at Playhead. Select the region first." }
      }
    },
    {
      id: "duplicate",
      concept: "Duplicate / repeat a clip right after itself",
      keywords: ["duplicate", "repeat", "copy", "clone", "paste after"],
      entries: {
        logic:      { name: "Repeat", mac: "Cmd+R", win: null, where: "Edit menu > Repeat. Select the region first." },
        fl:         { name: "Duplicate", mac: "Cmd+B", win: "Ctrl+B", where: "Works in the Playlist and the Piano roll. Duplicates the selection (or everything in view if nothing is selected) to the right." },
        ableton:    { name: "Duplicate", mac: "Cmd+D", win: "Ctrl+D", where: "Edit menu > Duplicate. Select the clip first." },
        protools:   { name: "Duplicate", mac: "Cmd+D", win: "Ctrl+D", where: "Edit menu > Duplicate. Edit > Repeat (Opt+R on Mac, Alt+R on Windows) lets you choose how many copies." },
        reaper:     { name: "Copy item", mac: null, win: null, where: "Ctrl+drag (Opt+drag on Mac) an item to make a copy, or copy and paste it at the edit cursor." },
        studioone:  { name: "Duplicate", mac: "D", win: "D", where: "Edit menu > Duplicate. Select the event first." },
        garageband: { name: "Copy region", mac: null, win: null, where: "Option-drag the region to a new spot, or copy and paste it at the playhead." }
      }
    },
    {
      id: "loop-clip",
      concept: "Make one clip repeat (loop) along the timeline",
      keywords: ["loop region", "loop clip", "repeat clip", "looping", "extend loop"],
      entries: {
        logic:      { name: "Loop (region)", mac: "L", win: null, where: "Select the region and press L, or drag the upper-right edge of the region to the right." },
        fl:         { exists: false, workaround: "Clips do not loop on their own. Paint the same pattern repeatedly in the Playlist with the Paint tool (B), or select the clip and press Ctrl+B (Cmd+B on Mac) to duplicate it to the right." },
        ableton:    { name: "Clip Loop", mac: null, win: null, where: "Turn on the Loop switch in Clip View, then drag the right edge of the clip in Arrangement View to extend it." },
        protools:   { name: "Loop (clip looping)", mac: "Cmd+Opt+L", win: "Ctrl+Alt+L", where: "Clip menu > Loop. Choose a number of loops or a length." },
        reaper:     { name: "Loop source", mac: null, win: null, where: "Item Properties (F2) > Loop source is on by default for many items. Drag the item's right edge to make it repeat." },
        studioone:  { exists: false, workaround: "Events do not loop by dragging. Select the event and press D to duplicate it as many times as needed." },
        garageband: { name: "Loop (region)", mac: null, win: null, where: "Hover over the upper-right edge of the region until the loop pointer appears, then drag right." }
      }
    },
    {
      id: "quantize",
      concept: "Quantize (snap notes to the beat)",
      keywords: ["quantize", "quantise", "fix timing", "tighten", "snap notes", "timing"],
      entries: {
        logic:      { name: "Quantize", mac: "Q", win: null, where: "Region inspector on the left (Quantize menu), or the Time Quantize menu inside the Piano Roll." },
        fl:         { name: "Quick quantize", mac: "Cmd+Q", win: "Ctrl+Q", where: "In the Piano roll: Tools (wrench icon) > Quick quantize. For more options use Quantize (Alt+Q, or Opt+Q on Mac). It follows the current snap setting." },
        ableton:    { name: "Quantize", mac: "Cmd+U", win: "Ctrl+U", where: "Edit menu > Quantize. Select the notes or clip first. Quantize Settings is Cmd+Shift+U (Ctrl+Shift+U on Windows)." },
        protools:   { name: "Quantize (Event Operations)", mac: "Opt+0", win: "Alt+0", where: "Event menu > Event Operations > Quantize. Select the notes or clip first." },
        reaper:     { name: "Quantize", mac: null, win: null, where: "In the MIDI Editor, select notes, then Edit menu > Quantize. For audio, use dynamic split or stretch markers." },
        studioone:  { name: "Quantize", mac: "Q", win: "Q", where: "Select notes or events, then Event menu > Quantize. Settings are in the Quantize panel." },
        garageband: { name: "Time Quantize", mac: null, win: null, where: "In the Piano Roll inspector or the Region inspector, choose a value from Time Quantize." }
      }
    },
    {
      id: "snap",
      concept: "Snap to grid",
      keywords: ["snap", "grid", "snap to grid", "magnet", "grid mode"],
      entries: {
        logic:      { name: "Snap to Grid", mac: "Cmd+G", win: null, where: "Snap pop-up menu at the top right of the Tracks area." },
        fl:         { name: "Snap", mac: null, win: null, where: "Magnet icon in the top toolbar (main snap) and in the Playlist and Piano roll toolbars. Hold Alt (Opt on Mac) while dragging to ignore snap temporarily." },
        ableton:    { name: "Snap to Grid", mac: "Cmd+4", win: "Ctrl+4", where: "Options menu > Snap to Grid." },
        protools:   { name: "Grid mode", mac: "F4", win: "F4", where: "Grid button in the edit mode buttons at the top left of the Edit window. (Slip mode, F2, is the no-snap mode.)" },
        reaper:     { name: "Snap / Grid", mac: null, win: null, where: "Snap button in the main toolbar, or Options menu > Snap/Grid." },
        studioone:  { name: "Snap", mac: null, win: null, where: "Snap button in the toolbar at the top of the arrange view." },
        garageband: { name: "Snap to Grid", mac: "Cmd+G", win: null, where: "Edit menu > Snap to Grid." }
      }
    },
    {
      id: "draw-tool",
      concept: "Pencil / draw tool",
      keywords: ["pencil", "draw", "draw notes", "paint", "write notes", "tool"],
      entries: {
        logic:      { name: "Pencil tool", mac: "T then P", win: null, where: "Tool menu at the top of the Tracks area or Piano Roll. Press T to open the tool menu, then P." },
        fl:         { name: "Draw tool", mac: "P", win: "P", where: "Pencil icon in the Playlist or Piano roll toolbar. The Paint tool (B) draws many items as you drag." },
        ableton:    { name: "Draw Mode", mac: "B", win: "B", where: "Pencil switch in the Control Bar, or Options menu > Draw Mode." },
        protools:   { name: "Pencil tool", mac: "F10", win: "F10", where: "Pencil icon in the Edit window toolbar." },
        reaper:     { name: "Draw by clicking (no separate pencil)", mac: null, win: null, where: "In the MIDI Editor, click on the grid to add a note. Mouse behaviour is set in Preferences > Mouse modifiers." },
        studioone:  { name: "Paint tool", mac: "5", win: "5", where: "Pencil icon in the toolbar at the top of the arrange view or note editor." },
        garageband: { name: "Draw notes (Cmd+click)", mac: null, win: null, where: "In the Piano Roll, hold Cmd and click to add a note." }
      }
    },
    {
      id: "piano-roll",
      concept: "Piano roll / MIDI note editor",
      keywords: ["piano roll", "midi editor", "note editor", "edit notes", "midi"],
      entries: {
        logic:      { name: "Piano Roll", mac: "P", win: null, where: "Double-click a MIDI region, or select it and press P. Opens at the bottom of the main window." },
        fl:         { name: "Piano roll", mac: "F7", win: "F7", where: "Piano roll icon in the top toolbar, or right-click a channel in the Channel rack and choose Piano roll." },
        ableton:    { name: "MIDI Note Editor (in Clip View)", mac: "Cmd+Opt+3", win: "Ctrl+Alt+3", where: "Double-click a MIDI clip. The editor opens at the bottom. The shortcut is from Live 12; in older versions use Shift+Tab." },
        protools:   { name: "MIDI Editor window", mac: "Ctrl+=", win: "Start+=", where: "Window menu > MIDI Editor, or double-click a MIDI clip." },
        reaper:     { name: "MIDI Editor", mac: null, win: null, where: "Double-click a MIDI item." },
        studioone:  { name: "Note Editor (Edit view)", mac: null, win: null, where: "Double-click a note event. The editor opens at the bottom." },
        garageband: { name: "Piano Roll", mac: null, win: null, where: "Double-click a MIDI region, or click the Editors button and choose Piano Roll." }
      }
    },
    {
      id: "step-sequencer",
      concept: "Step sequencer (grid of on/off steps for drums)",
      keywords: ["step sequencer", "channel rack", "drum grid", "steps", "pattern", "drum machine", "beat maker"],
      entries: {
        logic:      { name: "Step Sequencer (Pattern regions)", mac: null, win: null, where: "Right-click an empty spot on a software instrument track and choose Create Pattern Region. The Step Sequencer opens at the bottom." },
        fl:         { name: "Channel rack", mac: "F6", win: "F6", where: "Channel rack icon in the top toolbar. Each row is a sound; click the buttons to turn steps on." },
        ableton:    { exists: false, workaround: "Load a Drum Rack on a MIDI track, create a MIDI clip, turn on Draw Mode (B), and click notes into the grid in the MIDI Note Editor." },
        protools:   { exists: false, workaround: "Create a MIDI clip on an instrument track, open the MIDI Editor, and click notes in with the Pencil tool (F10) while in Grid mode." },
        reaper:     { exists: false, workaround: "There is no step sequencer. In the MIDI Editor, choose View > Mode: Named notes for a drum-style grid, and click notes in." },
        studioone:  { name: "Patterns", mac: null, win: null, where: "Right-click an instrument track > Insert Pattern. The pattern editor is a step grid." },
        garageband: { exists: false, workaround: "There is no step sequencer. Use Drummer, or click notes into the Piano Roll with Cmd+click." }
      }
    },
    {
      id: "mixer",
      concept: "Mixer",
      keywords: ["mixer", "mix window", "faders", "console", "channel strips", "levels"],
      entries: {
        logic:      { name: "Mixer", mac: "X", win: null, where: "Mixer button in the control bar. Opens at the bottom of the main window. Cmd+2 opens it in its own window." },
        fl:         { name: "Mixer", mac: "F9", win: "F9", where: "Mixer icon in the top toolbar. A sound only shows up on a mixer track after you route its channel there (select the channel, then Ctrl+L, or Cmd+L on Mac)." },
        ableton:    { name: "Mixer", mac: "Cmd+Opt+M", win: "Ctrl+Alt+M", where: "View menu > Mixer. Session View (press Tab) always shows a mixer. Showing the mixer in Arrangement View is a Live 12 feature." },
        protools:   { name: "Mix window", mac: "Cmd+=", win: "Ctrl+=", where: "Window menu > Mix. The shortcut switches between the Mix and Edit windows." },
        reaper:     { name: "Mixer", mac: "Cmd+M", win: "Ctrl+M", where: "View menu > Mixer. It opens docked at the bottom." },
        studioone:  { name: "Console", mac: "F3", win: "F3", where: "Mix button at the bottom right, or View menu > Console." },
        garageband: { exists: false, workaround: "There is no separate mixer window. Use the volume and pan controls in each track header, and Smart Controls (B) for effects." }
      }
    },
    {
      id: "mute",
      concept: "Mute a track",
      keywords: ["mute", "silence", "turn off track", "deactivate"],
      entries: {
        logic:      { name: "Mute", mac: "M", win: null, where: "M button on the track header or channel strip. The shortcut mutes the selected track." },
        fl:         { name: "Mute switch", mac: null, win: null, where: "Click the green light on the Playlist track, the Channel rack row, or the mixer track. Green means on; dark means muted." },
        ableton:    { name: "Track Activator", mac: "0", win: "0", where: "The numbered or speaker button on each track in the mixer. The 0 (zero) key turns the selected track or clip off and on." },
        protools:   { name: "Mute", mac: "Shift+M", win: "Shift+M", where: "M button on each track. The shortcut mutes the track that holds the edit cursor or selection." },
        reaper:     { name: "Mute", mac: null, win: null, where: "Mute button on the track panel and on the mixer channel." },
        studioone:  { name: "Mute", mac: null, win: null, where: "M button on the track and on the console channel." },
        garageband: { name: "Mute", mac: "M", win: null, where: "Mute button in the track header." }
      }
    },
    {
      id: "solo",
      concept: "Solo a track",
      keywords: ["solo", "isolate", "hear one track"],
      entries: {
        logic:      { name: "Solo", mac: "S", win: null, where: "S button on the track header or channel strip. The shortcut solos the selected track." },
        fl:         { name: "Solo", mac: null, win: null, where: "Right-click the green light on a Playlist track, Channel rack row, or mixer track and choose Solo. Do the same again to unsolo." },
        ableton:    { name: "Solo", mac: "S", win: "S", where: "S button on each track in the mixer. The shortcut solos the selected track." },
        protools:   { name: "Solo", mac: "Shift+S", win: "Shift+S", where: "S button on each track. The shortcut solos the track that holds the edit cursor or selection." },
        reaper:     { name: "Solo", mac: null, win: null, where: "Solo button on the track panel and on the mixer channel." },
        studioone:  { name: "Solo", mac: null, win: null, where: "S button on the track and on the console channel." },
        garageband: { name: "Solo", mac: "S", win: null, where: "Solo button in the track header." }
      }
    },
    {
      id: "new-track",
      concept: "Add a new track",
      keywords: ["new track", "add track", "create track", "insert track", "add instrument", "add channel"],
      entries: {
        logic:      { name: "New Tracks", mac: "Cmd+Opt+N", win: null, where: "Plus (+) button above the track headers, or Track menu > New Tracks." },
        fl:         { name: "Add channel (Playlist tracks already exist)", mac: null, win: null, where: "The Playlist starts with empty tracks, so there is nothing to create. To add a new sound, click the + at the bottom of the Channel rack or use the Add menu. Any pattern or audio clip can go on any Playlist track." },
        ableton:    { name: "Insert Audio Track / Insert MIDI Track", mac: "Cmd+T or Cmd+Shift+T", win: "Ctrl+T or Ctrl+Shift+T", where: "Create menu. The first shortcut adds an audio track, the second adds a MIDI track." },
        protools:   { name: "New Track", mac: "Cmd+Shift+N", win: "Ctrl+Shift+N", where: "Track menu > New. A dialog asks for the number and type of tracks." },
        reaper:     { name: "Insert new track", mac: "Cmd+T", win: "Ctrl+T", where: "Track menu > Insert new track, or double-click the empty space below the tracks." },
        studioone:  { name: "Add Tracks", mac: "T", win: "T", where: "Track menu > Add Tracks, or the + above the track list." },
        garageband: { name: "New Track", mac: "Cmd+Opt+N", win: null, where: "Track menu > New Track, or the + above the track headers." }
      }
    },
    {
      id: "insert-effect",
      concept: "Add an effect plug-in to a track",
      keywords: ["plugin", "plug-in", "effect", "insert", "audio fx", "fx", "reverb", "eq", "compressor", "add effect"],
      entries: {
        logic:      { name: "Audio FX slot", mac: null, win: null, where: "Click an empty Audio FX slot on the channel strip, in the Inspector (I) or the Mixer (X)." },
        fl:         { name: "Mixer effect slots", mac: null, win: null, where: "Open the Mixer (F9), click the mixer track, then click an empty slot in the panel on the right. The sound must be routed to that mixer track first." },
        ableton:    { name: "Audio Effects (devices)", mac: null, win: null, where: "Open the Browser, pick Audio Effects or Plug-Ins, and drag one onto the track. It appears in Device View at the bottom." },
        protools:   { name: "Inserts", mac: null, win: null, where: "Click an empty Insert slot (Inserts A-E) at the top of the track's channel strip in the Mix window." },
        reaper:     { name: "FX (track FX chain)", mac: null, win: null, where: "Click the FX button on the track. The FX browser opens; double-click an effect to add it." },
        studioone:  { name: "Inserts", mac: null, win: null, where: "Drag an effect from the Browser (Effects tab) onto the track, or click the + in the channel's Inserts in the Console." },
        garageband: { name: "Plug-ins (Smart Controls)", mac: null, win: null, where: "Open Smart Controls (B), click Plug-ins, and click an empty slot." }
      }
    },
    {
      id: "automation",
      concept: "Show and edit automation",
      keywords: ["automation", "automate", "volume curve", "envelope", "automation lane", "automation clip", "fade over time"],
      entries: {
        logic:      { name: "Show/Hide Automation", mac: "A", win: null, where: "Automation button above the track headers. Each track then shows a parameter menu and a line you can click to add points." },
        fl:         { exists: false, workaround: "Tracks do not have built-in automation lanes. Right-click the knob or fader you want to automate and choose Create automation clip. The clip appears in the Playlist and you edit its line there." },
        ableton:    { name: "Automation Mode", mac: "A", win: "A", where: "Automation Mode button above the track headers in Arrangement View. Pick the parameter in the track's two chooser menus." },
        protools:   { name: "Track View (volume, pan, and so on)", mac: "- (minus, with Commands Keyboard Focus on)", win: "- (minus, with Commands Keyboard Focus on)", where: "Click the Track View selector on the track (it usually says waveform) and choose volume or another parameter. Edit the line with the Grabber or Pencil tool." },
        reaper:     { name: "Envelopes", mac: null, win: null, where: "Click the envelope (trim) button on the track and choose which envelope to show, such as Volume." },
        studioone:  { name: "Automation lanes", mac: "A", win: "A", where: "Press A to show automation, then pick the parameter on each track." },
        garageband: { name: "Show Automation", mac: "A", win: null, where: "Mix menu > Show Automation. Choose the parameter in the track header." }
      }
    },
    {
      id: "freeze",
      concept: "Freeze a track to save computer power",
      keywords: ["freeze", "cpu", "render track", "commit", "save cpu", "bounce in place", "print track"],
      entries: {
        logic:      { name: "Freeze", mac: null, win: null, where: "Right-click a track header > Track Header Components > Freeze. Then click the snowflake button on the track and press play once." },
        fl:         { exists: false, workaround: "There is no freeze button. Render the part to audio instead: select the clips in the Playlist and use Tools > Consolidate, then mute or remove the original instrument." },
        ableton:    { name: "Freeze Track", mac: null, win: null, where: "Right-click the track name and choose Freeze Track, or use the Edit menu." },
        protools:   { name: "Freeze", mac: null, win: null, where: "Click the snowflake button on the track, or right-click the track name and choose Freeze. Commit is the permanent version." },
        reaper:     { name: "Freeze tracks", mac: null, win: null, where: "Right-click the track > Freeze tracks." },
        studioone:  { name: "Transform to Audio Track", mac: null, win: null, where: "Right-click the instrument track > Transform to Audio Track. You can keep the instrument so you can switch back." },
        garageband: { exists: false, workaround: "There is no freeze. Export the part as audio (Share > Export Song to Disk with only that track playing) and import it back on a new audio track." }
      }
    },
    {
      id: "export",
      concept: "Export the finished song to an audio file",
      keywords: ["bounce", "export", "render", "mixdown", "bounce mix", "save as wav", "save as mp3", "print"],
      entries: {
        logic:      { name: "Bounce Project or Section", mac: "Cmd+B", win: null, where: "File menu > Bounce > Project or Section." },
        fl:         { name: "Export (WAV file)", mac: "Cmd+R", win: "Ctrl+R", where: "File menu > Export > WAV file. For MP3 use Ctrl+Shift+R (Cmd+Shift+R on Mac). Make sure the transport is in Song mode to export the whole song." },
        ableton:    { name: "Export Audio/Video", mac: "Cmd+Shift+R", win: "Ctrl+Shift+R", where: "File menu > Export Audio/Video. Select the full length of the song in Arrangement View first." },
        protools:   { name: "Bounce Mix", mac: "Cmd+Opt+B", win: "Ctrl+Alt+B", where: "File menu > Bounce Mix. Select the full length of the song in the Edit window first." },
        reaper:     { name: "Render", mac: "Cmd+Opt+R", win: "Ctrl+Alt+R", where: "File menu > Render. Choose WAV or MP3 and the range (usually Entire project)." },
        studioone:  { name: "Export Mixdown", mac: null, win: null, where: "Song menu > Export Mixdown." },
        garageband: { name: "Export Song to Disk", mac: null, win: null, where: "Share menu > Export Song to Disk." }
      }
    },
    {
      id: "browser",
      concept: "Sound and file browser",
      keywords: ["library", "browser", "loops", "samples", "sounds", "presets", "files", "loop browser", "workspace"],
      entries: {
        logic:      { name: "Library (and Loop Browser)", mac: "Y or O", win: null, where: "Library button at the left of the control bar (Y) for instrument patches. Loop Browser button at the right (O) for Apple Loops." },
        fl:         { name: "Browser", mac: "Opt+F8", win: "Alt+F8", where: "Panel on the left side of the window. Drag samples from it into the Channel rack or Playlist." },
        ableton:    { name: "Browser", mac: "Cmd+Opt+B", win: "Ctrl+Alt+B", where: "Panel on the left side of the window." },
        protools:   { name: "Workspace browser", mac: "Opt+;", win: "Alt+;", where: "Window menu > New Workspace > Default." },
        reaper:     { name: "Media Explorer", mac: "Cmd+Opt+X", win: "Ctrl+Alt+X", where: "View menu > Media Explorer." },
        studioone:  { name: "Browser", mac: "F5", win: "F5", where: "Browse button at the bottom right, or View menu > Browser." },
        garageband: { name: "Library (and Loop Browser)", mac: "Y or O", win: null, where: "Library button at the left of the control bar (Y). Loop Browser button at the right (O)." }
      }
    },
    {
      id: "marker",
      concept: "Add a marker at a spot in the song",
      keywords: ["marker", "locator", "memory location", "section label", "bookmark", "verse", "chorus"],
      entries: {
        logic:      { name: "Create Marker", mac: "Opt+'", win: null, where: "Navigate menu > Other > Create Marker. Turn on the Marker track with the Global Tracks button (G) to see markers." },
        fl:         { name: "Add time marker", mac: "Opt+T", win: "Alt+T", where: "Works in the Playlist and Piano roll. The marker appears in the bar above the timeline. Right-click it to rename." },
        ableton:    { name: "Add Locator", mac: null, win: null, where: "Create menu > Add Locator, or right-click the scrub area above the tracks in Arrangement View." },
        protools:   { name: "Memory Location (marker)", mac: "Enter (numeric keypad)", win: "Enter (numeric keypad)", where: "Press Enter on the numeric keypad while stopped or playing. Window menu > Memory Locations shows the list." },
        reaper:     { name: "Insert marker", mac: "M", win: "M", where: "Markers appear in the ruler. Double-click one to rename it." },
        studioone:  { name: "Marker", mac: null, win: null, where: "Show the Marker track (button above the track list), then click Add Marker on it." },
        garageband: { exists: false, workaround: "There are no markers. Use the Arrangement track (Track menu > Show Arrangement Track) to label sections like Verse and Chorus." }
      }
    },
    {
      id: "tempo",
      concept: "Set the song tempo (BPM)",
      keywords: ["tempo", "bpm", "speed", "beats per minute"],
      entries: {
        logic:      { name: "Tempo", mac: null, win: null, where: "Tempo number in the display in the middle of the control bar. Double-click it to type a value." },
        fl:         { name: "Tempo", mac: null, win: null, where: "Tempo box in the top toolbar, next to the transport buttons. Drag it up or down, or right-click for presets and Type in value." },
        ableton:    { name: "Tempo", mac: null, win: null, where: "Tempo field at the top left of the Control Bar. Click it and type a value." },
        protools:   { name: "Tempo (manual tempo)", mac: null, win: null, where: "Transport window, in the MIDI controls section. Turn off the Conductor Track button to type a tempo by hand." },
        reaper:     { name: "Tempo (BPM)", mac: null, win: null, where: "BPM box in the transport bar. Double-click it to type a value." },
        studioone:  { name: "Tempo", mac: null, win: null, where: "Tempo field in the Transport bar. Click and type a value." },
        garageband: { name: "Tempo", mac: null, win: null, where: "Tempo number in the display in the middle of the control bar. Double-click it to type a value." }
      }
    },
    {
      id: "zoom",
      concept: "Zoom in / out along the timeline",
      keywords: ["zoom", "zoom in", "zoom out", "magnify", "see more"],
      entries: {
        logic:      { name: "Zoom Horizontal In / Out", mac: "Cmd+Right Arrow or Cmd+Left Arrow", win: null, where: "Zoom sliders at the top right of the Tracks area. Pinching on a trackpad also works." },
        fl:         { name: "Zoom", mac: "Cmd+scroll wheel", win: "Ctrl+scroll wheel", where: "Hold the key and scroll over the Playlist or Piano roll. You can also drag the ends of the scroll bar at the top." },
        ableton:    { name: "Zoom In / Out", mac: "+ or -", win: "+ or -", where: "Plus and minus keys, or drag up and down in the bar numbers above the tracks." },
        protools:   { name: "Horizontal Zoom In / Out", mac: "Cmd+] or Cmd+[", win: "Ctrl+] or Ctrl+[", where: "Zoom buttons in the Edit window toolbar." },
        reaper:     { name: "Zoom", mac: "Scroll wheel", win: "Scroll wheel", where: "By default the mouse wheel zooms the timeline. The zoom buttons are at the bottom right of the arrange view." },
        studioone:  { name: "Zoom", mac: null, win: null, where: "Zoom slider at the bottom right of the arrange view." },
        garageband: { name: "Zoom", mac: "Cmd+Right Arrow or Cmd+Left Arrow", win: null, where: "Zoom slider at the top right of the Tracks area. Pinching on a trackpad also works." }
      }
    },

    /* ===================== VOCAL EDITING ===================== */

    {
      id: "pitch-correction",
      concept: "Automatic pitch correction (Auto-Tune style)",
      keywords: ["auto-tune", "autotune", "auto tune", "pitch correction", "tune vocals", "vocal tuning", "tuning", "pitch correct", "t-pain", "hard tune"],
      entries: {
        logic:      { name: "Pitch Correction plug-in", mac: null, win: null, where: "On the vocal track, click an empty Audio FX slot > Pitch > Pitch Correction. Set the key and scale, then use Response for a natural (slower) or robotic (faster) sound." },
        fl:         { name: "Pitcher", mac: null, win: null, where: "Mixer (F9) > select the vocal's mixer track > empty effect slot > Pitcher. Set the key, then use Speed for a natural or robotic sound." },
        ableton:    { name: "Auto Shift", mac: null, win: null, where: "Browser > Audio Effects > Auto Shift, dragged onto the vocal track. Added in Live 12.1; check that your edition includes it." },
        protools:   { exists: false, workaround: "Pro Tools has no built-in automatic pitch correction plug-in. Most Pro Tools users add a third-party plug-in such as Antares Auto-Tune or Celemony Melodyne on an Insert slot." },
        reaper:     { name: "ReaTune (Correction)", mac: null, win: null, where: "Click FX on the vocal track > Cockos > ReaTune. Open its Correction tab, turn on automatic correction, and set the key and scale." },
        studioone:  { name: "Melodyne (built-in integration)", mac: "Cmd+M", win: "Ctrl+M", where: "Select the vocal event and choose Edit with Melodyne. Studio One has no separate auto-tune effect; Melodyne Essential comes with some versions." },
        garageband: { name: "Pitch Correction slider", mac: null, win: null, where: "Open the Audio Editor for the vocal track, click Track, and drag Pitch Correction. Turn on Limit to Key to keep it in the song's key." }
      }
    },
    {
      id: "graphic-tuning",
      concept: "Tune vocals note by note (Melodyne style)",
      keywords: ["melodyne", "flex pitch", "newtone", "graphic tuning", "note by note", "edit vocal pitch", "vocal tuning", "tuning", "pitch drift", "vibrato"],
      entries: {
        logic:      { name: "Flex Pitch", mac: "Cmd+F (show Flex)", win: null, where: "Press Cmd+F to show Flex controls, set the track's Flex mode to Flex Pitch, then double-click the region. Each sung note appears as a blob you can drag, with handles for pitch drift, vibrato, gain, and formant." },
        fl:         { name: "NewTone", mac: null, win: null, where: "Right-click the audio clip or open the channel's tools and send it to NewTone (or load NewTone from the plug-in list). Notes appear as blobs you can drag. NewTone is only included in some FL Studio editions." },
        ableton:    { exists: false, workaround: "There is no built-in note-by-note vocal editor. Use Auto Shift for automatic correction, or split the clip (Cmd+E / Ctrl+E) around a bad note and change that piece's Transpose and Detune in Clip View. Melodyne can also be used as a separate plug-in." },
        protools:   { exists: false, workaround: "There is no built-in note-by-note editor. If you own Celemony Melodyne, Pro Tools can open it directly on a clip through ARA (right-click the clip and choose Melodyne from the ARA options)." },
        reaper:     { exists: false, workaround: "There is no built-in note-by-note editor. If you own Melodyne, Reaper can open it directly on an item through ARA." },
        studioone:  { name: "Melodyne (built-in integration)", mac: "Cmd+M", win: "Ctrl+M", where: "Select the vocal event and choose Edit with Melodyne. Notes appear as blobs you can drag." },
        garageband: { exists: false, workaround: "There is no note-by-note editor. Use the Pitch Correction slider in the Audio Editor, or move up to Logic Pro's Flex Pitch." }
      }
    },
    {
      id: "pitch-shift",
      concept: "Pitch-shift / transpose an audio clip",
      keywords: ["pitch shift", "pitch shifting", "transpose audio", "change key", "semitones", "raise pitch", "lower pitch", "pitch up", "pitch down", "detune"],
      entries: {
        logic:      { name: "Pitch Shifter plug-in (or Flex Pitch Transpose)", mac: null, win: null, where: "Audio FX slot > Pitch > Pitch Shifter for the whole track. To shift one region, turn on Flex Pitch for the track and change Transpose in the Region inspector on the left." },
        fl:         { name: "Channel settings > Time stretching > Pitch", mac: null, win: null, where: "Double-click the audio clip's channel to open its settings. In the Time stretching section, pick a Mode, then turn the Pitch knob. With a stretch mode on, the length stays the same." },
        ableton:    { name: "Transpose (Clip View)", mac: null, win: null, where: "Double-click the audio clip. In the Clip View sample box, turn Transpose (semitones) and Detune (cents). Warp must be on to keep the same speed." },
        protools:   { name: "Pitch II (AudioSuite) or Elastic Pitch", mac: null, win: null, where: "Select the clip, then AudioSuite menu > Pitch Shift > Pitch II. For a change you can undo later, turn on Elastic Audio for the track and use Clip menu > Elastic Properties > Pitch Shift." },
        reaper:     { name: "Pitch adjust (Item Properties)", mac: "F2", win: "F2", where: "Select the item, press F2 for Item Properties, and change Pitch adjust (semitones). Turn off Preserve pitch only if you want the speed to change too." },
        studioone:  { name: "Transpose (Inspector)", mac: null, win: null, where: "Select the audio event and change Transpose in the Inspector (F4)." },
        garageband: { name: "Transpose (Region inspector)", mac: null, win: null, where: "Open the Audio Editor, click Region, and change Transpose. Follow Tempo & Pitch must be on." }
      }
    },
    {
      id: "formant",
      concept: "Formant shift (change vocal tone without changing pitch)",
      keywords: ["formant", "formants", "vocal character", "chipmunk", "deeper voice", "gender", "throat", "timbre"],
      entries: {
        logic:      { name: "Vocal Transformer or Flex Pitch formant", mac: null, win: null, where: "Audio FX slot > Pitch > Vocal Transformer (Formant knob) for the whole track. In Flex Pitch, each note also has a formant handle." },
        fl:         { name: "Pitcher (Formant setting) or NewTone", mac: null, win: null, where: "In Pitcher, use the Formant control. In NewTone, formants can be changed per note." },
        ableton:    { name: "Complex Pro warp mode (Formants)", mac: null, win: null, where: "In Clip View, set the Warp mode to Complex Pro. A Formants control appears next to it. Auto Shift also has a formant control." },
        protools:   { name: "Elastic Properties (Formant option)", mac: null, win: null, where: "With Elastic Audio on, Clip menu > Elastic Properties. When shifting pitch there, the Formant option keeps the voice's character." },
        reaper:     { name: "ReaPitch (Formant)", mac: null, win: null, where: "FX > Cockos > ReaPitch. Each shifter has a formant control." },
        studioone:  { exists: false, workaround: "There is no simple formant control. Melodyne's full editions have a formant tool, or use a third-party plug-in." },
        garageband: { name: "Vocal Transformer", mac: null, win: null, where: "Smart Controls (B) > Plug-ins > empty slot > Pitch > Vocal Transformer, and use its Formant knob." }
      }
    },
    {
      id: "harmonizer",
      concept: "Create vocal harmonies from one vocal (harmonizer)",
      keywords: ["harmony", "harmonies", "harmonizer", "harmonise", "backing vocals", "stack vocals", "thirds"],
      entries: {
        logic:      { exists: false, workaround: "There is no built-in harmonizer plug-in. Duplicate the vocal track (Track > Other > New Track With Duplicate Settings, then copy the region), turn on Flex Pitch, and drag each note to the harmony pitch." },
        fl:         { name: "Pitcher (Harmonize mode)", mac: null, win: null, where: "In Pitcher, turn on Harmonize and play the harmony notes on a MIDI keyboard or a Piano roll pattern routed to Pitcher." },
        ableton:    { exists: false, workaround: "There is no built-in harmonizer. Duplicate the track (Cmd+D / Ctrl+D on the track), then change Transpose in Clip View, or split the clip and transpose each piece." },
        protools:   { exists: false, workaround: "There is no built-in harmonizer. Duplicate the track (Track > Duplicate) and shift its pitch with Pitch II or Elastic Pitch, or use a third-party harmonizer plug-in." },
        reaper:     { name: "ReaPitch (extra shifters)", mac: null, win: null, where: "FX > Cockos > ReaPitch. Add shifters and set each one to a harmony interval." },
        studioone:  { exists: false, workaround: "There is no harmonizer. Duplicate the track and move notes with Melodyne, or use a third-party harmonizer plug-in." },
        garageband: { exists: false, workaround: "There is no harmonizer. Duplicate the track and transpose the copy in the Audio Editor's Region settings." }
      }
    },
    {
      id: "vocoder",
      concept: "Vocoder (robot or synth voice)",
      keywords: ["vocoder", "robot voice", "talkbox", "talk box", "synth voice", "evoc"],
      entries: {
        logic:      { name: "EVOC 20 PolySynth", mac: null, win: null, where: "Create a software instrument track and load EVOC 20 PolySynth. In its header, choose the vocal track as the Side Chain input, then play chords." },
        fl:         { name: "Vocodex", mac: null, win: null, where: "Load Vocodex in a mixer effect slot. Route the vocal (modulator) and a synth (carrier) to that mixer track and set them up in Vocodex." },
        ableton:    { name: "Vocoder", mac: null, win: null, where: "Browser > Audio Effects > Vocoder. Put it on a synth track and choose the vocal track as the Modulator source." },
        protools:   { exists: false, workaround: "There is no built-in vocoder. Use a third-party vocoder plug-in on an Insert, with the vocal as its key (sidechain) input." },
        reaper:     { name: "ReaVocode", mac: null, win: null, where: "FX > Cockos > ReaVocode. Route the vocal and a synth into it on separate channels." },
        studioone:  { exists: false, workaround: "There is no built-in vocoder. Use a third-party vocoder plug-in with the vocal as its sidechain input." },
        garageband: { exists: false, workaround: "There is no vocoder. GarageBand's Vocal Transformer can make a robotic sound, but it is not a true vocoder." }
      }
    },
    {
      id: "comping",
      concept: "Record several takes and comp the best parts",
      keywords: ["comp", "comping", "takes", "take folder", "take lanes", "playlists", "best take", "loop record", "quick swipe", "multiple takes"],
      entries: {
        logic:      { name: "Take folders (Quick Swipe Comping)", mac: null, win: null, where: "Turn on Cycle (C) and record several passes. Logic stacks them in a take folder. Open it with the arrow on the region and drag across the parts you want to keep." },
        fl:         { exists: false, workaround: "There are no take folders. Each loop-record pass becomes its own audio clip. Put takes on separate Playlist tracks, cut them with the Slice tool (C), and mute or delete the parts you don't want." },
        ableton:    { name: "Take Lanes", mac: "Cmd+Opt+U (show Take Lanes)", win: "Ctrl+Alt+U (show Take Lanes)", where: "Loop-record in Arrangement View; each pass goes to a take lane under the track. Select a range on a lane and press Enter to use it in the comp. Available in Live 11 and later." },
        protools:   { name: "Playlists (Loop Record)", mac: "Opt+L (Loop Record)", win: "Alt+L (Loop Record)", where: "Turn on Loop Record, select the range, and record. Switch the track to Playlists view to see every take, then select parts and promote them to the main playlist." },
        reaper:     { name: "Takes and fixed item lanes", mac: null, win: null, where: "Loop-record over a time selection; each pass becomes a take. In Reaper 7, turn on fixed item lanes for the track to see takes as lanes and click the parts to keep." },
        studioone:  { name: "Layers (takes)", mac: null, win: null, where: "Loop-record with record mode set to make layers. Expand Layers on the track and select the best parts to promote them." },
        garageband: { name: "Multiple takes", mac: null, win: null, where: "Turn on Cycle (C) and record several passes. Click the number at the top left of the region to choose a take." }
      }
    },
    {
      id: "punch",
      concept: "Punch in / punch out (re-record just one part)",
      keywords: ["punch", "punch in", "punch out", "autopunch", "quickpunch", "fix a line", "re-record"],
      entries: {
        logic:      { name: "Autopunch", mac: null, win: null, where: "Turn on the Autopunch button in the control bar (right-click the control bar > Customize Control Bar if it is hidden). Drag the red area in the ruler over the part to replace." },
        fl:         { name: "Record within a time selection", mac: null, win: null, where: "Make a time selection on the Playlist timeline (Ctrl+drag, or Cmd+drag on Mac) over the part to replace. Recording is limited to the selection when that recording option is on." },
        ableton:    { name: "Punch-In / Punch-Out", mac: null, win: null, where: "Set the loop brace over the part to replace, then turn on the Punch-In and Punch-Out switches beside the Loop switch in the Control Bar." },
        protools:   { name: "QuickPunch", mac: "Cmd+Shift+Space", win: "Ctrl+Shift+Space", where: "Options menu > QuickPunch. Or select the range in the Edit window and press Record; only that range is recorded." },
        reaper:     { name: "Auto-punch (time selection)", mac: null, win: null, where: "Options menu > Record mode > Time selection auto punch. Make a time selection over the part to replace." },
        studioone:  { name: "Auto Punch", mac: null, win: null, where: "Turn on the Punch button in the Transport bar and set the punch range in the ruler." },
        garageband: { exists: false, workaround: "There is no auto-punch button. Set the Cycle area over the part to replace and record, then choose the take you want." }
      }
    },
    {
      id: "de-esser",
      concept: "De-esser (tame harsh S sounds)",
      keywords: ["de-esser", "deesser", "de esser", "sibilance", "harsh s", "esses", "s sounds"],
      entries: {
        logic:      { name: "DeEsser 2", mac: null, win: null, where: "Audio FX slot > Dynamics > DeEsser 2." },
        fl:         { exists: false, workaround: "There is no plug-in named de-esser. Use Maximus or Fruity Multiband Compressor and compress only the high band (around 5-9 kHz) where the S sounds are." },
        ableton:    { exists: false, workaround: "There is no dedicated de-esser. Use Multiband Dynamics and compress only the high band, or a Compressor with its Sidechain EQ set to the S frequencies." },
        protools:   { name: "Dyn3 De-Esser", mac: null, win: null, where: "Insert slot > Dynamics > Dyn3 De-Esser." },
        reaper:     { exists: false, workaround: "There is no plug-in named de-esser among the Cockos plug-ins. Use ReaXcomp (multiband) and compress only the high band where the S sounds are." },
        studioone:  { exists: false, workaround: "There is no dedicated de-esser. Use Multiband Dynamics or Tricomp and compress only the highs." },
        garageband: { exists: false, workaround: "There is no separate de-esser to add. Many of the vocal patches in the Library already include de-essing." }
      }
    },
    {
      id: "gate",
      concept: "Noise gate (cut background noise between phrases)",
      keywords: ["gate", "noise gate", "expander", "background noise", "bleed", "hiss between phrases"],
      entries: {
        logic:      { name: "Noise Gate", mac: null, win: null, where: "Audio FX slot > Dynamics > Noise Gate." },
        fl:         { name: "Fruity Limiter (Noise gate section)", mac: null, win: null, where: "Load Fruity Limiter in a mixer effect slot and switch to its NOISE (gate) section." },
        ableton:    { name: "Gate", mac: null, win: null, where: "Browser > Audio Effects > Gate." },
        protools:   { name: "Dyn3 Expander/Gate", mac: null, win: null, where: "Insert slot > Dynamics > Dyn3 Expander/Gate." },
        reaper:     { name: "ReaGate", mac: null, win: null, where: "FX > Cockos > ReaGate." },
        studioone:  { name: "Gate", mac: null, win: null, where: "Browser > Effects > Dynamics > Gate." },
        garageband: { name: "Noise Gate", mac: null, win: null, where: "Open Smart Controls (B) or the track's settings and turn on Noise Gate, then set the threshold." }
      }
    },
    {
      id: "strip-silence",
      concept: "Strip silence (remove the quiet parts of a recording)",
      keywords: ["strip silence", "remove silence", "delete silence", "clean up vocal", "cut gaps", "breaths"],
      entries: {
        logic:      { name: "Strip Silence", mac: "Ctrl+X", win: null, where: "Select the audio region, then Functions menu (in the Tracks area) > Strip Silence." },
        fl:         { exists: false, workaround: "There is no strip silence command. Use the Slice tool (C) to cut out the quiet parts and delete them, or use a gate (Fruity Limiter's noise gate)." },
        ableton:    { exists: false, workaround: "There is no strip silence command. Split the clip (Cmd+E / Ctrl+E) around the gaps and delete them, or use the Gate effect." },
        protools:   { name: "Strip Silence", mac: "Cmd+U", win: "Ctrl+U", where: "Select the clip, then Edit menu > Strip Silence." },
        reaper:     { name: "Auto trim/split items (remove silence)", mac: null, win: null, where: "Select the item, right-click > Item processing > Auto trim/split items." },
        studioone:  { name: "Strip Silence", mac: null, win: null, where: "Select the audio event, then Audio menu > Strip Silence." },
        garageband: { exists: false, workaround: "There is no strip silence. Split the region (Cmd+T) around the gaps and delete them, or use the Noise Gate." }
      }
    },
    {
      id: "fades",
      concept: "Fade in / fade out / crossfade on audio",
      keywords: ["fade", "fade in", "fade out", "crossfade", "x-fade", "clicks", "pops", "smooth edit"],
      entries: {
        logic:      { name: "Fade tool / Region inspector Fade In and Out", mac: null, win: null, where: "Choose the Fade tool from the Tool menu and drag across a region edge, or set Fade In, Fade Out, and X-Fade in the Region inspector." },
        fl:         { name: "Clip fade handles", mac: null, win: null, where: "In the Playlist, drag the small handles at the top corners of an audio clip. Channel settings also have Fade in and Fade out knobs." },
        ableton:    { name: "Clip fades / Create Fades", mac: "Cmd+Opt+F", win: "Ctrl+Alt+F", where: "In Arrangement View, drag the fade handles at the top corners of an audio clip, or select across a clip edge and use Create menu > Create Fades." },
        protools:   { name: "Fades", mac: "Cmd+F", win: "Ctrl+F", where: "Select across a clip edge, then Edit menu > Fades > Create. The Smart Tool also creates a fade when you drag from a clip's top corner." },
        reaper:     { name: "Item fades / crossfades", mac: null, win: null, where: "Drag the small handles at the top corners of an item. Overlapping two items creates a crossfade automatically." },
        studioone:  { name: "Event fades", mac: null, win: null, where: "Drag the small handles at the top corners of an audio event. Overlapping events crossfade (X)." },
        garageband: { exists: false, workaround: "Regions have no fade handles. Draw a fade with volume automation (A), or use the master fade-out in the Mix menu for the song ending." }
      }
    },
    {
      id: "time-stretch",
      concept: "Fix timing / time-stretch audio",
      keywords: ["flex time", "warp", "elastic audio", "time stretch", "timestretch", "stretch", "fix timing", "align vocals", "tighten audio", "warp markers"],
      entries: {
        logic:      { name: "Flex Time", mac: "Cmd+F (show Flex)", win: null, where: "Press Cmd+F to show Flex controls, set the track's Flex mode (Monophonic for a solo vocal), then drag the flex markers that appear on the waveform." },
        fl:         { name: "Time stretching (channel settings)", mac: null, win: null, where: "Open the audio clip's channel settings and pick a stretch Mode in the Time stretching section, then set Time. Slicex or Edison can also be used for detailed edits." },
        ableton:    { name: "Warp / Warp Markers", mac: null, win: null, where: "Double-click the clip and turn on Warp in Clip View. Double-click the waveform to add warp markers, then drag them." },
        protools:   { name: "Elastic Audio", mac: null, win: null, where: "Choose an Elastic Audio mode (Monophonic for a solo vocal) from the track's Elastic Audio menu, switch the track to Warp view, and drag the warp markers." },
        reaper:     { name: "Stretch markers", mac: "Shift+W (add stretch marker)", win: "Shift+W (add stretch marker)", where: "Place the cursor in the item and add a stretch marker, then drag it. Alt+drag (Opt+drag on Mac) an item's edge stretches the whole item." },
        studioone:  { name: "Audio Bend", mac: null, win: null, where: "Select the event and open the Audio Bend panel to detect transients, then use the Bend tool to drag bend markers." },
        garageband: { name: "Flex Time", mac: null, win: null, where: "Open the Audio Editor, turn on Enable Flex, then drag the waveform to move a beat." }
      }
    },
    {
      id: "reverse",
      concept: "Reverse audio",
      keywords: ["reverse", "backwards", "reverse vocal", "reverse cymbal", "flip audio"],
      entries: {
        logic:      { name: "Reverse (Audio File Editor)", mac: null, win: null, where: "Open the region in the Audio File Editor, select it, then Functions > Reverse. This changes the audio file, so work on a copy." },
        fl:         { name: "Reverse (channel settings)", mac: null, win: null, where: "Open the audio clip's channel settings and check Reverse in the Sample section." },
        ableton:    { name: "Rev button (Clip View)", mac: null, win: null, where: "Double-click the clip and click Rev in the Clip View sample box. Live makes a reversed copy of the file." },
        protools:   { name: "Reverse (AudioSuite)", mac: null, win: null, where: "Select the clip, then AudioSuite menu > Other > Reverse, and click Render." },
        reaper:     { name: "Reverse items as new take", mac: null, win: null, where: "Right-click the item > Item processing > Reverse items as new take." },
        studioone:  { name: "Reverse Audio", mac: null, win: null, where: "Select the audio event, then Audio menu > Reverse Audio." },
        garageband: { name: "Reverse Playback", mac: null, win: null, where: "Open the Audio Editor, click Region, and check Reverse Playback." }
      }
    },
    {
      id: "clip-gain",
      concept: "Change the volume of one clip (clip gain)",
      keywords: ["clip gain", "region gain", "clip volume", "louder clip", "quieter clip", "gain", "level one word"],
      entries: {
        logic:      { name: "Region Gain", mac: null, win: null, where: "Select the region and change Gain in the Region inspector on the left." },
        fl:         { name: "Channel volume / Amp", mac: null, win: null, where: "Each audio clip has its own channel. Change its volume knob in the Channel rack, or Amp in the channel settings." },
        ableton:    { name: "Clip Gain", mac: null, win: null, where: "Double-click the clip and drag the Gain slider in the Clip View sample box." },
        protools:   { name: "Clip Gain", mac: null, win: null, where: "Drag the small fader icon at the bottom left of the clip, or show the clip gain line (View menu > Clip > Clip Gain Line) and draw changes on it." },
        reaper:     { name: "Item volume", mac: null, win: null, where: "Drag the small knob at the top right of the item, or drag the item's top edge down. Item Properties (F2) also has Volume." },
        studioone:  { name: "Event Gain", mac: null, win: null, where: "Drag the small square at the top middle of the event, or change Gain in the Inspector (F4)." },
        garageband: { name: "Region Gain", mac: null, win: null, where: "Open the Audio Editor, click Region, and change Gain." }
      }
    },
    {
      id: "normalize",
      concept: "Normalize audio",
      keywords: ["normalize", "normalise", "maximize level", "peak level", "make louder"],
      entries: {
        logic:      { name: "Normalize (Audio File Editor)", mac: null, win: null, where: "Open the region in the Audio File Editor, then Functions > Normalize. This changes the audio file." },
        fl:         { name: "Normalize (channel settings)", mac: null, win: null, where: "Open the audio clip's channel settings and check Normalize in the Sample section." },
        ableton:    { exists: false, workaround: "Clips cannot be normalized. Raise the clip's Gain slider in Clip View until it peaks where you want, or use the Normalize option when exporting." },
        protools:   { name: "Normalize (AudioSuite)", mac: null, win: null, where: "Select the clip, then AudioSuite menu > Other > Normalize, and click Render." },
        reaper:     { name: "Normalize items", mac: null, win: null, where: "Right-click the item > Item processing > Normalize items." },
        studioone:  { name: "Normalize Audio", mac: null, win: null, where: "Select the audio event, then Audio menu > Normalize Audio." },
        garageband: { exists: false, workaround: "There is no normalize command. Raise the region's Gain in the Audio Editor, or turn on Auto Normalize in GarageBand's settings for export." }
      }
    },
    {
      id: "input-monitoring",
      concept: "Hear yourself while recording (input monitoring)",
      keywords: ["input monitoring", "monitor", "hear myself", "headphones", "monitoring", "latency while recording"],
      entries: {
        logic:      { name: "Input Monitoring", mac: null, win: null, where: "Click the I button on the track header (right-click the header > Track Header Components to show it)." },
        fl:         { name: "Mixer input (armed track)", mac: null, win: null, where: "Set the mixer track's audio input at the top right of the Mixer. You hear the input through that mixer track while it is armed for recording." },
        ableton:    { name: "Monitor In / Auto / Off", mac: null, win: null, where: "In the track's In/Out section of the mixer, choose In (always hear input) or Auto (hear it when the track is armed)." },
        protools:   { name: "TrackInput Monitoring", mac: null, win: null, where: "Click the I button on the track, next to the record-enable button." },
        reaper:     { name: "Record monitoring", mac: null, win: null, where: "Click the speaker icon next to the track's record-arm button to turn monitoring on." },
        studioone:  { name: "Monitor", mac: null, win: null, where: "Click the speaker (Monitor) button on the track, next to record-enable." },
        garageband: { name: "Monitoring", mac: null, win: null, where: "Click the monitoring button in the track header (track settings may need to show it)." }
      }
    },
    {
      id: "buffer-size",
      concept: "Buffer size / fix delay (latency) when recording",
      keywords: ["buffer", "buffer size", "latency", "delay when recording", "lag", "audio settings", "audio device", "interface"],
      entries: {
        logic:      { name: "I/O Buffer Size", mac: null, win: null, where: "Logic Pro menu > Settings > Audio > Devices > I/O Buffer Size. Smaller numbers mean less delay but more computer work." },
        fl:         { name: "Buffer length", mac: null, win: null, where: "Options menu > Audio settings > Buffer length." },
        ableton:    { name: "Buffer Size", mac: null, win: null, where: "Live menu (Mac) or Options menu (Windows) > Settings > Audio > Buffer Size." },
        protools:   { name: "H/W Buffer Size", mac: null, win: null, where: "Setup menu > Playback Engine > H/W Buffer Size. Low Latency Monitoring (Options menu) also helps when recording." },
        reaper:     { name: "Request block size", mac: null, win: null, where: "Options menu (Reaper menu on Mac) > Preferences > Audio > Device > Request block size." },
        studioone:  { name: "Device Block Size", mac: null, win: null, where: "Studio One menu (Mac) or Options (Windows) > Options > Audio Setup > Device Block Size." },
        garageband: { name: "Audio/MIDI settings", mac: null, win: null, where: "GarageBand menu > Settings > Audio/MIDI. GarageBand chooses the buffer for you; turn off any heavy plug-ins to reduce delay." }
      }
    },

    /* ===================== MIXING EFFECTS ===================== */

    {
      id: "eq",
      concept: "EQ",
      keywords: ["eq", "equalizer", "equaliser", "channel eq", "parametric eq", "high pass", "low cut", "tone"],
      entries: {
        logic:      { name: "Channel EQ", mac: null, win: null, where: "Click the EQ area at the top of the channel strip, or Audio FX slot > EQ > Channel EQ." },
        fl:         { name: "Fruity Parametric EQ 2", mac: null, win: null, where: "Mixer (F9) > empty effect slot > Fruity Parametric EQ 2. Each mixer track also has a small 3-band EQ." },
        ableton:    { name: "EQ Eight", mac: null, win: null, where: "Browser > Audio Effects > EQ Eight." },
        protools:   { name: "EQ3 7-Band", mac: null, win: null, where: "Insert slot > EQ > EQ3 7-Band." },
        reaper:     { name: "ReaEQ", mac: null, win: null, where: "FX > Cockos > ReaEQ." },
        studioone:  { name: "Pro EQ", mac: null, win: null, where: "Browser > Effects > Pro EQ, or click the small EQ display on the console channel." },
        garageband: { name: "EQ (Smart Controls)", mac: null, win: null, where: "Open Smart Controls (B) and click EQ." }
      }
    },
    {
      id: "compressor",
      concept: "Compressor",
      keywords: ["compressor", "compression", "dynamics", "even out vocal", "glue"],
      entries: {
        logic:      { name: "Compressor", mac: null, win: null, where: "Audio FX slot > Dynamics > Compressor." },
        fl:         { name: "Fruity Compressor or Fruity Limiter (COMP)", mac: null, win: null, where: "Mixer effect slot > Fruity Compressor, or Fruity Limiter switched to its COMP section." },
        ableton:    { name: "Compressor (or Glue Compressor)", mac: null, win: null, where: "Browser > Audio Effects > Compressor." },
        protools:   { name: "Dyn3 Compressor/Limiter", mac: null, win: null, where: "Insert slot > Dynamics > Dyn3 Compressor/Limiter." },
        reaper:     { name: "ReaComp", mac: null, win: null, where: "FX > Cockos > ReaComp." },
        studioone:  { name: "Compressor", mac: null, win: null, where: "Browser > Effects > Dynamics > Compressor." },
        garageband: { name: "Compressor", mac: null, win: null, where: "Smart Controls (B) > Plug-ins. The Compressor slot is usually there already on vocal patches." }
      }
    },
    {
      id: "reverb",
      concept: "Reverb",
      keywords: ["reverb", "room", "hall", "space", "plate", "ambience", "verb"],
      entries: {
        logic:      { name: "ChromaVerb (or Space Designer)", mac: null, win: null, where: "Audio FX slot > Reverb > ChromaVerb. Usually placed on a bus and fed with a Send." },
        fl:         { name: "Fruity Reeverb 2 (or Fruity Convolver)", mac: null, win: null, where: "Mixer effect slot > Fruity Reeverb 2." },
        ableton:    { name: "Reverb (or Hybrid Reverb)", mac: null, win: null, where: "Browser > Audio Effects > Reverb. Usually placed on a Return track." },
        protools:   { name: "D-Verb", mac: null, win: null, where: "Insert slot > Reverb > D-Verb. Usually placed on an Aux Input track fed by a Send." },
        reaper:     { name: "ReaVerbate (or ReaVerb)", mac: null, win: null, where: "FX > Cockos > ReaVerbate. ReaVerb is the convolution (impulse response) reverb." },
        studioone:  { name: "Room Reverb (or Open AIR)", mac: null, win: null, where: "Browser > Effects > Reverb > Room Reverb. Usually placed on an FX channel fed by a Send." },
        garageband: { name: "Reverb (master send)", mac: null, win: null, where: "Smart Controls (B) > Master Effects > Reverb, then turn up the Reverb send on the track." }
      }
    },
    {
      id: "delay-fx",
      concept: "Delay / echo effect",
      keywords: ["delay", "echo", "slapback", "ping pong", "tape delay"],
      entries: {
        logic:      { name: "Stereo Delay (or Tape Delay)", mac: null, win: null, where: "Audio FX slot > Delay > Stereo Delay." },
        fl:         { name: "Fruity Delay 3 (or Fruity Delay Bank)", mac: null, win: null, where: "Mixer effect slot > Fruity Delay 3." },
        ableton:    { name: "Delay (or Echo)", mac: null, win: null, where: "Browser > Audio Effects > Delay." },
        protools:   { name: "Mod Delay III", mac: null, win: null, where: "Insert slot > Delay > Mod Delay III." },
        reaper:     { name: "ReaDelay", mac: null, win: null, where: "FX > Cockos > ReaDelay." },
        studioone:  { name: "Analog Delay (or Groove Delay)", mac: null, win: null, where: "Browser > Effects > Delay > Analog Delay." },
        garageband: { name: "Echo (master send)", mac: null, win: null, where: "Smart Controls (B) > Master Effects > Echo, then turn up the Echo send on the track." }
      }
    },
    {
      id: "limiter",
      concept: "Limiter (loudness on the master)",
      keywords: ["limiter", "loudness", "master", "mastering", "maximizer", "ceiling"],
      entries: {
        logic:      { name: "Adaptive Limiter (or Limiter)", mac: null, win: null, where: "Audio FX slot on the Stereo Out channel > Dynamics > Adaptive Limiter." },
        fl:         { name: "Fruity Limiter (or Maximus)", mac: null, win: null, where: "Effect slot on the Master mixer track > Fruity Limiter." },
        ableton:    { name: "Limiter", mac: null, win: null, where: "Browser > Audio Effects > Limiter, dragged onto the Main track." },
        protools:   { name: "Maxim", mac: null, win: null, where: "Insert slot on the master fader > Dynamics > Maxim." },
        reaper:     { name: "ReaLimit", mac: null, win: null, where: "Click FX on the master track > Cockos > ReaLimit." },
        studioone:  { name: "Limiter", mac: null, win: null, where: "Browser > Effects > Dynamics > Limiter, on the Main output channel." },
        garageband: { name: "Adaptive Limiter", mac: null, win: null, where: "Select the Master track, open Smart Controls (B) > Plug-ins, and add Adaptive Limiter." }
      }
    },
    {
      id: "sidechain",
      concept: "Sidechain compression (duck one sound under another)",
      keywords: ["sidechain", "side chain", "ducking", "pumping", "key input", "duck"],
      entries: {
        logic:      { name: "Side Chain (plug-in header)", mac: null, win: null, where: "Open a Compressor on the track to duck and choose the trigger track from the Side Chain menu at the top of the plug-in window." },
        fl:         { name: "Sidechain to this track", mac: null, win: null, where: "Select the trigger's mixer track, right-click the routing arrow under the target mixer track, and choose Sidechain to this track. Then pick it as the sidechain input in Fruity Limiter's COMP section." },
        ableton:    { name: "Compressor Sidechain", mac: null, win: null, where: "Click the small triangle at the top left of Compressor to open Sidechain, turn it on, and choose the trigger track in Audio From." },
        protools:   { name: "Key Input", mac: null, win: null, where: "Open Dyn3 Compressor/Limiter, choose a bus in the Key Input menu at the top of the plug-in window, turn on the key button, and send the trigger track to that bus." },
        reaper:     { name: "Sidechain via track channels 3/4", mac: null, win: null, where: "Send the trigger track to the target track's channels 3/4 with the Route button, then set ReaComp's Detector input to Auxiliary input." },
        studioone:  { name: "Sidechain (plug-in header)", mac: null, win: null, where: "Click the Sidechain button at the top of the Compressor window and check the trigger track." },
        garageband: { exists: false, workaround: "Sidechain is not available. Lower the volume with automation instead." }
      }
    },
    {
      id: "sends",
      concept: "Send to a bus / aux / return (shared reverb)",
      keywords: ["send", "bus", "aux", "return", "return track", "auxiliary", "routing", "route"],
      entries: {
        logic:      { name: "Send (to a Bus / Aux)", mac: null, win: null, where: "Click an empty Send slot on the channel strip and choose a bus. Logic creates the matching Aux channel." },
        fl:         { name: "Mixer routing", mac: null, win: null, where: "Select the source mixer track, then click the routing arrow at the bottom of the destination mixer track. Turn the knob on the cable to set the send level." },
        ableton:    { name: "Return track and Sends", mac: "Cmd+Opt+T (Insert Return Track)", win: "Ctrl+Alt+T (Insert Return Track)", where: "Create menu > Insert Return Track, then turn up the matching Send knob on each track." },
        protools:   { name: "Sends and Aux Input track", mac: null, win: null, where: "Create an Aux Input track (Track > New), then click an empty Send slot (A-J) on the source track and choose the bus feeding that Aux." },
        reaper:     { name: "Sends (Route button)", mac: null, win: null, where: "Click the Route button on the source track and add a send to another track." },
        studioone:  { name: "Sends / FX channel", mac: null, win: null, where: "In the Console, right-click the Sends area of a channel > Add FX Channel, or add a send to an existing bus." },
        garageband: { name: "Reverb and Echo sends", mac: null, win: null, where: "Only the master Reverb and Echo can be used as sends. Set their amounts in Smart Controls (B)." }
      }
    },
    {
      id: "group-tracks",
      concept: "Group or fold tracks together",
      keywords: ["group", "folder", "track stack", "group tracks", "fold", "summing stack", "folder track"],
      entries: {
        logic:      { name: "Track Stack", mac: "Cmd+Shift+D", win: null, where: "Select the tracks, then Track menu > Create Track Stack. Choose Folder Stack or Summing Stack." },
        fl:         { name: "Group with above track", mac: null, win: null, where: "Right-click a Playlist track's name and choose Group with above track. To combine their sound, route the mixer tracks to one mixer track." },
        ableton:    { name: "Group Tracks", mac: "Cmd+G", win: "Ctrl+G", where: "Select the tracks, then Edit menu > Group Tracks." },
        protools:   { name: "Folder Track", mac: null, win: null, where: "Select the tracks, right-click a track name, and choose Move to New Folder. Cmd+G (Ctrl+G on Windows) makes a mix/edit group instead." },
        reaper:     { name: "Folder tracks", mac: null, win: null, where: "Drag a track just under another and to the right, or click the folder icon on the parent track." },
        studioone:  { name: "Folder Track", mac: null, win: null, where: "Select the tracks, right-click > Pack Folder." },
        garageband: { name: "Track Stack", mac: "Cmd+Shift+D", win: null, where: "Select the tracks, then Track menu > Create Track Stack." }
      }
    },

    /* ===================== EDITING AND MIDI ===================== */

    {
      id: "join",
      concept: "Join / consolidate clips into one",
      keywords: ["join", "consolidate", "merge clips", "glue", "combine regions", "bounce in place"],
      entries: {
        logic:      { name: "Join Regions", mac: "Cmd+J", win: null, where: "Select the regions, then Edit menu > Join > Regions." },
        fl:         { name: "Consolidate", mac: null, win: null, where: "Select the clips in the Playlist, then the Playlist's Tools menu > Consolidate. This renders them to a new audio clip." },
        ableton:    { name: "Consolidate", mac: "Cmd+J", win: "Ctrl+J", where: "Select the clips or a time range, then Edit menu > Consolidate." },
        protools:   { name: "Consolidate Clip", mac: "Opt+Shift+3", win: "Alt+Shift+3", where: "Select the range, then Edit menu > Consolidate Clip." },
        reaper:     { name: "Glue items", mac: null, win: null, where: "Select the items, then Item menu > Glue items." },
        studioone:  { name: "Merge Events / Bounce", mac: null, win: null, where: "Select the events, then Event menu > Merge Events. Event > Bounce Selection makes one new audio event." },
        garageband: { name: "Join Regions", mac: "Cmd+J", win: null, where: "Select the regions, then Edit menu > Join Regions." }
      }
    },
    {
      id: "velocity",
      concept: "Edit note velocity (how hard each note is played)",
      keywords: ["velocity", "note velocity", "dynamics midi", "how hard", "accent"],
      entries: {
        logic:      { name: "Velocity", mac: null, win: null, where: "In the Piano Roll, select notes and drag the Velocity slider in the inspector, or use the Velocity tool from the Tool menu." },
        fl:         { name: "Event editor (velocity)", mac: null, win: null, where: "At the bottom of the Piano roll. Velocity is shown there by default; drag the bars up or down." },
        ableton:    { name: "Velocity Editor", mac: null, win: null, where: "Below the notes in the MIDI Note Editor. Drag the markers up or down." },
        protools:   { name: "Velocity view", mac: null, win: null, where: "In the MIDI Editor, open the Velocity lane under the notes and drag the stalks." },
        reaper:     { name: "Velocity lane", mac: null, win: null, where: "At the bottom of the MIDI Editor; choose Velocity in the CC lane menu, then drag the bars." },
        studioone:  { name: "Velocity lane", mac: null, win: null, where: "At the bottom of the Note Editor; drag the bars, or use the Velocity field in the Inspector." },
        garageband: { name: "Velocity slider", mac: null, win: null, where: "Select notes in the Piano Roll and drag the Velocity slider in its inspector." }
      }
    },
    {
      id: "transpose-midi",
      concept: "Move MIDI notes up or down in pitch",
      keywords: ["transpose midi", "move notes", "octave", "transpose notes", "change key midi", "semitone"],
      entries: {
        logic:      { name: "Transpose (move notes)", mac: "Opt+Up/Down Arrow (Opt+Shift for an octave)", win: null, where: "Select notes in the Piano Roll and use the shortcut, or drag them. Transpose in the Region inspector shifts the whole region." },
        fl:         { name: "Move selected notes", mac: null, win: null, where: "Select notes in the Piano roll and drag them, or use the arrow keys. Tools (wrench icon) also has transposing options." },
        ableton:    { name: "Transpose (move notes)", mac: "Up/Down Arrow (Shift for an octave)", win: "Up/Down Arrow (Shift for an octave)", where: "Select notes in the MIDI Note Editor and use the arrow keys, or use the Transpose control in the Notes panel of Clip View." },
        protools:   { name: "Transpose (Event Operations)", mac: null, win: null, where: "Select the notes, then Event menu > Event Operations > Transpose." },
        reaper:     { name: "Move notes", mac: null, win: null, where: "Select notes in the MIDI Editor and drag them, or use the Edit menu's transpose commands." },
        studioone:  { name: "Transpose", mac: null, win: null, where: "Select the notes, then Event menu > Transpose." },
        garageband: { name: "Move notes", mac: "Opt+Up/Down Arrow (Opt+Shift for an octave)", win: null, where: "Select notes in the Piano Roll and use the shortcut, or drag them." }
      }
    },
    {
      id: "notation",
      concept: "Sheet music / score view",
      keywords: ["score", "notation", "sheet music", "staff", "lead sheet", "print parts", "chart"],
      entries: {
        logic:      { name: "Score Editor", mac: "N", win: null, where: "Select a MIDI region and press N, or click the Editors button and choose Score." },
        fl:         { exists: false, workaround: "There is no score view. Use the Piano roll, or export MIDI (File > Export > MIDI file) and open it in notation software such as MuseScore." },
        ableton:    { exists: false, workaround: "There is no score view. Use the MIDI Note Editor, or export the clip as MIDI (right-click > Export MIDI Clip) and open it in notation software such as MuseScore." },
        protools:   { name: "Score Editor", mac: null, win: null, where: "Window menu > Score Editor." },
        reaper:     { name: "Musical notation (MIDI Editor view)", mac: null, win: null, where: "In the MIDI Editor, View menu > Mode: Musical notation." },
        studioone:  { name: "Score View", mac: null, win: null, where: "In the Note Editor, switch the view from Piano to Score (available in newer versions)." },
        garageband: { name: "Score", mac: null, win: null, where: "Open a MIDI region's editor and click Score at the top." }
      }
    },

    /* ===================== FILES ===================== */

    {
      id: "save",
      concept: "Save the project",
      keywords: ["save", "save project", "save as", "backup"],
      entries: {
        logic:      { name: "Save", mac: "Cmd+S", win: null, where: "File menu > Save. File > Save As makes a copy under a new name." },
        fl:         { name: "Save", mac: "Cmd+S", win: "Ctrl+S", where: "File menu > Save. FL Studio also keeps automatic backups (File > Revert to backup)." },
        ableton:    { name: "Save Live Set", mac: "Cmd+S", win: "Ctrl+S", where: "File menu > Save Live Set." },
        protools:   { name: "Save", mac: "Cmd+S", win: "Ctrl+S", where: "File menu > Save. Pro Tools also keeps session backups in the Session File Backups folder." },
        reaper:     { name: "Save project", mac: "Cmd+S", win: "Ctrl+S", where: "File menu > Save project." },
        studioone:  { name: "Save", mac: "Cmd+S", win: "Ctrl+S", where: "File menu > Save." },
        garageband: { name: "Save", mac: "Cmd+S", win: null, where: "File menu > Save." }
      }
    },
    {
      id: "new-project",
      concept: "Start a new project",
      keywords: ["new project", "new song", "new session", "new set", "start over", "template"],
      entries: {
        logic:      { name: "New Project", mac: "Cmd+N", win: null, where: "File menu > New, or File > New from Template." },
        fl:         { name: "New", mac: "Cmd+N", win: "Ctrl+N", where: "File menu > New, or File > New from template." },
        ableton:    { name: "New Live Set", mac: "Cmd+N", win: "Ctrl+N", where: "File menu > New Live Set." },
        protools:   { name: "New Session", mac: "Cmd+N", win: "Ctrl+N", where: "File menu > New Session, or the Dashboard that opens at launch." },
        reaper:     { name: "New project", mac: "Cmd+N", win: "Ctrl+N", where: "File menu > New project." },
        studioone:  { name: "New Song", mac: "Cmd+N", win: "Ctrl+N", where: "File menu > New Song, or the Start page." },
        garageband: { name: "New project", mac: "Cmd+N", win: null, where: "File menu > New, then choose a project type." }
      }
    }
  ]
};
