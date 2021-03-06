import React from 'react';
import { Button, Header, Icon } from "semantic-ui-react";

const Overseer = ({ id, complete, name, deleteOverseer }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <div style={complete ? styles.complete : {}} className="center">
        <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
      </div>
    </div>
    <Button 
      icon 
      color="blue" 
      size="tiny" 
      onClick={() => deleteOverseer(id)} 
      style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
)

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Overseer;