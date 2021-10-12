import { IoArrowForwardOutline } from 'react-icons/io5';
import { Button } from './styles';

export function SubmitButton({ children }) {
  return (
    <Button type="submit">
      {children} <IoArrowForwardOutline size={26} />
    </Button>
  );
}
