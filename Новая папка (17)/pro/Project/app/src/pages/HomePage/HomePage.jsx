import React from 'react'
import Topline from '../../widgets/topline/topline'
import Header from './../../widgets/header/Header';
import FirstScreen from './UI/FirstScreen/FirstScreen';
import Season from './UI/Season/Season';
import Collection from './UI/Collection/Collection';
import NewItems from './UI/NewItems/NewItems';

function HomePage() {
  return (
    <div>
      <Topline />
      <Header />
      <FirstScreen />
      <Season />
      <Collection />
      <NewItems />
    </div>
  )
}

export default HomePage
