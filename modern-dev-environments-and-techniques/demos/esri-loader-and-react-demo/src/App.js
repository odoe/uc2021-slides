import { useEffect, useRef, useState } from "react";

import './App.css';

// load the latest 4.x API and CSS
import { setDefaultOptions, loadModules } from 'esri-loader';
setDefaultOptions({ css: true });

//function App() {
export default function App() {
  const mapRef = useRef();
  const tomRefPats = useRef();
  const textRef = useRef();

  const [state, setState] = useState();

  useEffect(() => { 
    // this will lazy load the ArcGIS API for JavaScript
    loadModules(['esri/views/MapView', 'esri/WebMap', 'esri/widgets/Search'])
    .then(([MapView, WebMap, Search]) => {
      // then we load a web map
      const webmap = new WebMap({
        portalItem: {
          id: 'a07d27bf0014447fb09339e9434a0505'
        }
      });
      // and we show that map in a container using mapRef
      const view = new MapView({
        map: webmap,
        container: mapRef.current,
        zoom: 3
      });
      // add Search widget
      const search = new Search({
        view: view
      });
      view.ui.add(search, "bottom-right");
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });

    setState("tom-brady-unsplash.jpg");

  }, [mapRef, tomRefPats, textRef]);

  return (
    <div className="mainDiv">
      <div
        className="viewDiv"
        ref={mapRef}
      />
      <div
        className="tomDivPats"
        ref={tomRefPats}
      >
      <img src={state} className="App-logo" alt="logo" />
      </div>
      <div
        className="textDiv"
        ref={textRef}
        >
        <h1>Thomas Edward Patrick Brady</h1>
        Tom Brady was born on August 3, 1977.
        He was drafted in the 6th round of the 2000 NFL draft, at number 199 overall, by the New England Patriots.
        <br></br>
        He is the greatest quarterback of all time.
        <br></br>
        <br></br>
        World Championship Wins:
        <br></br>
        <br></br>
        Superbowl XXXVI (2001)
        <br></br>
        Superbowl XXXVIII	(2003)
        <br></br>
        Superbowl XXXIX (2004)
        <br></br>
        Superbowl XLIX (2014)
        <br></br>
        Superbowl LI (2016)
        <br></br>
        Superbowl LV* (2020)
        <br></br>
        <br></br>
        <small>* with the Tampa Bay Buccaneers</small>
      </div>
    </div>
  );
};