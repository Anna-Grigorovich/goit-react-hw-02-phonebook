// import { render } from '@testing-library/react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContat }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} id={contact.id}>
            {`${contact.name}: ${contact.number}`}
            <button onClick={() => onDeleteContat(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContat: PropTypes.func.isRequired,
};
// ContactList.defaultProps = {
//   contacts: [],
// };
