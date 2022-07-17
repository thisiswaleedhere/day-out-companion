import axios from "axios";

export const getPlacesData = async (queryType, bounds) => {

    const URL = `https://travel-advisor.p.rapidapi.com/${queryType}/list-in-boundary`;

    try {
        const results = await axios.get(URL,
            {
                params: {
                    bl_latitude: bounds.sw[0],
                    bl_longitude: bounds.sw[1],
                    tr_longitude: bounds.ne[1],
                    tr_latitude: bounds.ne[0],
                    limit: '30'

                },
                headers: {
                    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            });

        return results.data.data;

    } catch (error) {
        console.log(error);

    }

}