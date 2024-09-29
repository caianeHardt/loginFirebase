import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/style.css'

class Home extends Component {
    render() {
        return (
        <div className="container">
            <h1>Home</h1>
            <div className='buttons'>
            <Link to="/login">
                <button>Entrar</button>
            </Link>{' '}
            <br />
            <Link to="/cadastro">
                <button>Cadastrar</button>
            </Link>
            </div>
        </div>
        )
    }
}

export default Home