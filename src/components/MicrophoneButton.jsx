

// src/components/MicrophoneButton.jsx
import React, { useState, useRef } from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";

const MicrophoneButton = ({ onAudioRecorded }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorder.current = new MediaRecorder(stream, { mimeType: "audio/webm" });

    mediaRecorder.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };

    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
      onAudioRecorded(audioBlob);
      audioChunks.current = [];
    };

    mediaRecorder.current.start();
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorder.current.stop();
    setIsRecording(false);
  };

  return (
    <button
      onClick={isRecording ? handleStopRecording : handleStartRecording}
      className={`flex items-center justify-center px-6 py-3 text-lg rounded-full shadow-lg 
        ${isRecording ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"} 
        text-white transition-all duration-300`}
    >
      {isRecording ? (
        <>
          <FaStop className="mr-2" />
          Stop Recording
        </>
      ) : (
        <>
          <FaMicrophone className="mr-2 animate-pulse" />
          Start Recording
        </>
      )}
    </button>
  );
};

export default MicrophoneButton;
