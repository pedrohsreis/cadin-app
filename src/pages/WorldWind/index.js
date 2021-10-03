/* 
 * Copyright (c) 2018 Bruce Schubert.
 * The MIT License
 * http://www.opensource.org/licenses/mit-license
 */
import React, { Component } from 'react'
import Globe from 'worldwind-react-globe'
import axios from 'axios';
import {
    CardColumns,
    Container
} from 'reactstrap'
import {
    LayersCard,
    MarkersCard,
    NavBar,
    NavBarItem,
    SearchBox,
    SettingsCard,
    Tools
} from '../../components'

import './App.css'

export default class WorldWind extends Component {

    constructor(props) {
        super(props)


        this.globeRef = React.createRef()
        this.layersRef = React.createRef()
        this.markersRef = React.createRef()
        this.settingsRef = React.createRef()

        this.state = {
            lat: 34.2,
            lon: -119.2,
            alt: 10e6,
            globe: null
        }
    }

    componentDidMount() {
        // Get the component with the WorldWindow after mounting
        this.setState({ globe: this.globeRef.current })

        let positions = [
            {
                "latitude": 23.0, 
                ['debris_name']: "FENGYUN 1C", 
                "altitude": 631078.4293272077, 
                "longitude": 74.0
            }
        ]

        axios.get("http://cadin-end.herokuapp.com/coordinates")
        .then((res) => {
            console.log(res);
            positions = [
                {
                    "latitude": 23.0, 
                    ['debris_name']: "FENGYUN 1C", 
                    "altitude": 631078.4293272077, 
                    "longitude": 74.0
                },
                {
                    "latitude": 2.0, 
                    ['debris_name']: "FENGYUN 1asdasdC", 
                    "altitude": 6331078.4293272077, 
                    "longitude": 7.0
                }
            ];
        })

        const tools = new Tools({ globe: this.globeRef.current, markers: this.markersRef.current, markersLayerName: 'Markers' });
        const callback = tools.dropMarkerCallback.bind(this);

        positions.map(position => {
            callback(position, position.debris_name);
        })

    }

    render() {

        const globe = this.globeRef.current

        const layers = [
            { layer: 'blue-marble', options: { category: 'base', enabled: true } },
            { layer: 'blue-marble-landsat', options: { category: 'base', enabled: false } },
            { layer: 'bing-aerial', options: { category: 'base', enabled: false } },
            { layer: 'bing-aerial-labels', options: { category: 'base', enabled: true } },
            { layer: 'eox-sentinal2', options: { category: 'base', enabled: false } },
            { layer: 'eox-sentinal2-labels', options: { category: 'base', enabled: false } },
            { layer: 'eox-openstreetmap', options: { category: 'overlay', enabled: false, opacity: 0.8 } },
            { layer: 'bing-roads', options: { category: 'overlay', enabled: false, opacity: 0.8 } },
            { layer: 'renderables', options: { category: 'data', enabled: true, displayName: 'Markers' } },
            { layer: 'compass', options: { category: 'setting', enabled: false } },
            { layer: 'coordinates', options: { category: 'setting', enabled: true } },
            { layer: 'view-controls', options: { category: 'setting', enabled: true } },
            { layer: 'stars', options: { category: 'setting', enabled: true } },
            { layer: 'atmosphere-day-night', options: { category: 'setting', enabled: true } }
        ]

        const navbarItems = [
            <NavBarItem key='lyr' title='Layers' icon='list' collapse={this.layersRef.current} />,
            <NavBarItem key='mkr' title='Markers' icon='map-marker' collapse={this.markersRef.current} />,
            <NavBarItem key='set' title='Settings' icon='cog' collapse={this.settingsRef.current} />
        ]

        const navbarSearch = <SearchBox globe={globe} />

        return (
            <div>
                <NavBar
                    logo=''
                    title='Cadin Space App'
                    href='/'
                    items={navbarItems}
                    search={navbarSearch} />
                <Container fluid className='p-0'>
                    <div className='globe'>
                        <Globe
                            ref={this.globeRef}
                            layers={layers}
                            altitude={8000000}
                            latitude={60}
                            longitude={30}
                        />
                    </div>
                    <div className='overlayTools noninteractive'>
                        <Tools
                            globe={globe}
                            markers={this.markersRef.current}
                            markersLayerName='Markers'
                            altitudeMode
                        />
                    </div>
                    <div className='overlayCards noninteractive'>
                        <CardColumns>
                            <LayersCard
                                ref={this.layersRef}
                                categories={['overlay', 'base']}
                                globe={globe} />
                            <MarkersCard
                                ref={this.markersRef}
                                globe={globe}
                                markersLayerName='Markers'

                            />
                            <SettingsCard
                                ref={this.settingsRef}
                                categories={['setting']}
                                globe={globe} />
                        </CardColumns>
                    </div>
                </Container>
            </div>
        )
    }
}