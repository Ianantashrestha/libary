import React from 'react';
import Form, {TextField,Button} from './form-components-libary';
function App() {
  return (
    <div className="App">
      <Form>
            <TextField name = 'username' placeholder="Username"/>
            <TextField name = 'Email' placeholder="Email"/>

          <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
