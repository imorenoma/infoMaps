<script setup>
import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
  <ContainerComponent>
    <LazyNavbarComponent></LazyNavbarComponent>
    <Sectionhead>
      <template v-slot:title>Contacto</template>
      <template v-slot:desc>Te ayudamos!</template>
    </Sectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Equipo CitySights
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Rellena el formulario y te contactamos!
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>Av. de las Arcas del Agua, 2, 28905 Getafe, Madrid</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              href="mailto:correo@gmail.com"
              >correo@gmail.com</a
            >
          </div>
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+1 (234) 5678 999</a
            >
          </div> -->
        </div>
      </div>
      <div>
        <ContactForm></ContactForm>
      </div>
    </div>
    <CtaComponent></CtaComponent>
  </ContainerComponent>
</template>
