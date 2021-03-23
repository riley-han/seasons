import React from 'react';
import './SeasonDisplay.css';
const getSeason = (lat, month) => {
if(month > 2 && month < 9){
    return lat > 0 ? 'Summer': 'Winter';
}
else {
    return lat < 0 ? 'Winter' : 'Summer'
}

}

const seasonConfig = {
    Summer: {
        text: "Let's soak up the sun!",
        iconName: "sun"
    },
    Winter:  {
        text: "Let's bundle up",
        iconName: "snowflake"
    }
}

const SeasonDisplay = (props) =>{

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    console.log(season);
    
        return(
            <div className="ui container">
            <i className={`${iconName} icon`}></i>

                <h1>{text}</h1>
                <i className={`${iconName} icon`}></i>
            </div>
        )
    }



export default SeasonDisplay;