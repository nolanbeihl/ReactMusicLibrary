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
            <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Genre</th>
                            <th>Release Date</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.songs.map((i)=> (
                            <tr>
                                <td>i.title</td>
                                <td>i.artist</td>
                                <td>i.album</td>
                                <td>i.genre</td>
                                <td>i.release_date</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
         );
    }
}
 
export default MusicTable;