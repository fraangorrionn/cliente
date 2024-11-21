/*function bar(){ 
    let txt = ''; 
    for(let i in arguments){ 
        txt += arguments[i];
    } 
    return txt;
}
 */

const bar = (...args) => { let txt = '';
    for (let i = 0; i < args.length; i++) {
        txt += args[i];
    }
    return txt;
};

alert(bar('tengo', ' ', 'frio'));