import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/BlogActions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class BlogPosts extends React.Component {
  componentDidMount() {
      this.props.fetchPosts();
  }
  
  renderPosts = (posts) => {
    return _.map(posts, (p) => <li key={p.id} className="list-group-item">{p.title}</li>)
  }

  render() {
    if(!_.isEmpty(this.props.posts)) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1>Posts</h1>
            </div>
            <div className="col-md-9 text-right">
              <Link to="/posts/new" className="btn btn-primary">New Post</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                { this.renderPosts(this.props.posts) }
              </ul>
            </div>
          </div>
        </div>
      );
    }
    else
      return ("Loading")
  }
}

function mapStateToProps({posts}) {
  return { posts };
}

export default connect(mapStateToProps, { 
  fetchPosts
})(BlogPosts);