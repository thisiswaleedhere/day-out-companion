import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';


//bounds.sw, bounds.ne, queryType

export const getPlacesData = async () => {

    try {
        const { data: { data } } = await axios.get(URL,
            {
                params: {
                    bl_latitude: '11.847676',
                    bl_longitude: '108.473209',
                    tr_longitude: '109.149359',
                    tr_latitude: '12.838442',
                    // bl_latitude: bounds.sw[0],
                    // bl_longitude: bounds.sw[1],
                    // tr_longitude: bounds.ne[1],
                    // tr_latitude: bounds.ne[0],
                    limit: '30'

                },
                headers: {
                    'X-RapidAPI-Key': '92cba59c3emsh4b2f349b1d19af4p1a1842jsn06e1fa4b746c',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            });

        return data;

    } catch (error) {
        console.log(error);

    }

}