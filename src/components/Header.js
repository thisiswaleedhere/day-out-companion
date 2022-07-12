import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';
import { FaUmbrellaBeach } from 'react-icons/fa';


const Header = ({ setCoordinates }) => {


    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState('');

    const url = `https://documentation-resources.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${query}&rows=50&sort=population`;

    const getCordUrl = `https://documentation-resources.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${query}&rows=1&sort=population`;


    const handleSearch = async () => {
        const resp = await axios.get(getCordUrl);
        setCoordinates((resp).data.records[0].fields.coordinates);
        setQuery('');
    }


    const searchQuery = async () => {
        const response = await axios.get(url);
        const newArray = response.data.records.map((bloc, i) => { return bloc.fields.name }).filter((elem) => elem.indexOf(query) > -1);
        setSuggestions((newArray).slice(0, 7));
    }


    useEffect(() => {
        searchQuery();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


    return (
        <div className="flex-column h-32 sm:h-24 sm:flex sm:justify-between sm:align-middle px-5 py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

            <div className="flex justify-center sm:justify-start font-light text-gray-50 text-2xl text-center align-middle pl-3 pb-3 sm:pb-0 sm:pt-1 sm:pl-2">
                <div className="pt-1.5"><FaUmbrellaBeach /></div>
                <div className="pl-2">Day Out Companion</div>
            </div>


            <div >

                <div className="flex relative w-full sm:w-80 md:w-96 mt-2">
                    <input
                        className="w-full font-sansserif rounded-full bg-gray-50 shadow-xl border-0 appearance-none focus:ring-0 focus:border-yellow-400 focus:border-2 active:ring-0 text-gray-800 p-1 indent-2"
                        id="search-place"
                        type="text"
                        placeholder="Search For A City Here"
                        name="searchPlace"
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); }}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />


                    <button onClick={(e) => {
                        e.preventDefault();
                        console.log('submitted');
                        handleSearch();
                    }}
                        className="absolute top-1/2 right-1.5 -translate-y-1/2 py-1 bg-yellow-300 hover:bg-indigo-500 px-5 rounded-full text-mono hover:shadow-lg text-white">
                        <BiSearchAlt />
                    </button>

                </div>


                {query && <ul className="bg-white border border-gray-100 ml-4 mt-1 w-4/5 z-50 sm:absolute right-20 sm:w-60 md:w-80 md:right-16">

                    {suggestions.map((loc, i) => (

                        <div className="">
                            <li key={i} onClick={() => { setQuery(loc) }} className="pl-8 pr-2 py-1 bg-white border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-100 hover:text-gray-900 font-Josefin font-normal" >

                                <svg className="absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#8F00FF">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>

                                {loc}
                            </li>
                        </div>

                    ))}

                </ul>}


            </div>

        </div>
    )
}

export default Header;