import React from 'react';
import Dropdown from "react-dropdown";
import 'react-dropdown/dist/index.scss';

const App = () => {

function consol(){
  return console.log('setValue')
}

  return <Dropdown 
            setValue={consol}
            list={['Sales', 'Marketing', 'Engineering', 'Human Ressources', 'Legal']}
        />
}

export default App
