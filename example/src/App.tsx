import React from 'react'

import ScrollMeter from 'scrollmeter'

const Home = () => {
  return (
    <div>
      <div style={{ height: '100px', border: '1px solid red' }}>HOME</div>
      <div style={{ height: '100px', border: '1px solid red' }}>HOME</div>
      <div style={{ height: '100px', border: '1px solid red' }}>HOME</div>
      <div style={{ height: '100px', border: '1px solid red' }}>HOME</div>
      <div style={{ height: '100px', border: '1px solid red' }}>HOME</div>
    </div>
  );
}

const App = () => {
  return <div style={{ height: "3000px" }}>
    {/* <ScrollMeter /> */}
    <ScrollMeter leftColor={'green'} rightColor={'transparent'} direction={'right'} duration={50} height={10} top={50} debug={false} />
    <Home />
    <div style={{ height: '500px' }}>
      test2
    </div>
    <div style={{ height: '500px' }}>
      test3
    </div>
    <div style={{ height: '500px' }}>
      test4
    </div>
  </div>
}

export default App
