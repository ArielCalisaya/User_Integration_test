import React from 'react';
import TableUsers from '../components/tableUsers';
import {Button} from 'semantic-ui-react'

class Users extends React.Component {
    render(){
        return(
            <div className="container-tableUsers">
                <div className="title">
                    <h1 style={center}>Lista de Usuarios</h1>
                </div>

                <div id="table-container">
                    <TableUsers />
                </div>

                <div style={centerButton}>
                <a href='/'>
                    <Button className="">
                        <p className='button-Home'>Volver</p>
                    </Button>
                </a>
                </div>
            </div>
        )
    }
}
export default Users;


const center ={
    textAlign: 'center',
    background: '#f3f3f3',
    display: 'inline-block',
    width: '10em',
    borderRadius: '40px',
    padding: '5px'
}
const centerButton = {
    textAlign:'center',
    padding: '20px',
}
