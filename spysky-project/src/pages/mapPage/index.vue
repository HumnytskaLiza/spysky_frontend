<template>
    <div id="map-container">
      <div id="map-navigation"> 
        <Navbar />
      </div>
      <div id="map-panels">
        <div id="left-filters">
          <div id="filters">
            <div id="arrow" @click="showFilters()">
              <img src="../../assets/icons/arrows-filter.svg" alt="">
            </div>
            <div>
              <p>Search</p>
              <select id="satellite-names" size="1" onfocus="this.size = 2" onchange="this.blur()" onblur="this.size = 1; this.blur()">
                <option disabled selected>Satellite name</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
                <option>Option 6</option>
              </select>
              <select id="object-ids" size="1" onfocus="this.size = 2" onchange="this.blur()" onblur="this.size = 1; this.blur()">
                <option disabled selected>Object ID</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
            <div>
              <p>Object type</p>
              <select id="object-types" size="1" onfocus="this.size = 2" onchange="this.blur()" onblur="this.size = 1; this.blur()">
                <option>Satellite</option>
                <option>Debris</option>
              </select>
            </div>
            <div>
              <p>Time period</p>
              <input type="range" min="1" max="100" value="50" class="slider" id="time-slider">
            </div>
          </div>
        </div>
        <div id="right-bottom-elems">
          <div class="scale-buttons">
            <div id="zoomOut" @click="zoomOut()"><img src="../../assets/icons/minus.svg" alt=""></div>
            <div id="zoomIn" @click="zoomIn()"><img src="../../assets/icons/plus.svg" alt=""></div>
          </div>
          <div id="coordinates">
            <p id="lat">lat: 50.450001</p>
            <p id="long">long: 30.523333</p>
          </div>
        </div>
      </div>
      <EarthMap />
    </div>
</template>
  
<script>

import Navbar from "../../pages/components/mapNav.vue"
import EarthMap from "../../pages/components/mapScript.vue"

export default {
  name: "map",
  components: {
    Navbar,
    EarthMap
  },
  methods: {
    showFilters() {
      let filters = document.getElementById("filters")
      if (filters.classList.contains("show")) {
        filters.classList.remove("show");
      } else {
        filters.classList.toggle("show");
      }
  },
    // zoomOut() {
    //   const controls = 
    //   controls.zoomOut();
    // },
    // zoomIn() {
    //   controls.zoomIn();
    // }
  },
  // data: {
  //               coordinates: {
  //                   lat: 50.450001,
  //                   long: 30.523333
  //               }
  //           }
}
  
</script>

<style>

#map-container {
  background: none;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

#map-panels {
  width: 100%;
  height: 100vh;
  padding: 0px 30px;
  box-sizing: border-box;
}

#left-filters {
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Exo 2', sans-serif;
  z-index: 100;
  position: relative;
  height: 100vh;
  justify-content: center;
  width: fit-content;
}

#left-filters select {
  padding: 20px;
  border-radius: 0.5rem;
  border: 0;
  background-color: #000E1F;
  color: white;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  line-height: 350%;
  color: #A1A1A1;
  font-weight: 700;
  font-size: 1rem;
}

#left-filters > div > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#left-filters p {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

#time-slider {
  width: 100%;
}

#left-filters #arrow {
  position: absolute;
  width: 24px;
  height: 36px;
  background-color: #2e5688;
  right: -24px;
}

#filters {
  position: relative;
  background-color: #000000;
  padding: 20px 10px 30px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 0.5rem;
  width: 10px;
  border: 2px solid #00142D;
  transition: width 0.3s ease-in-out;
}

#filters.show {
  width: 350px;
  padding: 20px 20px 30px 20px;
  transition: width 0.3s ease-in-out;
}

#filters.show * {
  visibility: visible; 
  width: 100%;
  transition: visibility 0s linear;
}

#filters.show #arrow img {
  transform: scaleX(1);
}


#filters * {
  visibility: hidden; 
  width: 0;
}

#filters #arrow img {
  transform: scaleX(-1);
}

#filters * p {
  height: 19.2px;
}

#left-filters #arrow {
  position: absolute;
  width: 24px;
  height: 36px;
  background-color: #2e5688;
  right: -25px;
  visibility: visible; 
  top: calc(50% - 18px);
  background-color: #000000;
  border: 2px solid #00142D;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#left-filters #arrow img {
  width: 11px;
  height: 13px;
  visibility: visible;
}

#right-bottom-elems {
  font-family: 'Exo 2', sans-serif;
  font-size: 14px;
  position: absolute;
  color: white;
  bottom: 30px;
  z-index: 10000;
  right: 30px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
}

#right-bottom-elems #coordinates {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

#right-bottom-elems .scale-buttons {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
}

#right-bottom-elems .scale-buttons div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #00142D;
  border-radius: 0.5rem;
}

#right-bottom-elems .scale-buttons div img {
  height: auto;
  width: 1rem;
}

</style>