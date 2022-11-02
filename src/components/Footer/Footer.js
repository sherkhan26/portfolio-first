import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Frontend-разработчик</h1>
                    <p>Готов к переезду, готов к командировкам</p>
                </div>
                <div>
                    <a href="https://ru-ru.facebook.com/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/a.sher_khan/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://twitter.com/?lang=ru">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div className="bottom__content">
                    <h4>Сообщество</h4>
                    <a href="https://github.com/sherkhan26/dev">GitHub</a>
                    <a href="https://www.codewars.com/users/Sher.Khan">CodeWars</a>
                    <a href="">Telegram</a>
                    <a href="">Twitter</a>
                </div>
                <div className="bottom__content">
                    <h4>Контакты</h4>
                    <a href="">sherhan_26@mail.ru</a>
                    <a href="">+7 705 654 37 94</a>
                </div>
            </div>
        </div>
    )
}

export default Footer