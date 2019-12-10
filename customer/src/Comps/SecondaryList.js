import React from 'react';
import Secondary from './Secondary';

const SecondaryList = ({ secondarys, updateSecondary, deleteSecondary }) => (
  <div>
    { secondarys.map( secondary => 
        <Secondary
          key={secondary.id}
          {...secondary}
          updateSecondary={updateSecondary}
          deleteSecondary={deleteSecondary}
        />
      )
    }
  </div>
)

export default SecondaryList;