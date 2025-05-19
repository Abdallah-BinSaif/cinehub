import Card1 from "../../components/Card1.jsx";
import Charts from "./Charts.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";
import useAuth from "../../../hooks/useAuth.jsx";
import useTheme from "../../../hooks/useTheme.jsx";


const DHome = () => {
    const {isDarkMode} = useTheme();
    const {currentUser} = useAuth();
    return (
        <section className={"flex justify-center"}>
            <div className={"mx-4 md:ml-32 md:mr-32"}>
                <SectionHeading heading={`Hi ${currentUser?.displayName}`} subHeading={"welcome!"}/>
                <div className={"flex flex-col w-full md:flex-row gap-4"}>
                    <Card1 title={"You Added Movie"} count={23}/>
                    <Card1 title={"Your Favourite Movie"} count={4}/>
                    <Card1 title={"You Watched Movie"} count={12}/>
                </div>
                <div className={`py-12 px-6 mt-12 ${isDarkMode ? "bg-dark-secondary":"bg-light-secondary"}`}>
                    <Charts/>

                </div>
            </div>

        </section>
    );
};

export default DHome;