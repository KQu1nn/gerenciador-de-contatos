<template>
    <div class="md:px-30 bg-[#fbfaff]">
        <div class="flex flex-row justify-between items-center pt-15 pb-5 ">
            <div class="flex flex-col gap-2">
                <h2 class="text-2xl font-bold">Meus Contatos</h2>
                <p class="text-gray-600">{{ contactsStore.contacts.length }} contatos cadastrados</p>
            </div>
            <button @click="addContact"
                class="text-white flex flex-row gap-3 items-center bg-gradient-to-r from-blue-600 to-violet-500 cursor-pointer px-4 py-2 rounded-md">
                <Plus size="16" />
                <p class="text-md font-medium">Novo Contato</p>
            </button>
        </div>
        <div class="w-full min-h-72 py-10">
            <div class=" flex md:flex-row flex-wrap gap-3">
                <CardContact />
            </div>

            <div v-if="active" class="w-full flex flex-col gap-2 items-center justify-center">
                <Users size="65" class="text-gray-600" />
                <p class="font-medium text-lg gray-900">Nenhum contato encontrado</p>
                <p class="text-gray-500">Adicione seu primeiro contato para começar!</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { Plus } from 'lucide-vue-next';
import { Users } from 'lucide-vue-next';
import CardContact from './CardContact.vue';
import { useContactsStore } from '@/stores/contacts';

const contactsStore = useContactsStore();
const active = computed(() => contactsStore.contacts.length === 0)

const emit = defineEmits(["openForm"]);

function addContact() {
    emit("openForm")
}

onMounted(() => {
    contactsStore.fetchContacts();
})
</script>