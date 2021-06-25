import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 900px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 2px solid #757C88;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    margin-left: 2px;
    margin-right: 2px;
    width: 470px;
  }

  input[type=text] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
  }

  button {
    padding: 10px 20px;
    width: 20%;
    margin-bottom: 10px;
    margin-top: 4px;
    border-radius: 4px;
    border: 0;
    background: #241571;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`
