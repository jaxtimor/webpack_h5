import _ from 'lodash'
import {add} from '../lib/common.js'
import {ff} from '../lib/math.js'

function createElement() {
    let div = document.createElement('div');
    div.innerHTML = _.join(['hello', 'webpack'], ' ')
    console.log(add(1, 2))
    ff()

    return div;
}

document.body.appendChild(createElement())