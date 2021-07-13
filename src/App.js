
import './App.css';
import  Navbar  from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import './Styles/Style.css'//Importe la hoja de estilos global

function App() {
  return (
   <div className='container'>
       <Navbar />
       <ItemListContainer greeting = {"Bienvenidos!"} />
    </div>
  );
}

export default App;
