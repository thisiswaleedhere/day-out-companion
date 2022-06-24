import React, { useState } from "react";
import PlaceDetails from "./PlaceDetails";

const List = () => {

    const [queryType, setQueryType] = useState('');
    const [rating, setRating] = useState('');

    const places = [
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "ABC" },
        { name: "DEF" },
        { name: "GHI" },
        { name: "JKL" }
    ]

    return (
        <div className="">
            <h3>Restaurants, Hotels and Attractions around you </h3>
            <div className="flex space-x-8 justify-center">
                <div>
                    <label htmlFor="queryType">Select a Category</label>
                    <br />
                    <select
                        id="queryType"
                        value={queryType}
                        onChange={(e) => setQueryType(e.target.value)}
                        name="queryType"
                    >
                        <option value="restaurants">Restaurants</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="rating">Filter by Rating</label>
                    <br />
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        name="rating"
                    >
                        <option value={0}>All</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>

                    </select>
                </div>
            </div>

            <div>
                {places?.map((place, i) => (
                    <div key={i}><PlaceDetails place={place} /></div>
                ))}
            </div>
        </div>


    )
}

export default List;