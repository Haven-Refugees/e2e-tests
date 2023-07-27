import KeyValueStorage from "./KVStorage";


declare global {
    namespace Cypress {
        interface Chainable {
            setKeyValue: (key: string, value: any) => void;
            getKeyValue: (key: string) => any;
            deleteKey: (key: string) => void;
            clearKeyValueStorage: (key: string) => void;
        }
    }
}

export const registerStorage = () => {
    const storage = new KeyValueStorage().getInstance();

    Cypress.Commands.add("setKeyValue", (key: string, value: any) => {
        storage.set(key, value);
    });

    Cypress.Commands.add("getKeyValue", (key: string) => {
        return storage.get(key);
    });

    Cypress.Commands.add("deleteKey", (key: string) => {
        storage.delete(key);
    });

    Cypress.Commands.add("clearKeyValueStorage", () => {
        storage.clear();
    });
}
