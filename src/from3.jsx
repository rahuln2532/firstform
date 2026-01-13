import { useEffect, useState } from "react";
import { FaSearchDollar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import Card from './card1'
import { useDebounce } from 'use-debounce';
//import useDebounce from "./useDebounce"; 

// function useDebounce(demo, delay = 500){

//         const [debounce, setDebounce] = useState(demo);

//         useEffect(() => {
//             const timer =
//                 setTimeout(() => {
//                     setDebounce(demo);
//                 }, delay);

//             return () => {
//                 clearTimeout(timer);
//             }
//         }, [demo]);

//         return debounce;

//     }


function App1() {
    const initial = {
        id: "",
        pname: "",
        price: "",
        des: "",
        img: "",
    }

    const [formdata, setFormdata] = useState(initial);
    const [data, setData] = useState([]);
    

    const [demo, setDemo] = useState({
        value: "",
        min: "",
        max: "",
    });
    
    //const debounceValue = useDebounce(demo, 500);
    const[debounceValue]=useDebounce(demo,500)

    const [item, setItem] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formdata.id) {
            const updateData = data.map((value, index) => {
                if (value.id === formdata.id) {
                    return formdata;

                }
                return value;
            })

            setData(updateData);
            setFormdata(initial);
            return;
        }

        let id = Math.random();
        const updateData = [...data, { ...formdata, id: id }];
        setData(updateData);
        setFormdata(initial);
    }

    const handleDelete = (id1) => {

        const arr = data.filter((num, index) => num.id !== id1);
        setData(arr);

        //setData((prev) => prev.filter((num, index) => num.id !== id1));


    }


    const handleUpdate = (id) => {
        const item = data.find(d => d.id === id);
        setFormdata(item);

    }
    const handleFilter = () => {
        let newItem = data;
        console.log('hello');

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
        console.log(debounceValue)

        console.log(newItem);
    }

    useEffect(() => {
        handleFilter();

    }, [debounceValue, data])

    // // const filterArray = () => {
    // //     const item = data.filter(
    // //        // value => value.pname.includes(demo));
    // //         value => value.pname.toLowerCase().includes(demo.toLowerCase()) || value.des.toLowerCase().includes(demo.toLowerCase()) ||  value.price.includes(demo));
    // //     setSort(item);
    // //     setDemo("");
    // // }



    // let item = data.filter(
    //     value => value.pname.toLowerCase().includes(demo.toLowerCase()) || value.des.toLowerCase().includes(demo.toLowerCase()) || value.price.includes(demo));

    // // const maxValue = () => {
    // //     const item = data.filter(
    // //         value => (value.price <= Number(minmax.max) && value.price >= Number(minmax.min)));
    // //     //((value.price <= minmax.max && value.price >= minmax.min)||value.price <= minmax.max||value.price >= minmax.min));
    // //     item.length > 0 ?
    // //         setSort(item)
    // //         :
    // //         alert("data not found")
    // //     setMinmax({ ...minmax, max: "", min: "" })
    // //     console.log(item);
    // // }

    //      item = (minmax.min || minmax.max) ? data.filter(
    //         value => (value.price <= Number(minmax.max) && value.price >= Number(minmax.min))) : data;



    //     //((value.price <= minmax.max && value.price >= minmax.min)||value.price <= minmax.max||value.price >= minmax.min));
    // //     item.length > 0 ?
    // //         setSort(item)
    // //         :
    // //         alert("data not found")
    // //     setMinmax({ ...minmax, max: "", min: "" })
    // //     console.log(item);
    // // }

    return (
        <>
            <div className="border border-white/90 p-12 rounded-2xl">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center text-4xl font-semibold text-white">Product Information</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">Product name</label>
                            <div className="mt-2">
                                <input id="first-name" type="text" name="first-name" value={formdata.pname} minLength={3} required onChange={(event) => setFormdata({ ...formdata, pname: event.target.value })} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="block text-sm/6 font-medium text-white">Price</label>
                            <div className="mt-2">
                                <input id="price" type="number" value={formdata.price} maxLength={2} required onChange={(event) => setFormdata({ ...formdata, price: event.target.value })} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">Product Description</label>
                            <div className="mt-2">
                                <input id="last-name" type="text" value={formdata.des} maxLength={50} name="last-name" required onChange={(event) => setFormdata({ ...formdata, des: event.target.value })} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-white">Product Image</label>
                            <label htmlFor="file-upload" >
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/50 px-6 py-10">
                                    <div className="text-center">
                                        <div className="mt-4 flex text-sm/6  relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300" >
                                            <span>Upload a file</span>
                                            <input id="file-upload" accept="image/*" type="file" name="file-upload" onChange={(event) => { setFormdata({ ...formdata, img: event.target.files[0] }); event.target.value = null; }} className="sr-only" />
                                        </div>
                                        <p className="text-xs/5 text-gray-400">PNG, JPG, GIF</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="w-full mt-6 flex items-center justify-end">
                        <button type="submit" className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Submit</button>
                    </div>
                </form>
            </div>
            <div className="w-full mt-6 flex justify-end">
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


            {/* 
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                    sort.length > 0 ?
                        sort.map((value) =>
                             <Card key={value.id} value={value} handleDelete={(id) => handleDelete(id)} handleUpdate={() => handleUpdate(value.id)} />
                        ) :
                        data.map((value) =>
                            <Card key={value.id} value={value} handleDelete={(id) => handleDelete(id)} handleUpdate={() => handleUpdate(value.id)} />
                        )
                }
            </div> */}



            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                {
                    item.length > 0 ?
                        item.map((value) =>
                            <Card key={value.id} value={value} handleDelete={(id) => handleDelete(id)} handleUpdate={() => handleUpdate(value.id)} />
                        ) : <div className="sm:col-span-2 lg:col-span-4 text-center"><h3>Data Not Found</h3></div>

                }

            </div>
        </>
    )
}
export default App1;
