import React from "react";
import '../SeasonDisplay.css'

const SeasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "buuur its chilly",
    iconName: 'snowflake'

  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  // const style = {
  //     display: 'flex',
  //     jusifyContent: 'center',
  //     textAlign: 'center',
  //     alignItems: 'center',
  //     height: '100vh',
  //     width: '100vw'

  // }
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const {text, iconName} = SeasonConfig[season];
  console.log(SeasonConfig);
  
  
  return (
    <div className={season}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1 className="text">{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
