import React, { useState } from "react";
import ReactMapGL, { Popup, Marker } from "react-map-gl";
import Map from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Mapi = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const loading = true;
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  if (!loading) {
    return (
      <Map
        mapStyle="mapbox://styles/easierq/ckzsbtbap00r314rwiz6eg62i"
        mapboxApiAccessToken="pk.eyJ1IjoiZWFzaWVycSIsImEiOiJja3pzYmtiaGYwMDg0MnV0azA4eHFweHR1In0.4F2yHR00XzO00843-kkLkA"
        initialViewState={{
          width: "100%",
          height: "100%",
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
      />
    );
  }

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/easierq/ckzsbtbap00r314rwiz6eg62i"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.latitude}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
            >
              @
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={result.long}
              latitude={result.lat}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Mapi;
