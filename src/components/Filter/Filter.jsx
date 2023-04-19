import { useDispatch } from 'react-redux';
import { InputContainer } from './Filter.styled';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({target: {value}}) => {
    dispatch(filter(value));
  }

  return (
    <InputContainer>
      Find contacts by name
      <input type="text" onChange={handleFilter} />
    </InputContainer>
  );
};
