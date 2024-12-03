import warningTapeGradient from "./WarningTape.js";

export default class Visual {
    
    constructor() {
        this.warningDesign();
        this.smoothScroll();
        this.structFormat();
    }

    warningDesign() {
        warningTapeGradient(20)(document.querySelectorAll('.wt-20'));
        warningTapeGradient(5)(document.querySelectorAll('.wt-5'));
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
        document.querySelectorAll('.code__code').forEach(e => {
            e.innerHTML = e.innerHTML
                .trim()
                .split('\n')
                .map(e => `<div>${e}</div>`).join('\n')
                //.map((e, i) => `<span style="opacity: 0.2">${i + 1}</span>   ${e}`).join('\n');
        })

    }

}