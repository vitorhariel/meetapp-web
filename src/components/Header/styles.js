import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  img {
    margin-top: 5px;
  }

  aside {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      line-height: 20px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
        border: 2px solid rgba(0, 0, 0, 0.1);
      }
    }

    .dropdown-content {
      position: absolute;
      display: block;
      width: 80px;
      top: 60px;
      left: calc(100% - 80px);
      border-radius: 10px;
      background: #fb617f;
      opacity: 0;
      transition: all 0.2s ease-in-out;

      padding: 5px 10px;

      &::before {
        content: '';
        position: absolute;
        left: 60%;
        top: -15px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid #fb617f;
      }

      &:hover {
        opacity: 1;
        transition: all 0.2s ease-in-out;
      }

      button {
        border: 0;
        color: #fff;
        font-weight: bold;
        background: transparent;
      }
    }

    svg:hover ~ .dropdown-content {
      opacity: 1;
      transition: all 0.2s ease-in-out;
    }
  }
`;
