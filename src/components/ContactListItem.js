import React from 'react';
import propTypes from 'prop-types';

function ContactListItem({ name, number, onRemove }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.number.isRequired,
};

export default ContactListItem;
