import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Container, Tabela } from './styles'
import { CheckboxClassKey } from '@material-ui/core/Checkbox'

interface IListagem {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
}

const Dashboard: React.FC = () => {

  const [eventos, setEventos] = useState<IListagem[]>([])

  useEffect(() => {
    api.get('/events').then(response => setEventos(response.data))
  })
  console.log(eventos)

  async function handleDelete(id: string) {
    await api.delete(`/events/${id}`)
    setEventos(eventos.filter(sel => sel.id !== id))
  }

 // async function handleLike(id: string) {
  //  await api.get(`/eventparams:type) {
    
  //}

  return (
    <Container>
      <Tabela>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Local</th>
            <th>Dia</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
            {eventos.map(index => {
                return (
                  <tr key={index.id}>
                    <td> {index.nomeevento} </td>
                    <td> {index.local} </td>
                    <td> {index.diasemana} </td>
                    <td> {index.horario} </td>
                    <tr> 
                      <th><input type="checkbox" name="like" />Like</th>
                      <th> <input type="checkbox" name="dislike" />Dislike</th>
                      <button type="button" onClick={() => handleDelete(index.id)}>Remove</button>
                    </tr>
                  </tr>
                )
          })}
        </tbody>
      </Tabela>
    </Container>
    )
}
  
  

export default Dashboard
