import React from 'react';
import { Form, } from "semantic-ui-react";

class OverseerForm extends React.Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMenu(this.state.name);
    this.setState({ name: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Overseer"
          placeholder="Add A Menu To Devourer"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default OverseerForm;