import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import { NavLink as NavLinkRouter, Link, Route, Switch } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card as CardBootstrap,
  Table,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
const axios = require("axios");

class List extends Component {
  
  render() {
    const { items, match } = this.props;
    return <div>
        <Table borderless dark striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Bithday</th>
              <th>Region</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {items.map((data, i) => <tr key={i}>
                <th scope="row">
                  <Link to={`${match.url}/${data.name}`}>{i}</Link>
                </th>
                <td>{data.name}</td>
                <td>{data.birthday.dmy}</td>
                <td>{data.region}</td>
                <td>{data.email}</td>
              </tr>)}
          </tbody>
        </Table>
      </div>;
  }
}

class Grid extends Component {
  render() {
    const { items, match } = this.props;
    console.log(match);
    
    return <Container>
        <Row>
          {items.map((data, i) => <Col key={i} sm="auto" xs="auto">
              <Card item={data} match={match} />
            </Col>)}
        </Row>
      </Container>;
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    axios.get("https://uinames.com/api/?ext&amount=24").then(response => {
      this.setState({
        items: response.data
      });
    });
  }
  render() {
    return <div flex>
        <Nav vertical>
          <NavLink exact strict tag={NavLinkRouter} to="/" activeStyle={{ fontWeight: "bold", color: "red" }}>
            Home
          </NavLink>
          <NavLink strict tag={NavLinkRouter} to="/list" activeStyle={{ fontWeight: "bold", color: "red" }}>
            List
          </NavLink>
          <NavLink strict tag={NavLinkRouter} to="/grid" activeStyle={{ fontWeight: "bold", color: "red" }}>
            Grid
          </NavLink>
        </Nav>
        {/* <Switch> */}
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route exact path="/:format(list|grid)/:name" render={({ match }) => {
            const filtered = this.state.items.filter(e => e.name === match.params.name);

            if (filtered.length === 0) return <div />;

            return <Container>
                <Row>
                  <Col>
                    <Card item={filtered[0]} match={match} />
                  </Col>
                </Row>
              </Container>;
          }} />
        <Route path="/list" render={({ match }) => <List items={this.state.items} match={match} />} />
        <Route path="/grid" render={({ match }) => <Grid items={this.state.items} match={match} />} />
        {/* </Switch> */}
      </div>;
  }
}

export default App;
