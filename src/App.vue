<template>
  <div id='app'>
    <router-view/>

  </div>
</template>

<script>
const API_URL = "https://travel-bug-backend.herokuapp.com/profiles";

export default {
  name: "Register",
  data() {
    return {
      // registerURL: "https://travel-bug-backend.herokuapp.com/profiles",
      // form: {
      //   username: "",
      //   password: ""
      // },
      show: true
      // users: [],
    };
  },
  // mounted() {
  //   fetch(this.registerURL, {
  //     method: "get",
  //     mode: "cors",
  //     credentials: "same-origin",
  //     headers: new Headers({ "Content-Type": "application/json" })
  //   }).then(resp => {
  //     return resp.json().then(resp => {
  //       console.log(resp);
  //     });
  //   });
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgba(247, 178, 49, 0.877);
}
</style>
