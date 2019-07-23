import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #141e30, #243b55);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin: 5px 0;
    padding: 15px;
    border: 0;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  button {
    margin: 5px 0;
    padding: 15px;
    border: 0;
    border-radius: 4px;
    background: #3b9eff;
    font-size: 16px;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#3b9eff')};
    }
  }

  a {
    margin-top: 8px;
    color: #fff;
  }
`;
