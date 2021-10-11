import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';



const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 44.973792346502,
  lng: -93.00798830056591
};

const onLoad = marker => {
  console.log('marker: ', marker)
}
function MyComponent() {
  const store = useReduxStore();
  const dispatch = useDispatch();

  const viewLogDetails = () => {
    
  }


  useEffect(() => {
    console.log('component did mount');
    dispatch({type:'FETCH_LOGS'})
}, [dispatch]); 

  return (
    <>
    
    <LoadScript
      googleMapsApiKey="AIzaSyAlWsZtJdgFmprccG6w4_32GNDvppdXdmo"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <>
          {store.logs.map((coord, index) => (
            <Marker key={index}
              position={{ lat: coord.latitude, lng: coord.longitude }}
              onLoad={onLoad}
              onClick={event => viewLogDetails(index)}
            />
          ))}
        </>
      </GoogleMap>
      
    </LoadScript>
   
    </>
  )
}

export default React.memo(MyComponent)