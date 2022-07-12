import { Map, Overlay } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';
import { useState } from "react";
import { MdLocalHotel } from 'react-icons/md';
import { MdRestaurant } from "react-icons/md";
import { GiBarracksTent } from "react-icons/gi";
import { BiCurrentLocation } from "react-icons/bi";



const MapComponent = ({ setCoordinates, setBounds, coordinates, placeNames, setIconClicked, queryType, setMyPlace, isLoading }) => {

    const maptilerProvider = maptiler('Opc8ZH5PLEQHDjVFaSFA', 'streets');


    const [zoom, setZoom] = useState(14);
    const [visible, setVisible] = useState(100);


    return (
        <div className='z-0'>

            <Map provider={maptilerProvider} height={'85vh'} center={coordinates} zoom={zoom}
                onBoundsChanged={({ center, zoom, bounds }) => {
                    setCoordinates(center)
                    setZoom(zoom)
                    setBounds(bounds)
                }} >

                <div onClick={() => setMyPlace(coordinates)}>
                    <Overlay anchor={["", ""]}>
                        <BiCurrentLocation className='text-gray-700 text-3xl pl-1 pt-1 cursor-pointer' />
                    </Overlay>
                </div>

                {!isLoading &&
                    placeNames?.map((pla, i) => {

                        return (

                            <Overlay anchor={[Number(pla.latitude), Number(pla.longitude)]} >
                                <div key={i} onClick={() => setIconClicked(i)} onMouseOver={() => setVisible(i)} onMouseLeave={() => setVisible(100)} >

                                    {queryType === "hotels" ? <MdLocalHotel className='text-gray-100 text-lg bg-indigo-700 rounded-b-xl px-0.5 pb-0.5' /> :
                                        queryType === "restaurants" ? <MdRestaurant className='text-gray-100 text-lg bg-orange-700 rounded-b-xl px-0.5 pb-0.5' /> :
                                            <GiBarracksTent className='text-gray-100 text-lg bg-green-700 rounded-b-xl px-0.5 ' />}
                                    {visible === i &&
                                        <div className='bg-yellow-100 rounded-lg p-1 font-bold px-1 text-xs'>{pla.name}
                                            <div className='text-gray-700 text-right font-medium pt-0.5'>Latitude: {Number(pla.latitude)} Longitude: {Number(pla.longitude)}

                                            </div>
                                        </div>}

                                </div>
                            </Overlay>
                        )
                    })

                }
            </Map >

        </div >
    )
}

export default MapComponent;