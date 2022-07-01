import React, { useEffect } from "react";
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { AiFillStar } from "react-icons/ai";

const PlaceDetails = ({ place, match, refProp }) => {


    useEffect(() => {
        if (match) { refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }, [match, refProp])



    return (
        <div className="bg-gray-100 max-w-sm mx-auto sm:mr-3 xl:mx-auto mb-3 rounded-2xl shadow-xl hover:bg-gray-50">

            <img className="rounded-t-2xl" src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt="Hotel Pic" title={place.name} />
            <div className="p-3">
                <div className="font-bold text-lg font-Josefin text-gray-800">{place.name}</div>
                <div className="flex justify-between mb-1">
                    <div className="pl-0.5">{Number(place.rating)} <div className="text-yellow-500 inline-block align-middle text-lg pb-0.5"> <AiFillStar /> </div> </div>
                    <div>{place.num_reviews} review{place.num_reviews > 1 && 's'}</div>
                </div>
                <div className="flex justify-between text-sm text-gray-600"><div className="text-sm">{place.price_level ? 'Price' : ''}</div><div>{place.price_level}</div></div>
                <div className="flex justify-between text-sm text-gray-600"><div className="text-sm">Ranking</div><div className="text-right">{place.ranking}</div></div>


                <div className="flex my-2 flex-wrap">{place.cuisine?.map(({ name }) => (
                    <div className='bg-gray-300 py-1 text-xs mb-1 mr-2 px-2 rounded-lg' > {name} </div>))} </div>

                <div className="text-gray-700 text-sm italic text-right flex justify-between"><div className="text-gray-600 text-xl pr-1"><MdLocationOn /></div>{place.address ? place.address : place.location_string}</div>
                <div className="text-gray-800 text-sm my-2 flex justify-between cursor-pointer hover:underline hover:text-blue-800"
                    onClick={() => window.open(place.website ? place.website : `http://www.google.com/search?q=${place.name}&btnI`, '_blank')}>
                    <div className="text-gray-600 text-lg pr-1"><HiOutlineGlobeAlt /></div>{place.website ? place.website : (place.name)?.toLowerCase().split(" ").join("") + '.com'}</div>
            </div>
        </div>
    )
}

export default PlaceDetails;