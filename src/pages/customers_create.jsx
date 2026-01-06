import Sidebar from "../Components/SideBar"
import NavBar from "../Components/NavBar"
import MainContent from "../Components/MainContent"
import SectionHeader from "../Components/SectionHeader"
import { useState } from "react"
import axios from "axios"
import { authHeader } from "../utils/authHeader"

const CreateCustomer = () => {

    // {
    //     "full_name": "string",
    //     "phone": "string",
    //     "gender": "string",
    //     "date_of_birth": "2026-01-05",
    //     "account_type": "standard"
    // }

    //     /api/customers

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [DOB, setDOB] = useState("")
    const [accountType, setAccountType] = useState("")

    const CreateCustomer = async(e) => {
        e.preventDefault()

        const paylaod = {
            full_name: name,
            phone: phone,
            gender: gender,
            date_of_birth: DOB,
            account_type: accountType
        }
        try{
            const resp = await axios.post("https://edutele-pay-backend.onrender.com/api/customers", paylaod, {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: authHeader()
                }
            })

            console.log(resp.data)
            alert("Customer add successfully")

        }catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="w-full">
            <Sidebar />
            <MainContent>
                <NavBar />
                <SectionHeader title="Add New Customer" />

                <div className="p-10 w-full flex items-center justify-center" >
                    <form className="bg-white p-6 rounded shadow-md w-3/4" onSubmit={CreateCustomer}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter vendors name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                            <input type="text" onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter vendor email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                            <input type="text" onChange={(e) => setGender(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter vendor type" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth | 2026-01-05</label>
                            <input type="text" onChange={(e) => setDOB(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter your location" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Account Type</label>
                            <input type="text" onChange={(e) => setAccountType(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter contact person" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Customer</button>
                    </form>
                </div>

            </MainContent>

        </div>
    )
}

export default CreateCustomer