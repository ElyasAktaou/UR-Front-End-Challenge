import React from 'react';
import RepoList from './Components/RepoList';
import {Container, Row, Col} from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Container className="main">
        <Row>
          <Col>
            <RepoList className="repoList" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
