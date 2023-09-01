import { ListElement } from 'components/ListElement/ListElement';
export const ContactList = ({ onFilter, onDelete }) => {
  return (
    <ul>
      {onFilter.map(contact => (
        <ListElement key={contact.id} element={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
