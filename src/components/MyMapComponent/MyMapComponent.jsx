import React, { useEffect } from 'react'
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
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

  const toggleInfo = () => {
    
  }



  useEffect(() => {
    console.log('component did mount');
    dispatch({ type: 'FETCH_LOGS' })
  }, [dispatch]);

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
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
                onClick={toggleInfo}
              >
                {coord.displayed ?
                  <InfoWindow
                    position={{ lat: coord.latitude, lng: coord.longitude }}>
                    <p>{coord.details}</p>
                  </InfoWindow> :
                  <></>
                }
              </Marker>
            ))}
          </>
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default React.memo(MyComponent)