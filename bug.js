```javascript
const query = { $expr: { $eq: [ { $toDouble: "$price" }, 10 ] } };
const result = await collection.find(query).toArray(); 
```