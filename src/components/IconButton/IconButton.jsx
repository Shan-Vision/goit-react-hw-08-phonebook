import PropTypes from 'prop-types';
import { StyledButton } from './IconButton.styled';

const IconButton = ({ children, onClick, disabled }) => (
  <StyledButton type="button" disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propsTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default IconButton;
