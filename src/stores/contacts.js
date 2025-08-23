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
    async function delContact(id) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        contacts.value = contacts.value.filter(contact => contact.id !== id);
    }
    async function editContact(id, updateData) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        });

        const updateContact = await res.json();

        const index = contacts.value.findIndex(contact => contact.id === id);
        if(index !== -1) {
            contacts.value[index] = updateContact;
        }
    }

    return { contacts, fetchContacts, newContact, delContact, editContact }
})
