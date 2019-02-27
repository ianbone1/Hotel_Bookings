<template lang="html">
  <form id="bookings-form" method="post" v-on:submit="addBooking">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" required/>
    </div>
    <div class="formWrap">
      <label for="secondName">Last Name:</label>
      <input type="text" id="secondName" v-model="secondName" required/>
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required/>
    </div>
    <div class="formWrap">
      <input type="checkbox" name="checkinstatus" v-model="checkedIn">Checked In</input>
    </div>

    <input type="submit" value="Save" id="save"/>
  </form>
</template>

<script>

import { eventBus } from '../main.js'

export default {
  name: "BookingForm",

  data(){
    return {
      firstName: "",
      secondName: "",
      email:"",
      checkedIn:true
    }
  },

  methods: {
    addBooking(event){
      event.preventDefault();
      let booking= {
        firstName: this.firstName,
        secondName: this.secondName,
        email: this.email,
        checkedIn: this.checkedIn
      }

      fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => eventBus.$emit('booking-added',res))
    }

  }
}
</script>

<style lang="css" scoped>
h2 {
  margin: 10px 0;
  padding: 0;
}

form {
  width: 75%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-bottom: 40px;
}

label {
  min-width: 100px;
  display: inline-block;
}

.formWrap {
  margin-bottom: 10px;
}
</style>
