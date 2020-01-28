//불러와서 사용하기
import {area, circumference} from "./circle";
import cube from './cube';
/*
var circle = require('./circle');
var cube = require('./cube');
*/ 
console.log(circle.area(10));
console.log(circle.circumference(10));
 
console.log(cube.bulk(10));