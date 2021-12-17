import useFetchData from '../hooks/useFetchData';
export default function Users() {
    const [state, loading] = useFetchData({ url: 'https://jsonplaceholder.typicode.com/users' });
    function renderList() {
        const X = 100;
        return (<>{
            state.map((user) => {
                const { id, name, username, email } = user;
                return (<li key={id}>{name}- {email} - {username}</li>);
            })
        }</>);
    };
    return (<>
        {loading ? (<h6>LOADING.....</h6>) : (<ul>{renderList()}</ul>)}
    </>);
};