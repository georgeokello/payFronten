import { Link } from "react-router-dom"
import NfcImage from "../assets/nfcimage.png"
import { useState } from "react"
import { authHeader } from "../utils/authHeader"
import axios from "axios"
import MainContent from "../Components/MainContent"
import NavBar from "../Components/NavBar"
import SectionHeader from "../Components/SectionHeader"
import Sidebar from "../Components/Sidebar"



const CreateAgentAdmin = () => {


    // /api/admin/users

    // {
    //     "username": "string",
    //     "email": "user@example.com",
    //     "phone": "string",
    //     "institution_public_id": "string"
    // }

    const [Username, setUsername] = useState("")
    const [email, SetEmail] = useState("")
    const [Phone, SetPhone] = useState("")
    const [InstitutionPublicId, SetInstitutionPublicId] = useState("")
    

    const CreateAgent = async (e) => {
        e.preventDefault()

        const payload = {
            name: Username,
            email: email,
            phone: Phone,
            institution_public_id: InstitutionPublicId,

        }

        try {
            const resp = await axios.post("https://edutele-pay-backend.onrender.com/api/admin/users", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authHeader()
                }
            })

            console.log(resp.data)

            alert("Agent Admin Successful, Check your email for passwords")

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Sidebar />
            <MainContent>
                <NavBar />
                <SectionHeader title="Create Agent Admin" />
                <div className="h-screen w-full">
                    <div className="flex flex-col items-center justify-center">
                        <form className="bg-white p-6 rounded shadow-md w-2/4" onSubmit={CreateAgent}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input type="text" onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter your username" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" onChange={(e) => SetEmail(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter your email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                                <input type="text" onChange={(e) => SetPhone(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter your Phone number" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Institution Public ID</label>
                                <input type="text" onChange={(e) => SetInstitutionPublicId(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter your Location" />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Agent Admin</button>
                        </form>
                    </div>
                </div>
            </MainContent>
        </>
    )
}

export default CreateAgentAdmin