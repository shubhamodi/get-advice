import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component{
    state ={advice:''};
    componentDidMount(){
        console.log("mounting");
        this.fetchadv();
    }   
    fetchadv=() =>{
        axios.get("https://api.adviceslip.com/advice", {
            params: {
              random: Math.random() // Add a random parameter to avoid caching
            }
          })
        .then((response)=>{
            const{advice}=response.data.slip;
            this.setState({advice:advice});
            console.log(advice);})
        .catch((error)=>{console.log(error)});
    }
    render(){
        const {advice}=this.state;
            return(
               <div className='app'>
                <div className='card'> <h1 className='heading' style={{color:'brown'}}>{advice}</h1>
                <button className='button' onClick={this.fetchadv}>
                    <span>Get Advice</span></button>
                </div>
                </div>
            );
        }

}
export default App;