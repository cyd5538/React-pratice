import React, {useState} from 'react'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import {UserData} from './Data';
const App = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets : [{
      label :"Users gain",
      data : UserData.map((data) => data.userGain),
      backgroundColor : ["green",'red','yellow','purple','darkblue'],
      borderColor : ['black'],
      borderWidth : 3
    }]
  });
  return (
    <div style={{display: 'flex'}}>
      <div style={{width :400}}>
      <BarChart chartData={userData} />
      </div>
      <div style={{width :400}}>
      <LineChart chartData={userData} />
      </div>
      <div style={{width :400}}>
      <PieChart chartData={userData} />
      </div>
    </div>
  )
}

export default App
