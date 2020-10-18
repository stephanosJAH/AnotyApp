import css from 'styled-jsx/css';

import { colors } from '../../styles/theme';

export const normal = css`
  button {
    align-items: center;
    display: flex;
    background: ${colors.black};
    color: ${colors.white};
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    padding: 8px 24px;
    transition: opacity 0.3s ease;
    font-weight: 600;
  }

  button > :global(svg) {
    margin-right: 8px;
  }

  button:hover {
    opacity: 0.9;
  }
`;

export const cricle = css`
  button {
    align-items: center;
    display: flex;
    background: ${colors.black};
    color: ${colors.white};
    border: 0;
    border-radius: 9999px;
    cursor: pointer;
    padding: 8px 8px;
    transition: opacity 0.3s ease;
  }

  button:hover {
    opacity: 0.9;
  }
`;
