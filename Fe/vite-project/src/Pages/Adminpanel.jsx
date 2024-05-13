import React, { useState, useEffect } from 'react'
import "./Adminpanel.scss"
import { Link } from 'react-router-dom'
function Adminpanel() {
    const [Category, setCategory] = useState([])
    useEffect(() => {
        GetProduct()
    }, [])

    async function GetProduct() {
        const response = await fetch('http://localhost:3000/employee')
        const data = await response.json()
        setCategory(data)
    }
    async function Delete(_id) {
        const response = await fetch('http://localhost:3000/employee/' + _id, { method: "Delete" })
        const data = await response.json()
        GetProduct()
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Vezife</th>
                        <th>price</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Category.map((x) => <>

                            <tr key={x._id}>
                                <td>{x._id}</td>
                                <td>{x.title}</td>
                                <td>{x.author}</td>
                                <td>{x.price}</td>
                                <td><button onClick={() => Delete(x._id)}>Delete</button></td>
                                <td><Link to={"/adminpanel/update/" + x._id}>Update</Link></td>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </>
    )
}

export default Adminpanel