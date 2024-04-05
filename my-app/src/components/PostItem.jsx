const PostItem = ({post}) => (
    <div>
        <h5>{post.title}</h5>
        <p>{post.name}</p>
        <img src={post.image} alt={`${post.title} not found`}/>
        <p>{post.description}</p>
    </div>
)

export default PostItem