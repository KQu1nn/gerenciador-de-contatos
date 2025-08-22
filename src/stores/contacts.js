import { defineStore } from "pinia";
import { ref } from 'vue';

const API_URL = 'http://localhost:3333/contacts'

export const useContactsStore = defineStore("contacts", () => {
    const contacts = ref([]);
    async function fetchContacts() {
        const res = await fetch(API_URL);
        contacts.value = await res.json();
    }

    async function newContact(name, email, phone) {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone
            })
        });

        const createdContact = await res.json();

        contacts.value.push(
            createdContact
        );
        console.log(contacts.value)
    }

    return { contacts, fetchContacts, newContact }
})
