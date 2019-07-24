import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
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
    width: 32px;
    height: 32px;
  }

  aside {
    display: flex;
    align-items: center;

    div {
      margin-right: 20px;
      line-height: 20px;

      strong {
        color: #fff;
        font-size: 14px;
      }

      p {
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
    background: #f94d6a;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#F94D6A')};
    }
  }
`;
