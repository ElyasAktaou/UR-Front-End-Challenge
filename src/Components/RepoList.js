import React from 'react';
import axios from 'axios';
import Repo from './Repo';
import moment from 'moment';
import debounce from 'lodash.debounce';
import { Container, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';


// Repos container component, responsible for data
// loading and managing the infinite scrolling 
export default class RepoList extends React.Component {

  state = {
    repos: [],
    count: 0,
    isLoading: false,
    hasMore: true,
    page: 1,
    error: false,
  }

  // Loads the data using axios
  // Basic authentication was willingly removed to protect account credentials
  // and to not have to use an OAuth client to handle app token
  loadData = (page) => {
    this.setState({ isLoading: true }, () => {
      // axios.get(`https://api.github.com/search/repositories?q=created:>${moment().subtract(1, 'months').format('YYYY-MM-DD').toString()}&sort=stars&order=desc&page=${page}`, { auth: { username: 'XXXXXXXX', password: 'XXXXXXXXX' } })
      axios.get(`https://api.github.com/search/repositories?q=created:>${moment().subtract(1, 'months').format('YYYY-MM-DD').toString()}&sort=stars&order=desc&page=${page}`) // Not my proudest moment
        .then(res => {
          const nextPage = res.data.items;
          const count = res.data.total_count;
          this.setState({ repos: this.state.repos.concat(nextPage) });
          this.setState({ count });
          this.setState({ isLoading: false });
          this.setState({ page: this.state.page + 1 });
          this.setState({ hasMore: (this.state.repos.length < this.state.count) });
        })
        .catch(err => {
          this.setState({ error: true });
          this.setState({ isLoading: false });
        })
    })
  }

  // Initial request
  componentWillMount() {
    this.loadData(this.state.page);
  }

  // Attaching the event handler once component finished 
  // mounting to avoid initial scroll position problems 
  componentDidMount() {
    // Using debounce helps reduce multiple requests
    window.onscroll = debounce(() => {
      if (this.state.error || this.state.isLoading || !this.state.hasMore) return;
      if (
        // Trigger the request once user scrolled through
        // 75% of the window height to make loading smoother
        window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.75
      ) {
        this.loadData(this.state.page);
      }
    }, 100);
  }

  render() {
    return (
      <Container className="repoList">
        <Row className="justify-content-md-center" >
          {this.state.repos.map(repo => <Repo repo={repo} />)}
          {this.state.error && <Col xs="auto">There has been a problem loading more repos, it's most probably rate limiting related, please refresh the page.</Col>}
          {this.state.isLoading && <Col xs="auto"> <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner></Col>}
          {!this.state.hasMore && <Col xs="auto">I can't believe you actually managed to scroll through {this.state.count} repos!</Col>}
        </Row>
      </Container>
    )
  }
}
