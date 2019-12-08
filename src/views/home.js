import React from 'react';
import {Context} from '../store/appContext';
import { Button, Form } from 'semantic-ui-react';
import MapUsers from '../components/mapUsers';
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

                            <div className="formContent">
                                <Form

                                    size='large'
                                >
                                  <Form.Group widths='equal'>
                                    <Form.Input
                                        name='gitHub'
                                        value={store.newUser.gitHub}
                                        onChange={(e) => actions.handleChange(e)}
                                        width={6}
                                        label='GitHub'
                                        placeholder='ExampleName'
                                    />
                                    <Form.Input
                                        name='name'
                                        value={store.newUser.name}
                                        onChange={(e) => actions.handleChange(e)}
                                        width={6}
                                        label='First name'
                                        placeholder='First name'
                                    />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                    <Form.Input
                                        name='lastName'
                                        value={store.newUser.lastName}
                                        onChange={(e) => actions.handleChange(e)}
                                        width={6}
                                        label='Apellidos'
                                        placeholder=''
                                    />
                                    <Form.Input
                                        name='birthday'
                                        value={store.newUser.birthday}
                                        onChange={(e) => actions.handleChange(e)}
                                        width={6}
                                        label='Fecha de nacimiento'
                                        placeholder=''
                                    />
                                    </Form.Group>
                                  <Button
                                  onClick={(e) => actions.handleSubmit(e)}
                                  type='submit'
                                  >Submit</Button>

                                </Form>
                            </div>
                            <div className="mapthis">
                                <MapUsers />
                            </div>
                            </div>
                    )
                }
            }
            </Context.Consumer>
        )
    }
}
