import React, { useEffect, useState } from 'react'
import { Form } from './styles'
import api from '../../services/api'
import { useRouteMatch } from 'react-router'

interface EventosParametros {
  id: string
}

interface Cadastro {
    nomeevento: string;
    local: string;
    diasemana: string;
    horario: string;
}


const New: React.FC = () => {
  const { params } = useRouteMatch<EventosParametros>()

  const [eventos, setEventos] = useState<Cadastro[]>([])
  const [id, setID] = useState('')
  const [nomeevento, setNome] = useState('')
  const [local, setLocal] = useState('')
  const [diasemana, setDiaSemana] = useState('')
  const [horario, setHorario] = useState('')


  useEffect(() => {
    async function loadData() {
      const dados = await api.get(`/events/${params.id}`).then(response => response.data)
      console.log(dados)
      if (dados) {
        setID(dados.id)
        setNome(dados.nomeevento)
        setLocal(dados.local)
        setDiaSemana(dados.diasemana)
        setHorario(dados.horario)
      } else {
        setEventos([])
      }
    }
    loadData()
  }, [])

  async function handleAddSelecoes(event: any) {
    event.preventDefault()

    const { target: form } = event

    const novoCadastro = {
      nomeevento: form.nomeevento.value,
      local: form.local.value,
      diasemana: form.diasemana.value,
      horario: form.horario.value,
    }

    if (id) {
      await api.put(`/events/${id}`, novoCadastro)
      alert('Dados alterados com sucesso!')
    } else {
      await api.post('/events', novoCadastro)
      alert('Dados incluidos com sucesso!')
    }

    setEventos([...eventos, novoCadastro]) // IMUTABILIDADE
    setNome('')
    setLocal('')
    setDiaSemana('')
    setHorario('')
  }

  return (
    <Form onSubmit={handleAddSelecoes}>
       <input type='text' name='nomeevento' value={nomeevento}
        onChange={e => setNome(e.target.value)} placeholder='Nome do evento' />
      <input type='text' name='local' value={local}
        onChange={e => setLocal(e.target.value)} placeholder='Local' />
      <input type='text' name='diasemana' value={diasemana}
        onChange={e => setDiaSemana(e.target.value)} placeholder='Dia da semana' />
      <input type='text' name='horario' value={horario}
        onChange={e => setHorario(e.target.value)} placeholder='Horário' />
      <button type='submit'>Enviar</button>
    </Form>
  )
  
}

export default New
