import React from 'react'
import './Home.css';
import {
  FeaturedInfo,
  Charts,
  WidgetSmall,
  WidgetLarge,
} from '../../components';
import {
  userData,
} from '../../dummyData';


const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home;