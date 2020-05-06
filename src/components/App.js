import React, { Component } from 'react';
import shortid from 'shortid';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: '111', number: '227-91-26' },
      { id: 'id-6', name: '1111', number: '227-91-26' },
      { id: 'id-7', name: '1112', number: '227-91-26' },
      { id: 'id-8', name: '1113', number: '227-91-26' },
      { id: 'id-9', name: '1114', number: '227-91-26' },
      { id: 'id-10', name: '1115', number: '227-91-26' },
    ],
    filter: '',
  };

  saveContact = ({ name, number }) => {
    const contact = { name, number, id: shortid.generate() };
    const { contacts } = this.state;
    const checkedName = contacts.find(contact => name === contact.name);
    const inputNumber = contacts.find(contact => number === '');
    const inputName = contacts.find(contact => name === '');

    if (checkedName) {
      return alert(`${name} is already in contacts`);
    }
    if (inputNumber || inputName) {
      return alert(`field is empty`);
    }

    this.setState(state => ({ contacts: state.contacts.concat(contact) }));
  };
  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };
  filterReturn() {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  }
  removeContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterView = this.filterReturn();

    return (
      <div>
        <h1>Phonebook</h1>
        <AddContact saveContact={this.saveContact} />
        <h2>Contact</h2>
        {contacts.length >= 2 && (
          <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        )}
        {filterView.length > 0 ? (
          <ContactList
            contacts={filterView}
            onRemoveContact={this.removeContact}
          />
        ) : (
          contacts.length !== 0 && (
            <ContactList
              contacts={contacts}
              onRemoveContact={this.removeContact}
            />
          )
        )}
      </div>
    );
  }
}
