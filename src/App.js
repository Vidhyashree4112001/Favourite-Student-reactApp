import { Link } from "react-router-dom";
import ListofStudent from "./Components/ListofStudent";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ContextProvider from "./Components/ContextProvider";
import FavouriteStu from "./Components/FavouriteStu";


function App() {

  return (

    <>

      <div>
        <BrowserRouter>
          <ContextProvider>
            <div className="bg-orange-500 p-10 text-3xl flex justify-around font-bold font-serif text-black ">

              <Link to={"/"} className="underline">  List of Students</Link>
              <Link to={"/favourite"} className="underline">Favourite Students</Link>

            </div>
            <Routes>
              <Route path={"/"} element={<ListofStudent/>}></Route>
              <Route path={"/favourite"} element={<FavouriteStu/>}></Route>
            </Routes>
          </ContextProvider>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;