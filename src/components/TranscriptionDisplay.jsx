import React from "react";

const TranscriptionDisplay = ({ transcript }) => {
  return (
    <div className="border p-4 mt-4 rounded this bg-gray-100">
      <h2 className="font-semibold mb-2">Transcription:</h2>
      <p>{transcript || "No transcription available yet."}</p>
    </div>
  );
};

export default TranscriptionDisplay;
