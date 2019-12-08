import React from 'react';
import {Context} from '../store/appContext';
import { Button, Modal, Form, Icon } from 'semantic-ui-react';


class ModalEdit extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const itemEd = this.props.itemEd
        return(
            <Context.Consumer>
            {
                ({ store, actions }) => {

                    return(
                        <div >
                            <Modal trigger={
                                <Button icon style={iconSize}>
                                <Icon
                                name='pencil alternate' />
                                </Button>
                            }>
                            <Modal.Header>Hora de Realizar unos Cambios!!!</Modal.Header>
                            <Modal.Content>
                                <Form size='large'>
                                  <Form.Group widths='equal'>
                                    <Form.Input
                                        name='gitHub'
                                        value={itemEd.gitHub}
                                        onChange={(e) => actions.handleChangeEdit(e)}
                                        width={6}
                                        label='GitHub'
                                        placeholder='ExampleName'
                                    />
                                    <Form.Input
                                        name='name'
                                        value={itemEd.name}
                                        onChange={(e) => actions.handleChangeEdit(e)}
                                        width={6}
                                        label='First name'
                                        placeholder='First name'
                                    />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                    <Form.Input
                                        name='lastName'
                                        value={itemEd.lastName}
                                        onChange={(e) => actions.handleChangeEdit(e)}
                                        width={6}
                                        label='Apellidos'
                                        placeholder=''
                                    />
                                    <Form.Input
                                        name='birthday'
                                        value={itemEd.birthday}
                                        onChange={(e) => actions.handleChangeEdit(e)}
                                        width={6}
                                        label='Fecha de nacimiento'
                                        placeholder=''
                                    />
                                    </Form.Group>
                                    <div className="buttons" style={buttonsCenter}>
                                  <Button
                                  onClick={(e) => actions.handleSubmitChanges(e)}
                                  type='submit'
                                  >Submit</Button>
                                    <Button negative>No</Button>
                                    <Button
                                      positive
                                      icon='checkmark'
                                      labelPosition='right'
                                      content='Yes'
                                    />
                                    </div>

                                </Form>
                            </Modal.Content>
                            </Modal>
                        </div>
                    )
                }
            }
            </Context.Consumer>
        )
    }
}
export default ModalEdit

const iconSize = {
    fontSize: '1.1rem',
}
const buttonsCenter={
    textAlign: 'center',
}


// TODO: finalizar frontend con edit function y usar api
