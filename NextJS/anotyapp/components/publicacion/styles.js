import css from 'styled-jsx/css';

export default css`
  article {
    position: relative;
    display: flex;
    padding: 14px;
    text-align: left;
    transition: all 0.1s linear;
    border-bottom: 1px solid #f1f1f1;
  }
  article:hover {
    background: #efefef9e;
  }

  header {
    padding-bottom: 4px;
  }

  .description {
    padding-bottom: 10px;
  }

  .preview {
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  .box-img {
    display: flex;
  }

  .box-img img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  .box-description {
    padding: 8px;
    place-items: center;
    place-content: center;
    font-size: small;
    text-align: left;
  }
`;
