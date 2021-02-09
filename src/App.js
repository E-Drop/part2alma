import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import allActions from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App(props) {
  const dispatch = useDispatch();
  const boats = useSelector(state => state.boats.boatsList);
  useEffect(() => {
    axios
      .get('https://data.gov.au/geoserver/rrc-boat-ramps/wfs?request=GetFeature&typeName=ckan_12503c9a_1d43_44fb_92b8_73e30aea1bf1&outputFormat=json')
      .then(response => dispatch(allActions.boatsActions.addBoats(response.data.features)));
  }, []);
  
  return (
    <div className="App">
    <Map className="map" initialCenter={{
      lat: -23.64242292,
      lng: 150.40460933
    }}  google={props.google} zoom={10}>
    {boats.length && boats.map((x, key) => <Marker key={key} position={{lat:x.geometry.coordinates[1], lng:x.geometry.coordinates[0] }} />)}
     </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA_UdlRHrzFD62krTndE7gkT8MWrcqimFI')
})(App)
