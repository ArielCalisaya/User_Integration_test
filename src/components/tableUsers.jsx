import React from 'react';
import {Context} from '../store/appContext'
import { Header, Image, Table } from 'semantic-ui-react'
import ModalUser from './modalUser';
import ModalEdit from './modalEdit';

const TableUsers = () => (
    <Context.Consumer>
    {
        ({ store, actions }) => {
            return(
                <Table
                style={containerTable}
                id="bg-white" basic='very' celled collapsing>
                   <Table.Header>
                     <Table.Row>
                       <Table.HeaderCell className="title-table">Usuarios</Table.HeaderCell>
                     </Table.Row>
                   </Table.Header>

                   <Table.Body>
                     {
                         store.usersList.map((item, index) => {
                             return(
                                 <Table.Row key={index}>
                                   <Table.Cell style={spaceBetween}>
                                     <Header as='h4' image>
                                       <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' rounded size='mini' />
                                       <Header.Content>
                                         {item.name}
                                         <Header.Subheader>{item.lastName}</Header.Subheader>
                                       </Header.Content>
                                     </Header>
                                     <div id='buttons'>

                                        <ModalUser item={item} />
                                        <ModalEdit itemEd={item} />

                                     </div>
                                   </Table.Cell>

                                 </Table.Row>
                             )
                         })
                     }
                   </Table.Body>
                 </Table>
            )
        }
    }
    </Context.Consumer>
)
export default TableUsers;

const containerTable = {
    width: '37em',
    padding: '20px',
}

const spaceBetween = {
    display: 'flex',
    justifyContent: 'space-between'
}
