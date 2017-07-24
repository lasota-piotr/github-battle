import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

const SelectLanguage = props => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="o-list-bare
                   c-page-head">
      {
        languages.map(language => (
            <li key={language}
                style={language === props.selectedLanguage ? {color: '#d0021b'} : null}
                className="c-page-head__item"
                onClick={props.onSelect.bind(null, language)}>
              {language}
            </li>
          )
        )
      }
    </ul>
  )
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {

    this.setState({
      selectedLanguage: lang,
      repos: null
    });
    api.fetchPopularRepos(lang)
      .then(repos => {
        this.setState({
          repos: repos
        })
      })
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {JSON.stringify(this.state.repos)}
      </div>
    )
  }
}
