import "./ContactFormStyles.css"

function ContactForm() {
    return(
        <div className="form__container">
            <h1>Мой контакты</h1>
            <div className="contact__img"></div>
            <p className="contact__text">Используйте эти контакты вы можете связаться со мной напрямую</p>
            <ul className="contact__list">
                <li className="contact__item">
                    <div className="contact__item-top">
                        <i className="fa-solid fa-location-pin"></i>
                        <h4>Мой Адрес</h4>
                    </div>
                    <p>Город Астана, пересечение улиц Мангилик Ел и Бухар Жырау</p>
                </li>
                <li className="contact__item">
                    <div className="contact__item-top">
                        <i className="fa-solid fa-phone"></i>
                        <h4>Телефон</h4>
                    </div>
                    <p>+7 705 654 37 94</p>
                    <p>+7 747 604 98 37</p>
                </li>
                <li className="contact__item">
                    <div className="contact__item-top">
                        <i className="fa-solid fa-envelope"></i>
                        <h4>Почта</h4>
                    </div>
                    <p>sherhan_26@mail.ru</p>
                </li>
            </ul>
            <h4>Отправьте мне сообщение!</h4>
            <form action="">
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Фамилия"/>
                <input type="email" placeholder="Почта"/>
                <textarea name="" id="" rows="4" placeholder="Сообщение"></textarea>
                <button>Отправить сообщение</button>
            </form>
        </div>
    )
}

export default ContactForm