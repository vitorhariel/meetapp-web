import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;

    a:hover {
      opacity: 0.7;
    }

    img {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      background: #eee;
      border: 3px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    input {
      display: none;
    }
  }
`;
