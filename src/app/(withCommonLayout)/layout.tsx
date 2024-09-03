
import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";

const Layout = ({children}: {children:React.ReactNode}) => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="min-h-screen" >
            {children}
            </div> 
            <Footer></Footer>
        </div>
    );
};

export default Layout;