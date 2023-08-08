import logo from './logo.svg';
import './App.css';
import Counter from './useState/ClickCounter';
import MyInput from './useState/TextField';
import MyCheckbox from './useState/CheckBox';
import Form from './useState/Form';
import FormArray from './useState/FormArray';
import NestedObject from './useState/NestedObject';
import ListArray from './useState/ListArray';
import BucketList from './useState/List';

function App() {
  return (
    <>
    <Counter />
    <MyInput />
    <MyCheckbox />
    <Form />
    {/* <FormArray /> */}
    {/* <NestedObject /> */}
    {/* <ListArray /> */}
    {/* <BucketList /> */}
    </>
  );
}

export default App;
