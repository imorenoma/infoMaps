<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="radius">Radius</label>
          <select id="radius" v-model="radius">
            <option value="small">restaurantes</option>
            <option value="small">ocio</option>
            <option value="small">ocio barato</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        radius: ''
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post('http://localhost:5000/register', {
            email: this.email,
            password: this.password,
            radius: this.radius
          });
          console.log(response.data);
          this.$emit('close-popup')
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  <!-- TODO: refactor the code move <style> to a separate file -->
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  </style>