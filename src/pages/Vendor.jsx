import { Link } from "react-router-dom"
import MainContent from "../Components/MainContent"
import NavBar from "../Components/NavBar"
import SectionHeader from "../Components/SectionHeader"
import Sidebar from "../Components/SideBar"
import axios from "axios"
import { useEffect, useState } from "react"
import { authHeader } from "../utils/authHeader"


const Vendor = () =>{


    // retreive data from /api/institutions
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // fetch data
    useEffect(() => {
        axios
            .get("https://edutele-pay-backend.onrender.com/api/vendors", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authHeader()
                }
            })
            .then((response) => {
                setItems(response.data.items)
                setTotal(response.data.total)
                setLoading(false)
            })
            .catch((err) => {
                setError("Failed to fetch data")
                setLoading(false)
            })
    }, []);

    console.log("items", items)

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;

    // {
    //   "public_id": "string",
    //   "vendor_code": "string",
    //   "name": "string",
    //   "type": "canteen",
    //   "status": "pending",
    //   "email": "user@example.com",
    //   "location": "string",
    //   "contact_person": "string",
    //   "contact_phone": "string",
    //   "created_at": "2025-12-23T12:41:41.538Z",
    //   "updated_at": "2025-12-23T12:41:41.538Z"
    // }
    return(
        <div className="w-full">
            <Sidebar />
            <MainContent>
                <NavBar />
                <SectionHeader title="View All Vendors" />
                <div className="ml-20">
                    <h2>Available Vendors <span className="ml-20 text-blue-700"> <Link to="/create-vendor">Add a Vendor</Link> </span> </h2>
                </div>
                <div className="p-10 w-full">
                    <table className=" bg-white mt-6 w-full">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-200">Vendor Code</th>
                                <th className="py-2 px-4 border-b border-gray-200">Name</th>
                                <th className="py-2 px-4 border-b border-gray-200">Type</th>
                                <th className="py-2 px-4 border-b border-gray-200">Email</th>
                                <th className="py-2 px-4 border-b border-gray-200">Status</th>
                                <th className="py-2 px-4 border-b border-gray-200">Location</th>
                                <th className="py-2 px-4 border-b border-gray-200">Contact Person</th>
                                <th className="py-2 px-4 border-b border-gray-200">Contact Phone</th>
                                <th className="py-2 px-4 border-b border-gray-200">Edit</th>
                                <th className="py-2 px-4 border-b border-gray-200">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr>
                                <td className="py-2 px-4 border-b border-gray-200">{item.vendor_code}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.name}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.type}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.email}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.status}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.location}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.contact_person}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.contact_phone}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-blue-600 cursor-pointer">Edit</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-red-600 cursor-pointer">Delete</td>
                            </tr>
                            ))}         
                        </tbody>
                    </table>
                </div>
            </MainContent>
        </div>
    )

}

export default Vendor