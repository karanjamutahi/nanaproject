<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link to='/' class="noDec">
        <v-btn id="k" class="gradientBtn">
          <span>SMART PARK</span> 
        </v-btn>
      </nuxt-link>

      <nuxt-link to='/login' class="noDec float-right">
        <v-btn id="j" class="gradientBtn">
          <span>LOGIN</span> 
        </v-btn>
      </nuxt-link>

      <nuxt-link to='/oldlogin' class="noDec float-right">
        <v-btn id="j" class="gradientBtn">
          <span>CHECK IN/OUT</span> 
        </v-btn>
      </nuxt-link>

      <nuxt-link to='/everything' class="noDec float-right">
        <v-btn id="PrettyBtn" class="gradientBtn">
          <span>ADMINS</span> 
        </v-btn>
      </nuxt-link>

      <nuxt-link to='/users' class="noDec float-right">
        <v-btn id="PrettyBtn" class="gradientBtn">
          <span>USERS</span> 
        </v-btn>
      </nuxt-link>

      <nuxt-link to='/checkins' class="noDec float-right">
        <v-btn id="PrettyBtn" class="gradientBtn">
          <span>CHECK-INS</span> 
        </v-btn>
      </nuxt-link>

       <a class="noDec" href="http://km.dev.localhost:5000/login"> 
        <v-btn id="PrettyBtn" class="gradientBtn">
          <span>GO TO CHECKIN ➞ ➞ ➞</span> 
        </v-btn>
        </a>
      <v-btn id="PrettyBtn" class="gradientBtn" v-on:click="logout">
          <span>LOGOUT</span> 
      </v-btn>

    </v-app-bar>
    <v-main>
      <nuxt/> 
    </v-main>
  </v-app>
</template>

<script>
import deleteCookie from '../assets/deleteCookie';
import Cookies from 'js-cookie';

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    logout: function() {
      deleteCookie('session_id');
      Cookies.remove('session_id');
      console.log('Delete');
    }
  }
}
</script>

<style>
 .theme--light.v-application{
   background: linear-gradient( 114.2deg,  rgba(121,194,243,1) 22.6%, rgba(255,180,239,1) 67.7% );
 }

 .gradientBtn span{
  color: rgb(75, 75, 75);
 }

 .noDec {
   text-decoration: none;
   margin: 0 10px;
 }

</style>
