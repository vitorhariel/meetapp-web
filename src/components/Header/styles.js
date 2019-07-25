import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  img {
    width: 48px;
    height: 48px;
  }

  aside {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      line-height: 20px;

      strong {
        color: #000;
        font-size: 14px;
      }

      a {
        color: #999999;
        font-size: 14px;
        text-align: right;
      }
    }
  }

  button {
    margin: 5px 0;
    padding: 15px;
    border: 0;
    border-radius: 4px;
    background: #4680ff;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#4680ff')};
    }
  }
`;
