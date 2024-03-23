import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

function NameContextProvider(data) {
    console.log(data);
    const [listStudent, setListStudent] = useState([
        { id: 1, StudentName: "John" },
        { id: 2, StudentName: "Vidhya" },
        { id: 3, StudentName: "Harun" },
        { id: 4, StudentName: "Usha" },
        { id: 5, StudentName: "Priya" }
    ]);

    const [favStudent, setFavStudent] = useState([]);

    function addFavourite(onClick) {
        const favArr = listStudent.find(function(item)
         {
            return (item.id === onClick)
        })
        if (favArr) {
            setFavStudent([...favStudent, favArr]);
        }
    }
    

    return (
        <>
            <Context.Provider 
            
            value={
                { listStudent, setListStudent, addFavourite, favStudent, setFavStudent }
                }>
                
                {data.children}
            </Context.Provider>
        </>
    );
}

export default NameContextProvider;
export {Context};
