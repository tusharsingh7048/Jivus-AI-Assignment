// import React, { useState } from "react";
// import MicrophoneButton from "../components/MicrophoneButton";
// import TranscriptionDisplay from "../components/TranscriptionDisplay";
// import { transcribeAudio } from "../utils/deepgram";

// const Home = () => {
//   const [transcript, setTranscript] = useState("");

//   const handleAudioRecorded = async (audioBlob) => {
//     console.log("Audio Recorded:", audioBlob);
//     try {
//       const transcription = await transcribeAudio(audioBlob);
//       setTranscript(transcription);
//     } catch (error) {
//         console.error("Transcription error:", error); // Log the error
//       setTranscript("An error occurred while transcribing the audio.");
//     }
//   };


//   const handleStartRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       mediaRecorder.current = new MediaRecorder(stream, { mimeType: "audio/wav" });
  
//       mediaRecorder.current.ondataavailable = (event) => {
//         audioChunks.current.push(event.data);
//       };
  
//       mediaRecorder.current.onstop = () => {
//         const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
//         onAudioRecorded(audioBlob);
//         audioChunks.current = [];
//       };
  
//       mediaRecorder.current.start();
//       setIsRecording(true);
//     } catch (err) {
//       console.error("Error accessing the microphone:", err);
//       setTranscript("Error accessing microphone. Please check permissions.");
//     }
//   };
  

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Audio Transcription App</h1>
//       <MicrophoneButton onAudioRecorded={handleAudioRecorded} />
//       <TranscriptionDisplay transcript={transcript} />
//     </div>
//   );
// };

// export default Home;





// src/pages/Home.jsx

// import React, { useState } from "react";
// import { transcribeAudio } from "../utils/deepgram";  // Deepgram transcription function
// import MicrophoneButton from "../components/MicrophoneButton";
// import SavedTranscription from "../components/SavedTranscriptions"; // Saved transcription component

// const Home = () => {
//   const [transcript, setTranscript] = useState("");

//   // Save transcription to localStorage
//   const saveTranscription = (transcription) => {
//     const savedTranscriptions = JSON.parse(localStorage.getItem("transcriptions")) || [];
//     savedTranscriptions.push(transcription);
//     localStorage.setItem("transcriptions", JSON.stringify(savedTranscriptions));
//   };

//   const handleAudioRecorded = async (audioBlob) => {
//     try {
//       console.log("Audio Blob Received: ", audioBlob);
//       const transcription = await transcribeAudio(audioBlob);
//       setTranscript(transcription);  // Set transcription text for display
//       saveTranscription(transcription);  // Save to localStorage
//     } catch (error) {
//       console.error("Error transcribing audio:", error);
//       setTranscript("An error occurred while transcribing the audio.");
//     }
//   };

//   return (
//     <div>
//       <h1>Audio Transcription App</h1>

//       {/* Microphone recording button */}
//       <MicrophoneButton onAudioRecorded={handleAudioRecorded} />

//       {/* Display Transcription */}
//       <h2>Transcription:</h2>
//       <p>{transcript || "No transcription yet."}</p>

//       {/* Display Saved Transcriptions */}
//       <SavedTranscription />
//     </div>
//   );
// };

// export default Home;





// src/pages/Home.jsx

import React, { useState } from "react";
import { transcribeAudio } from "../utils/deepgram";
import MicrophoneButton from "../components/MicrophoneButton";
import SavedTranscription from "../components/SavedTranscriptions";

const Home = () => {
  const [transcript, setTranscript] = useState("");

  // Save transcription to localStorage
  const saveTranscription = (transcription) => {
    const savedTranscriptions = JSON.parse(localStorage.getItem("transcriptions")) || [];
    savedTranscriptions.push(transcription);
    localStorage.setItem("transcriptions", JSON.stringify(savedTranscriptions));
  };

  const handleAudioRecorded = async (audioBlob) => {
    try {
      console.log("Audio Blob Received: ", audioBlob);
      const transcription = await transcribeAudio(audioBlob);
      setTranscript(transcription); // Set transcription text for display
      saveTranscription(transcription); // Save to localStorage
    } catch (error) {
      console.error("Error transcribing audio:", error);
      setTranscript("An error occurred while transcribing the audio.");
    }
  };

  const clearTranscription = () => {
    setTranscript(""); // Clear the current transcription
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Audio Transcription App</h1>

      {/* Microphone recording button */}
      <MicrophoneButton onAudioRecorded={handleAudioRecorded} />

      {/* Display Transcription */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Transcription:</h2>
        <p className="bg-gray-100 p-4 rounded-md border border-gray-300">
          {transcript || "No transcription yet."}
        </p>

        {/* Clear Transcription Button */}
        {transcript && (
          <button
            onClick={clearTranscription}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Transcription
          </button>
        )}
      </div>

      {/* Display Saved Transcriptions */}
      <SavedTranscription />
    </div>
  );
};

export default Home;
