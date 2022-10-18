import React from 'react';
import PropTypes from 'prop-types';
import s from './contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={s.list} key={id}>
      {name}: {number}
      <button className={s.button} onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Contact;
