import React, { useState } from 'react'

const MCQ = (item) => {
    const [selectedOptions, setSelectedOptions] = useState({});   
    const index = item.index;
    item = item.item;

    return (
        <div>
            <div key={index} className="border p-4 rounded shadow-md bg-white">
                <h3 className="text-xl font-mono text-blue-400 font-bold mb-2">{item.type}</h3>
                <p className="text-gray-700 font-semibold">{item.title}</p>
                <ul>
                    {
                        item?.options?.map((option, optionIndex) => (
                            <li key={optionIndex} className="text-gray-600 font-semibold">
                                <input
                                    type="radio"
                                    name={item._id}
                                    value={option.text}
                                    onChange={() => setSelectedOptions(prev => ({ ...prev, [item._id]: option.text }))}
                                />
                                {option.text}
                            </li>
                        ))
                    }
                </ul>
                {selectedOptions[item._id] && item.options.find(option => option.isCorrectAnswer).text === selectedOptions[item._id] && (
                    <p className="mt-2 text-green-600">Correct Answer!</p>
                )}
                {selectedOptions[item._id] && item.options.find(option => option.isCorrectAnswer).text !== selectedOptions[item._id] && (
                    <p className="mt-2 text-red-600">Incorrect Answer. The correct answer is {item.options.find(option => option.isCorrectAnswer).text}</p>
                )}
            </div>
        </div>
    )
}

export default MCQ