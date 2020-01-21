import React from 'react';
import './App.css';
import Form from 'react-jsonschema-form';
import schemaData from './schema/dataset.json';
import uiData from './schema/dataset.ui.json';

// const mySchema = () => JSON.parse(JSON.stringify(schemaData));

const MyForm = () => ( <Form schema={schemaData} uiSchema={uiData} /> );

function App() {
  return (
    <div className="App">
      <MyForm />
    </div>
  );
}

export default App;
