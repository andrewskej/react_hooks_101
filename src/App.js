import React from 'react';
import './App.css';
import {Container} from 'semantic-ui-react'
import BasicAdder from './components/BasicAdder';
import Counter from './views/Counter'
import Contacts from './views/Contacts'

export default function App(){
  return(
    <Container>
      <h1>React Hooks Context Demo</h1>
      <Counter/>
      <Contacts/>
      <BasicAdder/>
    </Container>
  )
}