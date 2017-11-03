import axios from 'axios';

const getProfile = username =>
  axios.get(`https://api.github.com/users/${username}`).then(user => user.data);

const getRepos = username =>
  axios.get(`https://api.github.com/users/${username}/repos`);

const getStarCount = repos =>
  repos.data.reduce((acc, repo) => acc + repo.stargazers_count, 0);

const calculateScore = ({ followers }, repos) =>
  followers * getStarCount(repos);


const handleError = (error) => {
  // eslint-disable-next-line no-console
  console.warn(error);
};

const getUserData = player =>
  axios
    .all([getProfile(player), getRepos(player)])
    .then(([profile, repos]) => ({
      score: calculateScore(profile, repos),
      profile,
    }));

const sortPlayers = players => [...players].sort((a, b) => b.score - a.score);

export const battle = players =>
  axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);

export const fetchPopularRepos = (language) => {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
  return axios.get(encodedURI).then(response => response.data.items);
};
