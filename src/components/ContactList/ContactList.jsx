import { ContactItem } from 'components/ContactItem';

export const ContactList = ({ filteredName, onDeleteContact }) => {
  return (
    <ul>
      {filteredName.map(item => {
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
