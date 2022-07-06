import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { WarningMessage } from './ContactList.styled';

export const ContactList = ({ filteredName, value, onDeleteContact }) => {
  return (
    <ul>
      {filteredName.length === 0 && value && (
        <WarningMessage>No such contact Name</WarningMessage>
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
    </ul>
  );
};

ContactList.propTypes = {
  filteredName: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  value: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
