import React, {Component} from 'react';
import Header from './components/Header';
import {PageHeader} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PageHeader style={pageHeaderStyle}>
          Cinema Aurora
        </PageHeader>;
      </div>
    );
  }
}
let pageHeaderStyle = {
  color: '#95afc0',
  marginLeft: '3.75rem',
  border:'none'
}
export default App;
