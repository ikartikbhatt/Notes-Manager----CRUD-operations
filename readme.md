# Notes Manager

## Project Description
Notes Manager is a simple RESTful API application that allows users to create, read, update, and delete notes efficiently. It provides endpoints to manage notes stored as files, enabling basic CRUD operations.

## Project Goal
The goal of this project is to develop a robust RESTful API capable of handling CRUD operations for notes, facilitating easy management of note files.

## API Endpoints

### 1. Fetch Notes (GET)
- **URL:** `http://localhost:5000/file/getFiles`
- **Request Body:**
```json
{
  "action": "listFiles"
}
```

- **Description:** Retrieves a list of all note files.

### 2. Create Note (POST)
- **URL:** `http://localhost:5000/file/createFile`
- **Request Body:**
```json
{
  "fileName": "file2356",
  "fileContent": "kartikey bhatt"
}
```

- **Description:** Creates a new note file with the specified content.

### 3. Update Note (PATCH)
- **URL:** `http://localhost:5000/file/updateFile`
- **Request Body:**
```json
{
  "existingFileName": "file3",
  "updateFileContent": "kartikey bhatt"
}
```

- **Description:** Updates the content of an existing note file.

### 4. Delete Note (DELETE)
- **URL:** `http://localhost:5000/file/deleteFile`
- **Request Body:**
```json
{
  "fileName": "file1"
}
```

- **Description:** Deletes the specified note file.


## Project Structure
```
project-4_notes-manager
├── modules
│   └── operation.js
├── node_modules
├── package-lock.json
├── package.json
├── readme.md
├── routes
│   └── routes.js
├── server
│   └── app.js
├── uploads
└── utils
    ├── appendFile.js
    ├── createFile.js
    ├── deleteFile.js
    ├── index.js
    └── listFiles.js
```


## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server with `node server/app.js` or your preferred method.


## Usage
Use any API client (e.g., Postman) to interact with the endpoints described above.


## License
This project is licensed under the MIT License.
