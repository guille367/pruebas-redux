import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'titulo' }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  normalizeTest = (a,c,d,e) => {
    console.log(a,c,d,e);
    return a;
  } 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div>
          <label>Title</label>
          <Field component="input" type="text" name="title"/>
        </div>
        <div>
          <label>Categories</label>
          <Field component="input" type="text" name="categories"/>
        </div>
        <div>
          <label>Content</label>
          <Field component="input" type="textarea" name="content"/>
        </div>
        <button type="submit">Save</button>
        <Link to="/">Cancel</Link>
      </Form>
    );
  }
}

const NewPostComponent = reduxForm({
  form: 'newPost'
})(NewPost);

export default NewPostComponent;