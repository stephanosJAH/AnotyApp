import * as React from 'react';

export const IconTags = (props) => {
  return (
    <svg height='1em' viewBox='0 0 21 21' width='1em' {...props}>
      <g fill='none' fillRule='evenodd' transform='translate(2 3)'>
        <path
          d='M11.454.954h3.586a2 2 0 012 2V6.54a1 1 0 01-.293.707L9.454 14.54a2 2 0 01-2.828 0l-3.172-3.172a2 2 0 010-2.828l7.293-7.293a1 1 0 01.707-.293z'
          stroke={props.stroke}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6.04 13.954l-.903.602a2 2 0 01-2.982-.962l-1.53-4.08a2 2 0 01.844-2.417l8.57-5.143'
          stroke={props.stroke}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect fill={props.fill} height={2} rx={1} width={2} x={13.54} y={2.454} />
      </g>
    </svg>
  );
};

export const IconLink = (props) => {
  return (
    <svg height={21} width={21} viewBox='0 0 21 21' {...props}>
      <g
        fill={props.fill}
        fillRule='evenodd'
        stroke={props.stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M9.5 11.5c.97 1.367 3.011 1.127 4.011 0l1.989-2c1.124-1.228 1.164-2.814 0-4-1.136-1.157-2.864-1.157-4 0l-2 2' />
        <path d='M11.498 10.569c-.97-1.367-3-1.197-4-.07l-2 1.975c-1.124 1.228-1.164 2.839 0 4.025 1.136 1.157 2.865 1.157 4 0l2-2' />
      </g>
    </svg>
  );
};

export const IconWrite = (props) => {
  return (
    <svg height='1em' viewBox='0 0 21 21' width='1em' {...props}>
      <g
        fill={props.fill}
        fillRule='evenodd'
        stroke={props.stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M17 4a2.121 2.121 0 010 3l-9.5 9.5-4 1 1-3.944 9.504-9.552A2.116 2.116 0 0117 4zM9.5 17.5h8M15.5 6.5l1 1' />
      </g>
    </svg>
  );
};

export const IconNews = (props) => {
  return (
    <svg height='1em' viewBox='0 0 21 21' width='1em' {...props}>
      <g
        fill={props.fill}
        fillRule='evenodd'
        stroke={props.stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M4.5 7.165h9M5.481 10.203l1-.018a1 1 0 011.019 1v.983a1 1 0 01-.981 1l-1 .018a1 1 0 01-1.019-1v-.983a1 1 0 01.981-1z' />
        <path d='M3.5 4.15h11a2 2 0 012 2v10.015h-13a2 2 0 01-2-2V6.151a2 2 0 012-2zM9.5 10.165h4M9.5 13.165h4' />
        <path d='M16 16.165a2.5 2.5 0 002.5-2.5v-6.5h-2' />
      </g>
    </svg>
  );
};

export const IconUser = (props) => {
  return (
    <svg height={21} viewBox='0 0 21 21' width={21} {...props}>
      <g
        fill={props.fill}
        fillRule='evenodd'
        stroke={props.stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(2 2)'
      >
        <circle cx={8.5} cy={8.5} r={8} />
        <path d='M14.5 13.5c-.662-2.274-3.2-3.025-6-3.025-2.727 0-5.27.869-6 3.025m6-11a3 3 0 013 3v1a3 3 0 01-6 0v-1a3 3 0 013-3z' />
      </g>
    </svg>
  );
};
