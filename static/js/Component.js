import EventBus from "./EventBus.js";
import Localizer from "./Localizer.js";


export default class Component {

    constructor(settings) {
        this.block = document.createElement(settings.tag || 'div');
        this.block.id = settings.id;
        this.block.className = settings.className;
        this.locals = settings.localization;
        this.changeLanguage(Localizer.lang);
        this.parent = settings.parent;

        EventBus.sub('localize', this.changeLanguage.bind(this));
    }

    changeLanguage(lang) {
        if (this.locals[lang]) {
            this.block.innerHTML = this.locals[lang];
            return;
        }
        this.block.innerHTML = Object.values(this.locals)[0];
    }

    add(type = 'append') {
        this.parent[type](this.block);
    }

}