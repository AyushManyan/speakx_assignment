import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Anagram from '../helper/Anagram';
import MCQ from '../helper/MCQ';
import OtherQuestion from '../helper/OtherQuestion';

const DisplayQuestion = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalDocuments, setTotalDocuments] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const usersPerPage = 15;

    const [showSolution, setShowSolution] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});


    
    // fetching data from backend

    const getData = async(page, searchTerm)=>{
        try{
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/getdata`,{
                params:{
                    page,
                    limit:usersPerPage,
                    searchTerm
                }
            });
            
            // shuffed the option in mcq and blocks in anagram
            const shuffledData = response.data.data.data.map(item=>{
                if(item.blocks){
                    item.blocks = item.blocks.sort(()=>Math.random()-0.5);
                }
                if(item.options){
                    item.options = item.options.sort(()=>Math.random()-0.5);
                }

                return item;
            });
            setData(shuffledData);
            setTotalDocuments(response.data.totalDocuments);
            setLoading(false);
        }catch(e){
            setLoading(false);
        }
    };


    const onPaginationChange = ({ selected }) => {
        const newPageNumber = selected;
        setPageNumber(newPageNumber);
        getData(newPageNumber + 1, searchTerm);
    };



    useEffect(() => {
        getData(pageNumber + 1, searchTerm);
    }, [pageNumber, searchTerm]);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h3 className="text-2xl font-bold mb-4">SpeakX Assignment</h3>
            <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            ) : (
                <>
                    <div className="grid gap-4">
                        {data.map((item, index) => {
                            return item?.type === 'ANAGRAM' ? (
                                <Anagram key={index} item={item} index={index} showSolution={showSolution} setShowSolution={setShowSolution} />
                            ) : item?.type === 'MCQ' ? (
                                <MCQ key={index} item={item} index={index} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
                            ) : (
                                <OtherQuestion key={index} item={item} index={index} />
                            );
                        })}
                    </div>
                    <div className="mt-4 flex justify-center">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={Math.ceil(totalDocuments / usersPerPage)}
                            onPageChange={onPaginationChange}
                            containerClassName={"paginationBttns flex space-x-2"}
                            previousLinkClassName={"previousBttn px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"}
                            nextLinkClassName={"nextBttn px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"}
                            disabledClassName={"paginationDisabled opacity-50 cursor-not-allowed"}
                            activeClassName={"paginationActive font-bold text-blue-700"}
                            forcePage={pageNumber}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default DisplayQuestion;