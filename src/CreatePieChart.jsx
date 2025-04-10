import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';

const CreatePieChart = ({data}) => {

    return (
      <div style={{ width: '300px' }}>
        <PieChart
          data={data}
          label={({ dataEntry }) => `${dataEntry.assetClass} (${dataEntry.allocation}%)`}
          labelStyle={{
            fontSize: '5px',
            fontFamily: 'sans-serif',
          }}
          radius={42}
          labelPosition={112}
        />
      </div>
    );
  };

  export default CreatePieChart;