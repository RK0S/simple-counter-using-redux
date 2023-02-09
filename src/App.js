import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    function inc() {
        dispatch({type: 'ADD_ONE', payload: 1})
    }

    function dec() {
        dispatch({type: 'REMOVE_ONE', payload: 1})
    }
    return (
        <div className="App">
            <div>{count}</div>
            <button onClick={() => inc()} >+</button>
            <button onClick={() => dec()}>-</button>
        </div>
    );
}

export default App;
