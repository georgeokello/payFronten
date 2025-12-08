import { Link } from "react-router-dom"
import NfcImage from "../assets/nfcimage.png"
import { useState } from "react"
import axios from "axios"
import { authHeader } from "../utils/authHeader"
import Sidebar from "../Components/SideBar"
import MainContent from "../Components/MainContent"
import NavBar from "../Components/NavBar"
import SectionHeader from "../Components/SectionHeader"

const RegisterUser = () =>{

    // /api/users/register

    // {
    //     "username": "string",
    //     "email": "user@example.com",
    //     "password": "string",
    //     "role": "vendor",
    //     "institution_id": 0
    // }

    const [username, SetUsername] = useState()
    const [email, SetEmail] = useState()
    const [role, SetRole] = useState()
    const [institutionId, SetInstitution] = useState(0)

    const registerUser = async(e) => {
        const payload = {
            username: username,
            email: email,
            role: role,
            institution_id: institutionId
        }

        try{
            const resp = await axios.post("https://edutest-le5y.onrender.com/api/institutions/register", payload, 
                {
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": authHeader()

                    }
                }
             
            )

        }catch(err){

        }

    }



    return(
        <>
        <Sidebar />
        <MainContent>
            <NavBar />
            <SectionHeader title="Register Users" />
            <div className="h-screen w-full">
                <div className="flex flex-col items-center justify-center">
                    
                    <form className="bg-white p-6 rounded shadow-md w-2/4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input type="text" onChange={(e) => SetUsername(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter your username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" onChange={(e) => SetEmail(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                            <input type="text" onChange={(e) => SetRole(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Enter your Role" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register User</button>
                    </form>
                </div>
            </div>
        </MainContent>
        
        </>
    )
}

export default RegisterUser