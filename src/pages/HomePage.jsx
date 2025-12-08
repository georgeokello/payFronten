import Navbar from '../Components/NavBar'
import DataCard from '../Components/DataCard'
import SectionHeader from '../Components/SectionHeader'
import { FaAddressBook, FaUser } from 'react-icons/fa'
import MainContent from '../Components/MainContent'
import Sidebar from '../Components/SideBar'

const HomePage = () =>{
    return(
        <div className="w-full">
            <Sidebar />
            <MainContent>
            <Navbar />
            <SectionHeader title="Quick Overview" />
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <DataCard title="Total Users" value="20020" icon={<FaUser size="24" />}/>
                <DataCard title="Active Users" value="20020" icon={<FaUser size="24" />}/>
                <DataCard title="Admin Users" value="20020" icon={<FaUser size="24" />}/>
                <DataCard title="Cards Available" value="20020" icon={<FaAddressBook size="24" />}/>
            </div>
            <SectionHeader title="Recent Activities" />
            <div className="p-10 w-full">
                <table className="bg-white w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200">Activity</th>
                            <th className="py-2 px-4 border-b border-gray-200">Date</th>
                            <th className="py-2 px-4 border-b border-gray-200">Status</th>
                            <th className="py-2 px-4 border-b border-gray-200">Status</th>
                            <th className="py-2 px-4 border-b border-gray-200">Status</th>
                            <th className="py-2 px-4 border-b border-gray-200">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b border-gray-200">User John Doe signed up</td>
                            <td className="py-2 px-4 border-b border-gray-200">2024-10-01</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b border-gray-200">Payment of $100 processed</td>
                            <td className="py-2 px-4 border-b border-gray-200">2024-10-02</td>
                            <td className="py-2 px-4 border-b border-gray-200">Pending</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                        </tr>
                         <tr>
                            <td className="py-2 px-4 border-b border-gray-200">Payment of $100 processed</td>
                            <td className="py-2 px-4 border-b border-gray-200">2024-10-02</td>
                            <td className="py-2 px-4 border-b border-gray-200">Pending</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                        </tr>
                         <tr>
                            <td className="py-2 px-4 border-b border-gray-200">Payment of $100 processed</td>
                            <td className="py-2 px-4 border-b border-gray-200">2024-10-02</td>
                            <td className="py-2 px-4 border-b border-gray-200">Pending</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                        </tr>
                         <tr>
                            <td className="py-2 px-4 border-b border-gray-200">Payment of $100 processed</td>
                            <td className="py-2 px-4 border-b border-gray-200">2024-10-02</td>
                            <td className="py-2 px-4 border-b border-gray-200">Pending</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                            <td className="py-2 px-4 border-b border-gray-200">Completed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </MainContent>
        </div>
    )
           
}

export default HomePage