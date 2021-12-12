import { useEffect, useState } from 'react';
import axios from 'axios';
function useFetchData({ url }) {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const { data } = await axios.get(url);
            setTimeout(() => {
                setState([...data]);
                setLoading(false);
            }, 3000);
        };
        fetchData();
    }, []);

    return [state, loading];
};
export default useFetchData;