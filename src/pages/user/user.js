import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/style.css'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

class TelaInicial extends Component {

    async logout() {
        await signOut(auth)
        window.location.replace('http://localhost:3000/')
    }

    async obterDados() {
    
        await getDocs(collection(db, 'usuarios'))
        .forEach(docs => {
        console.log(docs.data())
        })
    }

    render() {
        return (
        <div className="container">
            <h1>Tela Inicial</h1>
            <div className="buttons">
            <button onClick={this.obterDados} className="submit">
                Obter info
            </button>
            <Link to="/">
                <button onClick={this.logout} className="back">
                Sair
                </button>
            </Link>
            </div>
        </div>
        )
    }
}

export default TelaInicial