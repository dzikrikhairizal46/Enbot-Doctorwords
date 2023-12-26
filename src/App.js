// Import library dan modul yang diperlukan
import { createContext } from "react";
import Header from "./Header";
import { useState } from "react";
import Result from "./Result";

// Membuat konteks (context) untuk berbagi nilai antar komponen
export const InputContext = createContext();

function App() {
  // Definisikan state inputValue dan setInputValue menggunakan hook useState
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  // Siapkan objek 'value' untuk menyimpan nilai dan fungsi yang akan dibagikan melalui konteks
  const value = {
    inputValue, // Nilai input yang akan digunakan oleh komponen lain
    setInputValue, // Fungsi untuk mengubah nilai input
  };

  return (
    // Gunakan InputContext.Provider untuk menyediakan nilai 'value' ke semua komponen di dalamnya
    <InputContext.Provider value={value}>
      <div className="App">
        {/* Tampilkan komponen Header */}
        <Header />
        {/* Tampilkan komponen Result */}
        <Result />
      </div>
    </InputContext.Provider>
  );
}

export default App;
