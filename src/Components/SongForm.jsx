import axios from "axios";
import { Component } from "react";

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title : '',
            album : '',
            artist: '',
            genre: '',
            release_date: '',
         }
    }
    handleChange = (event) => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    };
  
    handleSubmit = async(event) => {
        event.preventDefault();
        let response = await axios.post('http://127.0.0.1:8000/music/' , this.state)
        console.log(response)
        this.setState({
            SongForm : response.data
        })
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Song Name</label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                <label>Album</label>
                <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                <label>Artist</label>
                <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                <label>Genre</label>
                <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label>
                <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                <button onClick={this.handleSubmit}>Add Song To Table</button>
            </form>
         );
    }
}
 
export default SongForm;