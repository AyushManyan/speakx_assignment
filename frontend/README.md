# SpeakX Assignment

## How to Run This Project

To run this project, follow these steps:

### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:
    ```
    MONGO_URI=mongodb://localhost:27017/speakxsampledata
    ```

4. Start the backend server:
    ```sh
    node index.js
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `frontend` directory with the following content:
    ```
    VITE_BASE_URL=http://localhost:3000
    ```

4. Start the frontend development server:
    ```sh
    npm run dev
    ```

## Project Structure

## Backend

### Setup

1. Install dependencies:
    ```sh
    npm install
    ```

2. Create a `.env` file in the `backend` directory with the following content:
    ```
    MONGO_URI=mongodb://localhost:27017/speakxsampledata
    ```

3. Start the backend server:
    ```sh
    node index.js
    ```

### API Endpoints

#### Get Data

- **Endpoint**: `GET /api/getdata`
- **Description**: Fetches paginated data from the database with optional search functionality.
- **Query Parameters**:
  - `page` (optional): The page number to retrieve. Defaults to `1`.
  - `limit` (optional): The number of items per page. Defaults to `15`.
  - `searchTerm` (optional): A search term to filter the data by type. Supports partial matching.
- **Response**:
  - `status`: The status of the request (`success` or `fail`).
  - `results`: The number of items returned in the current response.
  - `totalDocuments`: The total number of documents that match the query.
  - `data`: An object containing the retrieved data.

## Frontend

### Setup

1. Install dependencies:
    ```sh
    npm install
    ```

2. Create a `.env` file in the `frontend` directory with the following content:
    ```
    VITE_BASE_URL=http://localhost:3000
    ```

3. Start the frontend development server:
    ```sh
    npm run dev
    ```

### Usage

The frontend application fetches data from the backend and displays it with pagination and search functionality. The main component is `DisplayQuestion` which handles fetching and displaying the data.

### Components

#### DisplayQuestion

- **File**: [DisplayQuestion.jsx](http://_vscodecontentref_/6) )
- **Description**: Fetches and displays questions with pagination and search functionality.
- **Props**: None
- **State**:
  - [data](http://_vscodecontentref_/7): Array of questions fetched from the backend.
  - [loading](http://_vscodecontentref_/8): Boolean indicating if data is being loaded.
  - [pageNumber](http://_vscodecontentref_/9): Current page number for pagination.
  - [totalDocuments](http://_vscodecontentref_/10): Total number of documents matching the query.
  - [searchTerm](http://_vscodecontentref_/11): Search term for filtering questions.
  - [showSolution](http://_vscodecontentref_/12): Boolean indicating if the solution should be shown.
  - [selectedOptions](http://_vscodecontentref_/13): Object storing selected options for MCQ questions.

#### Anagram

- **File**: [Anagram.jsx](http://_vscodecontentref_/14) )
- **Description**: Displays an anagram question.
- **Props**:
  - [item](http://_vscodecontentref_/15): The question item.
  - [index](http://_vscodecontentref_/16): The index of the question.
  - [showSolution](http://_vscodecontentref_/17): Boolean indicating if the solution should be shown.
  - [setShowSolution](http://_vscodecontentref_/18): Function to toggle the solution visibility.

#### MCQ

- **File**: [MCQ.jsx](http://_vscodecontentref_/19) )
- **Description**: Displays a multiple-choice question.
- **Props**:
  - [item](http://_vscodecontentref_/20): The question item.
  - [index](http://_vscodecontentref_/21): The index of the question.
  - [selectedOptions](http://_vscodecontentref_/22): Object storing selected options.
  - [setSelectedOptions](http://_vscodecontentref_/23): Function to update selected options.

#### OtherQuestion

- **File**: [OtherQuestion.jsx](http://_vscodecontentref_/24) )
- **Description**: Displays other types of questions.
- **Props**:
  - [item](http://_vscodecontentref_/25): The question item.
  - [index](http://_vscodecontentref_/26): The index of the question.

