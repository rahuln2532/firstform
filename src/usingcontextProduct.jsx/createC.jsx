import { useContext, useEffect, useState } from "react";

//import { useDebounce } from 'use-debounce';
//import { ProductContext } from "./context";

import { useNavigate } from "react-router-dom";
import { ProductContext } from "../App";

export default function CreateC() {
    
    // const initial = {
    //     id: "",
    //     pname: "",
    //     price: "",
    //     des: "",
    //     img: "",
    // }

    // const [formdata, setFormdata] = useState(initial);
    // const [data, setData] = useState([]);
    

   
    
    //const debounceValue = useDebounce(demo, 500);
    
 const { data, setData, formdata, setFormdata, initial } =
    useContext(ProductContext);

    const navigate=useNavigate();

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
            navigate('/');
            return;
        }

        let id = Math.random();
        const updateData = [...data, { ...formdata, id: id }];
        setData(updateData);
        setFormdata(initial);
        navigate('/');
    }

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
            
        </>
    )
}

