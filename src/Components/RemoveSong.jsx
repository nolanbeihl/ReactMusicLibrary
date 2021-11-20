import axios from "axios";
import { Component } from "react";

class RemoveSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id : 0,
         }
    }
  i = this.props.genre
    
    handleSubmit = async(event) => {
        event.preventDefault();
        let response = await axios.get('http://127.0.0.1:8000/music/')
        console.log(response)
        this.setState({
            id : (response.id - 1)
        })
    }

    render() { 
        return ( 
            <button onClick={this.handleSubmit}>Remove Song</button>
        );
    }
}
 
export default RemoveSong;