import React from 'react'
import ReactDOM from 'react-dom'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  render() {
    return (
      <button>
        Like! {this.state.likes}
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
