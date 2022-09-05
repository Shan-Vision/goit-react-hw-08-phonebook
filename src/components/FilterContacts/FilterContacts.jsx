import { FilterBox, FilterInput } from './FilterContacts.styled';

const FilterContacts = ({onChange: OnFilterChange}) => {
  

  return (
    <FilterBox>
      <FilterInput onChange={OnFilterChange} placeholder="Search Name" />
    </FilterBox>
  );
};

export default FilterContacts;
