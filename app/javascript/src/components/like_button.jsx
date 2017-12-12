import React from 'react'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/scss/font-awesome.scss';

export default class LikeButton extends React.Component {
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
