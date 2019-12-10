import React from 'react';
import Overseer from './Overseer';

const OverseerList = ({ overseers, updateOverseer, deleteOverseer }) => (
  <div>
    { overseers.map( overseer => 
        <Overseer
          key={overseer.id}
          {...overseer}
          updateOverseer={updateOverseer}
          deleteOverseer={deleteOverseer}
        />
      )
    }
  </div>
)

export default OverseerList;