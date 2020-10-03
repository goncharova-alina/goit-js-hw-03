const countProps = function(obj) {
    'use strict';
    // let key = Object.keys(obj);
    // console.log(key.length);

    return Object.keys(obj).length;
};

console.log(countProps({})); // 0

console.log(countProps({a:1, b:1})); // 2

console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5