<template lang="html">
  <div id="bookingsGrid">
    <div class="status">
      <input type="checkbox" name="checkinstatus" v-model="checkedInStatus">View Checked In</input>
    </div>
    <div class="booking" v-for="booking in bookings" v-if="checkedInStatus == booking.checkedIn">
      <h2>{{ booking.firstName }} {{booking.secondName}}</h2>
      <!-- <p>{{ booking._id}}</p> -->
      <p>{{ booking.email }}</p>
      <p><input type="checkbox" name="checkedin" v-model="booking.checkedIn" v-on:change="changeStatus(booking)">Checked In/Out</input></p>

      <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>

import { eventBus } from '../main.js';

export default {
  name: "BookingsGrid",
  props: ["bookings"],

  data () {
    return {
      checkedInStatus: true
    }
  },


  methods: {
    deleteBooking(id){
      fetch('http://localhost:3000/api/bookings/' + id, {
        method: 'DELETE'
      })
      .then(() => eventBus.$emit('booking-deleted', id))
    },
    changeStatus(booking){
      let changedBooking= {
        firstName: booking.firstName,
        secondName: booking.secondName,
        email: booking.email,
        checkedIn: booking.checkedIn
      }
      fetch('http://localhost:3000/api/bookings/'+ booking._id, {
        method: 'PUT',
        body: JSON.stringify(changedBooking),
        headers: { 'Content-Type': 'application/json'}})
      .then(() => eventBus.$emit("booking-changed", changedBooking))
    }
  }
}
</script>

<style lang="css" scoped>
#bookingsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

h2 {
  padding: 0;
  margin: 0;
}

.status{
  width: 75%;
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  padding: 25px;
}

.booking {
  width: 30%;
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  padding: 25px;
}

button {
  color: #fff;
  border: none;
  font-size: 18px;
  padding: 10px;
  margin-top: 10px;
  background: #F55536;
}
</style>
