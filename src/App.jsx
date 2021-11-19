import { Component } from "react";
import MusicTable from "./Components/MusicTable";
import axios from "axios";
import SongForm from "./Components/SongForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }


    componentDidMount(){
        this.getSongs()
    }

    async getSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        console.log(response.data)
        this.setState({
            songs: response.data
        })
    }



    render() { 
        return (
            <div>
             <h1>This is the app component</h1>
             <MusicTable songs={this.state.songs} />
             <SongForm forms={this.state.songs}/>
             </div>
             );
    }
}
 
export default App;