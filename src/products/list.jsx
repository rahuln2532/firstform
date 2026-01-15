import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Card from "./card";

export default function List() {

    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("localdata")) || [];
        setData(local);
    }, []);

    const [demo, setDemo] = useState({
        value: "",
        min: "",
        max: "",
    });

    const [debounceValue] = useDebounce(demo, 500)

    const [item, setItem] = useState([]);


    const handleFilter = () => {

        let newItem = data;
        if (debounceValue.value && debounceValue.value != "") {
            newItem = newItem.filter((d) => d.pname.includes(debounceValue.value) || d.des.includes(debounceValue.value) || d.price.includes(debounceValue.value));

        } if (debounceValue.max !== '' || debounceValue.min !== '') {
            if (debounceValue.max !== '' && debounceValue.min !== '') {
                newItem = newItem.filter((d) => d.price >= Number(debounceValue.min) && d.price <= Number(debounceValue.max));

            } else if (debounceValue.min && debounceValue.min !== '') {
                newItem = newItem.filter((d) => d.price >= Number(debounceValue.min));

            } else if (debounceValue.max && debounceValue.max !== '') {
                newItem = newItem.filter((d) => d.price <= Number(debounceValue.max));
            }
        }

        setItem(newItem);
    }

    useEffect(() => {
        handleFilter();

    }, [debounceValue, data])

    const handleDelete = (id1) => {

        const arr = data.filter((num, index) => num.id !== id1);
        setData(arr);
        localStorage.setItem('localdata', JSON.stringify(arr));

    }

    const handleUpdate = (id) => {
        localStorage.setItem('activeindex', id);
        navigate('/create')

    }
    return (
        <>
            <div className=" w-full flex justify-start">
                <button type="button" onClick={() => navigate("/create")} className="outline-white p-10">
                    Add New Card
                </button>
            </div>
            <div className="w-full mt-6 flex justify-center">
                <div>
                    <input
                        id="search"
                        type="text"
                        value={demo.value}
                        onChange={(event) => setDemo({ ...demo, value: event.target.value })}
                        className="block rounded-md bg-white/5 px-3 mt-2 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        placeholder="Search..."
                    />
                </div>

                <div>
                    <input
                        id="search"
                        type="number"
                        value={demo.min}
                        onChange={(event) => setDemo({ ...demo, min: event.target.value })}
                        className="block rounded-md ml-2 w-20 bg-white/5 px-3 mt-2 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        placeholder="min"
                    />
                </div>
                <p className="mt-3 ml-2">To</p>
                <div>

                    <input
                        id="search"
                        type="number"
                        value={demo.max}
                        onChange={(event) => setDemo({ ...demo, max: event.target.value })}
                        className="block rounded-md ml-2 w-20 bg-white/5 px-3 mt-2 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        placeholder="max"
                    />

                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                {
                    item ?
                        item.map((value) =>
                            <Card key={value.id} value={value} handleDelete={(id) => handleDelete(id)} handleUpdate={() => handleUpdate(value.id)} />
                        ) : <div className="sm:col-span-2 lg:col-span-4 text-center"><h3>Data Not Found</h3></div>

                }

            </div>
        </>
    )
}