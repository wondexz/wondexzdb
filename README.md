# Example usage
```js
const { JsonDatabase } = require("wondexzdb");
const db = new JsonDatabase({ path: "./database.json" });

db.set("test", 'Hello');
db.delete("test");
db.add("test", 100);
db.subtract("test", 100);
db.has("test");
db.deleteAll();
db.deleteEach("test");
db.backUp({ path: "./backup.json" });
