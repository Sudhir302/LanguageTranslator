import Multilingua from './Components/Multilingua';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import './Media.css';

function App(){
  return(
    <>
      <Multilingua />
      <ToastContainer position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
    </>
  )
}

export default App;