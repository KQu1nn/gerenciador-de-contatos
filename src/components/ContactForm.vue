<template>
    <div class="fixed inset-0 w-full min-h-full flex items-center justify-center bg-black/70">
        <form @submit.prevent="addContact" class=" w-[430px] h-[430px] p-5 rounded-lg bg-white flex flex-col gap-8">
            <div class="flex flex-row justify-between">
                <h2 class="text-xl font-medium text-blue-500">Adicionar Contato</h2>
                <X @click="closeBtn" size="17" class="cursor-pointer" />
            </div>
            <div class="flex flex-col text-md gap-3">
                <label class="flex flex-col text-sm gap-2">
                    <p class="text-gray-800 font-bold">Nome</p>
                    <input v-model="name" type="text" placeholder="Digite o nome completo" class="border border-gray-200/50 rounded-lg px-3 py-2.5 outline-blue-500 ">
                </label>
                <label class="flex flex-col text-sm gap-2">
                    <p class="text-gray-800 font-bold">Email</p>
                    <input v-model="email" type="email" placeholder="email@email.com" class="border border-gray-200/50 rounded-lg px-3 py-2.5 outline-blue-500">
                </label>
                <label class="flex flex-col text-sm gap-2">
                    <p class="text-gray-800 font-bold">Telefone</p>
                    <input v-model="phone" type="text" placeholder="(99) 9999-9999" class="border border-gray-200/50 rounded-lg px-3 py-2.5 outline-blue-500">
                </label>
            </div>
            <div class="flex md:flex-row items-center justify-between">
                <button class="bg-white text-black border border-gray-200/50 px-15 py-2 rounded-lg cursor-pointer">Cancelar</button>
                <button class="bg-gradient-to-r from-blue-600 to-violet-500 text-white px-15 py-2 rounded-lg cursor-pointer">Adicionar</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { X } from 'lucide-vue-next';
import { useContactsStore } from '@/stores/contacts';

const name = ref('');
const email = ref('');
const phone = ref('');
const contactsStore = useContactsStore();

const emit = defineEmits(["closeForm"]);
const error = ref('Não foi possivel adicionar Contato');
const sucess = ref('Contato adicionado com sucesso!');
function addContact() {
    if(!name.value || !email.value || !phone.value) {
        console.log(error)
        return
    }
    contactsStore.newContact(
        name.value,
        email.value,
        phone.value
    );
    emit("closeForm");
    resetFields();
    console.log(sucess);
}

function resetFields() {
    name.value = '',
    email.value = '',
    phone.phone = ''
}

function closeBtn() {
    emit("closeForm");
}
</script>