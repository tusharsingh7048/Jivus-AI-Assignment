
// export const transcribeAudio = async (audioBlob) => {
//     const deepgramApiKey = "b7869a48a0c923cbd1e80210241fb15836cd3140"; // Directly use the API key
    
//     if (!deepgramApiKey) {
//       console.error("Deepgram API key is missing or undefined!");
//       throw new Error("Deepgram API key is missing or undefined.");
//     }
  
//     const formData = new FormData();
//     formData.append("audio", audioBlob);
//     console.log("Audio Blob Size:", audioBlob.size);

  
//     try {
//       const response = await fetch("https://api.deepgram.com/v1/listen", {
//         method: "POST",
//         headers: {
//           Authorization: `Token ${deepgramApiKey}`,
//         },
//         body: formData,
//       });
  
//       console.log("Response Status:", response.status);
//       console.log("Response Headers:", response.headers);
      
//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error("Deepgram API error:", errorText);
//         throw new Error(`Deepgram API error: ${errorText}`);
//       }
  
//       const data = await response.json();
//       console.log("API Response Data:", data);
  
//       if (data && data.results && data.results.channels) {
//         return data.results.channels[0].alternatives[0].transcript;
//       } else {
//         console.error("No transcription data found in the response");
//         throw new Error("No transcription data found");
//       }
//     } catch (error) {
//       console.error("Error during transcription:", error);
//       throw error;
//     }
//   };
// correct h upr


// src/utils/deepgram.js

export const transcribeAudio = async (audioBlob) => {
    const deepgramApiKey = "b7869a48a0c923cbd1e80210241fb15836cd3140"; // Directly use your API key
  
    if (!deepgramApiKey) {
      console.error("Deepgram API key is missing or undefined!");
      throw new Error("Deepgram API key is missing or undefined.");
    }
  
    const formData = new FormData();
    formData.append("audio", audioBlob);
  
    console.log("Sending request to Deepgram with audio blob:", audioBlob);
  
    const response = await fetch("https://api.deepgram.com/v1/listen", {
      method: "POST",
      headers: {
        Authorization: `Token ${deepgramApiKey}`,
      },
      body: formData,
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error with Deepgram API:", errorText);
      throw new Error(`Deepgram API error: ${response.statusText}`);
    }
  
    const data = await response.json();
    console.log("Deepgram API Response:", data);
  
    if (data.results && data.results.channels && data.results.channels[0].alternatives) {
      return data.results.channels[0].alternatives[0].transcript;
    } else {
      console.error("Error: No transcription found in Deepgram response.");
      throw new Error("No transcription found in Deepgram response.");
    }
  };
  



