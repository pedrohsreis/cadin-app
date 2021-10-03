/* 
 * Copyright (c) 2018 Bruce Schubert.
 * The MIT License
 * http://www.opensource.org/licenses/mit-license
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Globe from 'worldwind-react-globe';
import FontAwesome from 'react-fontawesome';
import {
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import MarkersCard from './MarkersCard';
import style from './Tools.css';

/* global WorldWind */

export default class Tools extends Component {

    static propTypes = {
        globe: PropTypes.instanceOf(Globe),
        markers: PropTypes.instanceOf(MarkersCard),
        markersLayerName: PropTypes.string
    }

    static pushpins = [
        require("../assets/img/img_verm.png"),
        "https://lh3.googleusercontent.com/ogw/ADea4I4IXxCNWS5_ZXwkGibaAyMkq_x2wXzu1Keq0GEb=s32-c-mo",
        "https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/images/pushpins/castshadow-blue.png",
        "https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/images/pushpins/castshadow-orange.png",
        "https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/images/pushpins/castshadow-teal.png",
        "https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/images/pushpins/castshadow-purple.png",
        "https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/images/pushpins/castshadow-white.png",
        "https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/images/pushpins/castshadow-black.png"
    ];

    constructor(props) {
        super(props);
        this.state = {
            selectedMarkerImage: Tools.pushpins[0],
            dropdownOpen: false
        };
        this.isDropArmed = false;
        this.dropCallback = null;

        this.dropMarkerCallback = this.dropMarkerCallback.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }


    selectPushpin(pushpin) {
        this.setState({ selectedMarkerImage: pushpin });
        this.armDropMarker();
    }

    armDropMarker() {
        this.props.globe.armClickDrop(this.dropMarkerCallback);
    };

    dropMarkerCallback(position, objectName) {
        // Create a placemark using the selected marker image

        console.log("THIS IS RECEIVED POSITION: ", position);

        let attributes = new WorldWind.PlacemarkAttributes(null);
        attributes.imageScale = 0.8;
        attributes.imageOffset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.3,
            WorldWind.OFFSET_FRACTION, 0.0);
        attributes.imageColor = WorldWind.Color.WHITE;
        attributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.0);
        attributes.labelAttributes.color = WorldWind.Color.YELLOW;
        attributes.drawLeaderLine = false;
        attributes.leaderLineAttributes.outlineColor = WorldWind.Color.YELLOW;
        attributes.imageSource = this.state.selectedMarkerImage;

        let placemark = new WorldWind.Placemark(position, /*eyeDistanceScaling*/ true, attributes);
        placemark.label = "Lat " + position.latitude.toPrecision(4).toString() + "\nLon " + position.longitude.toPrecision(5).toString() + "\nAlt " + position.altitude.toPrecision(5).toString() + "\nName " + objectName;
        placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
        placemark.eyeDistanceScalingThreshold = 2500000;

        // Add the placemark to the layer and to the Markers component
        const globe = this.props.globe;
        console.log(globe);
        const layer = globe.getLayer(this.props.markersLayerName);
        if (layer) {
            console.log("THIS IS THE LAYER", layer.addRenderable)
            // Add the placemark to the globe
            layer.addRenderable(placemark);

            // Add the placemark to the Markers component
            this.props.markers.addMarker(placemark);
        } else {
            console.warn("Renderable layer for markers not found: " + this.props.markersLayerName);
        }
    };

    render() {
        // Wait for the globe to be intialized before rendering this component
        if (!this.props.globe) {
            return null;
        }

        // Create a tool palette with dropdowns
        const dropdownItems = Tools.pushpins.map((pushpin) =>
            <DropdownItem key={pushpin} onClick={() => this.selectPushpin(pushpin)} className={style.button}>
                <img className={style.image} src={pushpin} alt="Selected Marker" />
            </DropdownItem>
        );

        return (
            <div className="btn-group interactive p-3">
                <Button
                    className={`${style.button} p-1`}
                    onClick={() => this.armDropMarker()}>
                    <FontAwesome name='plus' />
                    <img className={style.image} src={this.state.selectedMarkerImage} alt="Marker" />
                </Button>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret className={style.toggle} />
                    <DropdownMenu className={style.dropdown}>
                        {dropdownItems}
                    </DropdownMenu>
                </ButtonDropdown>

            </div>
        );
    }
};
