import "./HeroStyles.css"

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img className="hero__img" alt="HeroImg" src={props.heroImg}/>
                <div className="hero__text">
                    <h1>{props.title}</h1>
                    <p>{props.text}
                        <i className="fa-brands fa-react"></i>
                    </p>
                    <a href={props.url} download={props.url} className={props.btnClass}>
                        <i className="fa-solid fa-download"></i>
                        {props.buttonText}
                    </a>
                </div>
                <div className="hero__avatar"></div>
            </div>
        </>
    )
}

export default Hero