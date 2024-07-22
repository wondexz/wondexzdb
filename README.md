# wondexzdb

## JsonDatabase
```js
const { JsonDatabase } = require("wondexzdb");
const db = new JsonDatabase({ path: "./database.json" });

db.log(true)
db.set("x.y.z", "abc") // abc
db.delete("x") // true
db.get("x") // {y: {z: "abc"}}
db.has("x") // true
db.deleteAll() // true
db.push("a", "hello") //  ["hello"]
db.push("a", "world") //  ["hello", "world"]
db.unpush("a", "hello") // ["world"]
