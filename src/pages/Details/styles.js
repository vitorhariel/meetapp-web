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

    aside {
      display: flex;

      button {
        display: flex;
        align-items: center;
        margin: 5px 0;
        padding: 10px;
        width: 120px;
        justify-content: center;
        border: 0;
        border-radius: 4px;
        background: #4dbaf9;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.04, '#4DBAF9')};
        }

        & + button {
          margin-left: 15px;
          background: #f94d6a;

          &:hover {
            background: ${darken(0.04, '#F94D6A')};
          }
        }

        svg {
          margin-right: 5px;
        }
      }
    }
  }

  p {
    margin-top: 15px;
    line-height: 24px;
  }

  footer {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    opacity: 0.6;

    address {
      font-style: normal;
    }
  }
`;

export const BannerImage = styled.img`
  margin-top: 30px;
  width: 100%;
  height: 300px;
`;
