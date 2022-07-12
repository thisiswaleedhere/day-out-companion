import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import MapComponent from './components/MapComponent';
import Footer from './components/Footer';
import { getPlacesData } from './api/apiFile';

function App() {



  const [placeNames, setPlaceNames] = useState([
    { name: "ABC Hotels and Restaurants", rating: 2, num_reviews: 32, price_level: '$$$', ranking: 25, cuisine: ['Chinese', 'Continental', 'European', 'Seafood'], address: "233/22, Northington Lane, Shirley Street, London-2", phone: 2322442, website: "foodsite.com", latitude: 51.879, longitude: 5.6997 },
    { name: "DEF Hotels and Restaurants", rating: 3, num_reviews: 32, price_level: '$$$', ranking: 25, cuisine: ['Chinese', 'Continental', 'European', 'Seafood'], address: "233/22, Northington Lane, Shirley Street, London-2", phone: 2322442, website: "foodsite.com", latitude: 51.865, longitude: 5.6897 },
    { name: "GHI Hotels and Restaurants", rating: 4.1, num_reviews: 32, price_level: '$$$', ranking: 25, cuisine: ['Chinese', 'Continental', 'European', 'Seafood'], address: "233/22, Northington Lane, Shirley Street, London-2", phone: 2322442, website: "foodsite.com", latitude: 51.812, longitude: 5.6697 },
    { name: "JKL Hotels and Restaurants", rating: 4.5, num_reviews: 32, price_level: '$$$', ranking: 25, cuisine: ['Chinese', 'Continental', 'European', 'Seafood'], address: "233/22, Northington Lane, Shirley Street, London-2", phone: 2322442, website: "foodsite.com", latitude: 51.823, longitude: 5.6597 },
    { name: "MNO Hotels and Restaurants", rating: 4.8, num_reviews: 32, price_level: '$$$', ranking: 25, cuisine: ['Chinese', 'Continental', 'European', 'Seafood'], address: "233/22, Northington Lane, Shirley Street, London-2", phone: 2322442, website: "foodsite.com", latitude: 51.899, longitude: 5.6397 }]);

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [myPlace, setMyPlace] = useState(0);

  const [coordinates, setCoordinates] = useState([25.2048, 55.2708]);
  const [bounds, setBounds] = useState([]);

  const [queryType, setQueryType] = useState('restaurants');
  const [rating, setRating] = useState(0);

  const [iconClicked, setIconClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);




  //                              SIDE-EFFECTS

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates([latitude, longitude]);
    });
  }, [myPlace]);


  useEffect(() => {
    const filtered = placeNames?.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, isLoading]);


  useEffect(() => {
    setIsLoading(true);
    setIconClicked(null);

    getPlacesData(queryType, bounds).then((data) => {
      setPlaceNames(data);
    }).then(() => {
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bounds, queryType])




  //                             RETURN STATEMENTS

  return (
    <div className="App bg-gray-100">

      <div className='z-10'>
        <Header setCoordinates={setCoordinates} />
      </div>


      <div className='flex-column sm:flex justify-around align-middle z-0'>

        <div className='h-1/2 sm:w-2/5 md:w-1/3 overflow-y-auto scrollbar sm:max-h-screen max-h-60 ml-8 mr-2'>

          <List queryType={queryType} setQueryType={setQueryType} rating={rating} setRating={setRating} placeNames={filteredPlaces?.length ? filteredPlaces : placeNames} iconClicked={iconClicked} isLoading={isLoading} />

        </div>

        <div className='h-1/2 sm:w-3/5 md:w-2/3 sm:h-full md:h-full mt-8 mr-2 bg-gray-300 z-0 relative'>

          <MapComponent setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} placeNames={filteredPlaces?.length ? filteredPlaces : placeNames} setIconClicked={setIconClicked} queryType={queryType} setMyPlace={setMyPlace} isLoading={isLoading} />

        </div>

      </div>

      <div>
        <Footer />
      </div>


    </div>
  );
}

export default App;
