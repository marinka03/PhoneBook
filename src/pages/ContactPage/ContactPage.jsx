import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import React from 'react';
import style from './ContactPage.module.css';

function ContactsPage() {
  return (
    <div className={style.wrapper}>
      <ContactForm />
      <h2 className={style.title}>Contacts:</h2>
      <ContactList />
    </div>
  );
}

export default ContactsPage;
