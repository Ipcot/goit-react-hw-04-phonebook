import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { ContactInfo, ContactItemButton } from './ContactItem.styled';

export const ContactItem = ({
  item: { id, number, name },
  onDeleteContact,
}) => {
  return (
    <>
      <ContactInfo key={id}>
        {name}: {number}
        <ContactItemButton
          type="button"
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          <MdDelete />
          Delete
        </ContactItemButton>
      </ContactInfo>
    </>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
