
console.time('test');

var x = { };

x.loopShapeArea = function(n){
    var area = 1;
    for (i=1; i<=n; i++) {
        area += ( (i*4)-4 );
    }
    return area;
}

console.timeEnd('test');
console.log(x.loopShapeArea(3));
console.log(x.loopShapeArea(6));