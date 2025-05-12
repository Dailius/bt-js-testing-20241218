
let mockedOject;

beforeEach(()=>{
    console.log('BEFORE EACH');
    mockedOject = "some mocking...";
});

afterEach(()=>{
    console.log("AFTER EACH")
});

test('Test 01', ()=>{
    console.log("\tTest 01 running ...")
});

test('Test 02', ()=>{
    console.log("\tTest 02 running ...")
});

test('Test 03', ()=>{
    console.log("\tTest 03 running ...")
});