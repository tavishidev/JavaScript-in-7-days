**NOTES OF TOPIC : OBJECT**
- JavaScript me objects direct loop nahi hote, isliye unhe array me convert karte hain. Object.entries() loop ke liye use hota hai
- Kyuki wo object ko array me convert kar deta hai.

*this*
- normal function me alag behave karta hai.
- arrow function me alag.

# JSON की ज़रूरत क्यों पड़ी? 
JSON ek string format hai jisme data object jaisa dikhta hai.
*Backend → frontend data bhejna*
*Backend → database me data store karna*
*Server → server baat kare*

JS object direct travel nahi kar sakta
❌ Memory address kisi aur machine ko samajh nahi aata
👉 Isliye string format chahiye
👉 Jo har language samajh sake

Yahi JSON hai.

JSON ≠ JavaScript Object
JSON = string format for data transfer and storage
JS object = memory me rehne wala structure

# properties
Object.assign({}, a, b) = a + b ka naya object (shallow copy)=>Nested object same reference share karte hain.Object.assign merge two object.
Object.values(objectname)...=array of all values
Object.keys(objectname)....=arrys of all keys
Object.entities(objectname)....arrays of key value pair ....Har property → [key, value]
Object.frozens(objectname)....change ni kr skte na hi add kr skte hai kuch bhi
Object.seal(objectname).....add ni kr skte kuch bhi per change kr skte hai.


## swapping concept:
JavaScript evaluates the entire RHS expression first at runtime,
creates a temporary array holding those values,
and only after that assigns them to the LHS variables one by one.

Because original values are preserved in the temporary array,
swapping happens safely without overwriting.

**REST** is a new array created during destructuring that contains all elements of the original array that were not individually assigned to variables on the left-hand side.

This sentence explains:

✔ timing (during destructuring)

✔ scope (only unassigned elements)

✔ memory behavior (new array)

# Differnce between (...)spread and rest (...rest)
Rest is used during destructuring to collect remaining unassigned values into a new array, whereas spread is used during creation or function calls to expand or copy existing arrays or objects. Spread creates a shallow copy, which prevents mutation of top-level values but not nested references.
* Rest packs values. Spread unpacks values *



# If you’re using it to create a deep copy, this is the correct way:
`const copyInfo = JSON.parse(JSON.stringify(info));`

day6/task9/ques5
When you stringify and parse JSON that contains dates, JavaScript converts Date objects into strings. You must manually restore them back to Date objects when parsing.