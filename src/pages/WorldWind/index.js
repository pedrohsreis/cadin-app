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
            }, 
            {
                "latitude": -4.0, 
                ['debris_name']: "COSMOS 2251", 
                "altitude": 789261.6401729003, 
                "longitude": 40.0
            }, 
            {
                "latitude": -76.0, 
                ['debris_name']: "IRIDIUM 33", 
                "altitude": 863756.8296661741, 
                "longitude": -108.0
            }, 
            {
                "latitude": -30.0, 
                ['debris_name']: "TITAN 3C TRANSTAGE", 
                "altitude": 721191.9876534366, 
                "longitude": 119.0
            }, 
            {
                "latitude": 4.0, 
                ['debris_name']: "THORAD AGENA D", 
                "altitude": 1024622.916561805, 
                "longitude": 50.0
            }, 
            {
                "latitude": -36.0, 
                ['debris_name']: "COSMOS 397", 
                "altitude": 878355.6158650765, 
                "longitude": -108.0
            }, 
            {
                "latitude": -59.0, 
                ['debris_name']: "SL-16", 
                "altitude": 786988.8088161252, 
                "longitude": -161.0
            }, 
            {
                "latitude": -67.0, 
                ['debris_name']: "NOAA 16", 
                "altitude": 699078.0407509384, 
                "longitude": 26.0
            }, 
            {
                "latitude": 6.0, 
                ['debris_name']: "PSLV", 
                "altitude": 516516.33299848787, 
                "longitude": -46.0
            }, 
            {
                "latitude": -66.0, 
                ['debris_name']: "SL-12", 
                "altitude": 753158.4915419674, 
                "longitude": -25.0
            }, 
            {
                "latitude": -34.0, 
                ['debris_name']: "COSMOS 970", 
                "altitude": 984772.9295334264, 
                "longitude": -17.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "ATLAS CENTAUR", 
                "altitude": 35256281.91222998, 
                "longitude": 111.0
            }, 
            {
                "latitude": -60.0, 
                ['debris_name']: "METEOR 2-5", 
                "altitude": 876532.8564128503, 
                "longitude": 102.0
            }, 
            {
                "latitude": -37.0, 
                ['debris_name']: "NIMBUS 2", 
                "altitude": 1092579.296198558, 
                "longitude": 120.0
            }, 
            {
                "latitude": 50.0, 
                ['debris_name']: "DELTA 1", 
                "altitude": 963891.0047102773, 
                "longitude": 81.0
            }, 
            {
                "latitude": -75.0, 
                ['debris_name']: "DMSP 5D-2 F6", 
                "altitude": 726611.0509171671, 
                "longitude": -103.0
            }, 
            {
                "latitude": 15.0, 
                ['debris_name']: "ATLAS 5 CENTAUR", 
                "altitude": 30275822.334423374, 
                "longitude": 77.0
            }, 
            {
                "latitude": 59.0, 
                ['debris_name']: "COSMOS 1275", 
                "altitude": 1112233.5596147778, 
                "longitude": -47.0
            }, 
            {
                "latitude": 56.0, 
                ['debris_name']: "SL-19", 
                "altitude": 2152026.2775093094, 
                "longitude": -158.0
            }, 
            {
                "latitude": 25.0, 
                ['debris_name']: "ISS", 
                "altitude": 376786.5189128965, 
                "longitude": -69.0
            }, 
            {
                "latitude": -24.0, 
                ['debris_name']: "SL-8", 
                "altitude": 1475541.4123700808, 
                "longitude": -114.0
            }, 
            {
                "latitude": -21.0, 
                ['debris_name']: "SL-14", 
                "altitude": 880211.2193753895, 
                "longitude": -67.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "CZ-4B", 
                "altitude": 830259.0325695038, 
                "longitude": -50.0
            }, 
            {
                "latitude": -52.0, 
                ['debris_name']: "CZ-4", 
                "altitude": 669254.0276547732, 
                "longitude": -52.0
            }, 
            {
                "latitude": 38.0, 
                ['debris_name']: "COSMOS 2392", 
                "altitude": 1543979.417477221, 
                "longitude": -141.0
            }, 
            {
                "latitude": 25.0, 
                ['debris_name']: "NOAA 17", 
                "altitude": 818906.4458628133, 
                "longitude": 71.0
            }, 
            {
                "latitude": 26.0, 
                ['debris_name']: "THORAD DELTA 1", 
                "altitude": 1381427.66045604, 
                "longitude": 85.0
            }, 
            {
                "latitude": -51.0, 
                ['debris_name']: "METEOR 2-8", 
                "altitude": 890388.9757697512, 
                "longitude": 58.0
            }, 
            {
                "latitude": -68.0, 
                ['debris_name']: "CZ-2D", 
                "altitude": 514279.03788319905, 
                "longitude": 54.0
            }, 
            {
                "latitude": -36.0, 
                ['debris_name']: "YUNHAI 1-02", 
                "altitude": 926089.0545220865, 
                "longitude": -38.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "THOR ABLESTAR", 
                "altitude": 822281.586467138, 
                "longitude": 21.0
            }, 
            {
                "latitude": -50.0, 
                ['debris_name']: "COSMOS 886", 
                "altitude": 2384001.188156254, 
                "longitude": -73.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "ARIANE 5", 
                "altitude": 10043540.970212111, 
                "longitude": 136.0
            }, 
            {
                "latitude": 8.0, 
                ['debris_name']: "CZ-4C", 
                "altitude": 1312850.5392374669, 
                "longitude": -106.0
            }, 
            {
                "latitude": 48.0, 
                ['debris_name']: "DMSP 5D-3 F18", 
                "altitude": 811892.0825310695, 
                "longitude": 0.0
            }, 
            {
                "latitude": -43.0, 
                ['debris_name']: "DMSP 5D-2 F13", 
                "altitude": 672368.3370980406, 
                "longitude": -47.0
            }, 
            {
                "latitude": 73.0, 
                ['debris_name']: "COSMOS 1823", 
                "altitude": 1496043.6359650749, 
                "longitude": -132.0
            }, 
            {
                "latitude": -36.0, 
                ['debris_name']: "FREGAT", 
                "altitude": 492405.26299515355, 
                "longitude": 6.0
            }, 
            {
                "latitude": 69.0, 
                ['debris_name']: "WORLDVIEW 2", 
                "altitude": 765256.5050126861, 
                "longitude": -135.0
            }, 
            {
                "latitude": -11.0, 
                ['debris_name']: "USA 149", 
                "altitude": 36426702.2142093, 
                "longitude": -16.0
            }, 
            {
                "latitude": 24.0, 
                ['debris_name']: "ASTRO H", 
                "altitude": 499925.71614533896, 
                "longitude": -153.0
            }, 
            {
                "latitude": 37.0, 
                ['debris_name']: "COSMOS 1375", 
                "altitude": 974527.097119344, 
                "longitude": 20.0
            }, 
            {
                "latitude": 16.0, 
                ['debris_name']: "THOR AGENA B", 
                "altitude": 1006375.1780664641, 
                "longitude": -63.0
            }, 
            {
                "latitude": 64.0, 
                ['debris_name']: "SCOUT G-1", 
                "altitude": 1049087.998112917, 
                "longitude": 36.0
            }, 
            {
                "latitude": 40.0, 
                ['debris_name']: "RESURS O1", 
                "altitude": 631319.8478411215, 
                "longitude": -18.0
            }, 
            {
                "latitude": -64.0, 
                ['debris_name']: "KYOKKO 1", 
                "altitude": 3643671.078058977, 
                "longitude": -64.0
            }, 
            {
                "latitude": -61.0, 
                ['debris_name']: "DMSP 5D-2 F11", 
                "altitude": 728186.2044393703, 
                "longitude": 65.0
            }, 
            {
                "latitude": 18.0, 
                ['debris_name']: "THOR ABLE", 
                "altitude": 594140.7696423423, 
                "longitude": -11.0
            }, 
            {
                "latitude": -78.0, 
                ['debris_name']: "H-2A", 
                "altitude": 613949.2718190671, 
                "longitude": 95.0
            }, 
            {
                "latitude": 12.0, 
                ['debris_name']: "COSMOS 1932", 
                "altitude": 956791.4130295604, 
                "longitude": 54.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "ARIANE 1", 
                "altitude": 798996.9608384101, 
                "longitude": 167.0
            }, 
            {
                "latitude": 69.0, 
                ['debris_name']: "OPS 7613 (P/L 5)", 
                "altitude": 928691.2846917931, 
                "longitude": -62.0
            }, 
            {
                "latitude": -39.0, 
                ['debris_name']: "COSMOS 894", 
                "altitude": 975213.4117850729, 
                "longitude": -59.0
            }, 
            {
                "latitude": -81.0, 
                ['debris_name']: "DELTA 2", 
                "altitude": 535201.6594297776, 
                "longitude": -17.0
            }, 
            {
                "latitude": -3.0, 
                ['debris_name']: "CBERS 1", 
                "altitude": 750546.5123432894, 
                "longitude": -87.0
            }, 
            {
                "latitude": -54.0, 
                ['debris_name']: "TIANHUI 1-03", 
                "altitude": 632440.8472161285, 
                "longitude": 49.0
            }, 
            {
                "latitude": 10.0, 
                ['debris_name']: "DMSP 5D-2 F15", 
                "altitude": 622106.0096446464, 
                "longitude": 156.0
            }, 
            {
                "latitude": 5.0, 
                ['debris_name']: "YAOGAN 1", 
                "altitude": 591843.6532991134, 
                "longitude": 146.0
            }, 
            {
                "latitude": 73.0, 
                ['debris_name']: "SSU 1", 
                "altitude": 1435607.2409846266, 
                "longitude": 109.0
            }, 
            {
                "latitude": 62.0, 
                ['debris_name']: "TITAN 34B", 
                "altitude": 23507748.96201569, 
                "longitude": 134.0
            }, 
            {
                "latitude": -58.0, 
                ['debris_name']: "TITAN 4B", 
                "altitude": 627329.4993282951, 
                "longitude": -128.0
            }, 
            {
                "latitude": 25.0, 
                ['debris_name']: "COSMOS 249", 
                "altitude": 749463.0531229364, 
                "longitude": 32.0
            }, 
            {
                "latitude": -3.0, 
                ['debris_name']: "ARIANE 2", 
                "altitude": 31350748.309386194, 
                "longitude": -14.0
            }, 
            {
                "latitude": -48.0, 
                ['debris_name']: "BREEZE-M", 
                "altitude": 16925556.856351078, 
                "longitude": 147.0
            }, 
            {
                "latitude": -45.0, 
                ['debris_name']: "START 1", 
                "altitude": 818364.0159376279, 
                "longitude": -160.0
            }, 
            {
                "latitude": -14.0, 
                ['debris_name']: "SL-3", 
                "altitude": 859763.9748326945, 
                "longitude": -74.0
            }, 
            {
                "latitude": 71.0, 
                ['debris_name']: "TIROS N", 
                "altitude": 577535.532612239, 
                "longitude": -134.0
            }, 
            {
                "latitude": 12.0, 
                ['debris_name']: "DELTA 4H", 
                "altitude": 996268.5030529512, 
                "longitude": -136.0
            }, 
            {
                "latitude": -81.0, 
                ['debris_name']: "PEGASUS", 
                "altitude": 799923.938072352, 
                "longitude": -12.0
            }, 
            {
                "latitude": 33.0, 
                ['debris_name']: "DRAGON RESILIENCE", 
                "altitude": 402128.49458688963, 
                "longitude": -142.0
            }, 
            {
                "latitude": -23.0, 
                ['debris_name']: "OPS 4682", 
                "altitude": 1240267.3337088027, 
                "longitude": -86.0
            }, 
            {
                "latitude": -80.0, 
                ['debris_name']: "DMSP 5D-2 F14", 
                "altitude": 750824.3554936948, 
                "longitude": -10.0
            }, 
            {
                "latitude": -19.0, 
                ['debris_name']: "THOR BURNER 2A", 
                "altitude": 799120.1625194782, 
                "longitude": 49.0
            }, 
            {
                "latitude": -39.0, 
                ['debris_name']: "AQUA", 
                "altitude": 715523.7016544869, 
                "longitude": -132.0
            }, 
            {
                "latitude": 15.0, 
                ['debris_name']: "COSMOS 1900", 
                "altitude": 696563.3759141486, 
                "longitude": 157.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "TRANSIT 5E-5", 
                "altitude": 727739.8324272559, 
                "longitude": 167.0
            }, 
            {
                "latitude": -21.0, 
                ['debris_name']: "INSPIRATION-4", 
                "altitude": 363030.5036208479, 
                "longitude": 171.0
            }, 
            {
                "latitude": -6.0, 
                ['debris_name']: "CTS", 
                "altitude": 35569594.6562, 
                "longitude": -107.0
            }, 
            {
                "latitude": -2.0, 
                ['debris_name']: "ARIANE 3", 
                "altitude": 3076570.238016927, 
                "longitude": 29.0
            }, 
            {
                "latitude": -13.0, 
                ['debris_name']: "COSMOS 1261", 
                "altitude": 29549893.83539203, 
                "longitude": 21.0
            }, 
            {
                "latitude": 57.0, 
                ['debris_name']: "OPS 0100", 
                "altitude": 1058240.6096842962, 
                "longitude": -83.0
            }, 
            {
                "latitude": -62.0, 
                ['debris_name']: "COSMOS 374", 
                "altitude": 1263911.3067515555, 
                "longitude": 31.0
            }, 
            {
                "latitude": 56.0, 
                ['debris_name']: "COSMOS 839", 
                "altitude": 1936969.8384653956, 
                "longitude": -86.0
            }, 
            {
                "latitude": 73.0, 
                ['debris_name']: "COSMOS 1814", 
                "altitude": 713238.0546824005, 
                "longitude": 157.0
            }, 
            {
                "latitude": -62.0, 
                ['debris_name']: "DMSP 5D-2 F12", 
                "altitude": 750388.3203114579, 
                "longitude": 140.0
            }, 
            {
                "latitude": 37.0, 
                ['debris_name']: "NOAA 12", 
                "altitude": 764345.8090758116, 
                "longitude": -11.0
            }, 
            {
                "latitude": -61.0, 
                ['debris_name']: "NOAA 14", 
                "altitude": 850755.9539084794, 
                "longitude": -170.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "FALCON 9", 
                "altitude": 355296.9768384046, 
                "longitude": -125.0
            }, 
            {
                "latitude": -6.0, 
                ['debris_name']: "ARIANE 44LP", 
                "altitude": 34121160.74224948, 
                "longitude": -33.0
            }, 
            {
                "latitude": 56.0, 
                ['debris_name']: "SCOUT A-1", 
                "altitude": 1070450.6861463187, 
                "longitude": 42.0
            }, 
            {
                "latitude": -57.0, 
                ['debris_name']: "CZ-2C", 
                "altitude": 812923.0108010868, 
                "longitude": -64.0
            }, 
            {
                "latitude": -4.0, 
                ['debris_name']: "ISIS 1", 
                "altitude": 2337068.1075636274, 
                "longitude": 152.0
            }, 
            {
                "latitude": -77.0, 
                ['debris_name']: "DMSP 5D-3 F17", 
                "altitude": 851013.2535293116, 
                "longitude": 9.0
            }, 
            {
                "latitude": 42.0, 
                ['debris_name']: "MSX", 
                "altitude": 921003.7601292254, 
                "longitude": -121.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "TRANSIT 11", 
                "altitude": 1086059.0803584945, 
                "longitude": -28.0
            }, 
            {
                "latitude": 61.0, 
                ['debris_name']: "METEOR 2-17", 
                "altitude": 912975.222456579, 
                "longitude": -101.0
            }, 
            {
                "latitude": -8.0, 
                ['debris_name']: "SL-24", 
                "altitude": 706446.1354659037, 
                "longitude": -38.0
            }, 
            {
                "latitude": -72.0, 
                ['debris_name']: "NOAA 11", 
                "altitude": 842836.1283453865, 
                "longitude": -145.0
            }, 
            {
                "latitude": 55.0, 
                ['debris_name']: "SL-23", 
                "altitude": 23949821.664966714, 
                "longitude": 162.0
            }, 
            {
                "latitude": 61.0, 
                ['debris_name']: "OSCAR 23", 
                "altitude": 1022501.0227258733, 
                "longitude": 172.0
            }, 
            {
                "latitude": 79.0, 
                ['debris_name']: "METEOR 2-7", 
                "altitude": 753045.9826928297, 
                "longitude": -145.0
            }, 
            {
                "latitude": 78.0, 
                ['debris_name']: "ERS 1", 
                "altitude": 630768.8393731483, 
                "longitude": -148.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "MSG 1", 
                "altitude": 35556332.52799508, 
                "longitude": 6.0
            }, 
            {
                "latitude": 68.0, 
                ['debris_name']: "SCOUT X-4", 
                "altitude": 972948.220238015, 
                "longitude": -123.0
            }, 
            {
                "latitude": -27.0, 
                ['debris_name']: "COSMOS 1691", 
                "altitude": 1379346.6147292648, 
                "longitude": 59.0
            }, 
            {
                "latitude": -13.0, 
                ['debris_name']: "CRRES", 
                "altitude": 33155128.494282864, 
                "longitude": 55.0
            }, 
            {
                "latitude": -16.0, 
                ['debris_name']: "CZ-3C", 
                "altitude": 31084405.404385954, 
                "longitude": -11.0
            }, 
            {
                "latitude": 56.0, 
                ['debris_name']: "COSMOS 375", 
                "altitude": 1198497.4183697735, 
                "longitude": 83.0
            }, 
            {
                "latitude": -18.0, 
                ['debris_name']: "COSMOS 1934", 
                "altitude": 947890.7033008832, 
                "longitude": -43.0
            }, 
            {
                "latitude": -59.0, 
                ['debris_name']: "COSMOS 1174", 
                "altitude": 862837.4790478736, 
                "longitude": 159.0
            }, 
            {
                "latitude": 69.0, 
                ['debris_name']: "TRANSIT 10", 
                "altitude": 840265.2119769481, 
                "longitude": -140.0
            }, 
            {
                "latitude": -52.0, 
                ['debris_name']: "COSMOS 252", 
                "altitude": 1009838.0567068895, 
                "longitude": -2.0
            }, 
            {
                "latitude": -3.0, 
                ['debris_name']: "ARIANE 44L+", 
                "altitude": 34818279.01265739, 
                "longitude": 143.0
            }, 
            {
                "latitude": -63.0, 
                ['debris_name']: "USA 15", 
                "altitude": 732250.7265262657, 
                "longitude": 21.0
            }, 
            {
                "latitude": -20.0, 
                ['debris_name']: "USA 40 R/B", 
                "altitude": 4301070.261663433, 
                "longitude": -147.0
            }, 
            {
                "latitude": 1.0, 
                ['debris_name']: "ARIANE 44L", 
                "altitude": 20050118.90167294, 
                "longitude": 138.0
            }, 
            {
                "latitude": 75.0, 
                ['debris_name']: "SCOUT B", 
                "altitude": 596868.9905797826, 
                "longitude": 137.0
            }, 
            {
                "latitude": 10.0, 
                ['debris_name']: "COSMOS 1331", 
                "altitude": 774059.9593907519, 
                "longitude": -122.0
            }, 
            {
                "latitude": -9.0, 
                ['debris_name']: "NOAA 1", 
                "altitude": 1503908.2736051923, 
                "longitude": -98.0
            }, 
            {
                "latitude": -14.0, 
                ['debris_name']: "YAOGAN 4", 
                "altitude": 965583.4479923119, 
                "longitude": -72.0
            }, 
            {
                "latitude": 63.0, 
                ['debris_name']: "JASON", 
                "altitude": 1223270.1944614789, 
                "longitude": 26.0
            }, 
            {
                "latitude": 10.0, 
                ['debris_name']: "COSMOS 1030", 
                "altitude": 29233632.520559784, 
                "longitude": -171.0
            }, 
            {
                "latitude": -38.0, 
                ['debris_name']: "AVUM", 
                "altitude": 476130.0740481284, 
                "longitude": 16.0
            }, 
            {
                "latitude": 70.0, 
                ['debris_name']: "IRAS", 
                "altitude": 884066.4913678146, 
                "longitude": -32.0
            }, 
            {
                "latitude": -31.0, 
                ['debris_name']: "SCOUT A", 
                "altitude": 951779.222069058, 
                "longitude": 67.0
            }, 
            {
                "latitude": 13.0, 
                ['debris_name']: "TIROS 8", 
                "altitude": 601599.6771571317, 
                "longitude": 120.0
            }, 
            {
                "latitude": 23.0, 
                ['debris_name']: "CZ-3A", 
                "altitude": 9137871.750469131, 
                "longitude": 173.0
            }, 
            {
                "latitude": -69.0, 
                ['debris_name']: "GGSE 3", 
                "altitude": 927381.6896903086, 
                "longitude": -32.0
            }, 
            {
                "latitude": -70.0, 
                ['debris_name']: "YZ-1S", 
                "altitude": 724838.3836534908, 
                "longitude": 152.0
            }, 
            {
                "latitude": -42.0, 
                ['debris_name']: "ATLAS 28E", 
                "altitude": 635166.2864607627, 
                "longitude": 115.0
            }, 
            {
                "latitude": -48.0, 
                ['debris_name']: "ARIANE 42P", 
                "altitude": 1370983.140623725, 
                "longitude": 128.0
            }, 
            {
                "latitude": 59.0, 
                ['debris_name']: "METEOR 1-22", 
                "altitude": 943180.173611822, 
                "longitude": 133.0
            }, 
            {
                "latitude": 55.0, 
                ['debris_name']: "COSMOS 2298", 
                "altitude": 779017.5706025807, 
                "longitude": -71.0
            }, 
            {
                "latitude": 10.0, 
                ['debris_name']: "ORBCOMM FM 16", 
                "altitude": 631105.1623666357, 
                "longitude": -86.0
            }, 
            {
                "latitude": -35.0, 
                ['debris_name']: "IRIDIUM 91", 
                "altitude": 698125.0685284187, 
                "longitude": 163.0
            }, 
            {
                "latitude": -64.0, 
                ['debris_name']: "P/L 153", 
                "altitude": 846638.9439437118, 
                "longitude": -172.0
            }, 
            {
                "latitude": 81.0, 
                ['debris_name']: "GAOFEN 9", 
                "altitude": 852778.3832215272, 
                "longitude": -152.0
            }, 
            {
                "latitude": 58.0, 
                ['debris_name']: "COSMOS 468", 
                "altitude": 763315.6335315459, 
                "longitude": 95.0
            }, 
            {
                "latitude": -65.0, 
                ['debris_name']: "NUSAT 1", 
                "altitude": 518714.0059451473, 
                "longitude": -78.0
            }, 
            {
                "latitude": -33.0, 
                ['debris_name']: "ERS 2", 
                "altitude": 765832.7061674054, 
                "longitude": 75.0
            }, 
            {
                "latitude": -35.0, 
                ['debris_name']: "SENTINEL 1A", 
                "altitude": 577016.10916193, 
                "longitude": -173.0
            }, 
            {
                "latitude": -18.0, 
                ['debris_name']: "TIROS 6", 
                "altitude": 639083.3036521395, 
                "longitude": 56.0
            }, 
            {
                "latitude": -76.0, 
                ['debris_name']: "BLITS", 
                "altitude": 844280.2499109679, 
                "longitude": 52.0
            }, 
            {
                "latitude": 62.0, 
                ['debris_name']: "OSCAR 30", 
                "altitude": 996379.9685677568, 
                "longitude": 68.0
            }, 
            {
                "latitude": 63.0, 
                ['debris_name']: "COSMOS 921", 
                "altitude": 587239.0402277594, 
                "longitude": 117.0
            }, 
            {
                "latitude": 13.0, 
                ['debris_name']: "TRANSIT 16", 
                "altitude": 928172.0812705766, 
                "longitude": -109.0
            }, 
            {
                "latitude": -76.0, 
                ['debris_name']: "CZ-2", 
                "altitude": 1199543.076157817, 
                "longitude": -49.0
            }, 
            {
                "latitude": -4.0, 
                ['debris_name']: "AYAME 2", 
                "altitude": 31541759.102031264, 
                "longitude": 35.0
            }, 
            {
                "latitude": -29.0, 
                ['debris_name']: "ATLAS CENTAUR 2", 
                "altitude": 743931.8071065489, 
                "longitude": -80.0
            }, 
            {
                "latitude": -36.0, 
                ['debris_name']: "COSMOS 1285", 
                "altitude": 34245051.53716112, 
                "longitude": 39.0
            }, 
            {
                "latitude": -11.0, 
                ['debris_name']: "CZ-3B", 
                "altitude": 33264660.537658326, 
                "longitude": -69.0
            }, 
            {
                "latitude": -35.0, 
                ['debris_name']: "ATLAS D", 
                "altitude": 929102.9295020971, 
                "longitude": -175.0
            }, 
            {
                "latitude": 41.0, 
                ['debris_name']: "TRANSIT 5B-1", 
                "altitude": 1122405.399034438, 
                "longitude": -2.0
            }, 
            {
                "latitude": 7.0, 
                ['debris_name']: "DMSP 5D-3 F16", 
                "altitude": 808123.4199228811, 
                "longitude": 119.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "DMSP 5D-2 F9", 
                "altitude": 769408.3425639885, 
                "longitude": -168.0
            }, 
            {
                "latitude": -3.0, 
                ['debris_name']: "GAOFEN 8", 
                "altitude": 447201.95018991746, 
                "longitude": 112.0
            }, 
            {
                "latitude": 10.0, 
                ['debris_name']: "NOAA 7", 
                "altitude": 726774.847441827, 
                "longitude": -86.0
            }, 
            {
                "latitude": -75.0, 
                ['debris_name']: "YAOGAN 30", 
                "altitude": 898095.8837236179, 
                "longitude": 9.0
            }, 
            {
                "latitude": 22.0, 
                ['debris_name']: "COSMOS 1461", 
                "altitude": 504591.96010610287, 
                "longitude": -65.0
            }, 
            {
                "latitude": -67.0, 
                ['debris_name']: "SL-18", 
                "altitude": 684796.7823396053, 
                "longitude": 63.0
            }, 
            {
                "latitude": 30.0, 
                ['debris_name']: "METEOR 2-6", 
                "altitude": 839414.3649024366, 
                "longitude": -39.0
            }, 
            {
                "latitude": 11.0, 
                ['debris_name']: "OV1-5", 
                "altitude": 742635.1691139945, 
                "longitude": -79.0
            }, 
            {
                "latitude": -60.0, 
                ['debris_name']: "TANSEI 3", 
                "altitude": 2239667.651460489, 
                "longitude": 54.0
            }, 
            {
                "latitude": -68.0, 
                ['debris_name']: "BREEZE-KM", 
                "altitude": 1312336.027013789, 
                "longitude": -111.0
            }, 
            {
                "latitude": 36.0, 
                ['debris_name']: "YAOGAN 11", 
                "altitude": 837140.5788504129, 
                "longitude": -75.0
            }, 
            {
                "latitude": -10.0, 
                ['debris_name']: "TITAN 3A", 
                "altitude": 2785807.6092388993, 
                "longitude": 98.0
            }, 
            {
                "latitude": 26.0, 
                ['debris_name']: "ECHO 1", 
                "altitude": 1526301.5011069572, 
                "longitude": -67.0
            }, 
            {
                "latitude": 31.0, 
                ['debris_name']: "TRAAC", 
                "altitude": 1062446.6789156296, 
                "longitude": -172.0
            }, 
            {
                "latitude": -47.0, 
                ['debris_name']: "SCOUT B-1", 
                "altitude": 723936.5201238613, 
                "longitude": 90.0
            }, 
            {
                "latitude": -77.0, 
                ['debris_name']: "NOAA 10", 
                "altitude": 734971.6373849382, 
                "longitude": 74.0
            }, 
            {
                "latitude": 3.0, 
                ['debris_name']: "ARIANE 44L+3", 
                "altitude": 27985870.288610596, 
                "longitude": -76.0
            }, 
            {
                "latitude": -6.0, 
                ['debris_name']: "ATLAS AGENA B", 
                "altitude": 3670243.9006782705, 
                "longitude": -31.0
            }, 
            {
                "latitude": 74.0, 
                ['debris_name']: "DANDE", 
                "altitude": 345826.70398326527, 
                "longitude": 149.0
            }, 
            {
                "latitude": 38.0, 
                ['debris_name']: "SCOUT X-1", 
                "altitude": 1177551.0213962784, 
                "longitude": 170.0
            }, 
            {
                "latitude": -50.0, 
                ['debris_name']: "GAOFEN 3", 
                "altitude": 762933.617251533, 
                "longitude": 108.0
            }, 
            {
                "latitude": -55.0, 
                ['debris_name']: "ARIANE 40", 
                "altitude": 731726.9560446596, 
                "longitude": -151.0
            }, 
            {
                "latitude": -22.0, 
                ['debris_name']: "METEOR 2-20", 
                "altitude": 946119.532804026, 
                "longitude": -42.0
            }, 
            {
                "latitude": 46.0, 
                ['debris_name']: "YAOGAN 29", 
                "altitude": 620758.8242581291, 
                "longitude": 133.0
            }, 
            {
                "latitude": 81.0, 
                ['debris_name']: "DMSP 5D-2 F10", 
                "altitude": 590723.5773392922, 
                "longitude": -38.0
            }, 
            {
                "latitude": -28.0, 
                ['debris_name']: "M-3H", 
                "altitude": 10902528.974649843, 
                "longitude": 68.0
            }, 
            {
                "latitude": -86.0, 
                ['debris_name']: "TRANSIT 5B-2", 
                "altitude": 900033.3498256118, 
                "longitude": 109.0
            }, 
            {
                "latitude": -58.0, 
                ['debris_name']: "ATLAS 41E", 
                "altitude": 683193.4241767665, 
                "longitude": 103.0
            }, 
            {
                "latitude": -31.0, 
                ['debris_name']: "DMSP 5D-3 F19", 
                "altitude": 849766.6008833796, 
                "longitude": 131.0
            }, 
            {
                "latitude": -10.0, 
                ['debris_name']: "USA 142", 
                "altitude": 35267327.3034547, 
                "longitude": -59.0
            }, 
            {
                "latitude": -2.0, 
                ['debris_name']: "IRIDIUM 47", 
                "altitude": 887000.364223711, 
                "longitude": -158.0
            }, 
            {
                "latitude": 12.0, 
                ['debris_name']: "DODECAPOLE 2", 
                "altitude": 874345.0686562363, 
                "longitude": -140.0
            }, 
            {
                "latitude": -40.0, 
                ['debris_name']: "COBE", 
                "altitude": 896224.5707528687, 
                "longitude": -43.0
            }, 
            {
                "latitude": 12.0, 
                ['debris_name']: "DIAMANT", 
                "altitude": 428492.5865329927, 
                "longitude": -149.0
            }, 
            {
                "latitude": 49.0, 
                ['debris_name']: "YAOGAN 2", 
                "altitude": 785940.9045240754, 
                "longitude": -54.0
            }, 
            {
                "latitude": -14.0, 
                ['debris_name']: "ARIANA 1", 
                "altitude": 5405236.50746558, 
                "longitude": 142.0
            }, 
            {
                "latitude": -6.0, 
                ['debris_name']: "MINOTAUR", 
                "altitude": 393845.70998323784, 
                "longitude": 88.0
            }, 
            {
                "latitude": -73.0, 
                ['debris_name']: "TIANHUI 1-02", 
                "altitude": 596896.5509971015, 
                "longitude": 22.0
            }, 
            {
                "latitude": 12.0, 
                ['debris_name']: "METEOR 1-16", 
                "altitude": 831358.7207802403, 
                "longitude": 112.0
            }, 
            {
                "latitude": 2.0, 
                ['debris_name']: "ISO", 
                "altitude": 59588686.059847064, 
                "longitude": 50.0
            }, 
            {
                "latitude": 2.0, 
                ['debris_name']: "NOAA 8", 
                "altitude": 481447.31822151423, 
                "longitude": -33.0
            }, 
            {
                "latitude": -10.0, 
                ['debris_name']: "SJ 16-02", 
                "altitude": 716608.8079121849, 
                "longitude": -112.0
            }, 
            {
                "latitude": 65.0, 
                ['debris_name']: "COSMOS 1220", 
                "altitude": 603887.4982605064, 
                "longitude": -23.0
            }, 
            {
                "latitude": -10.0, 
                ['debris_name']: "COSMOS 1481", 
                "altitude": 14901498.927587856, 
                "longitude": 177.0
            }, 
            {
                "latitude": 29.0, 
                ['debris_name']: "METEOR 1-10", 
                "altitude": 666385.2908153088, 
                "longitude": 150.0
            }, 
            {
                "latitude": 67.0, 
                ['debris_name']: "TRANSIT 14", 
                "altitude": 1014335.5519771044, 
                "longitude": -99.0
            }, 
            {
                "latitude": 74.0, 
                ['debris_name']: "SSETI-EXPRESS", 
                "altitude": 696464.700298536, 
                "longitude": -77.0
            }, 
            {
                "latitude": -27.0, 
                ['debris_name']: "SL-6", 
                "altitude": 1290343.3141613987, 
                "longitude": -28.0
            }, 
            {
                "latitude": -77.0, 
                ['debris_name']: "THOR ALTAIR", 
                "altitude": 929388.4177254585, 
                "longitude": -71.0
            }, 
            {
                "latitude": 10.0, 
                ['debris_name']: "DIAMANT B-P4", 
                "altitude": 791237.013520036, 
                "longitude": 138.0
            }, 
            {
                "latitude": -21.0, 
                ['debris_name']: "SZ-12 MODULE", 
                "altitude": 356538.07051295793, 
                "longitude": -16.0
            }, 
            {
                "latitude": -56.0, 
                ['debris_name']: "NOAA 13", 
                "altitude": 527945.7898278963, 
                "longitude": 144.0
            }, 
            {
                "latitude": 79.0, 
                ['debris_name']: "COSMOS 2535", 
                "altitude": 604757.3212618467, 
                "longitude": -144.0
            }, 
            {
                "latitude": -63.0, 
                ['debris_name']: "SEASAT 1", 
                "altitude": 661474.7203751836, 
                "longitude": -116.0
            }, 
            {
                "latitude": 41.0, 
                ['debris_name']: "EXPLORER 38", 
                "altitude": 5835866.944637209, 
                "longitude": -27.0
            }, 
            {
                "latitude": -59.0, 
                ['debris_name']: "TRANSIT 20", 
                "altitude": 1055932.5085862728, 
                "longitude": 126.0
            }, 
            {
                "latitude": 49.0, 
                ['debris_name']: "COSMOS 1066", 
                "altitude": 894967.6170285781, 
                "longitude": -32.0
            }, 
            {
                "latitude": -42.0, 
                ['debris_name']: "N-1", 
                "altitude": 973771.8772627971, 
                "longitude": -112.0
            }, 
            {
                "latitude": 4.0, 
                ['debris_name']: "OPS 2644", 
                "altitude": 1413500.6889144557, 
                "longitude": 70.0
            }, 
            {
                "latitude": 60.0, 
                ['debris_name']: "COSMOS 2491", 
                "altitude": 1395056.1739537106, 
                "longitude": -173.0
            }, 
            {
                "latitude": -30.0, 
                ['debris_name']: "ISIS 2", 
                "altitude": 1381326.2491609158, 
                "longitude": 69.0
            }, 
            {
                "latitude": 7.0, 
                ['debris_name']: "ARIANE 42P+", 
                "altitude": 6266879.418359697, 
                "longitude": 15.0
            }, 
            {
                "latitude": 62.0, 
                ['debris_name']: "COSMOS 1980", 
                "altitude": 864294.4462896322, 
                "longitude": -169.0
            }, 
            {
                "latitude": 39.0, 
                ['debris_name']: "METEOR 1-23", 
                "altitude": 798096.6612470297, 
                "longitude": 107.0
            }, 
            {
                "latitude": -42.0, 
                ['debris_name']: "THOR DELTA 1", 
                "altitude": 1402124.7070015685, 
                "longitude": 90.0
            }, 
            {
                "latitude": 60.0, 
                ['debris_name']: "OPS 6630", 
                "altitude": 1450452.5553546778, 
                "longitude": 134.0
            }, 
            {
                "latitude": 82.0, 
                ['debris_name']: "OPS 5798", 
                "altitude": 1052789.8846039923, 
                "longitude": 61.0
            }, 
            {
                "latitude": 46.0, 
                ['debris_name']: "METEOR 2-11", 
                "altitude": 943138.6070354078, 
                "longitude": 154.0
            }, 
            {
                "latitude": -50.0, 
                ['debris_name']: "COSMOS 2058", 
                "altitude": 518853.43687721697, 
                "longitude": 163.0
            }, 
            {
                "latitude": -65.0, 
                ['debris_name']: "COSMOS 2528", 
                "altitude": 926033.4248430358, 
                "longitude": -152.0
            }, 
            {
                "latitude": 22.0, 
                ['debris_name']: "OV1-20/OV1-21", 
                "altitude": 822124.9520609964, 
                "longitude": -17.0
            }, 
            {
                "latitude": 63.0, 
                ['debris_name']: "TRANSIT 18", 
                "altitude": 1090810.9905549588, 
                "longitude": 115.0
            }, 
            {
                "latitude": 8.0, 
                ['debris_name']: "EPSILON", 
                "altitude": 1090803.603073869, 
                "longitude": -25.0
            }, 
            {
                "latitude": 31.0, 
                ['debris_name']: "COSMOS 627", 
                "altitude": 972738.7723195443, 
                "longitude": -25.0
            }, 
            {
                "latitude": 81.0, 
                ['debris_name']: "COSMOS 2506", 
                "altitude": 716132.1317279954, 
                "longitude": -103.0
            }, 
            {
                "latitude": -76.0, 
                ['debris_name']: "METEOR 3-1", 
                "altitude": 1170346.9101196583, 
                "longitude": 137.0
            }, 
            {
                "latitude": 29.0, 
                ['debris_name']: "YAOGAN 7", 
                "altitude": 654056.7723110041, 
                "longitude": -4.0
            }, 
            {
                "latitude": 11.0, 
                ['debris_name']: "COSMOS 700", 
                "altitude": 935357.9283333067, 
                "longitude": -18.0
            }, 
            {
                "latitude": 8.0, 
                ['debris_name']: "ELEKTRON 1", 
                "altitude": 3083272.5164049687, 
                "longitude": -174.0
            }, 
            {
                "latitude": -47.0, 
                ['debris_name']: "ARIANE 40+", 
                "altitude": 738041.6318645085, 
                "longitude": 25.0
            }, 
            {
                "latitude": 5.0, 
                ['debris_name']: "CZ-11", 
                "altitude": 560539.2197806294, 
                "longitude": -72.0
            }, 
            {
                "latitude": -67.0, 
                ['debris_name']: "GEOEYE 1", 
                "altitude": 702791.111909976, 
                "longitude": 173.0
            }, 
            {
                "latitude": -71.0, 
                ['debris_name']: "OPS 7684", 
                "altitude": 1429119.0916625212, 
                "longitude": 53.0
            }, 
            {
                "latitude": 19.0, 
                ['debris_name']: "TITAN 34D TRANSTAGE", 
                "altitude": 11994460.110706884, 
                "longitude": -23.0
            }, 
            {
                "latitude": -22.0, 
                ['debris_name']: "COSMOS 917", 
                "altitude": 35525212.598781675, 
                "longitude": 0.0
            }, 
            {
                "latitude": 4.0, 
                ['debris_name']: "COSMOS 1897", 
                "altitude": 35721699.42149364, 
                "longitude": 162.0
            }, 
            {
                "latitude": -66.0, 
                ['debris_name']: "COSMOS 1382", 
                "altitude": 19792880.454233155, 
                "longitude": -74.0
            }, 
            {
                "latitude": 1.0, 
                ['debris_name']: "BLOCK DM-SL", 
                "altitude": 35205831.39749008, 
                "longitude": -137.0
            }, 
            {
                "latitude": -42.0, 
                ['debris_name']: "COSMOS 1191", 
                "altitude": 36654203.634203315, 
                "longitude": 22.0
            }, 
            {
                "latitude": 10.0, 
                ['debris_name']: "SCOUT D-1", 
                "altitude": 1065468.0188374266, 
                "longitude": 97.0
            }, 
            {
                "latitude": -42.0, 
                ['debris_name']: "COSMOS 1247", 
                "altitude": 26309552.285996452, 
                "longitude": -7.0
            }, 
            {
                "latitude": -49.0, 
                ['debris_name']: "ALOS", 
                "altitude": 691281.1896709342, 
                "longitude": -69.0
            }, 
            {
                "latitude": 19.0, 
                ['debris_name']: "COSMOS 887", 
                "altitude": 984442.0108241602, 
                "longitude": -18.0
            }, 
            {
                "latitude": 63.0, 
                ['debris_name']: "YAOGAN 9B", 
                "altitude": 969790.0813800464, 
                "longitude": 28.0
            }, 
            {
                "latitude": -85.0, 
                ['debris_name']: "TRANSIT 15", 
                "altitude": 868178.76649874, 
                "longitude": 26.0
            }, 
            {
                "latitude": 74.0, 
                ['debris_name']: "SERVIS 2", 
                "altitude": 1162510.2991251235, 
                "longitude": 40.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "ATLAS F", 
                "altitude": 2364870.7846438973, 
                "longitude": 174.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "MICROSAT-R", 
                "altitude": 764640.935258337, 
                "longitude": -54.0
            }, 
            {
                "latitude": 46.0, 
                ['debris_name']: "METEOR 2-10", 
                "altitude": 659253.3645218273, 
                "longitude": -17.0
            }, 
            {
                "latitude": -44.0, 
                ['debris_name']: "METEOR 2-13", 
                "altitude": 948502.2932611417, 
                "longitude": -161.0
            }, 
            {
                "latitude": -5.0, 
                ['debris_name']: "SATCOM 3", 
                "altitude": 35451834.93764502, 
                "longitude": -121.0
            }, 
            {
                "latitude": -68.0, 
                ['debris_name']: "SPOT 4", 
                "altitude": 695163.1735794669, 
                "longitude": -164.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "EKRAN 2", 
                "altitude": 35803704.112476096, 
                "longitude": -34.0
            }, 
            {
                "latitude": -68.0, 
                ['debris_name']: "OPS 4988", 
                "altitude": 911267.4955316102, 
                "longitude": -55.0
            }, 
            {
                "latitude": 63.0, 
                ['debris_name']: "COSMOS 926", 
                "altitude": 987414.796452288, 
                "longitude": 13.0
            }, 
            {
                "latitude": -45.0, 
                ['debris_name']: "TIROS 2", 
                "altitude": 1040295.2322168644, 
                "longitude": -120.0
            }, 
            {
                "latitude": 57.0, 
                ['debris_name']: "YAOGAN 26", 
                "altitude": 456605.365195886, 
                "longitude": -125.0
            }, 
            {
                "latitude": 21.0, 
                ['debris_name']: "METEOR 2-12", 
                "altitude": 886211.291910358, 
                "longitude": 32.0
            }, 
            {
                "latitude": 1.0, 
                ['debris_name']: "COSMOS 951", 
                "altitude": 975313.5260704283, 
                "longitude": 14.0
            }, 
            {
                "latitude": -63.0, 
                ['debris_name']: "COSMOS 864", 
                "altitude": 987032.727121355, 
                "longitude": -6.0
            }, 
            {
                "latitude": 17.0, 
                ['debris_name']: "MIDAS 5", 
                "altitude": 3233344.4539664113, 
                "longitude": -130.0
            }, 
            {
                "latitude": 63.0, 
                ['debris_name']: "TAURUS", 
                "altitude": 778660.1428850763, 
                "longitude": 66.0
            }, 
            {
                "latitude": 49.0, 
                ['debris_name']: "COSMOS 2344", 
                "altitude": 1362433.7287897908, 
                "longitude": -123.0
            }, 
            {
                "latitude": 11.0, 
                ['debris_name']: "LUCH", 
                "altitude": 35624317.36153964, 
                "longitude": 158.0
            }, 
            {
                "latitude": -10.0, 
                ['debris_name']: "COSMOS 1579", 
                "altitude": 940503.6733281855, 
                "longitude": -154.0
            }, 
            {
                "latitude": 63.0, 
                ['debris_name']: "MINOTAUR-C", 
                "altitude": 526045.4024318686, 
                "longitude": 29.0
            }, 
            {
                "latitude": 80.0, 
                ['debris_name']: "COSMOS 1484", 
                "altitude": 736208.9011209162, 
                "longitude": 155.0
            }, 
            {
                "latitude": 34.0, 
                ['debris_name']: "TITAN 34B AGENA D", 
                "altitude": 11221524.165543152, 
                "longitude": 50.0
            }, 
            {
                "latitude": 31.0, 
                ['debris_name']: "COSMOS 663", 
                "altitude": 964367.8709867508, 
                "longitude": 32.0
            }, 
            {
                "latitude": 13.0, 
                ['debris_name']: "COSMOS 2054", 
                "altitude": 36569636.2572774, 
                "longitude": 79.0
            }, 
            {
                "latitude": -8.0, 
                ['debris_name']: "LES 8 9/SOL 11A B", 
                "altitude": 35494895.85917955, 
                "longitude": -131.0
            }, 
            {
                "latitude": 9.0, 
                ['debris_name']: "OPS 0856", 
                "altitude": 5184383.264856091, 
                "longitude": 29.0
            }, 
            {
                "latitude": -67.0, 
                ['debris_name']: "CZ-1", 
                "altitude": 629459.7837305024, 
                "longitude": -108.0
            }, 
            {
                "latitude": 50.0, 
                ['debris_name']: "COSMOS 985", 
                "altitude": 922498.6596834608, 
                "longitude": -156.0
            }, 
            {
                "latitude": -32.0, 
                ['debris_name']: "ELEKTRON 3", 
                "altitude": 815689.5747580986, 
                "longitude": 24.0
            }, 
            {
                "latitude": 56.0, 
                ['debris_name']: "PAYLOAD A", 
                "altitude": 673957.209251242, 
                "longitude": 130.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "MSG 4", 
                "altitude": 34833770.10448401, 
                "longitude": -54.0
            }, 
            {
                "latitude": 80.0, 
                ['debris_name']: "OKEAN 1", 
                "altitude": 535009.6799280264, 
                "longitude": -173.0
            }, 
            {
                "latitude": -65.0, 
                ['debris_name']: "TITAN 3D", 
                "altitude": 1463550.8021190965, 
                "longitude": 130.0
            }, 
            {
                "latitude": -28.0, 
                ['debris_name']: "COSMOS 1678", 
                "altitude": 723000.5918101686, 
                "longitude": 127.0
            }, 
            {
                "latitude": -7.0, 
                ['debris_name']: "COSMOS 434", 
                "altitude": 654645.2958208334, 
                "longitude": 54.0
            }, 
            {
                "latitude": 20.0, 
                ['debris_name']: "COSMOS 1603", 
                "altitude": 832587.8037554246, 
                "longitude": 72.0
            }, 
            {
                "latitude": 43.0, 
                ['debris_name']: "GLOBALSTAR M004", 
                "altitude": 1464700.7981490705, 
                "longitude": 93.0
            }, 
            {
                "latitude": 11.0, 
                ['debris_name']: "COSMOS 1700", 
                "altitude": 35706965.26565791, 
                "longitude": 68.0
            }, 
            {
                "latitude": -78.0, 
                ['debris_name']: "RESURS P2", 
                "altitude": 397014.0738194496, 
                "longitude": 154.0
            }, 
            {
                "latitude": 26.0, 
                ['debris_name']: "USA 22", 
                "altitude": 480369.2496364282, 
                "longitude": 46.0
            }, 
            {
                "latitude": -66.0, 
                ['debris_name']: "YAOGAN 28", 
                "altitude": 473892.05596868676, 
                "longitude": -83.0
            }, 
            {
                "latitude": -59.0, 
                ['debris_name']: "ASTRO F", 
                "altitude": 708082.6450370721, 
                "longitude": 121.0
            }, 
            {
                "latitude": 22.0, 
                ['debris_name']: "COSMOS 931", 
                "altitude": 9595505.1651638, 
                "longitude": -24.0
            }, 
            {
                "latitude": -36.0, 
                ['debris_name']: "COSMOS 1670", 
                "altitude": 889772.1612549975, 
                "longitude": 82.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "FENGYUN 2H", 
                "altitude": 35676041.67040853, 
                "longitude": 52.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "FENGYUN 2D", 
                "altitude": 35610333.28853159, 
                "longitude": 76.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "S5", 
                "altitude": 36166736.65216988, 
                "longitude": 103.0
            }, 
            {
                "latitude": -6.0, 
                ['debris_name']: "COSMOS 1317", 
                "altitude": 6388189.599460599, 
                "longitude": -155.0
            }, 
            {
                "latitude": -3.0, 
                ['debris_name']: "ETS 6", 
                "altitude": 28519939.490055684, 
                "longitude": 162.0
            }, 
            {
                "latitude": -1.0, 
                ['debris_name']: "FENGYUN 2G", 
                "altitude": 36102177.224337354, 
                "longitude": 91.0
            }, 
            {
                "latitude": -23.0, 
                ['debris_name']: "CZ-3", 
                "altitude": 21498347.59996652, 
                "longitude": -60.0
            }, 
            {
                "latitude": 6.0, 
                ['debris_name']: "METEOR 2-1", 
                "altitude": 794573.4697116046, 
                "longitude": 22.0
            }, 
            {
                "latitude": -3.0, 
                ['debris_name']: "MSG 3", 
                "altitude": 35397239.12832511, 
                "longitude": 56.0
            }, 
            {
                "latitude": 36.0, 
                ['debris_name']: "COSMOS 1417", 
                "altitude": 1003232.0389521463, 
                "longitude": 115.0
            }, 
            {
                "latitude": 57.0, 
                ['debris_name']: "MIDAS 4", 
                "altitude": 3784207.911547616, 
                "longitude": 57.0
            }, 
            {
                "latitude": -38.0, 
                ['debris_name']: "METEOR 2-2", 
                "altitude": 856858.6177735263, 
                "longitude": 94.0
            }, 
            {
                "latitude": 43.0, 
                ['debris_name']: "MIDAS 3", 
                "altitude": 3386229.5104018147, 
                "longitude": 156.0
            }, 
            {
                "latitude": 38.0, 
                ['debris_name']: "COSMOS 789", 
                "altitude": 994442.4882010767, 
                "longitude": 46.0
            }, 
            {
                "latitude": 3.0, 
                ['debris_name']: "USA 125", 
                "altitude": 4860271.002053432, 
                "longitude": 53.0
            }, 
            {
                "latitude": -76.0, 
                ['debris_name']: "TRANSIT 13", 
                "altitude": 770030.9268238711, 
                "longitude": 63.0
            }, 
            {
                "latitude": -21.0, 
                ['debris_name']: "M-5", 
                "altitude": 1120846.5750125449, 
                "longitude": -19.0
            }, 
            {
                "latitude": -12.0, 
                ['debris_name']: "IUS", 
                "altitude": 8944132.11597315, 
                "longitude": -129.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "VOLGA", 
                "altitude": 624929.1969129661, 
                "longitude": -9.0
            }, 
            {
                "latitude": -8.0, 
                ['debris_name']: "COSMOS 382", 
                "altitude": 4468992.405194956, 
                "longitude": -82.0
            }, 
            {
                "latitude": 29.0, 
                ['debris_name']: "VIKING", 
                "altitude": 7758683.204182244, 
                "longitude": 178.0
            }, 
            {
                "latitude": 0.0, 
                ['debris_name']: "ARIANE 42P+3", 
                "altitude": 10540365.014538722, 
                "longitude": -46.0
            }, 
            {
                "latitude": 5.0, 
                ['debris_name']: "MSG 2", 
                "altitude": 35435512.09539924, 
                "longitude": -144.0
            }, 
            {
                "latitude": 32.0, 
                ['debris_name']: "VANGUARD", 
                "altitude": 2436417.223013323, 
                "longitude": -68.0
            }, 
            {
                "latitude": 14.0, 
                ['debris_name']: "GLOBALSTAR", 
                "altitude": 1166880.3052691303, 
                "longitude": -48.0
            }, 
            {
                "latitude": -31.0, 
                ['debris_name']: "OGO 5", 
                "altitude": 9204429.49835216, 
                "longitude": 30.0
            }, 
            {
                "latitude": 47.0, 
                ['debris_name']: "PAGEOS 1", 
                "altitude": 4248866.5005827425, 
                "longitude": -18.0
            }, 
            {
                "latitude": 67.0, 
                ['debris_name']: "COSMOS 422", 
                "altitude": 982290.4621629474, 
                "longitude": 166.0
            }, 
            {
                "latitude": 58.0, 
                ['debris_name']: "COSMOS 1217", 
                "altitude": 11549585.24457641, 
                "longitude": -114.0
            }, 
            {
                "latitude": -2.0, 
                ['debris_name']: "COSMOS 1124", 
                "altitude": 33048744.01996775, 
                "longitude": -98.0
            }, 
            {
                "latitude": 34.0, 
                ['debris_name']: "COSMOS 952", 
                "altitude": 993339.0079238118, 
                "longitude": -55.0
            }, 
            {
                "latitude": 78.0, 
                ['debris_name']: "METEOR 1-11", 
                "altitude": 755960.1107768343, 
                "longitude": 137.0
            }, 
            {
                "latitude": 12.0, 
                ['debris_name']: "FENGYUN 2A", 
                "altitude": 35559139.91381131, 
                "longitude": 89.0
            }, 
            {
                "latitude": 60.0, 
                ['debris_name']: "ATLAS 55E", 
                "altitude": 4760655.097324614, 
                "longitude": 56.0
            }, 
            {
                "latitude": 9.0, 
                ['debris_name']: "AYAME 1", 
                "altitude": 23285161.747077964, 
                "longitude": 138.0
            }, 
            {
                "latitude": 54.0, 
                ['debris_name']: "METEOR 2-9", 
                "altitude": 699803.269283469, 
                "longitude": 75.0
            }, 
            {
                "latitude": 1.0, 
                ['debris_name']: "FENGYUN 2F", 
                "altitude": 36240512.31684157, 
                "longitude": 116.0
            }, 
            {
                "latitude": -5.0, 
                ['debris_name']: "COSMOS 1660", 
                "altitude": 1527492.688367474, 
                "longitude": 169.0
            }, 
            {
                "latitude": -27.0, 
                ['debris_name']: "COSMOS 1109", 
                "altitude": 39069405.43762625, 
                "longitude": -160.0
            }, 
            {
                "latitude": 43.0, 
                ['debris_name']: "COSMOS 1024", 
                "altitude": 20614011.291569237, 
                "longitude": 55.0
            }, 
            {
                "latitude": 52.0, 
                ['debris_name']: "COSMOS 1188", 
                "altitude": 33638478.82973263, 
                "longitude": -59.0
            }, 
            {
                "latitude": -21.0, 
                ['debris_name']: "DRAGON CRS-23", 
                "altitude": 272905.494188062, 
                "longitude": 31.0
            }, 
            {
                "latitude": 16.0, 
                ['debris_name']: "LEASAT 1", 
                "altitude": 9494611.216923892, 
                "longitude": -4.0
            }, 
            {
                "latitude": -25.0, 
                ['debris_name']: "METEOR 2-21", 
                "altitude": 907099.6885520683, 
                "longitude": 18.0
            }
        ]

        axios.get("http://cadin-end.herokuapp.com/coordinates")
        .then((res) => {
            console.log(res);
            positions = res.data;
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