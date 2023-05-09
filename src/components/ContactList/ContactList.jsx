// import { render } from '@testing-library/react';
// import React, { Component } from 'react';

export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} id={contact.id}>
            {`${contact.name}: ${contact.number}`}
          </li>
        );
      })}
    </ul>
  );
};
