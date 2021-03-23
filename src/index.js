import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {
    state = {lat: null, errorMessage: ''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        )
    }
    render(){
        if(this.state.errorMessage && !this.state.lat){
            alert("We cannot get your location, please check your privacy settings to display the weather correctly.")
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        }
        return <div>Loading...</div>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));