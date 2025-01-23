import styled from "styled-components";
import PropTypes from "prop-types";

function Button({ text, type, onClickFunc }) {
  return (
    <StyledButton type={type} onClick={onClickFunc}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.type === "warn" ? "red" : "yellow")};
  color: ${(props) => (props.type === "warn" ? "white" : "black")};
  height: 43px;
  width: 140px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10 12px;
  font-weight: 700;
  font-size: 14px;
  margin-left: 5px;
  align-self: center;
`;
export const ButtonWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  align-items: end;
`;
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "warn"]),
  onClickFunc: PropTypes.func.isRequired,
};

export default Button;
