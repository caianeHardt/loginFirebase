import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/style.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.submit = this.submit.bind(this)
  }

  change(event) {
    let state = this.state
    let element = event.target.getAttribute('name')
    if (element === 'email') {
      state.email = event.target.value
      this.setState(state)
    } else if (element === 'password') {
      state.password = event.target.value
      this.setState(state)
    }
  }

  async validationData() {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then(userCredential => {
        const user = userCredential.user
        return user
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        return { errorCode, errorMessage }
      })
  }

  submit() {
    if (this.state.email === '' || this.state.senha === '') {
      alert('Email ou senha inválido. Tente novamente!')
    } else {
      if (this.validationData()) {
        window.location.replace("http://localhost:3000/telainicial")
      } else {
        alert("Usuário não cadastrado!")
      }
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Tela de Login</h1>
        <input
          name="email"
          autoFocus
          placeholder="Email"
          type="email"
          onChange={e => this.change(e)}
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          onChange={e => this.change(e)}
        />
        <div className="buttons">
          <Link to="/">
            <button className="back">Voltar</button>
          </Link>
          <button className="submit" onClick={this.submit}>
            Entrar
          </button>
        </div>
      </div>
    )
  }
}

export default Login