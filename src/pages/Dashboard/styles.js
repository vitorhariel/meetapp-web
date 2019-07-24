import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 40px auto;

  padding: 20px;

  color: #fff;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      margin: 5px 0;
      padding: 10px;
      width: 160px;
      justify-content: center;
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

export const MeetupList = styled.ul`
  margin-top: 20px;

  button {
    display: flex;
    justify-content: space-between;
    border: 0;
    width: 100%;
    padding: 20px;
    color: #fff;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    cursor: pointer;

    & + button {
      margin-top: 10px;
    }

    strong {
      font-size: 18px;
    }

    time {
      opacity: 0.6;
      display: flex;
      align-items: center;
    }
  }
`;
