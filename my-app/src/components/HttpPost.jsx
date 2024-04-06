import axios from "axios";
import {useState} from "react";

const HttpPost = () => {
    const [state, setState] = useState({});

    const postToAPI = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Hello World',
            body: 'It works!',
            userId: 123
        }).then(res => setState(res))
    }

    return (
        <div>
            <button onClick={() => postToAPI()}>Create Post</button>
            {Object.keys(state).length ? (
                <>
                    <h1>{state.data.title}</h1>
                    <p>{state.data.body}</p>
                    <p>{state.data.id}</p>
                    <p>{state.data.userId}</p>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export default HttpPost