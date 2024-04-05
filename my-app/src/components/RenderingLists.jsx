import {Book} from "./Book";

const RenderingLists = () => {
    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye',
    ]

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        {
            title: 'the catcher in the rye',
            author: 'j. d. salinger',
            pages: 234
        }
    ]

    return (
        <div>
            {bookList.map((book, index) => {
                return <h2 key={index}>{book}</h2>
            })}
            <hr/>
            {books.map((book, index) => {
                return (
                    <Book key={index} book={book} />
                )
            })}
        </div>
    )
}

export default RenderingLists;