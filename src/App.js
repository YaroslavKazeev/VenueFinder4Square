import React, {Component} from "react";
 
import './App.css';
import axios from 'axios'
import Search from './Search'
class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    latlong:"",
    venues:[]
  };
}

  componentDidMount() {
    this.getLocation();
  }
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(response => {
      this.setState({
        latlong: response.coords.latitude.toFixed(1) + ","+ response.coords.longitude.toFixed(1)
      },()=>{
        this.getVenues("cafe");
      });
      console.log(this.state.venues);
    }); 
  };

  getVenues = (query) => {
    console.log(query);
    // const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const AUTH_KEY = 'fsq31BgL6Q/y9LU2u4RejZrpHHzVe2131BoamN/nlFc+hhs=';
    const searchParams = new URLSearchParams({
      ll: this.state.latlong,
      // open_now: 'true',
      query: query,
      sort: 'DISTANCE'
    });
  
    console.log(this.state.latlong);
      // Make the API request using Axios
      axios.get(
      `https://api.foursquare.com/v3/places/search?
      ${searchParams}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: AUTH_KEY,
        }
      }
    )
      .then(response => {
        this.setState({venues:response.data.results})
        console.log(this.state);
        console.log(response);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      })
  }

  formSubmited = (event, query) => {
    event.preventDefault();
    this.getVenues(query)
  }

  render() {console.log(this.state.venues);
    return (
      <div className="App">
      <Search formSubmited={this.formSubmited} />
      <p>Hey!</p>
      <ul>
      {this.state.venues.map(venue=>{
        return (
         <li key={venue.name}>{venue.name} Location: {venue.location.address}</li>
        )
      })}
      </ul>

      </div>
    )
  }
}
export default App;