import React from'react'
import "./app.css"
import { AppUi } from './AppUi.js';
import { TodoProvider } from '../TodoContext/index.js';

function App() {
  return (
  <TodoProvider>
    <AppUi/>
  </TodoProvider> 
  );
  }
export default App;


//  todo provider es la forma en la que le entrego todas las propeides que necesito para los componentes hijos de ella