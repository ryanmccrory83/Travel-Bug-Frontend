<template>
<div id='main'>
    <router-view></router-view>
    <div class='header'>
    <Header />
    </div>
    <Nav />
    <h2 class="main-h2">Search the map for locations you want to visit!</h2>
     <div class='horizontal'> 
      <div class='vertical'>
        <div>
          <AddCountry />
        </div>
        <div>
          <MapConfig />
        </div>
      </div>
      <div>
        <Locations />
      </div>
    </div>
</div>
    
</template>

<script>
import Header from "@/components/Header"
import AddCountry from "@/components/AddCountry"
import Locations from "@/components/Locations"
import MapConfig from "@/components/MapConfig"
import Nav from "@/components/Nav"
export default {
  name: "Main",
  components: {
    Header,
    AddCountry,
    Locations,
    MapConfig,
    Nav
  }
};
</script>

<style>
.horizontal {
  display: flex;
  justify-content: space-around;
}
.vertical {
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  margin-left: 3vw;
}
.header {
  display: flex;
  justify-content: center;
}
#main {
  display: flex;
  flex-direction: column;
  background: cover;
  /* height: 200vh; */
  justify-content: space-between;
  background-color: rgba(247, 178, 49, 0.877);
}
.main-h2{
  margin: 3vh 0vh -8vh 0vh;
}
</style>
