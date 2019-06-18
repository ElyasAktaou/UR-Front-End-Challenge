import React from 'react';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';

export default class Repo extends React.Component {
  render() {
    // I know there must be a smarter way to 
    // do this in ES6/7, enlighten me please!
    const name = this.props.repo.name;
    const description = this.props.repo.description;
    const ownersName = this.props.repo.owner.login;
    const ownersPicture = this.props.repo.owner.avatar_url;
    const stars = this.props.repo.stargazers_count;
    const issues = this.props.repo.open_issues_count;
    const submitDate = this.props.repo.created_at;
    return (
      <Container className="repo">
        <Row>
          <Col xs={4} lg={2} className="avatarContainer">
            <img src={ownersPicture} alt="Owners avatar" className="avatar" />
          </Col>
          <Col xs={8} lg={10} className="repoBody">
            <Container>
              <Row>
                <Col>
                  <h3>{name}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{description}</p>
                </Col>
              </Row>
              <Row>
                <Col xs="auto">
                  <p>Stars: {stars}</p>
                </Col>
                <Col xs="auto">
                  <p>Issues: {issues}</p>
                </Col>
                <Col>
                <p>
                  Submitted {moment(submitDate).fromNow()}, by {ownersName}
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}
