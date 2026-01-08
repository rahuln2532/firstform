import { useState } from "react";

// function Form() {
//     const [name, setName] = useState("");
//     const [lname, setLname] = useState("");
//     const [email, setEmail] = useState("");
//     const [no, setNo] = useState("");
//     const [gender, setGender] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!name) {
//             alert("fill the Name");
//             return;
//         }
//         else if (!lname) {
//             alert("fill the all Last Name");
//             return;
//         }
//         else if (!email) {
//             alert("fill the Email");
//             return;
//         }
//         else if (!no) {
//             alert("fill the Mobile NO");
//             return;
//         }
//         else if (!gender) {
//             alert("Select the Gender");
//             return;
//         }

//         console.log(name, lname, email, no, gender);
//         setName("");
//         setLname("");
//         setEmail("");
//         setNo("");
//         setGender("");
//     };

//     const handleReset = () => {
//         setName("");
//         setLname("");
//         setEmail("");
//         setNo("");
//         setGender("")
//     }

//     return (
//         <>
//             <div style={{ border: "solid 1px", padding: "50px" }}>
//                 <h1 className="text-red-500">Registration Form</h1>
//                 <form style={{ textAlign: "left" }} onSubmit={handleSubmit}>

//                     <label htmlFor="name">Name:</label>
//                     <br />
//                     <input type="text" value={name} onChange={(event) => setName(event.target.value)} id="name" placeholder="Enter Name">
//                     </input>
//                     <br />

//                     <label htmlFor="lname">Last Name:</label>
//                     <br />
//                     <input type="text" id="lname" value={lname} onChange={(event) => setLname(event.target.value)} placeholder="Enter last Name">
//                     </input>
//                     <br />

//                     <label htmlFor="email">Email:</label>
//                     <br />
//                     <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email">
//                     </input>
//                     <br />

//                     <label htmlFor="no">Mobile No:</label>
//                     <br />
//                     <input type="number" id="no" value={no} onChange={(event) => setNo(event.target.value)} placeholder="Enter no">
//                     </input>
//                     <br />
//                     <br />

//                     <label>Gender:</label>
//                     <br />
//                     <input type="radio" id="male" value="male" checked={gender == "male"} onChange={(event) => setGender(event.target.value)} />
//                     <label htmlFor="male">Male</label>
//                     <br />
//                     <input type="radio" id="female" value="female" checked={gender == "female"} onChange={(event) => setGender(event.target.value)} />
//                     <label htmlFor="female">Female</label>
//                     <br />
//                     <br />
//                     <button type="submit" onClick={(e) => handleSubmit(e)} style={{ marginRight: "5px" }}>Submit</button>
//                     <button onClick={() => handleReset()} type="button">clear</button>
//                 </form>
//                 <hr></hr>
//                 <h4>{name}</h4>
//                 <h4>{lname}</h4>
//                 <h4>{email}</h4>
//                 <h4>{no}</h4>
//                 <h4>{gender}</h4>
//             </div>
//         </>
//     );

// }

function Form() {
    const initialState = {
        name: '',
        lname: '',
        email: '',
        no: '',
        gender: 'male'

    }
    const [data, setData] = useState(initialState);


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

        console.log(data);
    }

    const handleReset = () => {
        setData(initialState);
    }

    return (<>

        <div className="form-container">
            <h1>Registration Form</h1>

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
                    <button type="submit" className="btn-submit">Submit</button>
                    <button type="button" onClick={() => handleReset()} className="btn-clear">Clear</button>
                </div>
            </form>

            <div className="output">
                <h4>{data.name}</h4>
                <h4>{data.lname}</h4>
                <h4>{data.email}</h4>
                <h4>{data.no}</h4>
                <h4>{data.gender}</h4>
            </div>
        </div>


    </>);

}
export default Form;