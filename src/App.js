import React, {useState, useEffect} from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import axios from 'axios';
import { thisExpression } from '@babel/types';
import CharacterCard from './components/CharacterCard.js';
import {Route} from 'react-router-dom';

export default function App() {
  

  return <main>
    <Header />
    <TabNav />
    <AppRouter />
  </main>
}