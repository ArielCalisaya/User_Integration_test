import React from 'react';
import getState from './flux.js';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    class StoreWrapper extends React.Component {
        constructor(props){
            super(props);

            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updatedStore => this.setState({
                    store: Object.assign( this.state.store, updatedStore )
                })
            })
        };
        async componentDidMount(){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json();
            console.log(data)
        }

        render(){
            return(
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            );
        }
    }
    return StoreWrapper;
}

export default injectContext;
