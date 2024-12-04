import Component from "./Component.js";


export default class Layout {

    constructor() {
        this.content = document.querySelector('.content');
        if (window.location.pathname == '/') this.createMainPage();
    }


    createMainPage() {
        let nav = new Component({
            className: 'contents',
            localization: {
                ru: `
                    <div class="txt-18 tw-700 mb-20">Содержание статьи</div>
                    <div class="contents__list">
                        <div><a href="#top">Наверх</a></div>
                        <div><a href="#p1">Подготовка</a></div>
                        <div><a href="#p2">Шина событий</a></div>
                        <div><a href="#p3">Локализатор</a></div>
                    </div>
                `,
                en: `
                    <div class="txt-18 tw-700 mb-20">Contents</div>
                    <div class="contents__list">
                        <div><a href="#top">Top</a></div>
                        <div><a href="#p1">Preparation</a></div>
                        <div><a href="#p2">Event bus</a></div>
                        <div><a href="#p3">Localizer</a></div>
                    </div>
                `
            },
            parent: document.querySelector('.sidebar'),
        });

        nav.add('append');


        let top = new Component({
            tag: 'div',
            id: 'top',
            className: 'mb-80',
            lang: '',
            inner: '',
            localization: {
                ru: `
                    <div class="date">03.12.2024</div>
                    <h1 class="mb-20"><span class="accent">/\/\//</span>Простая локализация</h1>
                    <div class="txt-14 mb-40">—— by DTHWalker</div>
                    <p class="txt-18 mb-10">Эта работа является примером мультиязычного интерфейса. В реализации нам понадобится <span class="bg-accent tw-700">шина событий</span>, а так же <span class="accent tw-700">компоненты, имеющие языковую локализацию</span>, которые просто подписываются на событие смены языка<p>
                    <div class="txt-14 tw-300 mb-40">Посмотреть код можно на <a href="#">GitHub</a> или <a href="#">CodePen</a></div>
                    <div class="wt-5 vs-10"></div>
                `,
                en: `
                    <div class="date">03.12.2024</div>
                    <h1 class="mb-20"><span class="accent">/\/\//</span>Simple localization</h1>
                    <div class="txt-14 mb-40">—— by DTHWalker</div>
                    <p class="txt-18 mb-10">This work is an example of a multilingual interface. In the implementation we will need an <span class="bg-accent tw-700">event bus</span>, as well as <span class="accent tw-700">components with language localization</span>, which simply subscribe to the language change event.<p>
                    <div class="txt-14 tw-300 mb-40">You can view the code on <a href="#">GitHub</a> or <a href="#">CodePen</a></div>
                    <div class="wt-5 vs-10"></div>
                `
            },
            parent: this.content,
        });

        top.add('prepend');


        let p1 = document.querySelector('#p1');

        let prep1 = new Component({
            localization: {
                ru: `
                    <h2><span class="accent">01</span><span>Подготовка</span></h2>
                    <p class="mb-20">Для начала создадим проект. Я создал простой сервер на <span class="bg-accent tw-700">Node.js</span>. Это нам потребуется для того, что бы в дальнейшем записывать и читать куки клиента с выбранным языком.
                        <br><br>
                        Мы опустим момент реализации серверной части, так как она нам не так важна.
                        Для начала я создам папку <span class="accent f-m">static</span>,
                        в которой я создам файл <span class="accent f-m">index.html</span>
                        и папку <span class="accent f-m">js</span>
                        с файлом <span class="accent f-m">Main.js</span>.
                        <br><br>
                        Сейчас моя файловая система выглядит так:
                    </p>
                `,
                en: `
                    <h2><span class="accent">01</span><span>Preparation</span></h2>
                    <p class="mb-20">First, let's create a project. I created a simple server on <span class="bg-accent tw-700">Node.js</span>.
                        We will need this in order to subsequently write and read client cookies with the selected language.
                        <br><br>
                        We will skip the implementation of the server part, since it is not so important to us.
                        First I will create a folder <span class="accent f-m">static</span>
                        in which I will create a file <span class="accent f-m">index.html</span>
                        and a folder <span class="accent f-m">js</span>
                        with a file <span class="accent f-m">Main.js</span>.
                        <br><br>
                        Right now my file system looks like this:
                    </p>
                `,
            },
            parent: p1,
        });

        
        let prep2 = new Component({
            localization: {
                ru: `
                <p class="mb-40">Файл <span class="accent f-m">Main.js</span> будет точкой входа в нашу программу, к которому мы будем подключать наши модули.</p>
                <div class="wt-5 vs-10"></div>
                `,
                en: `
                <p class="mb-40">The <span class="accent f-m">Main.js</span> file will be the entry point to our program, to which we will connect our modules.</p>
                <div class="wt-5 vs-10"></div>
                `
            },
            parent: p1,
        });
        
        prep1.add('prepend');
        prep2.add('append');


        let p2 = document.querySelector('#p2');

        let ev1 = new Component({
            localization: {
                ru: `
                    <h2><span class="accent">02</span><span>Шина событий</span></h2>
                    <p class="mb-20">
                        Первым делом создаем файл <span class="accent f-m">EventBus.js</span>
                        в папке <span class="accent f-m">js</span>. Это будет модуль <span class="bg-accent tw-700"></span> шины событий.
                        Через него мы будем триггерить событие смены языка на всех компонентах.
                        <br><br>
                        Данный модуль будет представлять собой статический класс. Тоесть все поля и методы будут статическими. Почему так?
                        Статика нам нужна для того, что бы мы могли ипортировать данный модуль в любую точку программы не как новый экземляр, а как самостоятельную сущность.
                    </p>
                `,
                en: `
                    <h2><span class="accent">02</span><span>Event bus</span></h2>
                    <p class="mb-20">
                        First of all, create the file <span class="accent f-m">EventBus.js</span>
                        in the <span class="accent f-m">js</span> folder. This will be the <span class="bg-accent tw-700">event bus</span> module.
                        Through it we will trigger the language change event on all components.
                        <br><br>
                        This module will be a static class. That is, all fields and methods will be static. Why is that?
                        We need statics so that we can import this module to any point in the program not as a new instance, but as an independent entity.
                    </p>
                `
            },
            parent: p2
        });

        let ev2 = new Component({
            localization: {
                ru: `
                    <p class="mb-40">Если вы вдруг не знакомы с данным паттерном, то я быстро расскажу.
                        Все подписки на события происходят через данный класс.
                        Если в классе уже существует ивент, на который мы хотим подписаться, то мы подписываемся, а если нет, то создаем и подписываемся.
                        Когда срабатывает ивент, выполняются все колбэки, подписанные на данное событие.
                        Таким образом можно более удобно и эффективно заниматся менеджментом событий и подписок на них.
                        <br><br>
                        Мы вернемся к этому классу позже. Сейчас нам нужно создать <span class="bg-accent tw-700">локализатор</span>.
                    </p>
                    <div class="wt-5 vs-10"></div>
                `,
                en: `
                    <p class="mb-40">If you are suddenly not familiar with this pattern, I will quickly tell you.
                        All event subscriptions occur through this class.
                        If there is already an event in the class that we want to subscribe to, then we subscribe, and if not, then we create it and subscribe.
                        When an event is triggered, all callbacks subscribed to this event are executed.
                        This way you can manage events and subscriptions to them more conveniently and efficiently.
                        <br><br>
                        We will return to this class later. Now we need to create a <span class="bg-accent tw-700">localizer</span>.
                    </p>
                    <div class="wt-5 vs-10"></div>
                `
            },
            parent: p2
        });

        ev1.add('prepend');
        ev2.add('append');


    }

}