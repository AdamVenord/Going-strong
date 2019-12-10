import React from 'react';
import { Button, Header, Icon } from "semantic-ui-react";

const Secondary = ({ id, complete, name, deleteSecondary }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <div style={complete ? styles.complete : {}} className="center">
        <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
      </div>
    </div>
    <Button 
      icon 
      color="purple" 
      size="tiny" 
      onClick={() => deleteSecondary(id)} 
      style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
)

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "Blue",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignYums: "center",
  },
};

export default Secondary;
