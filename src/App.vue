<template>
  <div>
    <Hero @openForm="openForm" />
    <ContactArea @openForm="handleOpenForm" />
    <ContactForm 
      v-if="isActive"
      :isEdit="isEdit"
      :contact="contactToEdit"
      @closeForm="closeForm"
      />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Hero from './components/Hero.vue';
import ContactArea from './components/ContactArea.vue';
import ContactForm from './components/ContactForm.vue';

const isActive = ref(false);
const isEdit = ref(false);
const contactToEdit = ref(null);

function handleOpenForm(contact) {
  if (contact) {
    openEditForm(contact)   
  } else {
    openForm()
  }
}

function closeForm() {
  isActive.value = false
}
function openForm() {
  isEdit.value = false;
  contactToEdit.value = null;
  isActive.value = true;
}
function openEditForm(contact) {
  isEdit.value = true;
  contactToEdit.value = contact;
  isActive.value = true;
}
</script>

<style>
*{
  box-sizing: border-box;
}
</style>