import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import style from './ContactItem.module.css';

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
    <div className={style['item-wrap']}>
    <span>
        <b>{name + ': '}</b>
      </span>
      {number}
      <button
        className={style.delete__btn}
        type="reset"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
     
    </>
  );
}

export default ContactItem;
