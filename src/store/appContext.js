import React from 'react';
// import getState from './flux.js';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    class storeWrapper extends React.Component {
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
        componentDidMount(){

        }
        render(){
            return(
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            );
        }
    }
    return storeWrapper;
}

export default injectContext;
