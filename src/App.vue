<template>
  <div>
    <Hero @openForm="toggleActive" />
    <ContactArea @openForm="toggleActive" />
    <ContactForm 
      v-if="isActive"
      @closeForm="toggleActive"
      />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Hero from './components/Hero.vue';
import ContactArea from './components/ContactArea.vue';
import ContactForm from './components/ContactForm.vue';

const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>

<style>
*{
  box-sizing: border-box;
}
</style>