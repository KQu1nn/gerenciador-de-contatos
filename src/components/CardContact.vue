<template>
    <div
        @mouseenter="hoverId = props.contact.id" 
        @mouseleave="hoverId = null"
        class="w-90 min-h-44 flex flex-col gap-3 bg-white p-5 border border-gray-300 rounded-lg">
        <div class="flex flex-row justify-between gap-2">
            <div class="flex flex-row items-center gap-3">
                <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-500">
                    <User color="white" size="25" />
                </div>
                <div>
                    <h2 class="text-lg font-medium">{{ props.contact.name }}</h2>
                    <p class="text-sm text-gray-500">Adicionado em <br> 22/08/2025</p>
                </div>
            </div>
            <div  v-if="hoverId === props.contact.id" class="flex flex-row gap-3">
                <div @click="editContact(props.contact)" class="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg">
                    <Edit size="20"/>
                </div>
                <div @click="deleteContact(props.contact.id)" class="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white rounded-lg">
                    <Trash size="20"/>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <p class="flex flex-row gap-2 items-center text-sm text-gray-500">
                <span>
                    <Mail size="15" />
                </span>
                {{ props.contact.email }}
            </p>
            <p class="flex flex-row gap-2 items-center text-sm text-gray-500">
                <span>
                    <Phone size="15" />
                </span>
                {{ props.contact.phone }}
            </p>
        </div>
    </div>
</template>
<script setup>
import { User, Mail, Phone, Trash, Edit } from 'lucide-vue-next';
import { useContactsStore } from '@/stores/contacts';
import { ref } from 'vue';

const contactsStore = useContactsStore();
const hoverId = ref(null);

const emit = defineEmits(["openForm"]);

const props = defineProps({
    contact: {
        type: Object,
        required: true
    }
});

function deleteContact(id) {
    contactsStore.delContact(id);
}
function editContact(contact) {
    emit("openForm", contact);
}
</script>