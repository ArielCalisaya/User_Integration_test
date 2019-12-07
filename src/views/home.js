import React from 'react';
import {Context} from '../store/appContext';
import { Button, Divider, Form } from 'semantic-ui-react';

export default class Home extends React.Component {

    render(){
        return(
            <Context.Consumer>
            {
                ({store, actions}) => {
                    return(
                        <div className="Bg-Home">
                            <div className="text-center">
                                <h1>
                                    <span>User Imtegration</span>
                                </h1>
                            </div>
                            <div className="separar columnas">
                            <div className="formContent">
                                <Form size='large'>
                                  <Form.Group widths='equal'>
                                    <Form.Input
                                      width={6}
                                      label='First name'
                                      placeholder='First name'
                                    />
                                    <Form.Input
                                      width={6}
                                      label='Last name'
                                      placeholder='Last name'
                                    />
                                  </Form.Group>
                                  <Button type='submit'>Submit</Button>
                                  <Divider hidden />
                                </Form>
                            </div>



                            <div className="col-usuarios">
                                <h1>Usuarios Añadidos</h1>
                                {
                                    store.users.map((item) => {
                                        return(
                                            <div className="user-content"
                                            key={item.id}>
                                                <span>GitHub: {item.gitHub}</span>
                                                <br/>
                                                <span>Nombre: {item.name}</span>
                                                <br/>
                                                <span>Apellidos: {item.lastName}</span>
                                                <br/>
                                                <span>Cumpleaños: {item.birthday}</span>
                                                <br/>
                                            </div>
                                        )}
                                    )
                                }


                            </div>
                            </div>

                        </div>
                    )
                }
            }
            </Context.Consumer>
        )
    }
}
