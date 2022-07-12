import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getData } from '../state/actions';

const Receiver = () => {
    const result = useSelector(x => x.Counter);
    const dispatch = useDispatch();
    const url = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

    useEffect(() => {
        dispatch(getData(url));
    }, []);

    return <div>
        <h1>Receiver</h1>
        <p>Count: {result.count}</p>
    </div>
}

export default Receiver;