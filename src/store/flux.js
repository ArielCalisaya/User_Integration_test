const getState = ({ getStore, getActions, setStore }) => {
    return{
        store: {
            users:
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
            ]
        },

        actions: {
            hendleChange(e){
                const store = getStore();
                const { users } = store;
                users[e.target.name] = e.target.value;
                setStore({ users });
                e.preventDefault();
            },

            handleDelete(index){

                const store = getStore();
                const { users } = store;
                const filterId = users.filter( item => item.id !== index );
                setStore({ users: filterId })
            }
        }

    }
}
export default getState;
