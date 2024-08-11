import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p>
          <FaUser className={css.contactIcon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={css.contactIcon} />
          {contact.number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
