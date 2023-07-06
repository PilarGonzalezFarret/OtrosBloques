import './App.css';
import Header from './components/Header';
import Square from './components/Square';
import Column from './components/Column';
import Footer from './components/Footer';
import Side from './components/Side';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Square>
        <Column></Column>
        <Column></Column>
      </Square>
      <Side></Side>
      <Footer></Footer>
    </div>
  );
}

export default App;
