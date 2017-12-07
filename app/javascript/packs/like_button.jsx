import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import 'font-awesome/scss/font-awesome';

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
       <FontAwesome name="thumbs-up" /> {this.state.likes}
      </button>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <LikeButton name="React" />,
    document.getElementById('like-button')
  )
})
