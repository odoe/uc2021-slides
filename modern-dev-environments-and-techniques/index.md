<!-- .slide: data-background="../img/2021/uc/tech-sessions/bg-1.png" data-background-size="cover -->
<h1 style="text-align: left; font-size: 80px;">ArcGIS API for JavaScript:</h1>
<h2 style="text-align: left; font-size: 60px;">Modern Development Environments and Techniques</h2>
<p>
<span style="text-align: left; font-size: 30px; margin: 1em;">Andy Gup</span>
<span style="text-align: center; font-size: 30px; margin: 1em;">Noah Sager</span>
<span style="text-align: right; font-size: 30px; margin: 1em;">René Rubalcava</span>
</p>
<p>
<span style="text-align: left; font-size: 30px; margin: 1em;"><a href="https://github.com/agup">@agup</a></span>
<span style="text-align: center; font-size: 30px; margin: 1em;"><a href="https://github.com/NoashX">@NoashX</a></span>
<span style="text-align: right; font-size: 30px; margin: 1em;"><a href="https://github.com/odoenet">@odoenet</a></span>
</p>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" data-transition="fade" -->
## Agenda

- Using CDN and NPM
- Advanced CDN Usage
- Building modern apps

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

## Vanilla JS
## or
## Local builds

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

## Local build bundle files

<img src="./img/bundles.png" />

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

## AMD
## and
## ES modules (ESM)

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

#### https://developers.argis.com/javascript

<img src="./img/api-ref-modules.png" />

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

## AMD

<span style="color:yellow;">(Not a W3C standard)</span>

```js
// test-amd.js
define(() => {
    return {
        height:300,
        width: 300
    }
});

```

```js
// index.html
require(['test-amd'],(test) => { 
  let h = test.height); 
})
```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## AMD modules


```html
<script src="https://js.arcgis.com/4.20/"></script>
<script>
  require([ "esri/Map", "esri/views/MapView" ], 
  (Map, MapView) => {
    // Code to create the map and view will go here
  });
</script>
```

- Available since 4.0 (May 2016)

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## AMD CDN

Perfect for Vanilla JS apps

- Pros: 
  - Easy to update
  - No installation, minimal configuration
  - Highly optimized
- Cons: 
  - Requires a separate module loader
  - Use <code>esri-loader</code> for integration with frameworks and build tools

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

### AMD Module Loader

<img src="./img/init-loader.png" />

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

### AMD needs a module loader, otherwise...

<img width="1000" height="50" src="./img/require-not-defined.png" />
<img width="1000" height="50" src="./img/define-not-defined.png" />

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## AMD NPM

Use <code>arcgis-js-api</code> for API versions <= 4.18

- Pros:
  - Works with Dojo 1 and RequireJS

- Cons: 
  - Still requires a module loader
  - Integration into frameworks isn't straightforward. For example, webpack requires <code>@arcgis/webpack-plugin*</code>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

## ESM

<span style="color:yellow;">(ES6 or ECMAScript 2015+)</span>

```js
// test-esm.js
export const height = 300;
export const width = 300;

```

```js
// index.js
import {height, width} from './test-esm.js';

let h = height;
```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## ESM

Use <code>@arcgis/core</code> for API versions >= 4.19

```js
  import Map from '@arcgis/core/Map';

  const map = new Map({
    basemap: "gray-vector"
  });

```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## ESM NPM

<code>@arcgis/core</code>
- <span style="color:yellow;">Primary use case is local builds</span>
- Pros: 
  - Standardized module system
  - Works natively in modern browsers
  - Integrates well with most modern frameworks and build tools

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## ESM CDN

<span style="color:yellow;font-weight:bold;">Testing and prototyping only</span>

```js
import Map from "https://js.arcgis.com/4.20/@arcgis/core/Map.js";

const map = new Map({
  basemap: "gray-vector"
});

```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

- <span style="color:yellow; text-align: left;">AMD is available as</span>
  - CDN
  - NPM (Local install)
- <span style="color:yellow;">ESM is available as:</span>
  - CDN <span style="color:yellow;">**</span>
  - NPM (Local install)

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->

## Additional Resources

- github.com/Esri/jsapi-resources
- github.com/Esri/feedback-js-api-next 

```
## install the 'next' ESM version of the API
npm i @arcgis/core@next

## install the 'next' AMD version of the API
npm i arcgis-js-api@next
```

Also, via AMD CDN:

```html
<script src="https://js.arcgis.com/next/"></script>
```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" data-transition="fade" -->
<!-- Noah #18-->

### Try [esri-loader](https://github.com/Esri/esri-loader)

<div>
  <img src="../common/images/esri.png" class="transparent" height="120" />
  <img src="../common/images/Heart_corazon.svg" class="transparent" height="120" />
  <img src="../common/images/webpack-icon-square-big.png" class="transparent" height="120" />
  <img src="../common/images/react.png" class="transparent" height="120" />
  <img src="../common/images/rollup1.png" class="transparent" height="100" />
  <img src="../common/images/parcel-og.png" class="transparent" height="100" />
  <img src="../common/images/snowpack-logo-white.png" class="transparent" height="90" />
</div>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
### Installing [esri-loader](https://github.com/Esri/esri-loader#install)

<img class="transparent" src="../common/images/800px-Npm-logo.svg.png" style="width: 300px; margin: 110px 0;">
<h5><code>npm install --save esri-loader</code></h5>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
### Installing [esri-loader](https://github.com/Esri/esri-loader#install)

<img class="transparent" src="../common/images/yarn-logo.png">
<h5><code>yarn add esri-loader</code></h5>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade-in none" -->
### Using [`loadModules()`](https://github.com/Esri/esri-loader#usage)

