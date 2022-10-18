import React from 'react';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

const Contacts = () => {
  // debugger;
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {filteredContacts.map(({ name, phone, id }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={phone}
            id={id}
            deleteContact={deleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

export default Contacts;
