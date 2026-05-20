import Navbar from "@/components/Navbar";


const MainPageLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default MainPageLayout;