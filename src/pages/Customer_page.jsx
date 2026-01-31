import Sidebar from "../Components/SideBar" 
import NavBar from "../Components/NavBar"
import MainContent from "../Components/MainContent"
import SectionHeader from "../Components/SectionHeader"


const CustomerPage = () => {
    return (
        <div className="w-full">
            <Sidebar />
            <MainContent>
                <NavBar />
                <SectionHeader title="Customer Page" />
            </MainContent>

        </div>
    )
}

export default CustomerPage