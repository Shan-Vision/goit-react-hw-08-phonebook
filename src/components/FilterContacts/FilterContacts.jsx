import { FilterBox, FilterInput } from './FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContact, setFilterContact } from 'redux/filtereSlice';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContact);

  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilterContact(value));
  };

  return (
    <FilterBox>
      <FilterInput
        onChange={handleChange}
        value={filter}
        placeholder="Search Name"
      />
    </FilterBox>
  );
};

export default FilterContacts;
