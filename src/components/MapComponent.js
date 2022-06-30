import { Map, Overlay } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';
import { useState } from "react";
import { MdLocalHotel } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';



const MapComponent = ({ setCoordinates, setBounds, coordinates, placeNames, setIconClicked }) => {

    const maptilerProvider = maptiler('Opc8ZH5PLEQHDjVFaSFA', 'streets');

    // const placearray = [{ name: 'Hotel California and Angeles 1', rating: 3, coords: [50.879, 4.6997] },
    // { name: 'Hotel California and Angeles 2', rating: 5, coords: [51.879, 5.6997] },
    // { name: 'Hotel California and Angeles 3', rating: 4.1, coords: [52.879, 3.6997] },
    // { name: 'Hotel California and Angeles 4', rating: 4.2, coords: [53.879, 4.6997] },]

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
                {placeNames.map((pla, i) =>

                    <Overlay anchor={pla.coords} >
                        <div key={i} onClick={() => setIconClicked(i)} onMouseOver={() => setVisible(i)} onMouseLeave={() => setVisible(100)} >
                            <MdLocalHotel />
                            {visible === i && <div className='bg-yellow-100 rounded-lg p-1 font-bold px-1 text-xs'>{pla.name}<div className='text-gray-700 text-right font-medium pt-0.5'>{pla.rating} <div className='bg-gray text-yellow-500 inline-block align-middle text-base'><AiFillStar /></div></div></div>}

                        </div>
                    </Overlay>



                )}


            </Map>


        </div >
    )
}

export default MapComponent;