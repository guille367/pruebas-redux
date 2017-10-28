import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/BlogActions';
import _ from 'lodash';

class BlogPosts extends React.Component {
  componentDidMount() {
      this.props.fetchPosts();
  }
  
  renderPosts = (posts) => {
    return _.map(posts, (p) => <li key={p.id}>{p.id}</li>)
  }

  render() {
    if(!_.isEmpty(this.props.posts)) {
      return (
        <ul>
          { this.renderPosts(this.props.posts) }
        </ul>
      );
    }
    else
      return ("nada")
  }
}

function mapStateToProps({posts}) {
  return { posts };
}

export default connect(mapStateToProps, { 
  fetchPosts
})(BlogPosts);