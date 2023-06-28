import React, {useState} from 'react';

function Search(props){
    const [searchInput, setSearchInput] = useState("");
    function changeHandler(event){
        setSearchInput(event.target.value)
    }
    return(
        <form onSubmit={(event) => props.formSubmited(event, searchInput)}>
            <input 
                onChange={changeHandler} 
                type="text" 
                placeholder="Cafe is by default, search yours" 
                name="searchInput" 
                id="searchInput"
            />
            <input type="submit" value="Search" onSubmit={(event) => props.formSubmited(event, searchInput)} />
        </form>
    )
}
export default Search;