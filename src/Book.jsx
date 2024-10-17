import './Book.css';
export default function Book({book}){

    return(
        <div className='book'>
            <h4>Name: {book.name}</h4>
            <p>Price: {book.price}</p>
        </div>
    )
}