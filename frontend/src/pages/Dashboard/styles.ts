import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 50%;

  ul li {
    background: #cfd9dc;
    border-bottom: 1px solid #cfd9dc;
    margin-top: 30px;
    list-style: none;
  }

ul li a {
    text-decoration: none;
  }

  button {
    border: 0;
    background: #241571;
    color: #fff;
    font-weight: bold;
    margin-left: 5px;
    box-shadow: 0 30px 40px rgba(0,0,0,.1);
    margin-top: 10px;
  }
`

export const Tabela = styled.table`
    margin-top: 2rem;
    background-color: #FFFFFF;
    box-shadow: 0 30px 40px rgba(0,0,0,.1);
    padding: 10px;
    border-collapse: separate;
    border-spacing: 5px;

    tr td {
      border: 1px solid #ddd;
      padding: 5px 15px 5px 15px;
      text-align: center;
      border-collapse: collapse;
      box-shadow: 0 30px 40px rgba(0,0,0,.1);
      color: #241571;
      line-height: 1.2;;
    }

    td:hover {background-color: #bcacd4;}

    input[type='checkbox'] {
      margin-top: 10px;
    }

    th {
      padding: 5px 15px 5px 15px;
      color: #241571;
    }

`;
