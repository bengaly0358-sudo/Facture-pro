// js/cache.js

const Cache = {

    DURATION: 5 * 60 * 1000,

    set(key, data) {
        const item = {
            data: data,
            timestamp: Date.now()
        };
        localStorage.setItem(
            'cache_' + key,
            JSON.stringify(item)
        );
    },

    get(key) {
        try {
            const item = localStorage.getItem('cache_' + key);
            if (!item) return null;
            const parsed = JSON.parse(item);
            const now = Date.now();
            if (now - parsed.timestamp > this.DURATION) {
                localStorage.removeItem('cache_' + key);
                return null;
            }
            return parsed.data;
        } catch (e) {
            return null;
        }
    },

    remove(key) {
        localStorage.removeItem('cache_' + key);
    },

    clear() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('cache_')) {
                localStorage.removeItem(key);
            }
        });
    }
};

window.Cache = Cache;