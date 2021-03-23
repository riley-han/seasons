import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';



class App extends React.Component {
    state = {lat: null, errorMessage: ''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        )
    }

    renderContent = ()=>{
        if(this.state.errorMessage && !this.state.lat){
            alert("We cannot get your location, please check your privacy settings to display the weather correctly.")
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        }
        return <Loader message="Loading Weather Information"/>
    }
    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));