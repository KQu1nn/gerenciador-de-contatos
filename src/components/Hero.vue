<template>
    <div class="w-full h-auto py-18 px-15 flex flex-col items-center gap-5 justify-center bg-gradient-to-r from-blue-600 to-violet-500 text-white">
        <div class="flex flex-row gap-3 items-center">
            <Contact color="white" size="50" />
            <Sparkles color="white" size="30" />
        </div>
        <div class="flex flex-col items-center gap-5 text-center">
            <h1 class="text-5xl font-bold">Gerenciador de Contatos</h1>
            <p class="text-xl text-gray-200">Organize e gerencie todos os seus contatos em um só lugar. Adicione, edite <br> e busque contatos de forma simples e eficiente.</p>
            <button @click="addContact" class="text-blue-600 flex flex-row gap-5 items-center bg-white cursor-pointer px-7 py-2 rounded-md">
                <Plus size="18"/>
                <p class="text-lg font-medium">Adicionar Contato</p>
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Contact } from 'lucide-vue-next';
import { Sparkles } from 'lucide-vue-next';
import { Plus } from 'lucide-vue-next';

const emit = defineEmits(["openForm"]);

function addContact() {
    emit("openForm")
}
</script>