import { Link } from "react-router-dom"
import SectionHeader from "../Components/SectionHeader"
import Navbar from "../Components/NavBar"
import { FaPlus } from "react-icons/fa"
import Sidebar from "../Components/SideBar"
import MainContent from "../Components/MainContent"
import { useState, useEffect } from "react"
import axios from "axios"
import { authHeader } from "../utils/authHeader"


const Cards = () => {

    // {
    //   "card_uid": "string",
    //   "status": "pending",
    //   "balance": 0,
    //   "total_topups": 0,
    //   "total_spent": 0,
    //   "total_refunds": 0,
    //   "issued_at": "2025-12-30T06:45:51.629Z",
    //   "expiry": "2025-12-30T06:45:51.629Z",
    //   "last_transaction_at": "2025-12-30T06:45:51.629Z",
    //   "last_topup_at": "2025-12-30T06:45:51.629Z",
    //   "customer_public_id": "string"
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
            .get("https://edutele-pay-backend.onrender.com/api/cards", {
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
    //   "card_uid": "string",
    //   "status": "pending",
    //   "balance": 0,
    //   "total_topups": 0,
    //   "total_spent": 0,
    //   "total_refunds": 0,
    //   "issued_at": "2025-12-30T06:45:51.629Z",
    //   "expiry": "2025-12-30T06:45:51.629Z",
    //   "last_transaction_at": "2025-12-30T06:45:51.629Z",
    //   "last_topup_at": "2025-12-30T06:45:51.629Z",
    //   "customer_public_id": "string"
    // }

    return(
        <div className="w-full">
            <Sidebar />
            <MainContent>
            <Navbar />
            <SectionHeader title="Cards Management" />
            <div className="ml-20">
                <h2>Available Card <span className="ml-20 text-blue-700"><Link to="/create-card">Add a Card</Link> </span> </h2>
            </div>
            <div className="p-10 w-full">
                <table className=" bg-white mt-6 w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200">Card ID</th>
                            <th className="py-2 px-4 border-b border-gray-200">Card Status</th>
                            <th className="py-2 px-4 border-b border-gray-200">Balance</th>
                            <th className="py-2 px-4 border-b border-gray-200">Total Topups</th>
                            <th className="py-2 px-4 border-b border-gray-200">Total Spent</th>
                            <th className="py-2 px-4 border-b border-gray-200">Total refunds</th>
                            <th className="py-2 px-4 border-b border-gray-200">Issued At</th>
                            <th className="py-2 px-4 border-b border-gray-200">Expiry</th>
                            <th className="py-2 px-4 border-b border-gray-200">Edit</th>
                            <th className="py-2 px-4 border-b border-gray-200">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr>
                                <td className="py-2 px-4 border-b border-gray-200">{item.card_uid}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.status}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.balance}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.total_topups}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.total_spent}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.total_refunds}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.issued_at}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.expiry}</td>
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

export default Cards