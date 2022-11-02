import "./AboutUsStyles.css"

function AboutUs () {
    return (
        <div className="about__container">
            <h1>Умею</h1>
            <ul className="about__list">
                <li className="about__item">
                    <i className="fa-brands fa-js"></i>
                    <p>JS(es6) хорошо понимаю язык, и его особенности, могу работать с сторонними библиотеками и плагинами.</p>
                </li>
                <li className="about__item">
                    <i className="fa-brands fa-react"></i>
                    <p>React умею создавать single page apllication, в том числе используя react hook, знаю технологии
                        которые нужны для полноценной работы с react.</p>
                </li>
                <li className="about__item">
                    <i className="fa-brands fa-github"></i>
                    <p>Git умею взаимодействовать с github через консоль на базовом уровне.</p>
                </li>
                <li className="about__item">
                    <i className="fa-solid fa-code"></i>
                    <p>Верстать сайты и лендинги по макетам, одностраничные web-приложения, создавать
                        элементы и блоки без макета, соблюдая стилистику сайта или приложения.</p>
                </li>
            </ul>

            <h1>Опыт работы</h1>
            <ul className="about__list">
                <li className="about__item-work">
                    <div className="about__work-block">
                        <h4 className="about__work-heading" >АО КАЗАХСТАН ГИС ЦЕНТР – IT компания</h4>
                        <span>(Октябрь 2020 — Ноябрь 2021)</span>
                    </div>
                    <p>Внедрение и техническая поддержка программного обеспечения</p>
                    <ul>
                        <li className="about__work-item">Обеспечение нормальной работы используемых операционных систем и набор рабочих программ</li>
                        <li className="about__work-item">Установка и настройка ПО для корректной работы</li>
                        <li className="about__work-item">Своевременное обновление необходимого ПО</li>
                    </ul>
                </li>

                <li className="about__item-work">
                    <div className="about__work-block">
                        <h4 className="about__work-heading" >MMS GROUP – IT компания</h4>
                        <span>(Июнь 2019 — Август 2020)</span>
                    </div>
                    <p>Технический инженер</p>
                    <ul>
                        <li className="about__work-item">Обеспечение бесперебойной работы всех ПК и устранение неисправностей</li>
                        <li className="about__work-item">Ремонт используемой техники</li>
                        <li className="about__work-item">Сетевая настройка</li>
                        <li className="about__work-item">Настройка сетевого оборудования</li>
                    </ul>
                </li>

                <li className="about__item-work">
                    <div className="about__work-block">
                        <h4 className="about__work-heading" >AstanaService</h4>
                        <span>(Ноябрь 2017 — Май 2019)</span>
                    </div>
                    <p>Сервисный мастер по ремонту компьютеров</p>
                    <ul>
                        <li className="about__work-item">Устранение неполадок в оборудовании и ОС</li>
                        <li className="about__work-item">Знание устройства операционных систем</li>
                        <li className="about__work-item">Первичная настройка ПК</li>
                    </ul>
                </li>
            </ul>

            <h1>Образование</h1>
            <ul className="about__list">
                <li className="about__item-edu">
                    <h4 className="about__edu-heading">Высшее:</h4>
                    <strong className="about__edu-title">Евразийский национальный университет</strong>
                    <p>Факультет информационных технологий</p>
                    <p>Вычислительная техника и Программное обеспечение</p>
                </li>
                <li className="about__item-edu">
                    <h4 className="about__edu-heading">Повышение квалификации, курсы</h4>
                    <strong className="about__edu-title">Skillbox</strong>
                    <p>Разработчик</p>
                    <p>Профессия Frontend-разработчик PRO 2021</p>

                    <strong className="about__edu-title">INZHU</strong>
                    <p>Разработчик</p>
                    <p>КУРС Базовое знание язык программирование С++</p>
                </li>
            </ul>

            <h1>Дополнительная информация</h1>
            <p>Я - начинающий frontend-разработчик. С детства интересовался сферой IT, по этом выбрал
                frontend-разработку, планирую дальше развиваться в сторону веб-разработки. Потому что
                есть возможность экспериментировать, создавать красивые сайты и понятные интерфейсы.
                Мой опыт в верстке сайтов более полугода, а также высшее образование в сфере IT.
                Буду полезен вашей команде. Качественно выполняю поставленные задачи.
                Уже хорошо освоил вёрстку, JavaScript и React, на данный момент изучаю MySQL.
                Мои цели на ближайшее время - освоить популярные на текущий момент фреймворки
                (Vue, Angular). Дополнительно изучаю learn.javascript.ru/ и eloquentjavascript.net/. Решаю
                задачки на reddit.com/r/webdev/ и codewars (https://www.codewars.com/users/Sher.Khan).
                Смотрю такие каналы как /с/TechGuyWeb, /c/DevEd.
                К своим сильным сторонам могу отнести навыки работы в команде, желание найти
                максимально результативное и красивое решение, способность самостоятельно искать
                ресурсы помогающие решить проблему или повысить мой профессиональный уровень,
                сильный интерес к разработке интерфейсов.
                Рассматриваю (стажировку, проектную деятельность, работу в офисе, удаленную работу).
                В моем лице вы приобретете замотивированного работящего специалиста с горящими
                глазами.</p>
        </div>
    )
}

export default AboutUs