import React, { createRef, useEffect, useState } from "react";
import Loading from "./Loading";
import PlaceDetails from "./PlaceDetails";



const List = ({ queryType, setQueryType, rating, setRating, placeNames, iconClicked, isLoading }) => {

    const [refElement, setRefElement] = useState([]);


    useEffect(() => {
        const refs = Array(placeNames?.length).fill().map((_, i) => refElement[i] || createRef());
        setRefElement(refs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [placeNames])




    return (
        <div className="mx-auto font-Josefin min-w-[230px]">

            <div className="py-2 font-semibold text-lg text-center my-2 mr-4">Restaurants, Hotels and Attractions around you</div>

            {isLoading ? <Loading /> : (<>


                <div className="flex justify-around sm:flex-column lg:flex lg:justify-around bg-gray-200 rounded-2xl px-2 pt-1 pb-2 mt-2 mr-1 mb-5 ">

                    <div>
                        <label htmlFor="queryType" className="text-xs pl-1">Select a Category</label>
                        <br />
                        <select
                            id="queryType"
                            value={queryType}
                            onChange={(e) => setQueryType(e.target.value)}
                            name="queryType"
                            className="p-0.5 pt-1 rounded-lg border-0 focus:ring-0 focus:border-pink-400 focus:border-2"

                        >
                            <option value="restaurants">Restaurants</option>
                            <option value="hotels">Hotels</option>
                            <option value="attractions">Attractions</option>

                        </select>
                    </div>

                    <div>
                        <label htmlFor="rating" className="text-xs pl-1">Filter by Rating</label>
                        <br />
                        <select
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            name="rating"
                            className="p-0.5 pt-1 rounded-lg border-0 focus:ring-0 focus:border-pink-400 focus:border-2"
                        >
                            <option value={0}>All</option>
                            <option value={3}>Above 3.0</option>
                            <option value={4}>Above 4.0</option>
                            <option value={4.5}>Above 4.5</option>

                        </select>
                    </div>


                </div>

                <div className="mx-auto">

                    {placeNames?.map((place, i) => {
                        return (

                            <div key={i} ref={refElement[i]} ><PlaceDetails match={iconClicked === i} place={place} refProp={refElement[i]} /></div>
                        );
                    })}
                </div>

            </>)}
        </div>


    )
}

export default List;