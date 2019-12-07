import React from 'react';
import { Button, Divider, Form } from 'semantic-ui-react';

export default class Home extends React.Component {
    render(){
        return(
            <div className="Bg-Home">
                <div className="text-center">
                    <h1>
                        <span>Hello World</span>
                    </h1>
                </div>
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

            </div>
        )
    }
}
