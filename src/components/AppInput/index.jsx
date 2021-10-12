import { InputWrapper, GenderWrapper } from './styles';

export function AppInput({
  label,
  inputType,
  inputName,
  inputId,
  inputValue,
  placeholder,
  isRequired,
  isPhotoSelected,
  isDefaultChecked,
  handleChange,
}) {
  if (inputType === 'file')
    return (
      <InputWrapper isPhotoSelected={isPhotoSelected}>
        <label htmlFor={inputId} className="fileLabel">
          {label}
        </label>
        <input
          type="file"
          accept="image/*"
          aria-label="Upload image"
          name={inputName}
          id={inputId}
          style={{ display: 'none' }}
          onChange={handleChange}
          required={isRequired}
        />
      </InputWrapper>
    );

  if (inputType === 'radio') {
    return (
      <GenderWrapper>
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          value={inputValue}
          onChange={handleChange}
          defaultChecked={isDefaultChecked}
        />
        <label htmlFor={inputId}>{label}</label>
      </GenderWrapper>
    );
  }

  return (
    <InputWrapper>
      <label htmlFor={inputId} className="defaultLabel">
        {label}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputId}
        placeholder={placeholder}
        required={isRequired}
        onChange={handleChange}
      />
    </InputWrapper>
  );
}
