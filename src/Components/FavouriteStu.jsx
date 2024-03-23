import React, { useContext } from "react";
import { Context } from "./ContextProvider";

function FavouriteStu() {
    const { favStudent, setFavStudent } = useContext(Context);

    function handleRemoveBtn(removeid) {
        var temparray = favStudent.filter(function (item) {
            return item.id !== removeid;
        });
        setFavStudent(temparray);
    }

    return (
        <div>
            {favStudent.length === 0 ? (
                <p className="text-center font-bold text-2xl font-serif mt-3">You don't have any Favourite Students!</p>
            ) : (
                <p className="text-center text-2xl font-bold font-serif mt-3">Your Favourite Students</p>
            )}
            {favStudent.map((item, index) => (
                <div className="flex gap-10 p-6 text-center font-bold font-serif" key={index}>
                    {index + 1}. 
                    {item.StudentName}
                    <button className="text-red-500" onClick={() => handleRemoveBtn(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default FavouriteStu;
