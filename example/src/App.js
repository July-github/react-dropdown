import React from 'react';
import Dropdown from 'react-ddown';
import 'react-ddown/dist/index.scss';

const App = () => {

  function consol(){
    return console.log('setValue')
  }

  return <Dropdown 
            setValue={consol}
            list={['Sales', 'Marketing', 'Engineering', 'Human Ressources', 'Legal']}
            isCustomized={true}
        />
}

export default App
