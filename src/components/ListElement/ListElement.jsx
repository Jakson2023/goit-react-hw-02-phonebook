import { ContactWrapper } from 'components/Phonebook.styled';
import { ButtonDel } from 'components/Phonebook.styled';
export const ListElement = ({ element, onDelete }) => {
  return (
    <ContactWrapper>
      <li>
        {element.name}: {element.number}
      </li>
      <ButtonDel onClick={() => onDelete(element.id)}>delete </ButtonDel>
    </ContactWrapper>
  );
};
