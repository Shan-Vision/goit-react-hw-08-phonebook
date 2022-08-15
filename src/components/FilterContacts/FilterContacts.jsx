import { FilterBox, FilterLabel, FilterInput } from './FilterContacts.styled';
import { useDispatch } from 'react-redux';
import { filterByName } from 'redux/contactsSlice';

function FilterContacts() {
  const dispatch = useDispatch();

  const onChange = event => {
    const value = event.target.value;
    dispatch(filterByName(value));
  };

  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput onChange={onChange} />
    </FilterBox>
  );
}

export default FilterContacts;
