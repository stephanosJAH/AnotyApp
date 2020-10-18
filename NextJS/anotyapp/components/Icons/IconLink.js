import * as React from 'react';

export default function Link(props) {
  return (
    <svg height={21} width={21} viewBox='0 0 21 21' {...props}>
      <g
        fill={props.fill}
        fillRule='evenodd'
        stroke='#2a2e3b'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M9.5 11.5c.97 1.367 3.011 1.127 4.011 0l1.989-2c1.124-1.228 1.164-2.814 0-4-1.136-1.157-2.864-1.157-4 0l-2 2' />
        <path d='M11.498 10.569c-.97-1.367-3-1.197-4-.07l-2 1.975c-1.124 1.228-1.164 2.839 0 4.025 1.136 1.157 2.865 1.157 4 0l2-2' />
      </g>
    </svg>
  );
}
