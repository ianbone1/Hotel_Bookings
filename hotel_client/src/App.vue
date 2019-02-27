<template>
  <div id="app">
    <div class="hotelWrapper">
      <booking-form></booking-form>
      <bookings-grid :bookings="bookings"></bookings-grid>
    </div>
  </div>
</template>

<script>

import BookingForm from  './components/BookingForm.vue';
import BookingsGrid from './components/BookingsGrid.vue';
import { eventBus } from './main.js';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },

  components: {
    "booking-form" : BookingForm,
    "bookings-grid": BookingsGrid
  },

  mounted(){
    this.fetchData();

    eventBus.$on('booking-deleted', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index,1)
    })

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-changed', (theBooking) => {
      const index = this.bookings.findIndex(booking => booking._id === theBooking._id)
      this.bookings[index]=theBooking;
    })
  },

  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  height: 100%;
}

body {
  background: url('./assets/background.jpg') repeat;
  height: 100%;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;

}
</style>
