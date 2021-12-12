import useFetchData from '../hooks/useFetchData';
export default function Users() {
    const [state] = useFetchData({ url: 'https://jsonplaceholder.typicode.com/users' });
    function renderList() {
        return (<>{
            state.map((user) => {
                const { id, name, username, email } = user;
                return (<li key={id}>{name}- {email} - {username}</li>);
            })
        }</>);
    };
    return (<>
        {state.length ? (<ul>
            {renderList()}
        </ul>) : (<h4>Loading....</h4>)}
    </>);
};