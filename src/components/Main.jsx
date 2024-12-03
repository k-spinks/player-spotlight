import React, { useState, useEffect } from 'react'
import { GRAPHQL_API, GET_PLAYER_DATA } from './data/graphqlData.js'
import axios from 'axios';
import Hero from './components/Hero';
import Stats from './components/Stats.jsx';
import Awards from './components/Awards.jsx';
import Gallery from './components/Gallery.jsx';


export default function Main() {
  
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

        // Try to call GraphQL API
        try {
          const queryResult = await axios.post(GRAPHQL_API, {
            query: GET_PLAYER_DATA
          });

          const result = queryResult.data.data.teamsByLeagueId[0].players;

          // Search for the desired player
          const player = result.find(
            (player) => player.first_name === "Damian" && player.last_name === "Lillard"
          );

          if (!player) {
            console.error('Player not found');
            return;
          }

          // Update component state
          setPlayerData({
            first_name: player.first_name,
            last_name: player.last_name,
            height: player.height,
            weight: player.weight,
            jersey_number: player.jersey_number,
            position: player.position,
            school_name: player.school_name
          });
        } catch (error) {
          // Handle errors during the Axios request
          if (error.response) {
            console.error('Response Error:', error.response.data);
          } else if (error.request) {
            console.error('Request Error: No response received', error.request);
          } else {
            console.error('Error Message:', error.message);
          }
        }
      };

      fetchData();
    }, []);

  return (
    <main>
      <Hero playerData={playerData}/>
      <Stats playerData={playerData}/>
      <Awards />
      <Gallery />
    </main>
  )
}