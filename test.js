test("fromEuroToDollar", function(){
    const { fromEuroToDollar } = require('./app.js');
    
    expect(fromEuroToDollar(3.5)).toBeCloseTo(4.221, 2);   
});

test("fromDollarToYen", function(){
    const { fromDollarToYen } = require('./app.js');
    
    expect(fromDollarToYen(3.5)).toBeCloseTo(384.51, 2);   
});

test("fromYenToPound", function(){
    const { fromYenToPound } = require('./app.js');
    
    expect(fromYenToPound(3.5)).toBeCloseTo(0.02345, 5);   
});