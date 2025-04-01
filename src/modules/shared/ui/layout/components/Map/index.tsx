import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import MapContainer, { MapContainerStyle, mapStyles, WrapperMarkerInfo } from "./styles/WrapperMap";
import CustomMarker from 'assets/img/icons/map-marker.svg';
import LocaleService from "infrastructure/i18n/LocaleService";
import { ContactTranslations } from "modules/shared/infrastructure/i18n/typing";
import { ContactText } from "modules/shared/infrastructure/i18n/ContactText";
import AtomSpinner from "../../elements/AtomSpinner";

const contactTranslations: ContactTranslations = {
  ...ContactText[LocaleService.getLanguage()],
};

const optionsMap = {
  center: {
    lat: 41.3992934,
    lng: 2.1943749,
  },
  disableDefaultUI: false,
  zoom: 17,
  styles: mapStyles
};

const GoogleMapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <AtomSpinner />;
  }

  return (
    <MapContainer>
      <GoogleMap options={optionsMap}>
        <MapContainerStyle>
          <Marker icon={CustomMarker} position={optionsMap.center} onClick={() => setShowInfoWindow(true)} />
          {showInfoWindow && (
            <InfoWindow
              position={optionsMap.center}
              onCloseClick={() => setShowInfoWindow(false)}
              options={{
                pixelOffset: new window.google.maps.Size(0, -45)
              }}
            >
              <WrapperMarkerInfo>
                <img src="src/assets/img/seat/SEATCODE_LogotipoV_RGB_Negativo.svg" alt="code logo"></img>
                <h3>{contactTranslations.theGarage}</h3>
                <p>{contactTranslations.address}</p>
                <p>{contactTranslations.zipCodeCity}</p>
              </WrapperMarkerInfo>
            </InfoWindow>
          )}
        </MapContainerStyle>
      </GoogleMap>
    </MapContainer>
  );
};

export default GoogleMapComponent;
