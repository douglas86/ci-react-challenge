import styles from "../styles/Content.module.css";
import Content from "./Content";
import {useEffect, useState} from "react";
import posts from "../posts.json";

const ContentHooks = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState();

    const {savedPosts} = posts;

    useEffect(() => {
        const interval = setInterval(() => {
            setIsLoaded(true)
            setFetchedPosts(savedPosts)
        }, 2000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className={styles.TitleBar}>
            <Content/>
        </div>
    )
}

export default ContentHooks;