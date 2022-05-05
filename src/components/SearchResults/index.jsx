import React, { useState } from 'react';

import TrackList from '@components/TrackList';

import './index.css';

class SearchResults extends React.Component {
  
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
          <TrackList
            tracks={this.props.searchResults}
            onAdd={this.props.onAdd}
            isRemoval={false}
          />
      </div>
    );
  }
}

export default SearchResults;