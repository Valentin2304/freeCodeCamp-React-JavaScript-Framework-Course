import {useState} from "react";
import {useGlobalContext} from "../context";

const Search = () => {
    const [text, setText] = useState('')

    const {setSearchTerm} = useGlobalContext()

    const {fetchRandomMeal, fetchAllMeals} = useGlobalContext()


    const handleHomeButton = () => {
        setSearchTerm("")
        fetchAllMeals()
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleRandomMeal = () => {
        setSearchTerm("")
        setText("")
        fetchRandomMeal()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text){
            setSearchTerm(text)
        }
    }

    return <header className="search-container"><form onSubmit={handleSubmit}>
        <button className='btn' onClick={handleHomeButton}>home</button>
        <input type="text" onChange={handleChange} value={text} placeholder='type favorite meal' className='form-input'/>
        <button type="submit" className="btn">search</button>
        <button type="submit" className="btn btn-hipster" onClick={handleRandomMeal}>Surprise Me!</button>
    </form></header>
}

export default Search;
