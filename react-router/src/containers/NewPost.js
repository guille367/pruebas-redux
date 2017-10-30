import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/BlogActions';
import { connect } from 'react-redux';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  submitPost = (values) => {
    this.props.createPost(values, () => { this.props.history.push("/") });
  }

  renderField = (values) => {
    const { meta: { touched, error, pristine, active } } = values;
    const errMsg = touched && error ? error : "";
    const className = `col-md-4 ${errMsg ? 'has-error' : ''}`

    return (
      <div className="row form-group">
        <div className={className}>
          <label>{ values.label }</label>
          <input { ...values.input } className="form-control" type="text"/>
          <span className="text-danger">{ errMsg }</span>
        </div>
      </div>
    );
  }

  render() {
    if(this.props.uiState.submittingPost){
      return ("Wait a second...");
    }
    
    return (
      <Form onSubmit={ this.props.handleSubmit(this.submitPost) } className="content">
        <h1>New Post</h1>
        <Field 
          component={this.renderField}
          label="Title"
          validate={validateTitle}
          name="title"
        />
        <Field 
          component={this.renderField}
          label="Categories"
          name="categories"
          validate={validateCategories}
        />
        <Field 
          component={this.renderField}
          label="Content"
          name="content"
        />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-default">Cancel</Link>
      </Form>
    );
  }
}

const validateTitle = (input) => {
  let err = {};
  if(!input)
    return "ingrese un título"; 
  else if(input.length < 3)
    return "Ingrese un valor de mas de 3 letras"
}

const validateCategories = (input) => {
  if(!input)
    return "ingrese una categoría"
}

const mapStateToProps = (props,ownProps) => {
  return props;
}

const connectedComponent = connect(mapStateToProps, { createPost })(NewPost);

export default reduxForm({
  form: 'newPost'
})(connectedComponent);
