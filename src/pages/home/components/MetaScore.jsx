import logo from "../../../assets/logo.webp";

const MetaScore = () => {
    return (
        <section className={"flex flex-col md:flex-row items-center gap-16 justify-between screen mx-auto"}>
            <div className={"flex flex-col items-start gap-4 justify-center"}>
                <div className={"flex items-center justify-center text-4xl text-gold font-bold gap-4"}>
                    <img className={"w-16 h-16"} src={logo}/>
                    <p>CineHub</p>
                </div>
                <h3 className={"text-5xl"}>The Gold Standard <br/>in Critical Analysis</h3>
            </div>
            <div className={"card p-10 lg:w-5/12"}>
                <h3 className={"text-2xl font-bold"}>The Metascore Breakdown</h3>
                <div className={"flex my-4"}>
                    <div className={"flex-1 border-4 border-[#54070E]"}></div>
                    <div className={"flex-1 border-4 border-[#E9A300]"}></div>
                    <div className={"flex-1 border-4 border-light-primary"}></div>
                </div>
                <ul className={"list-disc ml-6 font-semibold text-lg mb-6"}>
                    <li>We collect reviews from the world's top critics.</li>
                    <li>Each review is scored based on its overall quality.</li>
                    <li>The summarized weighted average captures the essence of critical opinion</li>
                </ul>
                <button className={"btnOutline"}>Learn More</button>
            </div>
        </section>
    );
};

export default MetaScore;