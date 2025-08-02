import React, { useState, useCallback, useRef, useEffect } from 'react';

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            return resolve();
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
};

const IconUpload = () => (
    <svg className="w-16 h-16 text-gray-500 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconCheckCircle = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
);
const IconExclamation = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.001-1.742 3.001H4.42c-1.532 0-2.492-1.667-1.742-3.001l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
);
const IconRocket = ({ className }) => (
     <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.05 7.95a1 1 0 00-1.414 1.414l1.62 1.62a1 1 0 001.14.23l3-1.5a1 1 0 00-.63-1.81l-3.716.817zM12.293 8.293a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414L13 10.414V14a1 1 0 11-2 0v-3.586l-1.293 1.293a1 1 0 01-1.414-1.414l2-2z" clipRule="evenodd"></path></svg>
);
const IconError = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
);

const AILoader = () => {
    const [message, setMessage] = useState('Initializing AI...');
    const messages = [
        'Analyzing resume structure...',
        'Evaluating keyword optimization...',
        'Scanning for action verbs...',
        'Checking for impact metrics...',
        'Compiling feedback...',
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            i = (i + 1) % messages.length;
            setMessage(messages[i]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-center p-8 space-y-6">
            <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-blue-500/50 rounded-full animate-scan"></div>
                </div>
            </div>
            <p className="text-lg text-gray-400 font-medium">{message}</p>
        </div>
    );
};

const AnalysisCard = ({ title, content, color, icon }) => {
    if (!content) return null;
    return (
        <div className={`bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 border-l-4 ${color}`}>
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="mr-4">{icon}</div>
                    <h3 className="text-xl font-bold text-gray-100">{title}</h3>
                </div>
                <ul className="space-y-3">
                    {content.split('\n').filter(line => line.trim() !== '').map((item, index) => (
                        <li key={index} className="flex items-start space-x-4 p-3 bg-gray-900/40 rounded-lg border border-gray-700/50">
                            <div className="flex-shrink-0 pt-1">
                                <IconCheckCircle className={`h-5 w-5 ${color.replace('border', 'text')}`} />
                            </div>
                            <span className="text-gray-300 break-words">{item.replace(/^- /, '')}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

function App() {
    const [resumeText, setResumeText] = useState('');
    const [fileName, setFileName] = useState('');
    const [analysis, setAnalysis] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    
    const apiKey = "AIzaSyBsNp5Q7cU2Az5Sn5cbEldw1-c7aInxMRQ";

    const resetState = () => {
        setResumeText('');
        setFileName('');
        setAnalysis(null);
        setError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const processFile = async (file) => {
        if (!file) return;
        
        resetState();
        setIsLoading(true);

        const fileExtension = file.name.split('.').pop().toLowerCase();
        setFileName(file.name);

        if (fileExtension === 'txt' || fileExtension === 'md') {
            const reader = new FileReader();
            reader.onload = (e) => {
                setResumeText(e.target.result);
                setIsLoading(false);
            };
            reader.onerror = () => {
                setError('Failed to read the file.');
                setIsLoading(false);
            };
            reader.readAsText(file);
        } else if (fileExtension === 'pdf') {
            try {
                await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js");
                await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js");
                
                window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;
                
                const reader = new FileReader();
                reader.onload = async (e) => {
                    try {
                        const pdf = await window.pdfjsLib.getDocument({ data: e.target.result }).promise;
                        let fullText = '';
                        for (let i = 1; i <= pdf.numPages; i++) {
                            const page = await pdf.getPage(i);
                            const textContent = await page.getTextContent();
                            fullText += textContent.items.map(s => s.str).join(' ') + '\n';
                        }
                        setResumeText(fullText);
                    } catch (err) {
                        console.error("Error parsing PDF:", err);
                        setError('Failed to parse the PDF file. It might be corrupted or protected.');
                    } finally {
                        setIsLoading(false);
                    }
                };
                reader.onerror = () => {
                    setError('Failed to read the PDF file.');
                    setIsLoading(false);
                };
                reader.readAsArrayBuffer(file);

            } catch (scriptError) {
                console.error(scriptError);
                setError("Could not load the PDF reader. Please check your internet connection and try again.");
                setIsLoading(false);
            }
        } else {
            setError('Unsupported file type. Please upload a .pdf, .txt, or .md file.');
            setFileName('');
            setIsLoading(false);
        }
    };

    const handleFileChange = (event) => processFile(event.target.files[0]);
    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
        processFile(event.dataTransfer.files[0]);
    };
    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
    };

    const analyzeResume = useCallback(async () => {
        if (apiKey === "YOUR_GOOGLE_GEMINI_API_KEY") {
            setError("Please replace 'YOUR_GOOGLE_GEMINI_API_KEY' with your actual API key in the code.");
            return;
        }
        if (!resumeText.trim()) {
            setError("Please upload a resume before analyzing.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setAnalysis(null);

        const prompt = `
            Analyze the following resume text in detail. Provide a comprehensive analysis covering its strengths (pros), weaknesses (cons), and actionable suggestions for improvement.
            For each key ("pros", "cons", "suggestions"), provide a single string where each point is a detailed bullet point starting with a hyphen and separated by a newline. Be thorough and specific in your feedback. For example: "- First detailed point explaining the reasoning.\\n- Second detailed point with a clear example."

            Resume Text:
            ---
            ${resumeText}
            ---
        `;

        const payload = {
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        "pros": { "type": "STRING" },
                        "cons": { "type": "STRING" },
                        "suggestions": { "type": "STRING" }
                    },
                    required: ["pros", "cons", "suggestions"]
                },
                maxOutputTokens: 8192,
            }
        };

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                 const errorData = await response.json();
                 throw new Error(errorData.error.message || `API request failed with status ${response.status}`);
            }
            
            const result = await response.json();

            if (result.candidates?.[0]?.content?.parts?.[0]) {
                const jsonText = result.candidates[0].content.parts[0].text;
                const parsedJson = JSON.parse(jsonText);
                setAnalysis(parsedJson);
            } else {
                if (result.candidates?.[0]?.finishReason === 'SAFETY') {
                    throw new Error("The analysis was blocked for safety reasons. Please try again with a different resume.");
                }
                throw new Error("Invalid response structure from API.");
            }
        } catch (err) {
            console.error("Error analyzing resume:", err);
            setError(err.message || "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    }, [resumeText, apiKey]);

    return (
        <div className="bg-gray-900 min-h-screen font-sans text-gray-200 relative overflow-hidden">
            <style>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    50% { transform: translateY(100%); }
                    100% { transform: translateY(-100%); }
                }
                .animate-scan { animation: scan 3s linear infinite; }
            `}</style>
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="container mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
                <header className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    ResumeRefine AI
                    </h1>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        Get instant, AI-powered feedback to elevate your resume.
                    </p>
                </header>

                <main className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
                    
                    {!fileName && !isLoading && (
                        <div className="w-full animate-fade-in">
                            <input type="file" accept=".pdf,.txt,.md" onChange={handleFileChange} ref={fileInputRef} className="hidden"/>
                            <div
                                onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}
                                onClick={() => fileInputRef.current.click()}
                                className={`w-full p-10 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300
                                    ${isDragging ? 'border-blue-400 bg-gray-800/80 scale-105' : 'border-gray-600 bg-gray-800/50 hover:border-gray-500 hover:bg-gray-800/70'}`}
                            >
                                <IconUpload />
                                <p className="text-xl font-semibold text-gray-200">Drag & drop your resume here</p>
                                <p className="text-gray-400">or click to browse</p>
                                <p className="text-sm text-gray-500 mt-2">Supports .pdf, .txt, .md</p>
                            </div>
                        </div>
                    )}
                    
                    {fileName && !isLoading && !analysis && (
                        <div className="w-full bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center space-y-6 shadow-lg animate-fade-in border border-gray-700/50">
                             <div className="text-center">
                                <p className="text-green-400 font-semibold">File Ready!</p>
                                <p className="text-gray-300">{fileName}</p>
                             </div>
                             <div className="flex space-x-4">
                                <button onClick={analyzeResume} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/40 text-lg">
                                    Analyze Resume
                                </button>
                                <button onClick={resetState} className="bg-gray-700 text-gray-300 font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">
                                    Upload New
                                </button>
                             </div>
                        </div>
                    )}

                    <div className="w-full">
                        {isLoading && <AILoader />}
                        {error && (
                            <div className="bg-red-900/50 border border-red-500 text-red-300 p-4 rounded-md shadow-lg flex items-center space-x-4">
                                <IconError className="w-8 h-8 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">An Error Occurred</p>
                                    <p>{error}</p>
                                </div>
                            </div>
                        )}
                        {analysis && (
                            <div className="space-y-8 animate-fade-in">
                                <AnalysisCard title="Strengths" content={analysis.pros} color="border-green-500" icon={<IconCheckCircle className="w-8 h-8 text-green-400"/>} />
                                <AnalysisCard title="Areas for Improvement" content={analysis.cons} color="border-yellow-500" icon={<IconExclamation className="w-8 h-8 text-yellow-400"/>} />
                                <AnalysisCard title="Actionable Suggestions" content={analysis.suggestions} color="border-blue-500" icon={<IconRocket className="w-8 h-8 text-blue-400"/>} />
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
