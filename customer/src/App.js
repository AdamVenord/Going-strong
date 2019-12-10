import React, { Component, } from 'react';
import OverseerForm from './components/OverseerForm';
import OverseerList from './components/OverseerList';
import SecondaryForm from './Comps/SecondaryForm';
import SecondaryList from './Comps/SecondaryList';
import { Container, } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = { overseers: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ overseers: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addMenu = (name) => {
    axios.post('/api/menus', { name })
      .then( res => {
        const { overseers, } = this.state;
        this.setState({ overseers: [...overseers, res.data], });
      })
  }

  updateOverseer = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const overseers = this.state.overseers.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ overseers, });
    })
  }

  deleteOverseer = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { overseers, } = this.state;
      this.setState({ overseers: overseers.filter(t => t.id !== id), })
    })
  }
  //My tought process is I can render both of these in the same place
  compDidMount() {
    axios.get("/api/yums")
      .then( res => {
        this.setState({ secondarys: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addYum = (name) => {
    axios.post('/api/yums', { name })
      .then( res => {
        const { secondarys, } = this.state;
        this.setState({ secondarys: [...secondarys, res.data], });
      })
  }

  updateSecondary = (id) => {
    axios.put(`/api/yums/${id}`)
      .then( res => {
        const secondarys = this.state.secondarys.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ secondarys, });
    })
  }

  deleteSecondary = (id) => {
    axios.delete(`/api/yums/${id}`)
    .then( res => {
      const { secondarys, } = this.state;
      this.setState({ secondarys: secondarys.filter(t => t.id !== id), })
    })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <OverseerForm addMenu={this.addMenu} />
        <br />
        <br />
        <OverseerList
          overseers={this.state.overseers}
          updateOverseer={this.updateOverseer}
          deleteOverseer={this.deleteOverseer}
          secondarys={this.state.secondarys}
          updateSecondary={this.updateSecondary}
          deleteSecondary={this.deleteSecondary}
        />
      </Container>
      // Make a second container and put everything here Me If you can
    );
  }
}

export default App;