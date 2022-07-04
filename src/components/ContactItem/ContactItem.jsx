export const ContactItem = ({ item, onDeleteContact }) => {
  return (
    <>
      <li key={item.id}>
        {item.name}: {item.number}
        <button
          type="button"
          onClick={() => {
            onDeleteContact(item.id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};
