
## 1. Repeat and check homework
## 2. Postman scripts


Breaking change

```js
pm.test('Response status code 200', ()=>{
    pm.expect(pm.response.code).to.equal(200);
});

pm.test('Response status code 200', function (){
    // pm.expect(pm.response.code).to.equal(200);
    pm.response.to.have.status(200);
});
```


```js
pm.test("Print data into console and reach responce body json", ()=>{
console.log("DEMO");
    console.log(pm.response.code);
    console.log(pm.response.code == 200);
    console.log(pm.response.code === 200);
    // console.log(pm.response.body.);
    console.log(pm.response.json());
    console.log(pm.response.json().status);
    console.log(pm.response.json().sources);
    console.log(pm.response.json().sources[0]);
    console.log(pm.response.json().sources[0].name);
});
```

```js
pm.test('Check response body', ()=>{
    // pm.expect(responseBody).to.have.property("status");
    // pm.expect(responseBody).to.have.property("sources");
    pm.expect(responseBody.status).to.be.an("string");
    pm.expect(responseBody.sources).to.be.an("array");
});
```

```js
pm.test('Test sources property', ()=>{
    pm.expect(responseBody.sources[0]).is.an("object");

    pm.expect(responseBody.sources[0].id).to.be.an("string").and.to.eql("gruenderszene").and.contains("gruen");

    pm.expect(responseBody.sources[0].name).to.be.an("string");
    pm.expect(responseBody.sources[0].name).to.eql("Gruenderszene");

    pm.expect(responseBody.sources[0].description).to.be.an("string").and.contains("für Startups und die");

    pm.expect(responseBody.sources[0].url).to.be.an("string");
    pm.expect(responseBody.sources[0].category).to.be.an("string");
    pm.expect(responseBody.sources[0].language).to.be.an("string");
    pm.expect(responseBody.sources[0].country).to.be.an("string");
}); 
```

```js
pm.test('Check array of sources',()=>{
    responseBody.sources.forEach((obj)=>{
        pm.expect(obj).is.an("object");
        pm.expect(obj.id).is.an("string")
        pm.expect(obj.name).is.an("string")
        pm.expect(obj.description).is.an("string")
    });
});
```

