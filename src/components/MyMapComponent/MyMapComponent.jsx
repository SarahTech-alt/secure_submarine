import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';



const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 44.973792346502,
  lng: -93.00798830056591
};

const coordinates = [{
  lat: 44.973792346502,
  lng: -93.00798830056591
},
{
  lat: 44.9522576061041,
  lng: -93.06554905922046
},
{
  lat: 44.952989600004756,
  lng: -93.18466308435113
}
];

const logInfo = [{
  imgURL: '',
  type: '',
  lat: 44.952989600004756,
  lng: -93.18466308435113,
  datetime: '',
  details: ''
},
{
  imgURL: '',
  type: '',
  lat: 44.9522576061041,
  lng: -93.06554905922046,
  datetime: '',
  details: ''
},
{
  imgURL: '',
  type: '',
  lat: 44.973792346502,
  lng: -93.00798830056591,
  datetime: '',
  details: ''
}
];




const onLoad = marker => {
  console.log('marker: ', marker)
}
function MyComponent() {
  const history = useHistory();

  const viewLogDetails = () => {
    history.push('/details')
  }

  return (
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
          {logInfo.map((coord, index) => (
            <Marker key={index}
              position={{ lat: coord.lat, lng: coord.lng }}
              onLoad={onLoad}
              onClick={event => viewLogDetails(index)}
            />
          ))}
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)