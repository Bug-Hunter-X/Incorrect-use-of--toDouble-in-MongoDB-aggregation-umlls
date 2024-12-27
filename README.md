# Incorrect use of $toDouble in MongoDB aggregation
This example demonstrates an incorrect usage of the $toDouble operator within a MongoDB aggregation query.  The original code attempts to convert a string field to a double for comparison, but it does so incorrectly, leading to errors. The corrected code provides the proper syntax.

**Original Code (bug.js):**
The original code shows the incorrect implementation of $toDouble.

**Corrected Code (bugSolution.js):**
The solution demonstrates the proper use of $toDouble.

This repository serves as a simple illustration of common pitfalls when working with data type conversions in MongoDB aggregations.  Refer to the MongoDB documentation for detailed explanations and best practices for handling data types.