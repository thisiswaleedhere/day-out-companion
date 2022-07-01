import { Map, Overlay } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';
import { useState } from "react";
import { MdLocalHotel } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';



const MapComponent = ({ setCoordinates, setBounds, coordinates, placeNames, setIconClicked, isLoading }) => {

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
                }}
            >
                {isLoading ? <div>Loading</div> : placeNames?.map((pla, i) =>

                    <div key={i}>


                        <Overlay anchor={[Number(pla.latitude), Number(pla.longitude)]}   >
                            <div key={i} onClick={() => setIconClicked(i)} onMouseOver={() => setVisible(i)} onMouseLeave={() => setVisible(100)} >
                                <MdLocalHotel />
                                {visible === i &&
                                    <div className='bg-yellow-100 rounded-lg p-1 font-bold px-1 text-xs'>{pla.name}
                                        <div className='text-gray-700 text-right font-medium pt-0.5'>{pla.rating}
                                            <div className='bg-gray text-yellow-500 inline-block align-middle text-base'><AiFillStar /></div>
                                        </div>
                                    </div>}

                            </div>
                        </Overlay>

                    </div>


                )
                }


            </Map >


        </div >
    )
}

export default MapComponent;