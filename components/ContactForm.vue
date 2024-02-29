<script setup>
import { ref } from 'vue';

const form = ref(null);
const result = ref(null);
/*
onMounted(() => {
  form.value.addEventListener("submit", function (e) {
    e.preventDefault();
    form.value.classList.add("was-validated");
    if (!form.value.checkValidity()) {
      form.value.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form.value);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.value.innerHTML = "Sending...";
    result.value.style.display = "block"; // Ensure result is visible
/*
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
    .then(async (response) => {
      const jsonResponse = await response.json();
      if (response.ok) {
        result.value.classList.add("text-green-500");
        result.value.innerHTML = jsonResponse.message;
      } else {
        console.error(response);
        result.value.classList.add("text-red-500");
        result.value.innerHTML = jsonResponse.message;
      }
    })
    .catch((error) => {
      console.error(error);
      result.value.innerHTML = "Something went wrong!";
    })
    .finally(() => {
      form.value.reset();
      form.value.classList.remove("was-validated");
      setTimeout(() => {
        result.value.style.display = "none";
      }, 5000);
    });
  });
});
*/
</script>

<template>
  <form
    ref="form"
    class="w-full max-w-sm"
    novalidate
  >
  <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu feedback aquí..."></textarea>
    <Button type="submit" size="lg" block>Enviar</Button>
    <div ref="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
/* Your CSS remains unchanged */
</style>