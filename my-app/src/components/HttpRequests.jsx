import axios from 'axios';
import {useEffect, useState} from "react";

const HttpRequests = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(r => {
            setPosts(r.data)
        })
    }, []);

    console.log('posts', posts);

    return (<div><h2>Posts:</h2>
            {posts.length ? (
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.id}. {post.title}</h2>
                        <h4>By User ID {post.userId}</h4>
                        <p>{post.body}</p>
                        <hr/>
                    </div>
                ))
            ) : (
                <h4>Loading posts ...</h4>
            )}</div>

    )
}

export default HttpRequests;