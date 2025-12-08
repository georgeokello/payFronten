import MainContent from "../Components/MainContent";
import NavBar from "../Components/NavBar";
import SectionHeader from "../Components/SectionHeader";
import Sidebar from "../Components/Sidebar";



const CreateCard = () => {
    return(
        <div className="w-full">
            <Sidebar />
            <MainContent>
            <NavBar />
            <SectionHeader title="Create New Card" />
            <div className="p-10 w-full flex items-center justify-center">
                <form className="bg-white p-6 rounded shadow-md w-3/4"> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Card Holder Name</label>
                        <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enter card holder name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
                        <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enter card number" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
                        <input type="text" className="w-full px-3 py-2 border rounded" placeholder="MM/YY" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                        <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enter CVV" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                        <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enter CVV" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                        <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enter CVV" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Card</button>
                </form>
            </div>
            </MainContent>
        </div>
    )
}

export default CreateCard