```javascript
const query = { $expr: { $eq: [ { $toDouble: "$price" }, 10 ] } };
//Corrected Code
const queryCorrected = { $expr: { $eq: [{ $toDouble: '$price' }, 10] } };
const resultCorrected = await collection.find(queryCorrected).toArray();
```