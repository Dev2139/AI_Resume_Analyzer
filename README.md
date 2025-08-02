# AI Resume Analyzer

![AI Resume Analyzer Screenshot](https://res.cloudinary.com/dsddldquo/image/upload/v1754158679/squszptgacjidtijjaxc.png) <!-- Replace with a URL to your screenshot -->

An intelligent web application that leverages the Google Gemini API to provide instant, detailed, and actionable feedback on your resume. Upload your resume in `.pdf`, `.txt`, or `.md` format and receive a comprehensive analysis of its strengths, weaknesses, and suggestions for improvement, all presented in a sleek, modern dark-themed UI.

---

## Features

-   **AI-Powered Analysis**: Get in-depth feedback on your resume's content and structure.
-   **Point-by-Point Feedback**: Analysis is broken down into clear, digestible points for:
    -   ✅ **Strengths**: What you're doing right.
    -   ⚠️ **Areas for Improvement**: What could be better.
    -   🚀 **Actionable Suggestions**: Specific steps to elevate your resume.
-   **Multiple File Formats**: Supports `.pdf`, `.txt`, and `.md` file uploads.
-   **Drag & Drop Interface**: Modern, intuitive file upload system.
-   **Engaging UI/UX**: Features a sleek dark theme, glassmorphism effects, and an interactive AI loading animation.
-   **Responsive Design**: Looks and works great on all devices, from desktops to mobile phones.

---

## Tech Stack

-   **Frontend**: [React](https://reactjs.org/)
-   **Development Server**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI Model**: [Google Gemini Pro](https://deepmind.google/technologies/gemini/)
-   **PDF Parsing**: [Mozilla PDF.js](https://mozilla.github.io/pdf.js/) 

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   A **Google Gemini API Key**. You can get one from the [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository (or create a new project):**
    ```bash
    # If you have the code, just navigate into the directory
    # OR, to start from scratch:
    npm create vite@latest Ai_Resume_Analyzer -- --template react
    cd my-resume-analyzer
    ```

2.  **Install project dependencies:**
    This command installs React, ReactDOM, and the development dependencies for Vite.
    ```bash
    npm install
    ```

7.  **Add the Application Code:**
    Replace the contents of `src/App.jsx` with the code provided for the Resume Analyzer.

8.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173`).

---

## Usage

1.  Launch the application.
2.  Drag and drop your resume file (`.pdf`, `.txt`, or `.md`) into the upload area, or click to browse your files.
3.  Once the file is loaded, click the **"Analyze Resume"** button.
4.  Wait for the AI to process your resume.
5.  Review the detailed, point-by-point feedback provided in the analysis cards.
