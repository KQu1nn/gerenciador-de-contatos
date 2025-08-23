import { defineStore } from "pinia";
import { ref } from 'vue';

const API_URL = 'http://localhost:3333/contacts'

export const useContactsStore = defineStore("contacts", () => {
    const contacts = ref([]);
    const isActive = ref(false);
    const searchResults = ref([]);
    async function fetchContacts() {
        const res = await fetch(API_URL);
        contacts.value = await res.json();
        searchResults.value = contacts.value;
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
        searchResults.value = contacts.value;
        console.log(contacts.value)
    }
    async function delContact(id) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        contacts.value = contacts.value.filter(contact => contact.id !== id);
        searchResults.value = searchResults.value.filter(contact => contact.id !== id);
    }
    async function editContact(id, updateData) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        });

        const updatedContact = await res.json();

        const updateArray = (array) => {
            const index = array.findIndex(contact => contact.id === id);
            if (index !== -1) {
                array[index] = updatedContact;
            }
        };

        updateArray(contacts.value);
        updateArray(searchResults.value);
    }
    async function searchContacts(search) {
        if(!search) {
            searchResults.value = contacts.value;
            isActive.value = contacts.value.length === 0;
            return;
        }
        
        const results = contacts.value.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) ||
            item.phone.toLowerCase().includes(search.toLowerCase())
        );
        
        searchResults.value = results;
        isActive.value = results.length === 0;
    }
    return { contacts, fetchContacts, newContact, delContact, editContact, searchContacts, searchResults, isActive }
})