```js
import { loadModules } from 'esri-loader';

loadModules([
  "esri/Map",
  "esri/views/MapView"
]).then(([Map, MapView]) => {
  // Code to create the map and view will go here
});
```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="none fade-out" -->
### How it works

```js
// calls require() once the ArcGIS script is loaded

require([
  "esri/Map",
  "esri/views/MapView"
], (Map, MapView) => {
  // Code to create the map and view will go here
});
```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
### [Lazy loads the ArcGIS API](https://github.com/Esri/esri-loader#lazy-loading-the-arcgis-api-for-javascript)

<pre class="language-js">
<code class="language-js">
 // injects a script tag the first time
const esriConfig = await loadModules(["esri/config"])
esriConfig.useIdentity = false;

// don't worry, this won't load the API again!
const [Map, MapView] = await loadModules(
  ["esri/Map", "esri/views/MapView"]
);</code></pre>

Defaults to latest CDN version <!-- .element class="fragment" -->

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" 
data-transition="none fade-out" -->

### [esri-loader options](https://github.com/Esri/esri-loader/#configuring-esri-loader)

- Use an earlier release, even 3.x!
- Even use a [later version](https://github.com/Esri/feedback-js-api-next)?
- Use a local AMD build
- Lazy load CSS

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" 
data-transition="none fade-out" -->

### Keeps ArcGIS API out of your build

<ul class="fragment">
  <li>faster builds</li>
  <li>greater tool compatibility</li>
</ul>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" 
data-transition="none fade-out" -->

### What's the down side?

<ul class="fragment">
  <li>just AMD and vanilla JavaScript</li>
  <li>no <code>import</code> statements for ArcGIS modules</li>
  <li>requires pre-existing AMD build (CDN or local)</li>
</ul>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" 
data-transition="none fade-out" -->

### When to use esri-loader?

- Rapid prototyping, hackathons
- Your (hipster) tools have trouble with `@arcgis/core`

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-4.png" data-transition="fade" -->
### Demo: [esri-loader with react](https://github.com/odoe/uc2021-slides/tree/main/modern-dev-environments-and-techniques/demos/esri-loader-and-react-demo)

<div>
  <img src="../common/images/esri.png" class="transparent" height="120" />
  <img src="../common/images/react.png" class="transparent" height="120" />
</div>


- Scenario: superhero themed hackathon
- Tools: [React](https://reactjs.org/), [esri-loader](https://github.com/Esri/esri-loader)

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" data-transition="fade" -->
<!--  Rene #29-->
## ESM

- Standard Module System for JavaScript
- Better support in modern build tooling

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## Getting Started

```sh
npm i @arcgis/core
```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## Usage

```js
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/MapView';
```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## npm and build tools

- Benefits
    - customized local build
    - total JS between 400KB to 2MB
    - depends on your application

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## ESM CDN

- _Testing purposes only_
- I'm serious, listen to me

```html
<script type="module">
    import ArcGISMap from "https://js.arcgis.com/4.18/@arcgis/core/Map.js";
    import MapView from "https://js.arcgis.com/4.18/@arcgis/core/views/MapView.js";

    const map = new ArcGISMap({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 4,
        center: [-118, 34]
    });
</script>
```

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-2.png" data-transition="fade" -->
## ESM CDN

- Too many files requested for real-world use
- Convenience for prototyping
- _Please use a build tool_

 w/ defaults <!-- .element class="fragment" -->

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-4.png" -->
## [@arcgis/core](https://npmjs.com/package/@arcgis/core)

<div>
  <img src="../common/images/esri.png" class="transparent" height="120" />
  <img src="../common/images/Heart_corazon.svg" class="transparent" height="120" />
  <img src="../common/images/webpack-icon-square-big.png" class="transparent" height="120" />
  <img src="../common/images/rollup1.png" class="transparent" height="100" />
</div>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" data-transition="fade" -->
### ArcGIS API is different

- powerful library with large footprint
- uses dynamic module loading & web workers
- can slow your build; or not work w/ defaults <!-- .element class="fragment" -->

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" data-transition="fade" -->

## Dev Environment

- Easiest way to get started... use [VS Code](https://code.visualstudio.com/)
- Review samples on [github](https://github.com/Esri/jsapi-resources/tree/master/esm-samples).
- _I_ like [vitejs](https://vitejs.dev/)
  - minimal, to zero config
  - that's it, so easy you feel guilty

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-3.png" data-transition="fade" -->
### Is your bundler smarter than you?

<div>
  <img src="../common/images/esri.png" class="transparent" height="120" />
  <span style="font-size: 110px; position: relative; top: -30px">🤔</span>
  <img src="../common/images/parcel-og.png" class="transparent" height="100" />
  <img src="../common/images/snowpack-logo-white.png" class="transparent" height="90" />
</div>

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-4.png" -->
## Conclusion

<div>
  <img src="../common/images/esri.png" class="transparent" height="120" />
  <img src="../common/images/Heart_corazon.svg" class="transparent" height="120" />
  <img src="../common/images/react-js-img.png" class="transparent" height="120" />
  <img src="../common/images/angular.png" class="transparent" height="120" />
  <img src="../common/images/vue-logo.png" class="transparent" height="120" />
  <img src="../common/images/1200px-Svelte_Logo.svg.png" class="transparent" height="120" />
  <img src="../common/images/tomster-sm.png" class="transparent" height="120" />
</div>

Consuming the ArcGIS API is easier than ever!

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/bg-5.png" -->

![esri](../img/esri-science-logo-white.png "esri")

---

<!-- .slide: data-auto-animate data-background="../img/2021/uc/tech-sessions/2021-feedback.jpg" -->