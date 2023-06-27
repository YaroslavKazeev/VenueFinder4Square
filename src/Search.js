import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchInput: ""
        }
    }

    changeHandler=(event)=>{
        this.setState({searchInput: event.target.value})
    }


    render() {
        return (
            <div>
                 <input 
                 onChange={this.changeHandler} 
                 type="text" 
                 placeholder="Cafe is by default, search yours" 
                 name="searchInput" 
                 id="searchInput"
                />
                <button onClick={this.props.getVenues.bind(null, this.state.searchInput)}>Search</button>
            </div>
        )
    }
}

export default Search;