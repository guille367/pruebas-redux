import React from 'react';
import { connect } from 'react-redux';
import { Field } from  'redux-form';
import { fetchPost, deletePost } from '../actions/BlogActions';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.fetchPost(postId);
  }

  render() {
    const post = this.props.post;
    
    if(this.props.deletingPost)
      return ("Wait a second...");

    if(!post)
      return ("Loading...");
    else
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <label>Title</label>
              <p>{post.title}</p>
            </div>
            <div className="col-md-3">
              <button 
              className="btn btn-danger pull-right"
              onClick={() => { this.props.deletePost(post.id, () => { this.props.history.push("/") }) }}>
                Delete Post
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>Categories</label>
              <p>{post.categories}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>Content</label>
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state)
  return { post: state.posts[ownProps.match.params.id], deletingPost: state.uiState.deletingPost };
}

const connectedComponent = connect(mapStateToProps,{ fetchPost, deletePost })(PostShow);

export default connectedComponent;