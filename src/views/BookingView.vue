<template>
    <div>
      <h2>Make a Booking</h2>
      <form @submit.prevent="makeBooking">
        <select v-model="selectedFlight" required>
          <option v-for="flight in flights" :key="flight.id" :value="flight.id">
            {{ flight.branch }} - {{ flight.price }}$
          </option>
        </select>
        
        <select v-model="selectedHotel" required>
          <option v-for="hotel in hotels" :key="hotel.id" :value="hotel.id">
            {{ hotel.name }} - {{ hotel.price }}$
          </option>
        </select>
        
        <select v-model="selectedActivity" required>
          <option v-for="activity in activities" :key="activity.id" :value="activity.id">
            {{ activity.name }} - {{ activity.price }}$
          </option>
        </select>
        
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useStore } from 'vuex'
  
  export default defineComponent({
    setup() {
      const store = useStore()
      const selectedFlight = ref<number | null>(null)
      const selectedHotel = ref<number | null>(null)
      const selectedActivity = ref<number | null>(null)
  
      // Sample data
      const flights = ref<any[]>([
        { id: 1, branch: 'Airline A', price: 120 },
        { id: 2, branch: 'Airline B', price: 150 },
        { id: 3, branch: 'Airline C', price: 200 }
      ])
  
      const hotels = ref<any[]>([
        { id: 1, name: 'Hotel X', price: 100 },
        { id: 2, name: 'Hotel Y', price: 130 },
        { id: 3, name: 'Hotel Z', price: 90 }
      ])
  
      const activities = ref<any[]>([
        { id: 1, name: 'City Tour', price: 50 },
        { id: 2, name: 'Museum Visit', price: 30 },
        { id: 3, name: 'Beach Day', price: 40 }
      ])
  
      const makeBooking = async () => {
        // Mock API request
        const bookingData = {
          userId: store.state.user.id,
          flightId: selectedFlight.value,
          hotelId: selectedHotel.value,
          activityId: selectedActivity.value
        }
  
        console.log('Booking Data:', bookingData)
        // In a real-world scenario, you would make a POST request here.
        
        alert('Booking successful!')
      }
  
      return {
        selectedFlight,
        selectedHotel,
        selectedActivity,
        flights,
        hotels,
        activities,
        makeBooking
      }
    }
  })
  </script>
  