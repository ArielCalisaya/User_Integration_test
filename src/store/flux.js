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
                id: 3,
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
                e.preventDefault(e)
            },

            handleChangeEdit(e) {
              const store = getStore();
              const name = e.target.name;
              const value = e.target.value;

              const { newUser } = store;
              const editData ={[name] : value };
              setStore({
                  newUser: editData
              })

              console.log()
              e.preventDefault()

            },
            handleSubmitChanges(item) {
                const store = getStore();
                const { usersList } = store;
                const requiredIndex = usersList.id;
                const temporal = this.state.temporal
                temporal[requiredIndex] = item;
                setStore({
                    usersList: temporal
                })

                const newUser = store
                setStore({ newUser})
                console.log(newUser)
                item.preventDefault();
            },


            async handleSubmit(e){
                e.preventDefault();
                const store = getStore();

                let id = store.usersList.length + 2
                await setStore(
                    {
                    usersList: store.usersList.concat(store.newUser),
                    newUser: {
                        id: id ,
                        gitHub: '',
                        name: '',
                        lastName: '',
                        birthday: ''
                    }
                })
                console.log(store.usersList)
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
