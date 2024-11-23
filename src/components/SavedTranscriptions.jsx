


import React, { useState, useEffect, useRef } from "react";

const SavedTranscription = () => {
  const [savedTranscriptions, setSavedTranscriptions] = useState([]);
  const scrollRef = useRef(null); // Reference for scrolling

  // Load saved transcriptions from localStorage when the component mounts
  useEffect(() => {
    const transcriptions = JSON.parse(localStorage.getItem("transcriptions")) || [];
    setSavedTranscriptions(transcriptions);
  }, []);

  // Automatically scroll to the last transcription when updated
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [savedTranscriptions]);

  // Function to clear all saved transcriptions
  const clearHistory = () => {
    setSavedTranscriptions([]);
    localStorage.removeItem("transcriptions"); // Clear from localStorage
  };

  return (
    <div className="mt-8 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Saved Transcriptions</h2>

      {/* Display saved transcriptions */}
      <div
        ref={scrollRef}
        className="h-48 overflow-y-auto space-y-4 bg-gray-50 p-2 border border-gray-300 rounded-md"
      >
        {savedTranscriptions.length > 0 ? (
          savedTranscriptions
            .map((transcription, index) => (
              <div
                key={index}
                className={`p-3 rounded-md ${
                  index === savedTranscriptions.length - 1
                    ? "bg-green-200 border-green-400"
                    : "bg-gray-100 border-gray-300"
                } border`}
              >
                <p className="text-sm">{`#${index + 1}: ${transcription}`}</p>
              </div>
            ))
        ) : (
          <p className="text-gray-500">No transcriptions saved yet.</p>
        )}
      </div>

      {/* Clear History Button */}
      {savedTranscriptions.length > 0 && (
        <button
          onClick={clearHistory}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear History
        </button>
      )}
    </div>
  );
};

export default SavedTranscription;
