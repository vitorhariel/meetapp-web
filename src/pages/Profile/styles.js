import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 860px;
  margin: 40px auto;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-bottom: 30px;
  }

  input {
    margin: 5px 0;
    padding: 15px;
    border: 0;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: #fff;
    opacity: 0.2;

    margin: 15px 0px;
  }

  span {
    color: #f42c3b;
    text-align: left;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    padding: 15px;
    border: 0;
    border-radius: 4px;
    background: #f94d6a;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#F94D6A')};
    }

    svg {
      margin-right: 5px;
    }
  }

  a {
    margin-top: 8px;
    color: #fff;
  }
`;
