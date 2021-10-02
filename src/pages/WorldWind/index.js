import React from 'react';
import Globe from 'worldwind-react-globe';

const WorldWind = () => {

    const layers = [
        'coordinates',
        'view-controls',
        'stars',
        'atmosphere-day-night',
        'renderables',
        'compass'
    ];

    return (
        <div>
            <Globe
                layers={layers}
                latitude={34.2}
                longitude={-119.2}
                altitude={10e6}
                renderables={
                    [{
                        altitude: 10e6,
                        longitude: -119.2,
                        latitude: 34.2
                    }]
                }
            />
        </div>
    )
}

export default WorldWind;