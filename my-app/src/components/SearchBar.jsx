import {useState} from "react";
import names from "../names";

const SearchBar = () => {
    const [search, setSearch] = useState(names);
    const [amount, setAmount] = useState(search.length);

    const handleFilter = (event) => {
        event.preventDefault();
        setSearch(names)
        const value = event.target.value;
        const filter = search.filter(item => {
            return (item.toLowerCase().includes(value.toLowerCase()))
        });
        setSearch(filter)
        setAmount(filter.length)
    }

    return (
        <div>
            <h1>Name Search</h1>
            <p>matching names found: {amount}</p>
            <form>
                <input
                    type="text"
                    placeholder="search names..."
                    onChange={(event) => handleFilter(event)}
                />
            </form>
            <div style={{margin: 'auto'}}>
                we will render names here
            </div>
            {search.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

export default SearchBar