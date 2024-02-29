<script setup>

import TeamImg1 from '@/assets/img/team-img1.jpg';
import TeamImg2 from '@/assets/img/team-img2.jpg';
import TeamImg3 from '@/assets/img/team-img3.jpg';const team = [
  {
    name: "Álvaro Salinas",
    title: "Desarrolador Front-end",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "Iván Moreno",
    title: "Desarrollador Back-end",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Ernest",
    title: "Experto en GIS",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
];
</script>

<template>
  <ContainerComponent>
    <LazyNavbarComponent></LazyNavbarComponent>
    <Sectionhead>
      <template v-slot:title>About</template>
      <template v-slot:desc>We are a small passionate team.</template>
    </Sectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Nuestro objetivo es que nadie se quede en casa en sus días libres.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Somos un equipo con una gran variedad de experiencias y perfiles. 
       . Esto es lo que hace que nuestro equipo sea tan especial.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" :key="item.id" class="group">
        <div class="w-full aspect-square">
          <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
      <!-- {
        team.map((item) => (
          <div class="group">
            <div class="w-full aspect-square">
              <Image
                {...item.avatar}
                format="avif"
                alt="Team"
                class="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800"> {item.name}</h2>
              <h3 class="text-sm text-slate-500"> {item.title}</h3>
            </div>
          </div>
        ))
      } -->
    </div>
    <CtaComponent></CtaComponent>  
  </ContainerComponent>
</template>
