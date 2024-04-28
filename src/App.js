import './App.css';
import Header from './MyComponents/Header';
// import WinnerWindow from './MyComponents/WinnerWindow';
// import LoserWindow from './MyComponents/LoserWindow';
import Main from './MyComponents/Main';

function App() {
  
  return (
    <div className="App" >
      <Header></Header>
      {/* <WinnerWindow></WinnerWindow>
      <LoserWindow></LoserWindow> */}
      <Main></Main>
    </div>
  );
}

export default App;
