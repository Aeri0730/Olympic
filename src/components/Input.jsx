import PropTypes from "prop-types";
import styled from "styled-components";

const Input = ({ label, type, name, value, onChangeFunc }) => {
  return (
    <OptionsWrap>
      <InputWrap>
        <Label htmlFor={name}>{label}</Label>
        <InputField
          type={type}
          value={value}
          id={name}
          onChange={onChangeFunc}
          name={name}
        />
      </InputWrap>
    </OptionsWrap>
  );
};

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
`;
export const OptionsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  height: 32px;
  border-radius: 4px;
  border: 1px solid black;
  padding: 0 8px;
`;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
