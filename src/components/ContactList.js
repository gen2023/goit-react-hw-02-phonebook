import React from 'react';
import propTypes from 'prop-types';
import ContactsLi from './ContactsLi';

function ContactList({ contacts, removeContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsLi
          key={id}
          name={name}
          number={number}
          remove={() => removeContact(id)}
        />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: propTypes.oneOfType([
    propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
      }),
    ),
    propTypes.array,
  ]),
};

export default ContactList;
