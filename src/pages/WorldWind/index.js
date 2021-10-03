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
                ['debris_name']: "FENGYUN 1C",
                "altitude": 74000.0,
                "latitude": 23.0,
                "longitude": 631.0784293272077
            },
            {
                ['debris_name']: "COSMOS 2251",
                "altitude": 40000.0,
                "latitude": -4.0,
                "longitude": 789.2616401729002
            },
            {
                ['debris_name']: "IRIDIUM 33",
                "altitude": -108000.0,
                "latitude": -76.0,
                "longitude": 863.7568296661741
            },
            {
                ['debris_name']: "TITAN 3C TRANSTAGE",
                "altitude": 119000.0,
                "latitude": -30.0,
                "longitude": 721.1919876534366
            },
            {
                ['debris_name']: "THORAD AGENA D",
                "altitude": 50000.0,
                "latitude": 4.0,
                "longitude": 1024.622916561805
            },
            {
                ['debris_name']: "COSMOS 397",
                "altitude": -108000.0,
                "latitude": -36.0,
                "longitude": 878.3556158650765
            },
            {
                ['debris_name']: "SL-16",
                "altitude": -161000.0,
                "latitude": -59.0,
                "longitude": 786.9888088161251
            },
            {
                ['debris_name']: "NOAA 16",
                "altitude": 26000.0,
                "latitude": -67.0,
                "longitude": 699.0780407509384
            },
            {
                ['debris_name']: "PSLV",
                "altitude": -46000.0,
                "latitude": 6.0,
                "longitude": 516.5163329984879
            },
            {
                ['debris_name']: "SL-12",
                "altitude": -25000.0,
                "latitude": -66.0,
                "longitude": 753.1584915419674
            },
            {
                ['debris_name']: "COSMOS 970",
                "altitude": -17000.0,
                "latitude": -34.0,
                "longitude": 984.7729295334265
            },
            {
                ['debris_name']: "ATLAS CENTAUR",
                "altitude": 111000.0,
                "latitude": 0.0,
                "longitude": 35256.28191222998
            },
            {
                ['debris_name']: "METEOR 2-5",
                "altitude": 102000.0,
                "latitude": -60.0,
                "longitude": 876.5328564128503
            },
            {
                ['debris_name']: "NIMBUS 2",
                "altitude": 120000.0,
                "latitude": -37.0,
                "longitude": 1092.579296198558
            },
            {
                ['debris_name']: "DELTA 1",
                "altitude": 81000.0,
                "latitude": 50.0,
                "longitude": 963.8910047102773
            },
            {
                ['debris_name']: "DMSP 5D-2 F6",
                "altitude": -103000.0,
                "latitude": -75.0,
                "longitude": 726.6110509171671
            },
            {
                ['debris_name']: "ATLAS 5 CENTAUR",
                "altitude": 77000.0,
                "latitude": 15.0,
                "longitude": 30275.822334423374
            },
            {
                ['debris_name']: "COSMOS 1275",
                "altitude": -47000.0,
                "latitude": 59.0,
                "longitude": 1112.2335596147777
            },
            {
                ['debris_name']: "SL-19",
                "altitude": -158000.0,
                "latitude": 56.0,
                "longitude": 2152.0262775093092
            },
            {
                ['debris_name']: "ISS",
                "altitude": -69000.0,
                "latitude": 25.0,
                "longitude": 376.7865189128965
            },
            {
                ['debris_name']: "SL-8",
                "altitude": -114000.0,
                "latitude": -24.0,
                "longitude": 1475.541412370081
            },
            {
                ['debris_name']: "SL-14",
                "altitude": -67000.0,
                "latitude": -21.0,
                "longitude": 880.2112193753895
            },
            {
                ['debris_name']: "CZ-4B",
                "altitude": -50000.0,
                "latitude": -7.0,
                "longitude": 830.2590325695038
            },
            {
                ['debris_name']: "CZ-4",
                "altitude": -52000.0,
                "latitude": -52.0,
                "longitude": 669.2540276547732
            },
            {
                ['debris_name']: "COSMOS 2392",
                "altitude": -141000.0,
                "latitude": 38.0,
                "longitude": 1543.979417477221
            },
            {
                ['debris_name']: "NOAA 17",
                "altitude": 71000.0,
                "latitude": 25.0,
                "longitude": 818.9064458628133
            },
            {
                ['debris_name']: "THORAD DELTA 1",
                "altitude": 85000.0,
                "latitude": 26.0,
                "longitude": 1381.42766045604
            },
            {
                ['debris_name']: "METEOR 2-8",
                "altitude": 58000.0,
                "latitude": -51.0,
                "longitude": 890.3889757697513
            },
            {
                ['debris_name']: "CZ-2D",
                "altitude": 54000.0,
                "latitude": -68.0,
                "longitude": 514.2790378831991
            },
            {
                ['debris_name']: "YUNHAI 1-02",
                "altitude": -38000.0,
                "latitude": -36.0,
                "longitude": 926.0890545220865
            },
            {
                ['debris_name']: "THOR ABLESTAR",
                "altitude": 21000.0,
                "latitude": -7.0,
                "longitude": 822.281586467138
            },
            {
                ['debris_name']: "COSMOS 886",
                "altitude": -73000.0,
                "latitude": -50.0,
                "longitude": 2384.001188156254
            },
            {
                ['debris_name']: "ARIANE 5",
                "altitude": 136000.0,
                "latitude": 0.0,
                "longitude": 10043.54097021211
            },
            {
                ['debris_name']: "CZ-4C",
                "altitude": -106000.0,
                "latitude": 8.0,
                "longitude": 1312.8505392374668
            },
            {
                ['debris_name']: "DMSP 5D-3 F18",
                "altitude": 0.0,
                "latitude": 48.0,
                "longitude": 811.8920825310695
            },
            {
                ['debris_name']: "DMSP 5D-2 F13",
                "altitude": -47000.0,
                "latitude": -43.0,
                "longitude": 672.3683370980406
            },
            {
                ['debris_name']: "COSMOS 1823",
                "altitude": -132000.0,
                "latitude": 73.0,
                "longitude": 1496.0436359650748
            },
            {
                ['debris_name']: "FREGAT",
                "altitude": 6000.0,
                "latitude": -36.0,
                "longitude": 492.4052629951535
            },
            {
                ['debris_name']: "WORLDVIEW 2",
                "altitude": -135000.0,
                "latitude": 69.0,
                "longitude": 765.2565050126861
            },
            {
                ['debris_name']: "USA 149",
                "altitude": -16000.0,
                "latitude": -11.0,
                "longitude": 36426.702214209305
            },
            {
                ['debris_name']: "ASTRO H",
                "altitude": -153000.0,
                "latitude": 24.0,
                "longitude": 499.925716145339
            },
            {
                ['debris_name']: "COSMOS 1375",
                "altitude": 20000.0,
                "latitude": 37.0,
                "longitude": 974.527097119344
            },
            {
                ['debris_name']: "THOR AGENA B",
                "altitude": -63000.0,
                "latitude": 16.0,
                "longitude": 1006.3751780664642
            },
            {
                ['debris_name']: "SCOUT G-1",
                "altitude": 36000.0,
                "latitude": 64.0,
                "longitude": 1049.087998112917
            },
            {
                ['debris_name']: "RESURS O1",
                "altitude": -18000.0,
                "latitude": 40.0,
                "longitude": 631.3198478411215
            },
            {
                ['debris_name']: "KYOKKO 1",
                "altitude": -64000.0,
                "latitude": -64.0,
                "longitude": 3643.671078058977
            },
            {
                ['debris_name']: "DMSP 5D-2 F11",
                "altitude": 65000.0,
                "latitude": -61.0,
                "longitude": 728.1862044393703
            },
            {
                ['debris_name']: "THOR ABLE",
                "altitude": -11000.0,
                "latitude": 18.0,
                "longitude": 594.1407696423423
            },
            {
                ['debris_name']: "H-2A",
                "altitude": 95000.0,
                "latitude": -78.0,
                "longitude": 613.9492718190671
            },
            {
                ['debris_name']: "COSMOS 1932",
                "altitude": 54000.0,
                "latitude": 12.0,
                "longitude": 956.7914130295603
            },
            {
                ['debris_name']: "ARIANE 1",
                "altitude": 167000.0,
                "latitude": -7.0,
                "longitude": 798.99696083841
            },
            {
                ['debris_name']: "OPS 7613 (P/L 5)",
                "altitude": -62000.0,
                "latitude": 69.0,
                "longitude": 928.6912846917932
            },
            {
                ['debris_name']: "COSMOS 894",
                "altitude": -59000.0,
                "latitude": -39.0,
                "longitude": 975.2134117850728
            },
            {
                ['debris_name']: "DELTA 2",
                "altitude": -17000.0,
                "latitude": -81.0,
                "longitude": 535.2016594297777
            },
            {
                ['debris_name']: "CBERS 1",
                "altitude": -87000.0,
                "latitude": -3.0,
                "longitude": 750.5465123432895
            },
            {
                ['debris_name']: "TIANHUI 1-03",
                "altitude": 49000.0,
                "latitude": -54.0,
                "longitude": 632.4408472161285
            },
            {
                ['debris_name']: "DMSP 5D-2 F15",
                "altitude": 156000.0,
                "latitude": 10.0,
                "longitude": 622.1060096446464
            },
            {
                ['debris_name']: "YAOGAN 1",
                "altitude": 146000.0,
                "latitude": 5.0,
                "longitude": 591.8436532991134
            },
            {
                ['debris_name']: "SSU 1",
                "altitude": 109000.0,
                "latitude": 73.0,
                "longitude": 1435.6072409846265
            },
            {
                ['debris_name']: "TITAN 34B",
                "altitude": 134000.0,
                "latitude": 62.0,
                "longitude": 23507.74896201569
            },
            {
                ['debris_name']: "TITAN 4B",
                "altitude": -128000.0,
                "latitude": -58.0,
                "longitude": 627.3294993282951
            },
            {
                ['debris_name']: "COSMOS 249",
                "altitude": 32000.0,
                "latitude": 25.0,
                "longitude": 749.4630531229363
            },
            {
                ['debris_name']: "ARIANE 2",
                "altitude": -14000.0,
                "latitude": -3.0,
                "longitude": 31350.748309386196
            },
            {
                ['debris_name']: "BREEZE-M",
                "altitude": 147000.0,
                "latitude": -48.0,
                "longitude": 16925.55685635108
            },
            {
                ['debris_name']: "START 1",
                "altitude": -160000.0,
                "latitude": -45.0,
                "longitude": 818.3640159376279
            },
            {
                ['debris_name']: "SL-3",
                "altitude": -74000.0,
                "latitude": -14.0,
                "longitude": 859.7639748326945
            },
            {
                ['debris_name']: "TIROS N",
                "altitude": -134000.0,
                "latitude": 71.0,
                "longitude": 577.535532612239
            },
            {
                ['debris_name']: "DELTA 4H",
                "altitude": -136000.0,
                "latitude": 12.0,
                "longitude": 996.2685030529511
            },
            {
                ['debris_name']: "PEGASUS",
                "altitude": -12000.0,
                "latitude": -81.0,
                "longitude": 799.9239380723519
            },
            {
                ['debris_name']: "DRAGON RESILIENCE",
                "altitude": -142000.0,
                "latitude": 33.0,
                "longitude": 402.12849458688964
            },
            {
                ['debris_name']: "OPS 4682",
                "altitude": -86000.0,
                "latitude": -23.0,
                "longitude": 1240.2673337088027
            },
            {
                ['debris_name']: "DMSP 5D-2 F14",
                "altitude": -10000.0,
                "latitude": -80.0,
                "longitude": 750.8243554936947
            },
            {
                ['debris_name']: "THOR BURNER 2A",
                "altitude": 49000.0,
                "latitude": -19.0,
                "longitude": 799.1201625194782
            },
            {
                ['debris_name']: "AQUA",
                "altitude": -132000.0,
                "latitude": -39.0,
                "longitude": 715.5237016544869
            },
            {
                ['debris_name']: "COSMOS 1900",
                "altitude": 157000.0,
                "latitude": 15.0,
                "longitude": 696.5633759141487
            },
            {
                ['debris_name']: "TRANSIT 5E-5",
                "altitude": 167000.0,
                "latitude": -7.0,
                "longitude": 727.7398324272559
            },
            {
                ['debris_name']: "INSPIRATION-4",
                "altitude": 171000.0,
                "latitude": -21.0,
                "longitude": 363.03050362084787
            },
            {
                ['debris_name']: "CTS",
                "altitude": -107000.0,
                "latitude": -6.0,
                "longitude": 35569.5946562
            },
            {
                ['debris_name']: "ARIANE 3",
                "altitude": 29000.0,
                "latitude": -2.0,
                "longitude": 3076.5702380169273
            },
            {
                ['debris_name']: "COSMOS 1261",
                "altitude": 21000.0,
                "latitude": -13.0,
                "longitude": 29549.89383539203
            },
            {
                ['debris_name']: "OPS 0100",
                "altitude": -83000.0,
                "latitude": 57.0,
                "longitude": 1058.2406096842963
            },
            {
                ['debris_name']: "COSMOS 374",
                "altitude": 31000.0,
                "latitude": -62.0,
                "longitude": 1263.9113067515555
            },
            {
                ['debris_name']: "COSMOS 839",
                "altitude": -86000.0,
                "latitude": 56.0,
                "longitude": 1936.9698384653957
            },
            {
                ['debris_name']: "COSMOS 1814",
                "altitude": 157000.0,
                "latitude": 73.0,
                "longitude": 713.2380546824005
            },
            {
                ['debris_name']: "DMSP 5D-2 F12",
                "altitude": 140000.0,
                "latitude": -62.0,
                "longitude": 750.3883203114578
            },
            {
                ['debris_name']: "NOAA 12",
                "altitude": -11000.0,
                "latitude": 37.0,
                "longitude": 764.3458090758116
            },
            {
                ['debris_name']: "NOAA 14",
                "altitude": -170000.0,
                "latitude": -61.0,
                "longitude": 850.7559539084795
            },
            {
                ['debris_name']: "FALCON 9",
                "altitude": -125000.0,
                "latitude": -7.0,
                "longitude": 355.2969768384046
            },
            {
                ['debris_name']: "ARIANE 44LP",
                "altitude": -33000.0,
                "latitude": -6.0,
                "longitude": 34121.16074224948
            },
            {
                ['debris_name']: "SCOUT A-1",
                "altitude": 42000.0,
                "latitude": 56.0,
                "longitude": 1070.4506861463187
            },
            {
                ['debris_name']: "CZ-2C",
                "altitude": -64000.0,
                "latitude": -57.0,
                "longitude": 812.9230108010868
            },
            {
                ['debris_name']: "ISIS 1",
                "altitude": 152000.0,
                "latitude": -4.0,
                "longitude": 2337.0681075636276
            },
            {
                ['debris_name']: "DMSP 5D-3 F17",
                "altitude": 9000.0,
                "latitude": -77.0,
                "longitude": 851.0132535293117
            },
            {
                ['debris_name']: "MSX",
                "altitude": -121000.0,
                "latitude": 42.0,
                "longitude": 921.0037601292255
            },
            {
                ['debris_name']: "TRANSIT 11",
                "altitude": -28000.0,
                "latitude": -7.0,
                "longitude": 1086.0590803584946
            },
            {
                ['debris_name']: "METEOR 2-17",
                "altitude": -101000.0,
                "latitude": 61.0,
                "longitude": 912.975222456579
            },
            {
                ['debris_name']: "SL-24",
                "altitude": -38000.0,
                "latitude": -8.0,
                "longitude": 706.4461354659037
            },
            {
                ['debris_name']: "NOAA 11",
                "altitude": -145000.0,
                "latitude": -72.0,
                "longitude": 842.8361283453864
            },
            {
                ['debris_name']: "SL-23",
                "altitude": 162000.0,
                "latitude": 55.0,
                "longitude": 23949.821664966712
            },
            {
                ['debris_name']: "OSCAR 23",
                "altitude": 172000.0,
                "latitude": 61.0,
                "longitude": 1022.5010227258733
            },
            {
                ['debris_name']: "METEOR 2-7",
                "altitude": -145000.0,
                "latitude": 79.0,
                "longitude": 753.0459826928297
            },
            {
                ['debris_name']: "ERS 1",
                "altitude": -148000.0,
                "latitude": 78.0,
                "longitude": 630.7688393731482
            },
            {
                ['debris_name']: "MSG 1",
                "altitude": 6000.0,
                "latitude": -7.0,
                "longitude": 35556.33252799508
            },
            {
                ['debris_name']: "SCOUT X-4",
                "altitude": -123000.0,
                "latitude": 68.0,
                "longitude": 972.9482202380151
            },
            {
                ['debris_name']: "COSMOS 1691",
                "altitude": 59000.0,
                "latitude": -27.0,
                "longitude": 1379.3466147292647
            },
            {
                ['debris_name']: "CRRES",
                "altitude": 55000.0,
                "latitude": -13.0,
                "longitude": 33155.128494282864
            },
            {
                ['debris_name']: "CZ-3C",
                "altitude": -11000.0,
                "latitude": -16.0,
                "longitude": 31084.405404385954
            },
            {
                ['debris_name']: "COSMOS 375",
                "altitude": 83000.0,
                "latitude": 56.0,
                "longitude": 1198.4974183697736
            },
            {
                ['debris_name']: "COSMOS 1934",
                "altitude": -43000.0,
                "latitude": -18.0,
                "longitude": 947.8907033008832
            },
            {
                ['debris_name']: "COSMOS 1174",
                "altitude": 159000.0,
                "latitude": -59.0,
                "longitude": 862.8374790478737
            },
            {
                ['debris_name']: "TRANSIT 10",
                "altitude": -140000.0,
                "latitude": 69.0,
                "longitude": 840.2652119769481
            },
            {
                ['debris_name']: "COSMOS 252",
                "altitude": -2000.0,
                "latitude": -52.0,
                "longitude": 1009.8380567068896
            },
            {
                ['debris_name']: "ARIANE 44L+",
                "altitude": 143000.0,
                "latitude": -3.0,
                "longitude": 34818.27901265739
            },
            {
                ['debris_name']: "USA 15",
                "altitude": 21000.0,
                "latitude": -63.0,
                "longitude": 732.2507265262657
            },
            {
                ['debris_name']: "USA 40 R/B",
                "altitude": -147000.0,
                "latitude": -20.0,
                "longitude": 4301.0702616634335
            },
            {
                ['debris_name']: "ARIANE 44L",
                "altitude": 138000.0,
                "latitude": 1.0,
                "longitude": 20050.11890167294
            },
            {
                ['debris_name']: "SCOUT B",
                "altitude": 137000.0,
                "latitude": 75.0,
                "longitude": 596.8689905797827
            },
            {
                ['debris_name']: "COSMOS 1331",
                "altitude": -122000.0,
                "latitude": 10.0,
                "longitude": 774.0599593907519
            },
            {
                ['debris_name']: "NOAA 1",
                "altitude": -98000.0,
                "latitude": -9.0,
                "longitude": 1503.9082736051923
            },
            {
                ['debris_name']: "YAOGAN 4",
                "altitude": -72000.0,
                "latitude": -14.0,
                "longitude": 965.5834479923119
            },
            {
                ['debris_name']: "JASON",
                "altitude": 26000.0,
                "latitude": 63.0,
                "longitude": 1223.270194461479
            },
            {
                ['debris_name']: "COSMOS 1030",
                "altitude": -171000.0,
                "latitude": 10.0,
                "longitude": 29233.632520559782
            },
            {
                ['debris_name']: "AVUM",
                "altitude": 16000.0,
                "latitude": -38.0,
                "longitude": 476.1300740481284
            },
            {
                ['debris_name']: "IRAS",
                "altitude": -32000.0,
                "latitude": 70.0,
                "longitude": 884.0664913678146
            },
            {
                ['debris_name']: "SCOUT A",
                "altitude": 67000.0,
                "latitude": -31.0,
                "longitude": 951.7792220690579
            },
            {
                ['debris_name']: "TIROS 8",
                "altitude": 120000.0,
                "latitude": 13.0,
                "longitude": 601.5996771571317
            },
            {
                ['debris_name']: "CZ-3A",
                "altitude": 173000.0,
                "latitude": 23.0,
                "longitude": 9137.871750469132
            },
            {
                ['debris_name']: "GGSE 3",
                "altitude": -32000.0,
                "latitude": -69.0,
                "longitude": 927.3816896903087
            },
            {
                ['debris_name']: "YZ-1S",
                "altitude": 152000.0,
                "latitude": -70.0,
                "longitude": 724.8383836534908
            },
            {
                ['debris_name']: "ATLAS 28E",
                "altitude": 115000.0,
                "latitude": -42.0,
                "longitude": 635.1662864607628
            },
            {
                ['debris_name']: "ARIANE 42P",
                "altitude": 128000.0,
                "latitude": -48.0,
                "longitude": 1370.983140623725
            },
            {
                ['debris_name']: "METEOR 1-22",
                "altitude": 133000.0,
                "latitude": 59.0,
                "longitude": 943.1801736118219
            },
            {
                ['debris_name']: "COSMOS 2298",
                "altitude": -71000.0,
                "latitude": 55.0,
                "longitude": 779.0175706025807
            },
            {
                ['debris_name']: "ORBCOMM FM 16",
                "altitude": -86000.0,
                "latitude": 10.0,
                "longitude": 631.1051623666358
            },
            {
                ['debris_name']: "IRIDIUM 91",
                "altitude": 163000.0,
                "latitude": -35.0,
                "longitude": 698.1250685284186
            },
            {
                ['debris_name']: "P/L 153",
                "altitude": -172000.0,
                "latitude": -64.0,
                "longitude": 846.6389439437119
            },
            {
                ['debris_name']: "GAOFEN 9",
                "altitude": -152000.0,
                "latitude": 81.0,
                "longitude": 852.7783832215272
            },
            {
                ['debris_name']: "COSMOS 468",
                "altitude": 95000.0,
                "latitude": 58.0,
                "longitude": 763.3156335315458
            },
            {
                ['debris_name']: "NUSAT 1",
                "altitude": -78000.0,
                "latitude": -65.0,
                "longitude": 518.7140059451473
            },
            {
                ['debris_name']: "ERS 2",
                "altitude": 75000.0,
                "latitude": -33.0,
                "longitude": 765.8327061674054
            },
            {
                ['debris_name']: "SENTINEL 1A",
                "altitude": -173000.0,
                "latitude": -35.0,
                "longitude": 577.01610916193
            },
            {
                ['debris_name']: "TIROS 6",
                "altitude": 56000.0,
                "latitude": -18.0,
                "longitude": 639.0833036521395
            },
            {
                ['debris_name']: "BLITS",
                "altitude": 52000.0,
                "latitude": -76.0,
                "longitude": 844.2802499109679
            },
            {
                ['debris_name']: "OSCAR 30",
                "altitude": 68000.0,
                "latitude": 62.0,
                "longitude": 996.3799685677568
            },
            {
                ['debris_name']: "COSMOS 921",
                "altitude": 117000.0,
                "latitude": 63.0,
                "longitude": 587.2390402277593
            },
            {
                ['debris_name']: "TRANSIT 16",
                "altitude": -109000.0,
                "latitude": 13.0,
                "longitude": 928.1720812705765
            },
            {
                ['debris_name']: "CZ-2",
                "altitude": -49000.0,
                "latitude": -76.0,
                "longitude": 1199.5430761578168
            },
            {
                ['debris_name']: "AYAME 2",
                "altitude": 35000.0,
                "latitude": -4.0,
                "longitude": 31541.759102031265
            },
            {
                ['debris_name']: "ATLAS CENTAUR 2",
                "altitude": -80000.0,
                "latitude": -29.0,
                "longitude": 743.931807106549
            },
            {
                ['debris_name']: "COSMOS 1285",
                "altitude": 39000.0,
                "latitude": -36.0,
                "longitude": 34245.05153716112
            },
            {
                ['debris_name']: "CZ-3B",
                "altitude": -69000.0,
                "latitude": -11.0,
                "longitude": 33264.660537658325
            },
            {
                ['debris_name']: "ATLAS D",
                "altitude": -175000.0,
                "latitude": -35.0,
                "longitude": 929.102929502097
            },
            {
                ['debris_name']: "TRANSIT 5B-1",
                "altitude": -2000.0,
                "latitude": 41.0,
                "longitude": 1122.405399034438
            },
            {
                ['debris_name']: "DMSP 5D-3 F16",
                "altitude": 119000.0,
                "latitude": 7.0,
                "longitude": 808.1234199228811
            },
            {
                ['debris_name']: "DMSP 5D-2 F9",
                "altitude": -168000.0,
                "latitude": 0.0,
                "longitude": 769.4083425639885
            },
            {
                ['debris_name']: "GAOFEN 8",
                "altitude": 112000.0,
                "latitude": -3.0,
                "longitude": 447.20195018991745
            },
            {
                ['debris_name']: "NOAA 7",
                "altitude": -86000.0,
                "latitude": 10.0,
                "longitude": 726.774847441827
            },
            {
                ['debris_name']: "YAOGAN 30",
                "altitude": 9000.0,
                "latitude": -75.0,
                "longitude": 898.0958837236179
            },
            {
                ['debris_name']: "COSMOS 1461",
                "altitude": -65000.0,
                "latitude": 22.0,
                "longitude": 504.5919601061029
            },
            {
                ['debris_name']: "SL-18",
                "altitude": 63000.0,
                "latitude": -67.0,
                "longitude": 684.7967823396052
            },
            {
                ['debris_name']: "METEOR 2-6",
                "altitude": -39000.0,
                "latitude": 30.0,
                "longitude": 839.4143649024367
            },
            {
                ['debris_name']: "OV1-5",
                "altitude": -79000.0,
                "latitude": 11.0,
                "longitude": 742.6351691139945
            },
            {
                ['debris_name']: "TANSEI 3",
                "altitude": 54000.0,
                "latitude": -60.0,
                "longitude": 2239.6676514604887
            },
            {
                ['debris_name']: "BREEZE-KM",
                "altitude": -111000.0,
                "latitude": -68.0,
                "longitude": 1312.336027013789
            },
            {
                ['debris_name']: "YAOGAN 11",
                "altitude": -75000.0,
                "latitude": 36.0,
                "longitude": 837.1405788504129
            },
            {
                ['debris_name']: "TITAN 3A",
                "altitude": 98000.0,
                "latitude": -10.0,
                "longitude": 2785.807609238899
            },
            {
                ['debris_name']: "ECHO 1",
                "altitude": -67000.0,
                "latitude": 26.0,
                "longitude": 1526.3015011069572
            },
            {
                ['debris_name']: "TRAAC",
                "altitude": -172000.0,
                "latitude": 31.0,
                "longitude": 1062.4466789156297
            },
            {
                ['debris_name']: "SCOUT B-1",
                "altitude": 90000.0,
                "latitude": -47.0,
                "longitude": 723.9365201238612
            },
            {
                ['debris_name']: "NOAA 10",
                "altitude": 74000.0,
                "latitude": -77.0,
                "longitude": 734.9716373849382
            },
            {
                ['debris_name']: "ARIANE 44L+3",
                "altitude": -76000.0,
                "latitude": 3.0,
                "longitude": 27985.870288610597
            },
            {
                ['debris_name']: "ATLAS AGENA B",
                "altitude": -31000.0,
                "latitude": -6.0,
                "longitude": 3670.2439006782706
            },
            {
                ['debris_name']: "DANDE",
                "altitude": 149000.0,
                "latitude": 74.0,
                "longitude": 345.82670398326525
            },
            {
                ['debris_name']: "SCOUT X-1",
                "altitude": 170000.0,
                "latitude": 38.0,
                "longitude": 1177.5510213962784
            },
            {
                ['debris_name']: "GAOFEN 3",
                "altitude": 108000.0,
                "latitude": -50.0,
                "longitude": 762.933617251533
            },
            {
                ['debris_name']: "ARIANE 40",
                "altitude": -151000.0,
                "latitude": -55.0,
                "longitude": 731.7269560446596
            },
            {
                ['debris_name']: "METEOR 2-20",
                "altitude": -42000.0,
                "latitude": -22.0,
                "longitude": 946.119532804026
            },
            {
                ['debris_name']: "YAOGAN 29",
                "altitude": 133000.0,
                "latitude": 46.0,
                "longitude": 620.7588242581292
            },
            {
                ['debris_name']: "DMSP 5D-2 F10",
                "altitude": -38000.0,
                "latitude": 81.0,
                "longitude": 590.7235773392922
            },
            {
                ['debris_name']: "M-3H",
                "altitude": 68000.0,
                "latitude": -28.0,
                "longitude": 10902.528974649842
            },
            {
                ['debris_name']: "TRANSIT 5B-2",
                "altitude": 109000.0,
                "latitude": -86.0,
                "longitude": 900.0333498256118
            },
            {
                ['debris_name']: "ATLAS 41E",
                "altitude": 103000.0,
                "latitude": -58.0,
                "longitude": 683.1934241767665
            },
            {
                ['debris_name']: "DMSP 5D-3 F19",
                "altitude": 131000.0,
                "latitude": -31.0,
                "longitude": 849.7666008833796
            },
            {
                ['debris_name']: "USA 142",
                "altitude": -59000.0,
                "latitude": -10.0,
                "longitude": 35267.327303454695
            },
            {
                ['debris_name']: "IRIDIUM 47",
                "altitude": -158000.0,
                "latitude": -2.0,
                "longitude": 887.0003642237109
            },
            {
                ['debris_name']: "DODECAPOLE 2",
                "altitude": -140000.0,
                "latitude": 12.0,
                "longitude": 874.3450686562363
            },
            {
                ['debris_name']: "COBE",
                "altitude": -43000.0,
                "latitude": -40.0,
                "longitude": 896.2245707528687
            },
            {
                ['debris_name']: "DIAMANT",
                "altitude": -149000.0,
                "latitude": 12.0,
                "longitude": 428.49258653299273
            },
            {
                ['debris_name']: "YAOGAN 2",
                "altitude": -54000.0,
                "latitude": 49.0,
                "longitude": 785.9409045240754
            },
            {
                ['debris_name']: "ARIANA 1",
                "altitude": 142000.0,
                "latitude": -14.0,
                "longitude": 5405.23650746558
            },
            {
                ['debris_name']: "MINOTAUR",
                "altitude": 88000.0,
                "latitude": -6.0,
                "longitude": 393.84570998323784
            },
            {
                ['debris_name']: "TIANHUI 1-02",
                "altitude": 22000.0,
                "latitude": -73.0,
                "longitude": 596.8965509971015
            },
            {
                ['debris_name']: "METEOR 1-16",
                "altitude": 112000.0,
                "latitude": 12.0,
                "longitude": 831.3587207802402
            },
            {
                ['debris_name']: "ISO",
                "altitude": 50000.0,
                "latitude": 2.0,
                "longitude": 59588.68605984707
            },
            {
                ['debris_name']: "NOAA 8",
                "altitude": -33000.0,
                "latitude": 2.0,
                "longitude": 481.44731822151425
            },
            {
                ['debris_name']: "SJ 16-02",
                "altitude": -112000.0,
                "latitude": -10.0,
                "longitude": 716.6088079121848
            },
            {
                ['debris_name']: "COSMOS 1220",
                "altitude": -23000.0,
                "latitude": 65.0,
                "longitude": 603.8874982605064
            },
            {
                ['debris_name']: "COSMOS 1481",
                "altitude": 177000.0,
                "latitude": -10.0,
                "longitude": 14901.498927587856
            },
            {
                ['debris_name']: "METEOR 1-10",
                "altitude": 150000.0,
                "latitude": 29.0,
                "longitude": 666.3852908153088
            },
            {
                ['debris_name']: "TRANSIT 14",
                "altitude": -99000.0,
                "latitude": 67.0,
                "longitude": 1014.3355519771044
            },
            {
                ['debris_name']: "SSETI-EXPRESS",
                "altitude": -77000.0,
                "latitude": 74.0,
                "longitude": 696.464700298536
            },
            {
                ['debris_name']: "SL-6",
                "altitude": -28000.0,
                "latitude": -27.0,
                "longitude": 1290.3433141613987
            },
            {
                ['debris_name']: "THOR ALTAIR",
                "altitude": -71000.0,
                "latitude": -77.0,
                "longitude": 929.3884177254585
            },
            {
                ['debris_name']: "DIAMANT B-P4",
                "altitude": 138000.0,
                "latitude": 10.0,
                "longitude": 791.237013520036
            },
            {
                ['debris_name']: "SZ-12 MODULE",
                "altitude": -16000.0,
                "latitude": -21.0,
                "longitude": 356.5380705129579
            },
            {
                ['debris_name']: "NOAA 13",
                "altitude": 144000.0,
                "latitude": -56.0,
                "longitude": 527.9457898278963
            },
            {
                ['debris_name']: "COSMOS 2535",
                "altitude": -144000.0,
                "latitude": 79.0,
                "longitude": 604.7573212618466
            },
            {
                ['debris_name']: "SEASAT 1",
                "altitude": -116000.0,
                "latitude": -63.0,
                "longitude": 661.4747203751837
            },
            {
                ['debris_name']: "EXPLORER 38",
                "altitude": -27000.0,
                "latitude": 41.0,
                "longitude": 5835.86694463721
            },
            {
                ['debris_name']: "TRANSIT 20",
                "altitude": 126000.0,
                "latitude": -59.0,
                "longitude": 1055.932508586273
            },
            {
                ['debris_name']: "COSMOS 1066",
                "altitude": -32000.0,
                "latitude": 49.0,
                "longitude": 894.967617028578
            },
            {
                ['debris_name']: "N-1",
                "altitude": -112000.0,
                "latitude": -42.0,
                "longitude": 973.771877262797
            },
            {
                ['debris_name']: "OPS 2644",
                "altitude": 70000.0,
                "latitude": 4.0,
                "longitude": 1413.5006889144556
            },
            {
                ['debris_name']: "COSMOS 2491",
                "altitude": -173000.0,
                "latitude": 60.0,
                "longitude": 1395.0561739537106
            },
            {
                ['debris_name']: "ISIS 2",
                "altitude": 69000.0,
                "latitude": -30.0,
                "longitude": 1381.326249160916
            },
            {
                ['debris_name']: "ARIANE 42P+",
                "altitude": 15000.0,
                "latitude": 7.0,
                "longitude": 6266.8794183596965
            },
            {
                ['debris_name']: "COSMOS 1980",
                "altitude": -169000.0,
                "latitude": 62.0,
                "longitude": 864.2944462896322
            },
            {
                ['debris_name']: "METEOR 1-23",
                "altitude": 107000.0,
                "latitude": 39.0,
                "longitude": 798.0966612470297
            },
            {
                ['debris_name']: "THOR DELTA 1",
                "altitude": 90000.0,
                "latitude": -42.0,
                "longitude": 1402.1247070015686
            },
            {
                ['debris_name']: "OPS 6630",
                "altitude": 134000.0,
                "latitude": 60.0,
                "longitude": 1450.4525553546778
            },
            {
                ['debris_name']: "OPS 5798",
                "altitude": 61000.0,
                "latitude": 82.0,
                "longitude": 1052.7898846039923
            },
            {
                ['debris_name']: "METEOR 2-11",
                "altitude": 154000.0,
                "latitude": 46.0,
                "longitude": 943.1386070354077
            },
            {
                ['debris_name']: "COSMOS 2058",
                "altitude": 163000.0,
                "latitude": -50.0,
                "longitude": 518.853436877217
            },
            {
                ['debris_name']: "COSMOS 2528",
                "altitude": -152000.0,
                "latitude": -65.0,
                "longitude": 926.0334248430357
            },
            {
                ['debris_name']: "OV1-20/OV1-21",
                "altitude": -17000.0,
                "latitude": 22.0,
                "longitude": 822.1249520609964
            },
            {
                ['debris_name']: "TRANSIT 18",
                "altitude": 115000.0,
                "latitude": 63.0,
                "longitude": 1090.8109905549588
            },
            {
                ['debris_name']: "EPSILON",
                "altitude": -25000.0,
                "latitude": 8.0,
                "longitude": 1090.803603073869
            },
            {
                ['debris_name']: "COSMOS 627",
                "altitude": -25000.0,
                "latitude": 31.0,
                "longitude": 972.7387723195443
            },
            {
                ['debris_name']: "COSMOS 2506",
                "altitude": -103000.0,
                "latitude": 81.0,
                "longitude": 716.1321317279953
            },
            {
                ['debris_name']: "METEOR 3-1",
                "altitude": 137000.0,
                "latitude": -76.0,
                "longitude": 1170.3469101196583
            },
            {
                ['debris_name']: "YAOGAN 7",
                "altitude": -4000.0,
                "latitude": 29.0,
                "longitude": 654.0567723110041
            },
            {
                ['debris_name']: "COSMOS 700",
                "altitude": -18000.0,
                "latitude": 11.0,
                "longitude": 935.3579283333066
            },
            {
                ['debris_name']: "ELEKTRON 1",
                "altitude": -174000.0,
                "latitude": 8.0,
                "longitude": 3083.272516404969
            },
            {
                ['debris_name']: "ARIANE 40+",
                "altitude": 25000.0,
                "latitude": -47.0,
                "longitude": 738.0416318645085
            },
            {
                ['debris_name']: "CZ-11",
                "altitude": -72000.0,
                "latitude": 5.0,
                "longitude": 560.5392197806294
            },
            {
                ['debris_name']: "GEOEYE 1",
                "altitude": 173000.0,
                "latitude": -67.0,
                "longitude": 702.7911119099759
            },
            {
                ['debris_name']: "OPS 7684",
                "altitude": 53000.0,
                "latitude": -71.0,
                "longitude": 1429.1190916625212
            },
            {
                ['debris_name']: "TITAN 34D TRANSTAGE",
                "altitude": -23000.0,
                "latitude": 19.0,
                "longitude": 11994.460110706885
            },
            {
                ['debris_name']: "COSMOS 917",
                "altitude": 0.0,
                "latitude": -22.0,
                "longitude": 35525.212598781676
            },
            {
                ['debris_name']: "COSMOS 1897",
                "altitude": 162000.0,
                "latitude": 4.0,
                "longitude": 35721.69942149364
            },
            {
                ['debris_name']: "COSMOS 1382",
                "altitude": -74000.0,
                "latitude": -66.0,
                "longitude": 19792.880454233156
            },
            {
                ['debris_name']: "BLOCK DM-SL",
                "altitude": -137000.0,
                "latitude": 1.0,
                "longitude": 35205.831397490074
            },
            {
                ['debris_name']: "COSMOS 1191",
                "altitude": 22000.0,
                "latitude": -42.0,
                "longitude": 36654.20363420332
            },
            {
                ['debris_name']: "SCOUT D-1",
                "altitude": 97000.0,
                "latitude": 10.0,
                "longitude": 1065.4680188374266
            },
            {
                ['debris_name']: "COSMOS 1247",
                "altitude": -7000.0,
                "latitude": -42.0,
                "longitude": 26309.55228599645
            },
            {
                ['debris_name']: "ALOS",
                "altitude": -69000.0,
                "latitude": -49.0,
                "longitude": 691.2811896709343
            },
            {
                ['debris_name']: "COSMOS 887",
                "altitude": -18000.0,
                "latitude": 19.0,
                "longitude": 984.4420108241602
            },
            {
                ['debris_name']: "YAOGAN 9B",
                "altitude": 28000.0,
                "latitude": 63.0,
                "longitude": 969.7900813800464
            },
            {
                ['debris_name']: "TRANSIT 15",
                "altitude": 26000.0,
                "latitude": -85.0,
                "longitude": 868.17876649874
            },
            {
                ['debris_name']: "SERVIS 2",
                "altitude": 40000.0,
                "latitude": 74.0,
                "longitude": 1162.5102991251235
            },
            {
                ['debris_name']: "ATLAS F",
                "altitude": 174000.0,
                "latitude": -7.0,
                "longitude": 2364.8707846438974
            },
            {
                ['debris_name']: "MICROSAT-R",
                "altitude": -54000.0,
                "latitude": -7.0,
                "longitude": 764.640935258337
            },
            {
                ['debris_name']: "METEOR 2-10",
                "altitude": -17000.0,
                "latitude": 46.0,
                "longitude": 659.2533645218273
            },
            {
                ['debris_name']: "METEOR 2-13",
                "altitude": -161000.0,
                "latitude": -44.0,
                "longitude": 948.5022932611417
            },
            {
                ['debris_name']: "SATCOM 3",
                "altitude": -121000.0,
                "latitude": -5.0,
                "longitude": 35451.83493764502
            },
            {
                ['debris_name']: "SPOT 4",
                "altitude": -164000.0,
                "latitude": -68.0,
                "longitude": 695.1631735794668
            },
            {
                ['debris_name']: "EKRAN 2",
                "altitude": -34000.0,
                "latitude": 0.0,
                "longitude": 35803.704112476094
            },
            {
                ['debris_name']: "OPS 4988",
                "altitude": -55000.0,
                "latitude": -68.0,
                "longitude": 911.2674955316102
            },
            {
                ['debris_name']: "COSMOS 926",
                "altitude": 13000.0,
                "latitude": 63.0,
                "longitude": 987.4147964522881
            },
            {
                ['debris_name']: "TIROS 2",
                "altitude": -120000.0,
                "latitude": -45.0,
                "longitude": 1040.2952322168644
            },
            {
                ['debris_name']: "YAOGAN 26",
                "altitude": -125000.0,
                "latitude": 57.0,
                "longitude": 456.605365195886
            },
            {
                ['debris_name']: "METEOR 2-12",
                "altitude": 32000.0,
                "latitude": 21.0,
                "longitude": 886.211291910358
            },
            {
                ['debris_name']: "COSMOS 951",
                "altitude": 14000.0,
                "latitude": 1.0,
                "longitude": 975.3135260704283
            },
            {
                ['debris_name']: "COSMOS 864",
                "altitude": -6000.0,
                "latitude": -63.0,
                "longitude": 987.032727121355
            },
            {
                ['debris_name']: "MIDAS 5",
                "altitude": -130000.0,
                "latitude": 17.0,
                "longitude": 3233.3444539664115
            },
            {
                ['debris_name']: "TAURUS",
                "altitude": 66000.0,
                "latitude": 63.0,
                "longitude": 778.6601428850763
            },
            {
                ['debris_name']: "COSMOS 2344",
                "altitude": -123000.0,
                "latitude": 49.0,
                "longitude": 1362.4337287897908
            },
            {
                ['debris_name']: "LUCH",
                "altitude": 158000.0,
                "latitude": 11.0,
                "longitude": 35624.31736153964
            },
            {
                ['debris_name']: "COSMOS 1579",
                "altitude": -154000.0,
                "latitude": -10.0,
                "longitude": 940.5036733281854
            },
            {
                ['debris_name']: "MINOTAUR-C",
                "altitude": 29000.0,
                "latitude": 63.0,
                "longitude": 526.0454024318686
            },
            {
                ['debris_name']: "COSMOS 1484",
                "altitude": 155000.0,
                "latitude": 80.0,
                "longitude": 736.2089011209163
            },
            {
                ['debris_name']: "TITAN 34B AGENA D",
                "altitude": 50000.0,
                "latitude": 34.0,
                "longitude": 11221.524165543153
            },
            {
                ['debris_name']: "COSMOS 663",
                "altitude": 32000.0,
                "latitude": 31.0,
                "longitude": 964.3678709867509
            },
            {
                ['debris_name']: "COSMOS 2054",
                "altitude": 79000.0,
                "latitude": 13.0,
                "longitude": 36569.6362572774
            },
            {
                ['debris_name']: "LES 8 9/SOL 11A B",
                "altitude": -131000.0,
                "latitude": -8.0,
                "longitude": 35494.895859179545
            },
            {
                ['debris_name']: "OPS 0856",
                "altitude": 29000.0,
                "latitude": 9.0,
                "longitude": 5184.383264856091
            },
            {
                ['debris_name']: "CZ-1",
                "altitude": -108000.0,
                "latitude": -67.0,
                "longitude": 629.4597837305024
            },
            {
                ['debris_name']: "COSMOS 985",
                "altitude": -156000.0,
                "latitude": 50.0,
                "longitude": 922.4986596834608
            },
            {
                ['debris_name']: "ELEKTRON 3",
                "altitude": 24000.0,
                "latitude": -32.0,
                "longitude": 815.6895747580986
            },
            {
                ['debris_name']: "PAYLOAD A",
                "altitude": 130000.0,
                "latitude": 56.0,
                "longitude": 673.957209251242
            },
            {
                ['debris_name']: "MSG 4",
                "altitude": -54000.0,
                "latitude": 0.0,
                "longitude": 34833.77010448401
            },
            {
                ['debris_name']: "OKEAN 1",
                "altitude": -173000.0,
                "latitude": 80.0,
                "longitude": 535.0096799280263
            },
            {
                ['debris_name']: "TITAN 3D",
                "altitude": 130000.0,
                "latitude": -65.0,
                "longitude": 1463.5508021190965
            },
            {
                ['debris_name']: "COSMOS 1678",
                "altitude": 127000.0,
                "latitude": -28.0,
                "longitude": 723.0005918101685
            },
            {
                ['debris_name']: "COSMOS 434",
                "altitude": 54000.0,
                "latitude": -7.0,
                "longitude": 654.6452958208334
            },
            {
                ['debris_name']: "COSMOS 1603",
                "altitude": 72000.0,
                "latitude": 20.0,
                "longitude": 832.5878037554246
            },
            {
                ['debris_name']: "GLOBALSTAR M004",
                "altitude": 93000.0,
                "latitude": 43.0,
                "longitude": 1464.7007981490706
            },
            {
                ['debris_name']: "COSMOS 1700",
                "altitude": 68000.0,
                "latitude": 11.0,
                "longitude": 35706.965265657906
            },
            {
                ['debris_name']: "RESURS P2",
                "altitude": 154000.0,
                "latitude": -78.0,
                "longitude": 397.0140738194496
            },
            {
                ['debris_name']: "USA 22",
                "altitude": 46000.0,
                "latitude": 26.0,
                "longitude": 480.3692496364282
            },
            {
                ['debris_name']: "YAOGAN 28",
                "altitude": -83000.0,
                "latitude": -66.0,
                "longitude": 473.89205596868675
            },
            {
                ['debris_name']: "ASTRO F",
                "altitude": 121000.0,
                "latitude": -59.0,
                "longitude": 708.0826450370721
            },
            {
                ['debris_name']: "COSMOS 931",
                "altitude": -24000.0,
                "latitude": 22.0,
                "longitude": 9595.5051651638
            },
            {
                ['debris_name']: "COSMOS 1670",
                "altitude": 82000.0,
                "latitude": -36.0,
                "longitude": 889.7721612549975
            },
            {
                ['debris_name']: "FENGYUN 2H",
                "altitude": 52000.0,
                "latitude": 0.0,
                "longitude": 35676.04167040853
            },
            {
                ['debris_name']: "FENGYUN 2D",
                "altitude": 76000.0,
                "latitude": 0.0,
                "longitude": 35610.33328853158
            },
            {
                ['debris_name']: "S5",
                "altitude": 103000.0,
                "latitude": 0.0,
                "longitude": 36166.736652169886
            },
            {
                ['debris_name']: "COSMOS 1317",
                "altitude": -155000.0,
                "latitude": -6.0,
                "longitude": 6388.189599460599
            },
            {
                ['debris_name']: "ETS 6",
                "altitude": 162000.0,
                "latitude": -3.0,
                "longitude": 28519.939490055684
            },
            {
                ['debris_name']: "FENGYUN 2G",
                "altitude": 91000.0,
                "latitude": -1.0,
                "longitude": 36102.177224337356
            },
            {
                ['debris_name']: "CZ-3",
                "altitude": -60000.0,
                "latitude": -23.0,
                "longitude": 21498.347599966517
            },
            {
                ['debris_name']: "METEOR 2-1",
                "altitude": 22000.0,
                "latitude": 6.0,
                "longitude": 794.5734697116046
            },
            {
                ['debris_name']: "MSG 3",
                "altitude": 56000.0,
                "latitude": -3.0,
                "longitude": 35397.23912832511
            },
            {
                ['debris_name']: "COSMOS 1417",
                "altitude": 115000.0,
                "latitude": 36.0,
                "longitude": 1003.2320389521464
            },
            {
                ['debris_name']: "MIDAS 4",
                "altitude": 57000.0,
                "latitude": 57.0,
                "longitude": 3784.2079115476163
            },
            {
                ['debris_name']: "METEOR 2-2",
                "altitude": 94000.0,
                "latitude": -38.0,
                "longitude": 856.8586177735264
            },
            {
                ['debris_name']: "MIDAS 3",
                "altitude": 156000.0,
                "latitude": 43.0,
                "longitude": 3386.229510401815
            },
            {
                ['debris_name']: "COSMOS 789",
                "altitude": 46000.0,
                "latitude": 38.0,
                "longitude": 994.4424882010768
            },
            {
                ['debris_name']: "USA 125",
                "altitude": 53000.0,
                "latitude": 3.0,
                "longitude": 4860.271002053432
            },
            {
                ['debris_name']: "TRANSIT 13",
                "altitude": 63000.0,
                "latitude": -76.0,
                "longitude": 770.0309268238711
            },
            {
                ['debris_name']: "M-5",
                "altitude": -19000.0,
                "latitude": -21.0,
                "longitude": 1120.846575012545
            },
            {
                ['debris_name']: "IUS",
                "altitude": -129000.0,
                "latitude": -12.0,
                "longitude": 8944.13211597315
            },
            {
                ['debris_name']: "VOLGA",
                "altitude": -9000.0,
                "latitude": 0.0,
                "longitude": 624.9291969129661
            },
            {
                ['debris_name']: "COSMOS 382",
                "altitude": -82000.0,
                "latitude": -8.0,
                "longitude": 4468.992405194956
            },
            {
                ['debris_name']: "VIKING",
                "altitude": 178000.0,
                "latitude": 29.0,
                "longitude": 7758.683204182244
            },
            {
                ['debris_name']: "ARIANE 42P+3",
                "altitude": -46000.0,
                "latitude": 0.0,
                "longitude": 10540.365014538722
            },
            {
                ['debris_name']: "MSG 2",
                "altitude": -144000.0,
                "latitude": 5.0,
                "longitude": 35435.51209539924
            },
            {
                ['debris_name']: "VANGUARD",
                "altitude": -68000.0,
                "latitude": 32.0,
                "longitude": 2436.4172230133227
            },
            {
                ['debris_name']: "GLOBALSTAR",
                "altitude": -48000.0,
                "latitude": 14.0,
                "longitude": 1166.8803052691303
            },
            {
                ['debris_name']: "OGO 5",
                "altitude": 30000.0,
                "latitude": -31.0,
                "longitude": 9204.429498352161
            },
            {
                ['debris_name']: "PAGEOS 1",
                "altitude": -18000.0,
                "latitude": 47.0,
                "longitude": 4248.866500582742
            },
            {
                ['debris_name']: "COSMOS 422",
                "altitude": 166000.0,
                "latitude": 67.0,
                "longitude": 982.2904621629474
            },
            {
                ['debris_name']: "COSMOS 1217",
                "altitude": -114000.0,
                "latitude": 58.0,
                "longitude": 11549.58524457641
            },
            {
                ['debris_name']: "COSMOS 1124",
                "altitude": -98000.0,
                "latitude": -2.0,
                "longitude": 33048.74401996775
            },
            {
                ['debris_name']: "COSMOS 952",
                "altitude": -55000.0,
                "latitude": 34.0,
                "longitude": 993.3390079238118
            },
            {
                ['debris_name']: "METEOR 1-11",
                "altitude": 137000.0,
                "latitude": 78.0,
                "longitude": 755.9601107768343
            },
            {
                ['debris_name']: "FENGYUN 2A",
                "altitude": 89000.0,
                "latitude": 12.0,
                "longitude": 35559.13991381131
            },
            {
                ['debris_name']: "ATLAS 55E",
                "altitude": 56000.0,
                "latitude": 60.0,
                "longitude": 4760.655097324614
            },
            {
                ['debris_name']: "AYAME 1",
                "altitude": 138000.0,
                "latitude": 9.0,
                "longitude": 23285.161747077964
            },
            {
                ['debris_name']: "METEOR 2-9",
                "altitude": 75000.0,
                "latitude": 54.0,
                "longitude": 699.8032692834689
            },
            {
                ['debris_name']: "FENGYUN 2F",
                "altitude": 116000.0,
                "latitude": 1.0,
                "longitude": 36240.512316841574
            },
            {
                ['debris_name']: "COSMOS 1660",
                "altitude": 169000.0,
                "latitude": -5.0,
                "longitude": 1527.4926883674739
            },
            {
                ['debris_name']: "COSMOS 1109",
                "altitude": -160000.0,
                "latitude": -27.0,
                "longitude": 39069.40543762625
            },
            {
                ['debris_name']: "COSMOS 1024",
                "altitude": 55000.0,
                "latitude": 43.0,
                "longitude": 20614.011291569237
            },
            {
                ['debris_name']: "COSMOS 1188",
                "altitude": -59000.0,
                "latitude": 52.0,
                "longitude": 33638.47882973262
            },
            {
                ['debris_name']: "DRAGON CRS-23",
                "altitude": 31000.0,
                "latitude": -21.0,
                "longitude": 272.905494188062
            },
            {
                ['debris_name']: "LEASAT 1",
                "altitude": -4000.0,
                "latitude": 16.0,
                "longitude": 9494.611216923893
            },
            {
                ['debris_name']: "METEOR 2-21",
                "altitude": 18000.0,
                "latitude": -25.0,
                "longitude": 907.0996885520683
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