import warningTapeGradient from "./WarningTape.js";
import EventBus from "./EventBus.js";


export default class Visual {

    colors = {
        dark   : '#24262b',
        light  : '#e3ebd9',
        accent : '#ffce2d',
        addit1 : '#7fbb70',
    }
    
    constructor() {
        //this.warningDesign();
        this.smoothScroll();
        this.structFormat();
        this.codeFormat();
        
        EventBus.sub('localize', () => {
            this.smoothScroll();
        })
    }

    warningDesign() {
        let [a, b] = ['#24262b00', '#ffce2d'];
        warningTapeGradient(20, this.colors.dark, this.colors.accent)(document.querySelectorAll('.wt-20'));
        warningTapeGradient(5, this.colors.dark, this.colors.light)(document.querySelectorAll('.wt-5'));
    }

    smoothScroll() {
        const nav = document.querySelectorAll('a[href^="#"]');

        nav.forEach((link) => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const id = link.getAttribute('href');
                const top = document.querySelector(id)
                    .getBoundingClientRect().top + window.scrollY - 40;

                window.scrollTo({
                    top: top,
                    behavior: "smooth"
                });
            });
        });
    }

    structFormat() {
        document.querySelectorAll('.code__struct').forEach(e => {
            e.innerHTML = e.innerHTML
                .replaceAll(/\b.*\..*(\n|$)/ig, (a) => `<span class="accent">${a}</span>`)
                .replaceAll('|', '<span style="opacity: 0.3">|</span>')
                .trim();
        });
    }
    
    codeFormat() {
        let syntaxAccent = /(\s|\.)\w*(?=\(|\.)|\sif\s/ig;
        let syntaxWords  = /this|\sclass\s/ig

        document.querySelectorAll('.code__code').forEach(e => {
            e.innerHTML = e.innerHTML
                .trim()
                .replace(syntaxAccent, (a) => `<span class="accent">${a}</span>`)
                .replace(syntaxWords, (a) => `<span style="color:${this.colors.addit1}">${a}</span>`)
                .split('\n')
                .map(e => `<div>${e}</div>`).join('\n')
        });

    }

}