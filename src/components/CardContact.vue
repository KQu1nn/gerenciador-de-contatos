<template>
    <div v-for="contact in contactsStore.contacts" :key="contact.id"
        @mouseenter="hoverId = contact.id" @mouseleave="hoverId = null"
        class="w-90 min-h-44 flex flex-col gap-3 bg-white p-5 border border-gray-300 rounded-lg">
        <div class="flex flex-row justify-between gap-2">
            <div class="flex flex-row items-center gap-3">
                <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-500">
                    <User color="white" size="25" />
                </div>
                <div>
                    <h2 class="text-lg font-medium">{{ contact.name }}</h2>
                    <p class="text-sm text-gray-500">Adicionado em <br> 22/08/2025</p>
                </div>
            </div>
            <div  v-if="hoverId === contact.id" class="flex flex-row gap-3">
                <div @click="editContact(contact)" class="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg">
                    <Edit size="20"/>
                </div>
                <div @click="deleteContact(contact.id)" class="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white rounded-lg">
                    <Trash size="20"/>
                </div>
                
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <p class="flex flex-row gap-2 items-center text-sm text-gray-500">
                <span>
                    <Mail size="15" />
                </span>
                {{ contact.email }}
            </p>
            <p class="flex flex-row gap-2 items-center text-sm text-gray-500">
                <span>
                    <Phone size="15" />
                </span>
                {{ contact.phone }}
            </p>
        </div>
    </div>
</template>
<script setup>
import { User } from 'lucide-vue-next';
import { Mail } from 'lucide-vue-next';
import { Phone } from 'lucide-vue-next';
import { Trash } from 'lucide-vue-next';
import { Edit } from 'lucide-vue-next';
import { useContactsStore } from '@/stores/contacts';
import { ref, onMounted } from 'vue';

const contactsStore = useContactsStore();
const hoverId = ref(null);

const emit = defineEmits(["openForm"]);

function deleteContact(id) {
    contactsStore.delContact(id);
}
function editContact(contact) {
    emit("openForm", contact);
}

onMounted(() => {
    contactsStore.fetchContacts();
})
</script>