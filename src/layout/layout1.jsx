import Navbar from "../navbar";
import Footer from "../footer";
import Sidebar from "../sidebar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />

            <div className="grid grid-cols-12">
               
                <div className="grid col-span-0 sm:col-span-2">
                    <Sidebar />
                </div>
                 <div className="grid col-span-full  sm:col-span-10">
                    {children}
                </div>
            </div>
            <Footer />



        </>
    )
}