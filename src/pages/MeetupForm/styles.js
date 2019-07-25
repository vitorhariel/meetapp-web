import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 40px auto;

  padding: 20px;

  form {
    input,
    textarea {
      margin: 5px 0;
      padding: 15px;
      width: 100%;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
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
  }
`;
