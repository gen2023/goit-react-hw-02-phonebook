import React from 'react';
import propTypes from 'prop-types';

function ContactsLi({ name, number, remove }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={remove}>
        Delete
      </button>
    </li>
  );
}

ContactsLi.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default ContactsLi;
