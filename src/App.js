import React, { useEffect } from 'react';
import SchemaBuilder from '@xrenders/schema-builder';

function App() {
  useEffect(() => {
    let iframes = document.getElementsByTagName('iframe');
    if (iframes.length > 1) {
      iframes[0].height = 0
    }
  }, [])

  return (
    <div style={{ height: '100vh' }}>
      <SchemaBuilder importBtn={true} exportBtn={true} pubBtn={false} />
    </div>
  );
}

export default App;