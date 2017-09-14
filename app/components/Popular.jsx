import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

const RepoGrid = props => (
  <ul className="o-flex o-flex--justify-content-around o-flex--wrap o-list-bare">
    {
      props.repos.map((repo, index) => (
        <li
          key={repo.name}
          className="c-repo-item"
        >
          <div className="u-text-center c-repo-item__prominent-text">#{index + 1}</div>
          <ul className="o-list-bare
                         o-flex o-flex--column o-flex--align-items-center
                         u-margin-bottom-large"
          >
            <li>
              <img
                src={repo.owner.avatar_url}
                alt={`Avatar ${repo.name}`}
                className="c-avatar"
              />
            </li>
            <li>
              <a href={repo.html_url}><h3 className="c-repo-item__title">{repo.name}</h3></a>
            </li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
      ))
    }
  </ul>
);

RepoGrid.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const SelectLanguage = (props) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <div className="c-page-head
                   u-margin-top u-margin-bottom-large"
    >
      {
        languages.map(language => (
          <button
            key={language}
            style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
            className="c-page-head__item"
            onClick={props.onSelect.bind(null, language)}
          >
            {language}
          </button>
        ),
        )
      }
    </div>
  );
};

SelectLanguage.propTypes = {
  // selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null,
    });
    api.fetchPopularRepos(lang)
      .then((repos) => {
        this.setState({
          repos,
        });
      });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          this.state.repos ? (
            <RepoGrid repos={this.state.repos} />
          ) : (
            <div className="o-flex o-flex--justify-content-center u-margin-top">Loading...</div>
          )
        }
      </div>
    );
  }
}
