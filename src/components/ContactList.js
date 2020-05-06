import React from 'react';
import propTypes from 'prop-types';
import ContactListItem from './ContactListItem';

function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemoveContact(id)}
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
        number: propTypes.number.isRequired,
      }),
    ),
    propTypes.array,
  ]),
};

export default ContactList;
