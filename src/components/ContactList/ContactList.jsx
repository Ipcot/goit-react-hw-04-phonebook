import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { WarningMessage, ContactsListUL } from './ContactList.styled';

export const ContactList = ({ filteredName, value, onDeleteContact }) => {
  return (
    <ContactsListUL>
      {filteredName.length === 0 && value && (
        <WarningMessage>No such contact Name</WarningMessage>
      )}
      {filteredName.length === 0 && value === '' && (
        <WarningMessage>Contacts list empty</WarningMessage>
      )}

      {filteredName.length > 0 &&
        filteredName.map(item => {
          return (
            <ContactItem
              item={item}
              key={item.id}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ContactsListUL>
  );
};

ContactList.propTypes = {
  filteredName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  value: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
