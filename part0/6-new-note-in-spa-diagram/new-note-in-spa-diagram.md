```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes text into the input field and clicks Save

    Note right of browser: The JavaScript event handler prevents the default form submission (no page reload), creates a new note object, and appends it to the notes list rendered in the DOM

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (JSON payoload)
    activate server
    Note right of server: The server saves the new note to its memory/array
   server-->>browser: HTTP 201 Created, the new note as JSON
    deactivate server

     Note right of browser: The page is not reloaded; the note added earlier by JavaScript remains visible
```