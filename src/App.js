import React from 'react';
import './App.css';
import {Container} from 'semantic-ui-react'
import BasicCounter from './components/BasicCounter';
import Counter from './views/Counter'

export default function App(){
  return(
    <Container>
      <h1>React Hooks Context Demo</h1>
      <Counter/>
      <BasicCounter/>
    </Container>
  )
}