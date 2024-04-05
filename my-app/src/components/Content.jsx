import posts from '../posts.json';
import styles from '../styles/Content.module.css';
import PostItem from "./PostItem";

const Content = props => {
    const {savedPosts} = posts;

    return (
        <div className={styles.TitleBar}>
            <h1>My Photos</h1>
            {savedPosts.map((post, index) => <PostItem key={index} post={post}/>)}
        </div>
    )
}

export default Content;