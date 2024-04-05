export const Book = props => {
    const {title, author, pages} = props.book;

    return (
        <div>
            <h5>{title}</h5>
            <p>{author}</p>
            <p>{pages}</p>
        </div>
    )
}