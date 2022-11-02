import DestinationImg1 from "../../img/developer.jpg"
import DestinationImg2 from "../../img/react-developer.png"
import "./DestinationStyles.css"
import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Frontend-разработчик (junior)</h1>
            <p>Умею создавать single page application на React</p>

            <DestinationData
                heading="Обо мне"
                text="Я - начинающий frontend-разработчик. С детства интересовался сферой IT, по этом выбрал
                        frontend-разработку, планирую дальше развиваться в сторону веб-разработки. Потому что
                        есть возможность экспериментировать, создавать красивые сайты и понятные интерфейсы.
                      Мой опыт в верстке сайтов более полугода, а также высшее образование в сфере IT.
                        Буду полезен вашей команде. Качественно выполняю поставленные задачи.
                        Уже хорошо освоил вёрстку, JavaScript и React, на данный момент изучаю MySQL."
                img1={ DestinationImg1 }
                img2={ DestinationImg2 }/>
        </div>
    )
}

export default Destination