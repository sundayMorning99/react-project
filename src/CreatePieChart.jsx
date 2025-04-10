import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';

const CreatePieChart = () => {
    const data = [
      { title: 'Large Cap', value: 35, color: '#E38627' },
      { title: 'Mid Cap', value: 25, color: '#C13C37' },
      { title: 'Small Cap', value: 40, color: '#6A2135' },
    ];
  
    return (
      <div style={{ width: '300px' }}>
        <PieChart
          data={data}
          label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value}%)`}
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