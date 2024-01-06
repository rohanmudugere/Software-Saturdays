import React, { useState } from 'react'

function SearchBar() {
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState('--')
    const [filter, setFilter] = useState('--')

    let text = <p>Book Lookup&#128269;</p>
    let menu
    let bar

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
                <form className='input'>
                    Enter {search}:&nbsp;
                    <input type='text'/>
                    <button type='submit'>Enter</button>
                </form>
            }
    }

    return (
        <div>
            <div className='section' onClick={() => setShow(!show)}>
                {text}
            </div>
            {menu}
            <br></br>
            {bar}
        </div>
    )
}

export default SearchBar