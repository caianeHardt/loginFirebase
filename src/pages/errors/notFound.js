import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../style/styles.css'

class NotFound extends Component{
    render(){
        return(
            <div className='container'>
                <h1>NotFound</h1>
                <Link to="/"><button>Página Inicial</button></Link>
            </div>
        )
    }
}

export default NotFound;