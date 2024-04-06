const PostItemAPI = ({item}) => {
    console.log('item', item)
    return (
        <div className="post-item">
            <h5>{item.type}</h5>
            <p>{item.user}</p>
            <img src={`${item.webformatURL}`} alt="description"/>
            <p>{item.tags}</p>
        </div>
    )
}

export default PostItemAPI;