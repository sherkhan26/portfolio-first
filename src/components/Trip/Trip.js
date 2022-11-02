import "./TripStyles.css"
import TripData from "./TripData";
import TripImg1 from "../../img/srm.png"
import TripImg2 from "../../img/starWars.png"
import TripImg3 from "../../img/blanchard.png"

function Trip() {
    return (
        <div className="trip">
            <h1>Мой проекты</h1>
            <p className="trip__text">Это мой личный сайт-портфолио. Построил его полагаясь на свои навыки React JS. Я не тратил много времени на стилизацию, но я был рад поработать над этими навыками и сделать сайт, который, как мне кажется, выглядит профессионально и отзывчиво.</p>
            <div className="trip__card">
                <TripData image={TripImg1} heading="Система управления контактными данными клиентов"
                          text="Web-интерфейс для CRM системы, в которой есть следующие возможности: Просмотр списка людей в виде таблицы. Добавление нового клиента. Изменение информации о существующем клиенте. Сортировка по заголовкам. Поиск из таблицы"
                />
                <TripData image={TripImg2} heading="Star DB приложение с использованием Api - The Star Wars API"
                          text="Я создал это приложение, чтобы глубже погрузиться в изучение интерфейсной среды React и работать с внешними данными API. В этом проекте было много нового. Я начинаю создавать более сложные приложения, которые немного ближе к реальным проектам. Я знаю, что это небольшой проект, но умение работать с http-протоколом будет иметь неоценимое значение в будущем."
                />
                <TripData image={TripImg3} heading="Blanchard - художественная галерея"
                          text="Лендинг имеет адаптивную верстку и корректно отображаться на компьютере, планшете и мобильном устройстве. Кроссбраузерная верстка - одинаково отображается в браузерах Chrome, Firefox, Safari, Edge."
                />
            </div>
        </div>
    )
}

export default Trip