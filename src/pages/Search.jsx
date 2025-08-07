import MainLayout from "../layouts/MainLayout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Search() {
    const query = useQuery().get("q") || "";
    const [searchTerm, setSearchTerm] = useState(query);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            // Simulated search logic
            const allResults = [
                "Background Verification for Grooms",
                "Asset Check and Legal Dossier",
                "Post-Nuptial Therapy Services",
                "Surveillance & Shadowing",
                "Child Custody Advisory"
            ];
            const filtered = allResults.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        }
    }, [query]);

    return (
        <MainLayout title={`Search Results for "${query}"`}>
            <section className="max-w-4xl mx-auto p-6">
                <div className="relative mb-6">
                    <FiSearch className="absolute top-3 left-3 text-gray-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-300 rounded pl-10 pr-10 py-2 text-sm"
                        placeholder="Search services..."
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute top-2.5 right-3 text-gray-500"
                        >
                            <FiX />
                        </button>
                    )}
                </div>

                {query && results.length > 0 ? (
                    <div className="space-y-4">
                        <p className="text-sm text-gray-600">Showing results for: <strong>{query}</strong></p>
                        {results.map((result, idx) => (
                            <div key={idx} className="p-4 border border-gray-200 rounded shadow-sm bg-white">
                                <h3 className="font-semibold text-purple-700">{result}</h3>
                                <p className="text-sm text-gray-600">Learn more about our {result.toLowerCase()} offerings.</p>
                            </div>
                        ))}
                    </div>
                ) : query ? (
                    <p className="text-sm text-gray-500 italic">No results found for "{query}".</p>
                ) : (
                    <p className="text-sm text-gray-400">Type something to search our services...</p>
                )}
            </section>
        </MainLayout>
    );
}
