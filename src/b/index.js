// import _ from 'lodash'
// import {sum} from '../lib/common.js'
const util  = require('util')

function createElement(){
    let div = document.createElement('div');
    // div.innerHTML = _.join(['hello','webpack'],' ')
    div.innerHTML=util.inspect(new Date())
    // console.log(sum([1,2]));
    return div;
}

document.body.appendChild(createElement())