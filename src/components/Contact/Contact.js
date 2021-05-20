import styled from 'styled-components';
import {useState} from 'react';
import ReactMapGL from 'react-map-gl';

import { Wrapper } from '../styled/index';

const Contact = () => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 	21.028511,
        longitude: 105.804817,
        zoom: 14
      });

    return (  
        <div>
            <Wrapper>
                <MapContainer>
                <ReactMapGL
                    {...viewport}
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxApiAccessToken={'pk.eyJ1IjoiZG90YWFsbHN0YXIxOTk5IiwiYSI6ImNrZDFxZHg2cjBiOW0yd255aXl2YWptYTYifQ.9NCz0qBkdmReHmN4I0c0FA'}
                />
                </MapContainer>
                <div>
                    Contact information
                </div>
            </Wrapper>
        </div>
    );
}
 
const MapContainer = styled.div`
    width: 100%;
    height: 100vh;
`


export default Contact;