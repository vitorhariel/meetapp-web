import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 40px auto;

  padding: 20px;

  ${props =>
    props.loading === 1 &&
    css`
      div {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 200px;
      }
    `}

  form {
    input,
    textarea {
      margin: 5px 0;
      padding: 15px;
      width: 100%;
      border: 0;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);

      color: #000;

      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    span {
      color: #f42c3b;
      text-align: left;
    }

    textarea {
      resize: none;
    }

    .react-datepicker-wrapper,
    .react-datepicker__input-container {
      width: 100%;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 5px 0;
      padding: 15px;
      border: 0;
      border-radius: 4px;
      background: #fb617f;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
        0 15px 40px rgba(166, 173, 201, 0.2);
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#fb617f')};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;
