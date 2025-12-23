import MainContent from "../Components/MainContent"
import NavBar from "../Components/NavBar"
import SectionHeader from "../Components/SectionHeader"
import Sidebar from "../Components/Sidebar"
import { useEffect, useState } from "react"
import axios from "axios"
import { authHeader } from "../utils/authHeader"


const PlatformAdmin = () => {

    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // fetch data
    useEffect(() => {
        axios
            .get("https://edutele-pay-backend.onrender.com/api/institution-admin/users", {
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

    console.log(items)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return(
        <div className="w-full">
            <Sidebar />
            <MainContent>
                <NavBar />
                <SectionHeader title="View All Available Institution Admin" />
                <div className="ml-20">
                    <h2>Available Institution Admin</h2>
                </div>
                <div className="p-10 w-full">
                    <table className=" bg-white mt-6 w-full">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-200">User Name</th>
                                <th className="py-2 px-4 border-b border-gray-200">Email</th>
                                <th className="py-2 px-4 border-b border-gray-200">Phone</th>
                                <th className="py-2 px-4 border-b border-gray-200">Role</th>
                                <th className="py-2 px-4 border-b border-gray-200">Institution Id</th>
                                <th className="py-2 px-4 border-b border-gray-200">Vendor Id</th>
                                <th className="py-2 px-4 border-b border-gray-200">Active</th>
                                <th className="py-2 px-4 border-b border-gray-200">Verified</th>
                                <th className="py-2 px-4 border-b border-gray-200">Created At</th>
                                <th className="py-2 px-4 border-b border-gray-200">Updated At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.username}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.email}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.phone}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.role}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.institution_public_id}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.vendor_public_id}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.is_active}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.is_verified}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.created_at}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{item.updated_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainContent>
        </div>
    )
}

export default PlatformAdmin