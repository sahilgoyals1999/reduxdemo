import {useSelector} from 'react-redux'

const Receiver = () => {
    const result = useSelector(x => x);
    return <div>
        <h1>Receiver</h1>
        <p>Count: {result.count}</p>
    </div>
}

export default Receiver;