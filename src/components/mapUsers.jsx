import React from 'react';
import {Context} from '../store/appContext';

const MapUsers = () => (
    <Context.Consumer>
    {
        ({ store, actions}) => {
            return(
                <div className="col-usuarios">
                <h1>Usuarios Añadidos</h1>
                {
                    store.usersList.map((item, index) => {
                        return(
                            <div className="user-content"
                            key={index}>
                                <span>GitHub: {item.gitHub}</span>
                                <br/>
                                <span>Nombre: {item.name}</span>
                                <br/>
                                <span>Apellidos: {item.lastName}</span>
                                <br/>
                                <span>Cumpleaños: {item.birthday}</span>
                                <br/>

                                <button>
                                Edit
                                </button>
                                <button onClick={() => actions.handleDelete(item)}>
                                X
                                </button>
                            </div>
                        )}
                    )
                }
                </div>
            )
        }
    }
    </Context.Consumer>
)

export default MapUsers
