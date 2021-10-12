import { Textarea, Wrapper } from './styles';

export function AppTextarea({ label, labelId, placeholder, handleChange }) {
  return (
    <Wrapper>
      <label htmlFor={labelId}>{label}</label>
      <Textarea
        id={labelId}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}
