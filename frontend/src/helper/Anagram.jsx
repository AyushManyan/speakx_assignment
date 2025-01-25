import React, { useState } from 'react';

const Anagram = ({ item, index }) => {
    const [showSolution, setShowSolution] = useState(null);

    return (
        <div>
            <div key={index} className="border p-4 rounded shadow-md bg-white">
                <h3 className="text-xl font-mono text-blue-400 font-bold mb-2">{item.type}</h3>
                <p className="text-gray-700 mb-2 font-semibold">{item.title}</p>
                <ul className="list-disc pl-5 mb-2 font-semibold">
                    {item.blocks && item.blocks.map((block, blockIndex) => (
                        <li key={blockIndex} className="text-gray-600">{block.text}</li>
                    ))}
                </ul>

                <div>
                    <button
                        onClick={() => setShowSolution(prev => prev === index ? null : index)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                        {showSolution === index ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showSolution === index && <p className="mt-2 text-green-600">{item.solution}</p>}
                </div>
            </div>
        </div>
    );
};

export default Anagram;