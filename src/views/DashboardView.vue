<template>
  <div v-if="user">
    <h2>Welcome, {{ user.username }}</h2>
    <div>
      <h3>Your Bookings</h3>
      <ul>
        <li v-for="booking in bookings" :key="booking.id">
          <p>Booking ID: {{ booking.id }} | Status: {{ booking.status }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const user = store.getters.getUser
    const bookings = ref<any[]>([])

    // Sample bookings data
    bookings.value = [
      { id: 1, status: 'confirmed' },
      { id: 2, status: 'pending' },
      { id: 3, status: 'cancelled' }
    ]

    return {
      user,
      bookings
    }
  }
})
</script>
