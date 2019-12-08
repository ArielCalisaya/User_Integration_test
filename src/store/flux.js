const getState = ({ getStore, getActions, setStore }) => {
    return{
        store: {
            usersList:
            [
                {
                    id:1,
                    gitHub:'ArielC',
                    name:'Ariel Vladimir',
                    lastName: 'Calisaya Serrano',
                    birthday: 'july 10',
                },
                {
                    id:2,
                    gitHub:'ExampL3',
                    name:'Exam.Pl3 ',
                    lastName: 'T3st',
                    birthday: 'august 21',
                },
            ],

            newUser:
            {
                gitHub: '',
                name: '',
                lastName: '',
                birthday: ''
            }
        },

        actions: {
            handleChange(e) {
                const store = getStore();
                const { newUser } = store;
                newUser[e.target.name] = e.target.value;
                setStore({ newUser });
            },
            handleChangeEdit(e) {
              const store = getStore();
              const { newUser } = store;
              newUser[e.target.name] = e.target.value;
              setStore({ newUser });
              e.preventDefault()
            },
            handleSubmitChanges(e, index) {
                const store = getStore();
                const { usersList } = store;
                setStore({ newUser: usersList[index]})
                e.preventDefault();
            },

            handleSubmit(e){
                e.preventDefault();
                const store = getStore();

                console.log(store.newUser)
                setStore({
                    usersList: store.usersList.concat(store.newUser),
                    newUser: {
                        id: 0,
                        gitHub: '',
                        name: '',
                        lastName: '',
                        birthday: ''
                    }
                })
            },

            handleDelete(item){

                const store = getStore();
                const { usersList } = store;
                const filterId = usersList.filter( del => del !== item );
                setStore({ usersList: filterId })
            }
        }

    }
}
export default getState;
