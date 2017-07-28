import React, { Component } from 'react';
import { Link } from 'react-router';
import { Spin } from 'antd';

const defaultProps = {};

export class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>hello from home page</h1>
      </div>
    );
  }
}
