
export function authHeader() {
    const token = localStorage.getItem("token");
        return  `Bearer ${token}` ;
    }  


 // // use it
    // const res = await axios.get("http://localhost:8000/protected", {
    //      headers: authHeader(),
    // });