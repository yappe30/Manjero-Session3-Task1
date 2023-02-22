import React, {Component} from "react";
import Navbar from "./Navbar.js";
import AppForm from "./AppForm.js";
import Display from "./Display";

class App extends Component{
    state = {
        personData: [],
      };

    addInfo = (props) => {
        console.log(props);
    
        let personData = [...this.state.personData, props];
    
        this.setState({
          personData,
        });
      };

    render (){
        return(
            <div>
                <Navbar />
                <br></br>
                <AppForm addData={this.addInfo}/>
                <br></br>
                <br></br>
                <Display personData={this.state.personData} />
            </div>

        );
    }
}

export default App;