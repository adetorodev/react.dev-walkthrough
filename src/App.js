import logo from './logo.svg';
import './App.css';
import Counter from './useState/ClickCounter';
import MyInput from './useState/TextField';
import MyCheckbox from './useState/CheckBox';
import Form from './useState/Form';

function App() {
  return (
    <>
    <Counter />
    <MyInput />
    <MyCheckbox />
    <Form />
    </>
  );
}

export default App;
