import React from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';

const ModalUser = (props) => (
    <Modal trigger={
        <Button icon style={iconSize}>
         <Icon
         name='eye' />
         </Button>}>
    <Modal.Header style={center}>{props.item.name} {props.item.lastName}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
      <Modal.Description>
        <Header>{props.item.gitHub}</Header>
        <p>
          Cumpleaños: {props.item.birthday}
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labor.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
export default ModalUser;

const center = {
    textAlign: 'center',
}

const iconSize = {
    fontSize: '1.1rem',
}
