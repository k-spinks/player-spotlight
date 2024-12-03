export const GRAPHQL_API = 'https://data.bucks.digital/graphql/';

export const GET_PLAYER_DATA = `
query MyQuery {
  teamsByLeagueId(league_tids: 1610612749) {
    name
    city
    division
    conference_rank
    file_team_name
    players {
      first_name
      last_name
      jersey_number
      height
      weight
      position
      school_name
    }
  }
}`