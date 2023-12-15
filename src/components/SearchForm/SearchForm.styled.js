import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    flex-grow: 1;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
