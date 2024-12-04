import EventBus from "./EventBus.js";


export default class Localizer {

    static langs = ['en', 'it', 'ru'];
    static lang  = this.checkLang();
    static nav = this.createLangList();

    static createLangList() {
        let block = document.querySelector('.lang__list');
        let icon  = document.querySelector('.lang__icon');
        let list = ['English', 'Italian', 'Russian'];

        let setIcon = i => icon.innerHTML = this.langs[i].toUpperCase();
        let setActive =
            i => block.childNodes
                .forEach((el, n) => el.classList[i == n ? 'add': 'remove']('active'));

        this.langs.forEach((e, i) => {
            let div = document.createElement('div');
            div.innerHTML = list[i];

            if (e == this.lang){
                div.className = 'active';
                setIcon(i);
            }

            div.onclick = ({target}) => {
                if (target.className == 'active') return

                //location.reload();
                EventBus.emit('localize', this.langs[i]);
                setIcon(i);
                setActive(i);
                this.writeCookie(this.langs[i]);
            }

            block.append(div);
        });
        return block;
    }

    static readCookie() {
        return document.cookie.split(';').filter(e => e.includes('lang'))
    }

    static writeCookie(data) {
        document.cookie = encodeURIComponent('lang') + '=' + encodeURIComponent(data);
    }

    static checkLang() {
        let cookie = this.readCookie()[0];
        if (cookie) return cookie.split('=')[1];

        if (this.langs.includes(navigator.language)) {
            this.writeCookie(navigator.language);
            return navigator.language;
        }
        
        this.writeCookie(this.langs[0]);
        return this.langs[0];
    }

}