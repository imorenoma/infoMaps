<template>
  <div class="max-w-screen-xl mx-auto px-5">
    <login-form></login-form>
    <register-form></register-form>
  </div>
</template>


<script>
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'

export default{
  components:{
    LoginForm,
    RegisterForm
  }
};

</script>