import { Component } from "react";

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songName : '',
            album : '',
            artist: '',
            genre: '',
            releaseDate: '',
         }
    }
    handleChange = (event) => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    };
    
    handleSubmit =(event) =>{
        event.preventDefault();
        this.generateSong(this.state);
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Song Name</label>
                <input type="text" name="songName" onChange={this.handleChange} value={this.state.songName}/>
                <label>Album</label>
                <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                <label>Artist</label>
                <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                <label>Genre</label>
                <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label>
                <input type="text" name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate}/>
                <button type="submit">Add Song To Table</button>
            </form>
         );
    }
}
 
export default SongForm;