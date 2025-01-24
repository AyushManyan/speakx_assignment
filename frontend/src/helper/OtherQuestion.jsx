import React from 'react'

const OtherQuestion = (item) => {
    const index = item.index;
    item = item.item;
    return (
        <div>
            <div key={index} className="border p-4 rounded bg-white shadow-md ">
                <h3 className="text-xl font-mono font-bold mb-2 text-blue-400">{item.type}</h3>
                <p className="text-gray-700 font-semibold">{item.title}</p>
            </div>
        </div>
    )
}

export default OtherQuestion