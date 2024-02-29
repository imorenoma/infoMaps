<template>
    <div>
      <h1>Registro</h1>
      <form @submit.prevent="register">
        <label for="email">Correo:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
  
        <label for="radius">Seleccione sus filtros favoritos</label>
        <select id="radius" v-model="radius" required>
          <option value="">Ocio</option>
          <option value="1">Restaurantes</option>
          <option value="2">Restaurantes baratos</option>
          <option value="3">Ocio asequible</option>
        </select>
  
        <button type="submit">Registrarse</button>
      </form>
  </div>
</template>
  
<script>
  import bcrypt from 'bcrypt';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        radius: '',
      };
    },
    methods: {
      async register() {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        try {
          const response = await axios.post('http://localhost:5000/app/register', {
            email: this.email,
            password: hashedPassword,
            radius: this.radius,
          });
  
          if (response.status === 200) {
            this.$router.push('/login');
          }
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>