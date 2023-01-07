import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';
const ProfileGitHub = ({ getGithubRepos, username, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos(username)]);
  return <div></div>;
};

ProfileGitHub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGitHub);
