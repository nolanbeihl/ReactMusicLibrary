import { Component } from "react";

class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render() { 
        return ( 
            <div>
            {this.props.songs.map((element)=><h1>{element.title} , {element.genre}</h1>)}
            </div>
         );
    }
}
 
export default MusicTable;