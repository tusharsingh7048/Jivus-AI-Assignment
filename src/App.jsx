// // src/App.jsx
// import React from "react";
// import Home from "./pages/Home";
// import logo from "./assets/large.png"

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
//       <header className="p-6 text-center">
//         <img
//           src={logo}
//           alt="App Logo"
//           className="h-24 w-60 mx-auto animate-bounce"
//         />
//         <h1 className="text-4xl font-bold mt-2">
//           Interactive Audio Transcription App
//         </h1>
//         <p className="mt-1 text-lg">Record, Transcribe, and Save!</p>
//       </header>
//       <main className="p-6">
//         <Home />
        
//       </main>
//       <footer className="p-4 text-center bg-gray-900">
//         <p>© 2024 Transcription App - All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;




// src/App.jsx
import React from "react";
import Home from "./pages/Home";
import logo from "./assets/large.png"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mx-4 my-4 rounded-xl border-4 border-white border-opacity-40 shadow-lg hover:shadow-xl transition-all">
      <header className="p-6 text-center">
        <img
          src={logo}
          alt="App Logo"
          className="h-24 w-60 mx-auto animate-bounce"
        />
        <h1 className="text-4xl font-bold mt-2">
          Interactive Audio Transcription App
        </h1>
        <p className="mt-1 text-lg">Record, Transcribe, and Save!</p>
      </header>
      <main className="p-6">
        <Home />
      </main>
      <footer className="p-4 text-center bg-gray-900">
        <p>© 2024 Transcription App - All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
