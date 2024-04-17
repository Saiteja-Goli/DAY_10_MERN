import React, { useState } from 'react';

const ContactList = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com" },
        { id: 4, name: "Bob Brown", email: "bob@example.com" },
        { id: 5, name: "Emily Davis", email: "emily@example.com" },
        { id: 6, name: "Michael Wilson", email: "michael@example.com" },
        { id: 7, name: "Samantha Martinez", email: "samantha@example.com" },
        { id: 8, name: "David Anderson", email: "david@example.com" },
        { id: 9, name: "Emma Taylor", email: "emma@example.com" },
        { id: 10, name: "James Lee", email: "james@example.com" },
        { id: 11, name: "Olivia Garcia", email: "olivia@example.com" },
        { id: 12, name: "William Rodriguez", email: "william@example.com" },
        { id: 13, name: "Sophia Hernandez", email: "sophia@example.com" },
        { id: 14, name: "Daniel Martinez", email: "daniel@example.com" },
        { id: 15, name: "Ava Lopez", email: "ava@example.com" },
        { id: 16, name: "Alexander Gonzalez", email: "alexander@example.com" },
        { id: 17, name: "Mia Perez", email: "mia@example.com" },
        { id: 18, name: "Ethan Carter", email: "ethan@example.com" },
        { id: 19, name: "Isabella Evans", email: "isabella@example.com" },
        { id: 20, name: "Noah Parker", email: "noah@example.com" }
    ]);

    const [newContact, setNewContact] = useState({ name: "", email: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newContact.name || !newContact.email) return;
        const updatedContacts = [...contacts, { id: contacts.length + 1, ...newContact }];
        setContacts(updatedContacts);
        setNewContact({ name: "", email: "" });
    };

    return (
        <>
            <div>ContactList</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={newContact.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={newContact.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                    <button type="submit">Add Contact</button>
                </form>
            </div>

            <div>
                {contacts.map((contact) => (
                    <ul key={contact.id}>
                        <li>
                            <strong>Name:</strong> {contact.name}, <strong>Email:</strong> {contact.email}
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}

export default ContactList;
