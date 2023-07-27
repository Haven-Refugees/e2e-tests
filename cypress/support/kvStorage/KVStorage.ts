interface KVStorage {
    get(key: string): any;
    set(key: string, value: any): void;
    delete(key: string): void;
    clear(): void;
}

export default class KeyValueStorage implements KVStorage {
    private static instance: KeyValueStorage;
    private storage: { [key: string]: any };

    constructor() {
        this.storage = {};
    }

    public getInstance(): KVStorage {
        if (!KeyValueStorage.instance) {
            KeyValueStorage.instance = new KeyValueStorage();
        }
        return KeyValueStorage.instance;
    }

    get(key: string): any {
        return this.storage[key];
    }

    set(key: string, value: any): void {
        this.storage[key] = value;
    }

    delete(key: string): void {
        delete this.storage[key];
    }

    clear(): void {
        this.storage = {};
    }
}