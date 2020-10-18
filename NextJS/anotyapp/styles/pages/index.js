import css from 'styled-jsx/css';
import { colors } from '../theme';

export default css`
  main {
    overflow-y: hidden !important;
  }
  h1 {
    color: ${colors.primary};
    font-size: 40px;
  }
  section {
    display: grid;
    height: 100%;
    place-items: center;
    place-content: center;
  }
`;
