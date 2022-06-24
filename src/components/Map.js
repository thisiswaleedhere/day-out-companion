//import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {

    // const [width, setWidth] = useState('');
    // const [size, setSize] = useState(true);

    // setWidth('865px');
    const mapstyles = {
        width: "100%",
        height: '85vh'
    };




    return (
        <div>

            <LoadScript
                googleMapsApiKey="AIzaSyC1kk2Wg8UE5rkhyievKvgy7dic2fjbang">
                <div className="mx-auto px-5">

                    <GoogleMap
                        center={{ lat: 0, lng: 0 }}
                        zoom={14}
                        mapContainerStyle={mapstyles}

                    //options={ }
                    // onBoundsChanged={ }
                    //onCenterChanged={ }
                    //onClick={ }
                    >


                    </GoogleMap>
                </div>
            </LoadScript>
        </div>
    )
}

export default Map;