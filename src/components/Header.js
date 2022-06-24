import React from "react";
import { BiSearchAlt } from 'react-icons/bi';
//import { Autocomplete } from "@react-google-maps/api";

const Header = () => {
    return (
        <div className="flex-column sm:flex sm:justify-between sm:align-middle bg-gray-200 px-5 py-5">
            <div className="font-bold text-gray-600 text-center align-middle pb-3 sm:pb-0 sm:pt-1 sm:pl-2">Day Out Companion</div>
            <div >
                {/*<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>*/}
                <div className="flex relative w-full sm:w-96">
                    <input
                        className="w-full font-sansserif rounded-full bg-gray-50 shadow-xl border-0 appearance-none focus:ring-0 focus:border-yellow-400 focus:border-2  text-gray-800 p-1 indent-2"
                        id="search-movie-title"
                        type="text"
                        placeholder="Enter Movie Title..."
                        name="searchMovieTitle"
                    // onChange={(e) => {
                    //     setQuery(e.target.value);
                    //     setError('');
                    // }}

                    />

                    <button
                        className="absolute top-1/2 right-1.5 -translate-y-1/2 py-1 hover:bg-yellow-400 bg-yellow-300 px-5 rounded-full text-mono hover:shadow-lg hover:text-white">
                        <BiSearchAlt />
                    </button></div>
                {/* </Autocomplete> */}
            </div>
        </div>
    )
}

export default Header;