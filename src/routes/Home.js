import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import HeroImg from "../img/bg-home.jpg"
import Resume from "../../src/download/Амангелды Шерхан frontend разработчик.pdf"

function Home() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero"
                heroImg={HeroImg}
                title="Амангелды Шерхан"
                text="Это мой официальный веб-сайт портфолио"
                buttonText="Резюме"
                url={Resume}
                btnClass="show"
            />
            <Destination />
            <Footer />
        </>
    )
}

export default Home