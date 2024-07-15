const fs = require("fs");

class JsonDatabase {
    constructor(options) {
        if (!options || !options.path) return 'File path not entered';
        this.dbPath = options.path;
        this.db = this.loadDatabase();
    }

    loadDatabase() {
        try {
            return JSON.parse(fs.readFileSync(this.dbPath, "utf8"));
        } catch (err) {
            return {};
        }
    }

    saveDatabase() {
        fs.writeFileSync(this.dbPath, JSON.stringify(this.db, null, 2), "utf8");
    }

    set(key, value) {
        if (!key) return 'Data name not entered';
        if (!value) return 'No data value entered';
        this.db[key] = value;
        this.saveDatabase();
    }

    get(key) {
        return this.db[key];
    }

    has(key) {
        if (!key) return 'Data name not entered';
        return this.db.hasOwnProperty(key);
    }

    delete(key) {
        if (!key) return 'Data name not entered';
        if (this.has(key)) {
            delete this.db[key];
            this.saveDatabase();
            return true;
        }
        return false;
    }

    add(key, value) {
        if (!key) return 'Data name not entered';
        if (!value) return 'No data value entered';
        if (typeof this.db[key] === 'number' && typeof value === 'number') {
            this.db[key] += value;
        } else {
            this.db[key] = value;
        }
        this.saveDatabase();
        return true;
    }

    subtract(key, value) {
        if (!key) return 'Data name not entered';
        if (!value) return 'No data value entered';
        if (this.has(key) && typeof this.db[key] === 'number' && typeof value === 'number') {
            this.db[key] -= value;
            this.saveDatabase();
            return true;
        }
        return false;
    }

    deleteAll() {
        this.db = {};
        this.saveDatabase();
    }

    deleteEach(substring) {
        if (!substring) return 'Data name not entered';
        for (const key in this.db) {
            if (key.includes(substring)) {
                this.delete(key);
            }
        }
    }

    backUp(options) {
        if (!options || !options.path) return 'File path not entered';
        const backupPath = options.path;
        fs.writeFileSync(backupPath, JSON.stringify(this.db, null, 2), "utf8");
    }
}

module.exports = {
    JsonDatabase
};
