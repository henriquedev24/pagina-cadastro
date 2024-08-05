
import './style.css'

function Form() {
  return (
    <div className='conteiner'>
      <form>
        <h1>Cadastro</h1>
        <input type="text" name='nome' />
        <input type="number" name='idade'/>
        <input type="email" name='email'/>
        <button type='button'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Form
