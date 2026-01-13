import { MdDeleteForever, MdEdit } from "react-icons/md";
function Card({ value, handleDelete ,handleUpdate}) {
    // console.log(value.id);
    return (
        <>
         {/* {value.id < 0 ? */}
            <div>
                {/* <img src={value.img? URL.createObjectURL(value.img):null} alt="Image not Found" className="aspect-square w-full rounded-md bg-gray-200 object-cover  lg:h-80" /> */}
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-100">
                            {value.des}

                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{value.pname}</p>
                    </div>
                    <div className="text-end">
                        <p className="text-sm pb-2 font-medium text-gray-100">${value.price}</p>
                        <span className="m-2">
                            <button type="button" onClick={()=>handleDelete(value.id)}><MdDeleteForever /></button>
                        </span>
                        <span><button type="button" onClick={()=>handleUpdate()} ><MdEdit /></button></span>
                    </div>
                </div>
            </div>
             {/* : <h1 className="justify-center"> Data Not Found</h1>} */}
        </>
    )
}
export default Card;
// onClick={handleDelete(value.id)} 
// , handleDelete 