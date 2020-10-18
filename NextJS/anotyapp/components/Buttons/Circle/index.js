import { cricle } from '../styles';

export default function Button({ children, onClick }) {
  return (
    <>
      <button>{children}</button>
      <style jsx>{cricle}</style>
    </>
  );
}
