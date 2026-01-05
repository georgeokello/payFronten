import Sidebar from "../Components/SideBar"
import MainContent from "../Components/MainContent"
import NavBar from "../Components/NavBar"
import SectionHeader from "../Components/SectionHeader"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { authHeader } from "../utils/authHeader"

const Customer = () => {


    // {
    //   "public_id": "string",
    //   "full_name": "string",
    //   "phone": "string",
    //   "gender": "string",
    //   "date_of_birth": "2025-12-30",
    //   "account_type": "string",
    //   "status": "pending",
    //   "is_active": true,
    //   "is_verified": true,
    //   "created_at": "2025-12-30T07:39:31.763Z",
    //   "updated_at": "2025-12-30T07:39:31.763Z"
    // }

    // retreive data from /api/institutions
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // delete items
    const [deleteItem, setDeleteItem] = useState(null); // null = closed
    const [deleting, setDeleting] = useState(false);
    // edit items
    const [editingItem, setEditingItem] = useState(null); // null = no modal
    const [formData, setFormData] = useState({
        name: "",
        code: "",
        email: "",
        phone: "",
        location: "",
        contact_person: "",
        contact_phone: "",
        type: "",
        status: "",
        is_active: false,
    });

    // fetch data
    useEffect(() => {
        axios
            .get("https://edutele-pay-backend.onrender.com/api/customers", {
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
    // {
    //   "public_id": "string",
    //   "full_name": "string",
    //   "phone": "string",
    //   "gender": "string",
    //   "date_of_birth": "2025-12-30",
    //   "account_type": "string",
    //   "status": "pending",
    //   "is_active": true,
    //   "is_verified": true,
    //   "created_at": "2025-12-30T07:39:31.763Z",
    //   "updated_at": "2025-12-30T07:39:31.763Z"
    // }

    return (
        <div className="w-full">
            <Sidebar />
            <MainContent>
                <NavBar />
                <SectionHeader title="View All Customers" />
                <div className="ml-20">
                    <h2>Available Customers <span className="ml-20 text-blue-700"><Link to="/create-customer">Add a Customers</Link> </span> </h2>
                </div>
                <div className="p-10 w-full">
                    <table className=" bg-white mt-6 w-full">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-200">Public ID</th>
                                <th className="py-2 px-4 border-b border-gray-200">Name</th>
                                <th className="py-2 px-4 border-b border-gray-200">Phone</th>
                                <th className="py-2 px-4 border-b border-gray-200">Gender</th>
                                <th className="py-2 px-4 border-b border-gray-200">D.O.B</th>
                                <th className="py-2 px-4 border-b border-gray-200">Account Type</th>
                                <th className="py-2 px-4 border-b border-gray-200">Status</th>
                                <th className="py-2 px-4 border-b border-gray-200">Card</th>
                                <th className="py-2 px-4 border-b border-gray-200">Edit</th>
                                <th className="py-2 px-4 border-b border-gray-200">Delete</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr>
                                <td className="py-2 px-4 border-b border-gray-200">**** **** **** 1234</td>
                                <td className="py-2 px-4 border-b border-gray-200">John Doe</td>
                                <td className="py-2 px-4 border-b border-gray-200">12/24</td>
                                <td className="py-2 px-4 border-b border-gray-200">Active</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-blue-600 cursor-pointer">Edit</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-red-600 cursor-pointer">Delete</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-blue-600 cursor-pointer">Create Card</td>
                            </tr>
                            ))}     
                        </tbody>
                    </table>
                </div>
            </MainContent>
        </div>
    )
}

export default Customer