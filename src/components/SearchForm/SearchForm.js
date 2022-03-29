import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchForm.scss'

const SearchForm = () => {

    return (
        <>
            <form id='form'>
                <input type='text' id='search' className='search' placeholder='Search' />
                <div className='search-icon'>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </form>
        </>
    )
}

export default SearchForm
