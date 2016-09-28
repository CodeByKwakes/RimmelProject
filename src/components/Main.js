import React from 'react';
import Header from './Header'
import PhotoGrid from './PhotGrid'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>New Rimmel</div>
        <PhotoGrid />
      </div>
    )
  }
}

export default Main