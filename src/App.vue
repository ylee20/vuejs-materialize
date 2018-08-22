<template>
  <div id="main">
    
    <navbar></navbar>
    
    <div class="container">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/navbar.vue';
import LoginPage from './components/auth/login.vue';
export default {
  components : {
    navbar : NavBar,
    Loginpage : LoginPage
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
