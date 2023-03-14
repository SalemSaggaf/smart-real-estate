import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, KmlLayer, OverlayView } from '@react-google-maps/api';
import AreaCard from '../../components/AreaCard/AreaCard';
import { useHistory } from 'react-router-dom';
import areas from '../../Data/Areas';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const containerStyle = {
    width: '100%',
    height: '100vh'
};

const center = {
    lat: 21.550605337362878,
    lng: 39.14384037428995
};

function AreaPickPage() {
    const [areaCardPosition, setAreaCardPosition] = useState({lat: 21.550605337362878, lng: 39.14384037428995});
    const [isAreaCardVisible, setIsAreaCardVisible] = useState(false);
    const [areaCardTitle, setAreaCardTitle] = useState('Area 1');
    const [areaId, setAreaId] = useState(-1);
    const [areaImg, setAreaImg] = useState('');
    // const [areaCardDescription, setAreaCardDescription] = useState('Area 1 description');
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCK5OTl1LeJAPpOjsygUh0kLvYZUuefEOs"
    });
    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    useEffect(() => {
        if (map) {
            console.log('is visible : ', isAreaCardVisible);
            console.log(map);
        }
    }, [map])

    const onKmlClick = (e) => {
        console.log(e);
        setIsAreaCardVisible(true);
        const latLng = e.latLng;
        const areaInfo = areas.find(item => item.id === e.featureData.id);
        // console.log(latLng.lat(), latLng.lng());
        setAreaImg(areaInfo.img);
        setAreaId(areaInfo.id);
        setAreaCardPosition({lat: latLng.lat(), lng: latLng.lng()});
        setAreaCardTitle(e.featureData.name);
        // setAreaCardDescription(e.featureData.description);
    }

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onClick={() => {setIsAreaCardVisible(false); console.log('map clicked');}}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <KmlLayer
                onLoad={kmlLayer => {console.log('KmlLayer onLoad: ', kmlLayer)}}
                url='https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1oJf8RK8KfrbEThiOCj2Nj3oirChix7I'
                options={{
                    preserveViewport: false,
                    suppressInfoWindows: true,
                }}

                onClick={onKmlClick}
            ></KmlLayer>
            {isAreaCardVisible ?<OverlayView position={areaCardPosition} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} >
                <AreaCard img={areaImg} title={areaCardTitle} id={areaId}/>
            </OverlayView> : <></>}
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default AreaPickPage;