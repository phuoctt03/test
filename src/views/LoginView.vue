
<template>
  <div class="loginScreen">
    <div class="signIn">
      <h1>Login</h1>
      <FloatLabel variant="on">
        <InputText id="username" v-model="userName" />
        <label for="username">Username or Email</label>
      </FloatLabel>
      <br>
      <FloatLabel variant="on">
          <Password v-model="passWord" inputId="password" toggleMask />
          <label for="password">Password</label>
      </FloatLabel>
      <p>Dont have account? <a href="signup">SignUp</a></p>
      <Button type="submit" severity="secondary" label="Login" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
const userName = ref(null);
const passWord = ref(null);




</script>
<style scoped>
.loginScreen{
  background-image: url('https://cdn.pixabay.com/photo/2015/12/06/20/10/christmas-bauble-1079926_640.jpg');
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
}
.signIn{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.795);
  height: 50%;
  width: 20%;
  border-radius: 50px;
}
h1{
  font-size: 60px;
  margin-bottom: 15%;
}
#username{
  width: 261px;
}
p{
  margin-top: 10%;
  font-size: 20px;
}
a{
  text-decoration: none;
}
button{
  margin-bottom: 20%;
}
</style>
<!-- 

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Password from 'primevue/password';


export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')
    const loading = ref(false)
    const error = ref('')

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
</style> -->
