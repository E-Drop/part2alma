import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.scss';
import React, { useEffect } from 'react';
import axios from 'axios';
import allActions from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App(props) {
  const dispatch = useDispatch();
  const boats = useSelector(state => state.boats.boatsList);
  useEffect(() => {
    axios
      .get('http://localhost:4000/')
      .then(response => {
        dispatch(allActions.boatsActions.addBoats(response.data.features))
        const materials = [];

        response.data.features.length && response.data.features.map((boat, key) => {
          if(!materials.includes(boat.properties.material)) {
            materials.push(boat.properties.material);
          }
        })
        dispatch(allActions.boatsActions.addMaterials(materials));
      });
  }, []);
  
  return (
    <div className="App">
    <Map className="map" initialCenter={{
      lat: -27.897575560605485,
      lng: 153.29237339772322
    }}  google={props.google} zoom={10}>
    {boats.length && boats.map((x, key) => <Marker key={key} position={{lat:x.geometry.coordinates[0][0][0][1], lng:x.geometry.coordinates[0][0][0][0] }} />)}
     </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA_UdlRHrzFD62krTndE7gkT8MWrcqimFI')
})(App)
