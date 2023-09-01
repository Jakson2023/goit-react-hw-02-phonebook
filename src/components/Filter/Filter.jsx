import { FindForm } from 'components/Phonebook.styled';

export const Filter = ({ onSearch, filter }) => {
  return (
    <FindForm>
      <input type="text" value={filter} onChange={onSearch()} />
      Find contacts by name
    </FindForm>
  );
};
