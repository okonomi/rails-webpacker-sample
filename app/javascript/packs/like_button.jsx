import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  render() {
    return (
      <button onClick={() => {this.setState({likes: this.state.likes +1})}}>
       <FontAwesome name="thumbs-up" cssModule={faStyles} /> {this.state.likes}
      </button>
    );
  }
}

document.addEventListener('turbolinks:load', () => {
  const elem = document.getElementById('like-button');
  if (elem) {
    ReactDOM.render(<LikeButton />, elem)
  }
})
