export function add(x,y){
    console.log('axxx')
    return x+y;
}

export function sum(arr){
    add(1,22);
    console.log('sx')
    let _sum =0;
    for(let i of arr){
        _sum += i;
    }
    return _sum;
}