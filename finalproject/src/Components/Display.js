import React, { useState } from 'react'

function Display() {
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState('--')
    const [filter, setFilter] = useState('--')
    const [books, setBooks] = useState([])
    const [book, setBook] = useState('')
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])
    const [writer, setWriter] = useState('')
    const [category, setCategory] = useState('')
    const [publication, SetPublication] = useState('')

    let text = <p>Book Lookup&#128269;</p>
    let menu
    let bar
    let showResult

    function handleSubmit(e) {
        e.preventDefault()

        const newBook = {
            title: book,
            author: writer,
            genre: category,
            pubDate: publication
        }

        setBooks([...books].concat(newBook))
        setBook('')
        setWriter('')
        setCategory('')
        SetPublication('')
    }

    function deleteBook(title) {
        const updatedBooks = [...books].filter((book) => book.title !== title)
        setBooks(updatedBooks)
    }

    function handleSearch(e) {
        e.preventDefault()

        if(search === 'Title') {
            setResult([...books].filter((book) => book.title.includes(query)))
        }
        else if(search === 'Author') {
            setResult([...books].filter((book) => book.author.includes(query)))
        }
        setQuery('')
    }

    if(show) {
        text = <p>Hide Menu</p>

        menu =   
            <div className='tab'>
                Search by: {''} 
                <select 
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                >
                    <option value='--'>--</option>
                    <option value='Author'>author</option>
                    <option value='Title'>title</option>
                </select>
                &nbsp;|
                Filter by genre: {''}
                <select 
                    value={filter} 
                    onChange={e => setFilter(e.target.value)}
                >
                    <option value='--'>--</option>
                </select>
            </div>
    
        if(search !== '--') {
            bar = 
                <form className='input' onSubmit={handleSearch}>
                    Enter {search}:&nbsp;
                    <input type='text'
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <button type='submit'>Enter</button>
                </form>
            }

        showResult = <div>
                        <div className='section'>Previous Search/Filter Results:</div>
                        {result.map((book) => <li className='list' key={book.title}>{book.title}, by {book.author}</li>)}
                     </div>
    }

    return (
        <div>
            <div className='section' onClick={() => setShow(!show)}>
                {text}
            </div>
            {menu}
            <br></br>
            {bar}
            {showResult}
            <br></br>
            <div className='section'>
                Available Titles:
            </div>
            {books.map((book) => <li className='list' key={book.title}>
                                    {book.title}, by {book.author}&nbsp;
                                    <button onClick={() => deleteBook(book.title)}>Remove</button>
                                 </li>)}
            <br></br>
            <form className='input' onSubmit={handleSubmit}>
                Add Books
                <br></br>
                Title:&nbsp;
                <input type='text'
                    value={book}
                    onChange={e => setBook(e.target.value)}
                />
                <br></br>
                Author:&nbsp;
                <input type='text'
                    value={writer}
                    onChange={e => setWriter(e.target.value)}
                />
                <br></br>
                Genre:&nbsp;
                <input type='text'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                <br></br>
                Pubilcation Date:&nbsp;
                <input type='text'
                    value={publication}
                    onChange={e => SetPublication(e.target.value)}
                />
                <br></br>
                <button type='submit'>Enter</button>
            </form>
        </div>
    )
}

export default Display