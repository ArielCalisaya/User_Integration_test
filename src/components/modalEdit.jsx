import React from 'react';
import {Context} from '../store/appContext';

const ModalEdit = () => (
    <Context.Consumer>
    {
        ({ store, actions }) => {
            return(
                <div>
                    <p>initial modal edit</p>
                </div>
            )
        }
    }
    </Context.Consumer>
)
export default ModalEdit
