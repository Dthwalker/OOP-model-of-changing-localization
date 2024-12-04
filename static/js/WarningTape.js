export default function warningTapeGradient(width, c1, c2) {
    width ||= 20;
    c1    ||= 'rgb(255, 215, 10)';
    c2    ||= 'rgb(10, 10, 10)';
    
    let create = (width) => {
        let gradient = '';
        for (let i = 0, j = 0; i < 4; i++, j+=2)
            gradient += `${(i&1 ? c1 : c2)} ${width * i}px, ${(!(i&1) ? c1 : c2)} ${width * i + 1}px, `;
        return gradient.slice(0, -2);
    }
    
    let bgSize = width * 2.825; // I don't know what this number is
    let gradient = `linear-gradient(45deg, ${create(width)})`;
    
    return (element) => {
        let set = (el) => {
            el.style.background = gradient;
            el.style.backgroundSize = `${bgSize}px ${bgSize}px`;
        }
        if (!(element?.[Symbol.iterator] instanceof Function)) return set(element);
        [...element].forEach(e => set(e));
        console.log(gradient, bgSize)
    }
}