import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { InputContext } from "./App";
import Meanings from "./Meanings";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";

// Set base URL untuk permintaan API
axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const Result = () => {
    // Akses nilai input dari komponen App menggunakan hook useContext
    const { inputValue } = useContext(InputContext);

    // Definisikan variabel state untuk menyimpan hasil respon API, status loading, dan error
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Fungsi untuk mengambil data dari API berdasarkan parameter input
    const fetchData = async (param) => {
        try {
            setLoading(true);
            // Lakukan permintaan API menggunakan axios dan simpan responnya dalam variabel state
            const res = await axios(`/${param}`);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            // Tangani error dengan menyetel variabel state error
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // Gunakan hook useEffect untuk memicu panggilan API ketika nilai inputValue berubah
    useEffect(() => {
        if (inputValue.length) {
            fetchData(inputValue);
        }
    }, [inputValue]);

    // Jika loading bernilai true, tampilkan animasi loading
    if (loading) {
        return (
            <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
                <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
            </div>
        );
    }

    // Jika terjadi error, tampilkan pesan "Tidak Ditemukan 😔"
    if (error) {
        return <h3 className="text-center mt-10 font-semibold text-gray-500">Tidak Ditemukan 😔</h3>;
    }

    // Jika terdapat respon API yang valid, tampilkan arti kata, contoh penggunaan, sinonim, dan antonim
    return (
        <div className="container mx-auto p-4 max-w-2xl">
            {response && (
                <div>
                    <h3 className="text-2xl font-bold mt-4">Arti & Definisi:</h3>
                    <Meanings mean={response} />
                    <h3 className="text-2xl font-bold mt-4">Contoh Penggunaan:</h3>
                    <Example mean={response} />
                    <h3 className="text-2xl font-bold mt-4">Sinonim:</h3>
                    <Synonym mean={response} />
                    <h3 className="text-2xl font-bold mt-4">Antonim:</h3>
                    <Antonym mean={response} />
                </div>
            )}
        </div>
    );
};

export default Result;
