/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import PropTypes from 'prop-types';

import Form from './form.js';
import NavBar from './nav-loader.js';
import {ItemList} from './unordered-list.js';

export class Page extends React.Component {
  render(){
    const results = this.props.search.results;
    const items = results ? <ItemList items={results}/> : null;
    return(
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-3">Search for movies</h1>
          <p className="lead">This is a simple lookup for movie titles.</p>
          <hr className="my-4"/>
          <p className="lead">
          </p>
        </div>
        <div>
          <div>
            <Form
              onSubmit={this.props.onSubmit}
              onInput={this.props.onInput}
              input={this.props.search.string}/>
          </div>
          <div>
            {this.props.fetching ? <NavBar/>: null}
            {items}
          </div>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  search: PropTypes.shape({
    results: PropTypes.array,
    string: PropTypes.string
  }),
  onSubmit: PropTypes.function,
  onInput: PropTypes.function,
  fetching: PropTypes.bool
};

export default Page;
