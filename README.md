# AI Resume Analyzer

A modern, AI-powered resume analyzer built with React and Google Gemini AI. Get instant feedback on your resume to improve your job applications.

## Features

- **AI-Powered Analysis**: Uses Google Gemini AI to analyze resumes
- **Multiple File Formats**: Supports PDF, TXT, and MD files
- **Drag & Drop Interface**: Easy file upload with drag and drop support
- **Detailed Feedback**: Get strengths, areas for improvement, and actionable suggestions
- **Modern UI**: Beautiful, responsive design with glassmorphism effects
- **Secure API Key Management**: Secure storage and management of your API key

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ai-Resume-Analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Getting Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key (it will look like `AIzaSyC...`)

### Using the Application

1. **First Time Setup**: When you first open the app, you'll be prompted to enter your Gemini API key
2. **Enter API Key**: Paste your API key in the modal and click "Save & Continue"
3. **Upload Resume**: Drag and drop your resume file or click to browse
4. **Analyze**: Click "Analyze Resume" to get AI-powered feedback
5. **Review Results**: View detailed analysis including strengths, areas for improvement, and suggestions

### Supported File Formats

- **PDF**: Most common resume format
- **TXT**: Plain text files
- **MD**: Markdown files

## API Key Security

- Your API key is stored securely in your browser's localStorage
- The key is never sent to any server except Google's Gemini API
- You can change your API key anytime by clicking "Change" in the header

## Error Handling

The application includes comprehensive error handling for:
- Invalid API keys
- Rate limiting
- Network issues
- File parsing errors
- Unsupported file types

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Google Gemini AI** - AI analysis
- **PDF.js** - PDF parsing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues:
1. Check that your API key is valid
2. Ensure you have a stable internet connection
3. Try uploading a different file format
4. Check the browser console for detailed error messages
