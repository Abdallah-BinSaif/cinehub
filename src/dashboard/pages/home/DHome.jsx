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
            <aria className={"w-2/3"}>
                <SectionHeading heading={`Hi ${currentUser?.displayName}`} subHeading={"welcome!"}/>
                <div className={"flex gap-3"}>
                    <Card1 title={"You Added Movie"} count={23}/>
                    <Card1 title={"Your Favourite Movie"} count={4}/>
                    <Card1 title={"You Watched Movie"} count={12}/>
                </div>
                <div className={`py-12 px-6 mt-12 ${isDarkMode ? "bg-dark-secondary":"bg-light-secondary"}`}>
                    <Charts/>

                </div>
            </aria>

        </section>
    );
};

export default DHome;