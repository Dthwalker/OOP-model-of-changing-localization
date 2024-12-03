export default class EventBus {
    
    static #events = {}
    
    static sub(name, fn) {
        if (!this.#events[name])
            this.#events[name] = [];

        this.#events[name].push(fn);

        return this.unsub.bind(this, name, fn)
    }

    static unsub(name, fn) {
        this.#events[name].filter(eFn => eFn != fn);
    }

    static emit(name, data) {
        if (this.#events[name])
            this.#events[name].forEach(fn => fn.call(null, data));
    }

}