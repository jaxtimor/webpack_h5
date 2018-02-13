import {ff} from './../lib/math.js'
function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then((_)=>{
        let div = document.createElement('div');
        div.innerHTML=_.join(['hello','webpack'],' ');
        let btn  = document.createElement('button');
        btn.innerHTML='print me';
        div.appendChild(btn);
        btn.onclick= event => import(/*webpackChunkName:"print"*/ './print.js').then((module)=>{
            console.log(module.default)
            let print = module.default;
            print()
        }).catch(err=>'load print err')

        let btn2 = document.createElement('button');
        btn2.innerHTML='ff';
        btn2.onclick=ff;
        div.appendChild(btn2);
        // console.log('haha')
        $('div').css({color:'red'});

        return div;
    }).catch((err)=>{
        return 'error import lodash';
    })
}

getComponent().then((element)=>{
    document.body.appendChild(element);
})