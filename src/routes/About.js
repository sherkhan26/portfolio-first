import Hero from "../components/Hero";
import AboutImg from "../img/bg-about.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import NavBar from "../components/NavBar";

function About() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero"
                heroImg={AboutImg}
                title="Амангелды Шерхан"
                text="Frontend-разработчик (junior)"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About