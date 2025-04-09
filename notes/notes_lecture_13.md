
## 1. Repeat and check homework
## 2. Postman scripts

```js
    pm.test('Response time is less than 750ms',()=>{
        pm.expect(pm.response.responseTime).to.be.lessThan(750);
    });
```

Pre-request scripts to add api-key into headers:
```js
    pm.request.headers.add({
        key: "x-api-key",
        value: pm.collectionVariables.get("api-key")
    });
```

Pre-request scripts to add data into request body:
```js
    var uuid = require('uuid'); 
    var myUUID = uuid.v4();
    // console.log(myUUID)

    // let randomTitle  = "Some text " + Date.now();
    let randomTitle  = "Some text " + myUUID;

    const todoTask = {
        "userId": 1,
        "title": randomTitle,
        "completed": true
    };

    pm.request.body.raw = todoTask;
    // pm.request.body.raw = JSON.stringify(todoTask);
```
