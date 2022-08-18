import { FilterBox, FilterLabel, FilterInput } from './FilterContacts.styled';
// import { useDispatch } from 'react-redux';
import { useFindContactByNameMutation } from 'redux/contactsSlice';

function FilterContacts() {
  const [findContactByName, { data }] = useFindContactByNameMutation();

  const onChange = event => {
    const value = event.target.value;
    findContactByName(value);
  };

  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput onChange={onChange} />
    </FilterBox>
  );
}

export default FilterContacts;
