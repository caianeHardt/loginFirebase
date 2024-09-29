import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/style.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
      birthDate: ''
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
    } else if (element === 'name') {
      state.name = event.target.value
      this.setState(state)
    } else if (element === 'surname') {
      state.surname = event.target.value
      this.setState(state)
    } else if (element === 'birthDate') {
      state.birthDate = event.target.value
      this.setState(state)
    }
  }

  async createUser() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  async registerOtherInfos() {
    const uid = await auth.currentUser.uid
    const userCollectionRef = collection(db, 'users')
    try {
      await addDoc(userCollectionRef, {
        uid: uid,
        nome: this.state.name,
        sobrenome: this.state.surname,
        dataNascimento: this.state.birthDate
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  async submit() {
    if (
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.name === '' ||
      this.state.surname === '' ||
      this.state.birthDate === ''
    ) {
      alert('Preencha todos os campos!')
    } else {
      await this.createUser()
      await this.registerOtherInfos()
      document.querySelectorAll('input').forEach(element => {
        element.value = ''
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Tela de Cadastro</h1>
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
        <input name="name" placeholder="Nome" onChange={e => this.change(e)} />
        <input
          name="surname"
          placeholder="Sobrenome"
          onChange={e => this.change(e)}
        />
        <input
          name="birthDate"
          placeholder="Data de Nascimento"
          type="date"
          onChange={e => this.change(e)}
        />
        <div className="buttons">
          <Link to="/">
            <button className="back">Voltar</button>
          </Link>
          <button className="submit" onClick={this.submit}>
            Cadastrar
          </button>
        </div>
      </div>
    )
  }
}

export default Register