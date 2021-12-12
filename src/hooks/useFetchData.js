import { useEffect, useState } from 'react';
import axios from 'axios';
function useFetchData({ url }) {
    const [state, setState] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(url);
            setState([...data]);
        };
        fetchData();
    }, []);

    return [state];
};
export default useFetchData;