import axios from "axios";
import {keys} from "./secrets";
import {useEffect, useState} from "react";
import PostItemAPI from "./PostItemAPI";

const {API_KEY} = keys;

const ContentAPI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&total=100`)
            .then((response) => setData(response.data));
    }, []);

    return (
        <div>
            {
                Object.keys(data).length ? (
                    Object.values(data).map((items) => (
                        Object.values(items).map((item, index) => <PostItemAPI key={index} item={item}/>)
                    ))
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}

export default ContentAPI;