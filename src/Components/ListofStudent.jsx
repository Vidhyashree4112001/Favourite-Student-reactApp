import { useState, useContext } from "react";
import { Context } from "./ContextProvider";

const ListStudent = () => {
    const { listStudent, addFavourite, favStudent } = useContext(Context);
    const [clickedIds, setClickedIds] = useState([]);

    const handleAddFavClick = (id) => {
        if (!clickedIds.includes(id)) {
            setClickedIds([...clickedIds, id]);
            addFavourite(id);
        }
    };

    return (
        <>
            {listStudent.map(function (item) {
                return (
                    <div className="flex justify-around items-center" key={item.id}>
                        <h1 className="font-bold font-serif p-3">{item.id}. {item.StudentName}</h1>
                        <button className="bg-black w-60 p-1 text-white border rounded"
                            onClick={() => handleAddFavClick(item.id)}
                            disabled={clickedIds.includes(item.id) || favStudent.some((favItem) => favItem.id === item.id)}
                        >
                            {favStudent.some((favItem) => favItem.id === item.id) ? <p className="bg-slate-700 border-none">Added to Favorites</p> : <p>Add to Favorites</p>}
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ListStudent;
