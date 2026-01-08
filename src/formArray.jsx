import { useState } from "react";

function Formarray() {
    let id = 1;
    const initialState = {
        id:'',
        name: '',
        lname: '',
        email: '',
        no: '',
        gender: 'male'

    }
    const [data, setData] = useState(initialState);
    const [formdata, setFormdata] = useState([]);
    //const [activeEditIndex, setActiveEditIndex] = useState(null);



    const handleSubmit = (event) => {
        event.preventDefault();
        if (!data.name) {
            alert("Name field is blank");
            return;
        }
        if (!data.lname) {
            alert("last Name field is blank");
            return;
        }
        if (!data.email) {
            alert("Email field is blank");
            return;
        }
        if (!data.no) {
            alert("Mobile No field is blank");
            return;
        }
        if (!data.gender) {
            alert("Gender field is blank");
            return;
        }

        // if (activeEditIndex !== null) {
        //     const updateData = formdata.map((item, index) => {
        //         if (index === activeEditIndex) {
        //             return data;
        //         }

        //         return item;
        //     })

        if (data.id) {
            const updateData = formdata.map((value, index) => {
                if (value.id === data.id) {
                    return data;
                }

                return value;
            })

            setFormdata(updateData);
            setData(initialState);
            setActiveEditIndex(null);
            return;
        }

        const id = Math.random();
        const updatedData = [...formdata, { ...data, id: id }];
        setFormdata(updatedData);
        setData(initialState);

    }

    const handleReset = () => {
        setData(initialState);

    }
    const deletedata = (id) => {
        // const updateData = formdata.filter((num, index) => index !== id);
        //    setFormdata(updateData);

        setFormdata((prev) => prev.filter((num, index) => index !== id));
    }

    const updatedata = (i,id) => {
        //let arr="";
        let arr=formdata.find((num)=>num.id==id);
        //console.log(arr.id);
        setData(arr);
        
        //setActiveEditIndex(i);

    }
    return (<>

        <div className="form-container">
            <h1 >Registration Form</h1>

            <form onSubmit={handleSubmit}> 
                <label>Name:</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    value={data.lname}
                    onChange={(e) => setData({ ...data, lname: e.target.value })}
                />

                <label>Email:</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                <label>Mobile No:</label>
                <input
                    type="number"
                    value={data.no}
                    onChange={(e) => setData({ ...data, no: e.target.value })}
                />

                <div className="gender-group">
                    <label>Gender:</label><br />
                    <input
                        type="radio"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={(e) => setData({ ...data, gender: e.target.value })} id="male"
                    /> <label htmlFor="male">Male</label><br />

                    <input
                        type="radio"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={(e) => setData({ ...data, gender: e.target.value })} id="female"
                    /><label htmlFor="female">FeMale</label><br />
                </div>

                <div className="btn-group">
                    <button type="submit" className="btn-submit">{activeEditIndex ? 'Update' : 'Submit'}</button>
                    <button type="button" onClick={() => handleReset()} className="btn-clear">Clear</button>
                </div>
            </form>

            <div className="output">
                <table border={1}>
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Gender</th>
                            <th colSpan={2} style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {formdata.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td >{value.name}</td>
                                    <td>{value.lname}</td>
                                    <td >{value.email}</td>
                                    <td >{value.no}</td>
                                    <td>{value.gender}</td>
                                    <td><button type="button" onClick={() => deletedata(i)}>Delete</button></td>
                                    <td><button type="button" onClick={() => updatedata(i,value.id)}>update</button></td>

                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>


    </>);

}
export default Formarray;