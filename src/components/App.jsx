import { useState, useEffect } from 'react';

import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import { FaAddressBook } from 'react-icons/fa6';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const handleSearchChange = input => {
    setFilter(input);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleAddContact = newContact => {
    setContacts(contacts => [newContact, ...contacts]);
  };

  return (
    <div className={css.container}>
      <h1 className={css.header}>
        <FaAddressBook className={css.headerIcon} />
        Phonebook
      </h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleSearchChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
