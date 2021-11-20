import { Component } from "react";
import RemoveSong from "./RemoveSong";
import SongForm from "./SongForm";

class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div>
            {this.props.songs.map((element)=><h1>{element.title} , {element.artist} , {element.album} , {element.genre} , {element.release_date}</h1>)}
            <button onClick={this.removeSong}> Remove Song From Table </button>
            </div>
         );
    }
}
 
export default MusicTable;