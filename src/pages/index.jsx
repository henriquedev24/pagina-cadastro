import { useEffect, useState, useRef } from 'react'
import './style.css'
import Lixeira from '../../assets/lixeira.svg'
import api from '../../services/api'



function Form() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
   
    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='conteiner'>
      <form>
        <h1>Cadastro</h1>
        <label>Nome</label>
        <input placeholder='Nome' type="text" name='nome' ref={inputName}/>
        <label>Idade</label>
        <input placeholder='Idade' type="number" name='idade' ref={inputAge}/>
        <label>Email</label>
        <input placeholder='Email' type="email" name='email' ref={inputEmail}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
              <p>Nome: <span>{user.nome}</span></p>
              <p>Idade: <span>{user.idade}</span></p>
              <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Lixeira} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Form
