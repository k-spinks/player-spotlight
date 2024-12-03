import React, { useEffect, useState } from 'react'
import './App.css';
import { GRAPHQL_API, GET_PLAYER_DATA } from './data/graphqlData.js'
import axios from 'axios';
import Hero from './components/Hero';
import Stats from './components/Stats.jsx';
import Awards from './components/Awards.jsx';
import Gallery from './components/Gallery.jsx';

function App() {
  //Set default value for playerData
  const [playerData, setPlayerData] = useState({
    fName: '',
    lName: '',
    height: '',
    weight: null,
    jersey: null,
    position: '',
    school: ''});

  useEffect(() => {
    const fetchData = async () => {
      //Call GraphQL API
      const queryResult = await axios.post (
        GRAPHQL_API, {
          query: GET_PLAYER_DATA
        }
      )

      const result = queryResult.data.data.teamsByLeagueId[0].players;

      // Guard check for no data
      if(!result) {
        console.log('Data Error')
        return
      }

      //search for desired player
      const player = result.find(
        (player) => player.first_name === "Damian" && player.last_name === "Lillard"
      );

      //Update component state
      setPlayerData({
        fName: player.first_name,
        lName: player.last_name,
        height: player.height,
        weight: player.weight,
        jersey: player.jersey_number,
        position: player.position,
        school: player.school_name
      })
    };
    fetchData()
  },[])
  return (
    <main>
      <Hero playerData={playerData}/>
      <Stats playerData={playerData}/>
      <Awards />
      <Gallery />
    </main>

  );
}

export default App;
