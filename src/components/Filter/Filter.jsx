import { useDispatch } from 'react-redux';
import { InputContainer } from './Filter.styled';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(addFilter(value));
  };

  return (
    <InputContainer>
      Find contacts by name
      <input type="text" onChange={handleFilter} />
    </InputContainer>
  );
};
