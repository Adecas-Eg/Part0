sequenceDiagram
    participant browser
    participant server

    browser->>browser: User interacts with the SPA interface to create a new note
    browser->>browser: JavaScript function captures user input and prepares data
    browser->>browser: JavaScript function sends a POST request to the server
    activate browser
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 201 Created (New note created successfully)
    deactivate server
    browser-->>browser: JavaScript function handles success response and updates UI
    deactivate browser
