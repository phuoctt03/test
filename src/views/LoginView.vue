<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit" :disabled="loading">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')
    const loading = ref(false)
    const error = ref('')
    const store = useStore()
    const router = useRouter()

    const login = async () => {
      loading.value = true
      error.value = '' // Clear any previous errors

      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ email: email.value, password: password.value }),
          headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()

        if (data.token) {
          store.dispatch('login', data.token)
          router.push('/dashboard')
        } else {
          error.value = 'Invalid credentials or server error.'
        }
      } catch (err) {
        error.value = 'An error occurred. Please try again.'
      } finally {
        loading.value = false
      }
    }

    return {
      email,
      password,
      login,
      loading,
      error
    }
  }
})
</script>

<style scoped>
.error {
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
