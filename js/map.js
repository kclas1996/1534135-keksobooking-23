import { createpropertyElement } from './properties.js';

const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const ICON_SIZE = [40, 40];
const ICON_ANCHOR = [20, 40];
const MAP_COORDS_DEFAULT = {
  lat: 35.6895,
  lng: 139.69171,
};
const MAP_ZOOM_DEFAULT = 12;
const MAX_PROPERTIES = 10;
const FLOAT_NUMBER = 5;
const LAYER_TEMPLATE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAIN_ICON_URL = '../img/main-pin.svg';
const ICON_URL = '../img/pin.svg';
const adAddressInput = document.querySelector('#address');
const map = L.map('map-canvas');

L.tileLayer(
  LAYER_TEMPLATE,
  {
    attribution: ATTRIBUTION,
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MAIN_ICON_URL,
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCHOR,
});

const mainPinMarker = L.marker(
  MAP_COORDS_DEFAULT,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (property) => {
  const icon = L.icon({
    iconUrl: ICON_URL,
    iconSize: ICON_SIZE,
    iconAnchor: ICON_ANCHOR,
  });

  const marker = L.marker(
    {
      lat: property.location.lat,
      lng: property.location.lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createpropertyElement(property),
      {
        keepInView: true,
      },
    );
};

const createMarkers = (properties) => {
  markerGroup.clearLayers();
  properties
    .slice(0, MAX_PROPERTIES)
    .forEach((property) => {
      createMarker(property);
    });
};

const getLatLngString = (latLng) => `${latLng.lat.toFixed(FLOAT_NUMBER)} ${latLng.lng.toFixed(FLOAT_NUMBER)}`;


adAddressInput.value = getLatLngString(mainPinMarker.getLatLng());

const resetMap = () => {
  mainPinMarker.setLatLng(MAP_COORDS_DEFAULT);

  map.setView(MAP_COORDS_DEFAULT, MAP_ZOOM_DEFAULT);

  adAddressInput.value = getLatLngString(mainPinMarker.getLatLng());
};

mainPinMarker.on('moveend', () => {
  adAddressInput.value = getLatLngString(mainPinMarker.getLatLng());
});

export { resetMap, createMarkers, map, MAP_COORDS_DEFAULT, MAP_ZOOM_DEFAULT };
