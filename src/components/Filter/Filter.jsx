import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { Box } from 'components/Box/Box.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Box textAlign="center" colors={p => p.theme.colors.black} as="p">
        Find contacts by name
      </Box>
      <Input
        autoComplete="off"
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
