import React, {Component} from 'react'

import {SearchBox} from './SearchBox'
import {PostList} from './PostList'

export class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
    }
  }

  componentDidMount = () => {
    this.timer = null;
  }

  handleChange = filter => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.handleSubmit(filter), 100);
  }

  handleSubmit = filter => {
    this.setState({filter});
  }

  render() {
    return (
      <>
        <SearchBox onChange={this.handleChange} />
        <PostList filter={this.state.filter} key={Date.now()} />
      </>
    )
  }
}
