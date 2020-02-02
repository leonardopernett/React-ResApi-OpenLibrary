import '@babel/polyfill';

import React, {Component} from 'react';
import ReactDOM from 'react-dom'

// compoenet principal
import App from './App'

import datos  from "./data.json"

const heading = ['when','who','description']

ReactDOM.render(<App head={heading} title={"OpenLibrary API"} datos={datos} />, document.getElementById('app'))