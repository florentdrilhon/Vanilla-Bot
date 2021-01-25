// loading modules
'use strict';
const patterns=require('../patterns');
const XregExp=require('xregexp');


let matchPattern = (str, cb) => {
    // function to check if the str provided by the user match a pattern
    let getResult = patterns.find(item => {
        if (XregExp.test(str, XregExp(item.pattern,"i"))){
            return true;
        }
    });
    // function to get the entities from an intent

    if(getResult){
        // if a pattern is matched, get the associated intent
        return cb ({
            intent: getResult.intent,
            entities: createEntities(str, getResult.pattern)
        });
    }
    else {
        return cb({});
    }
}


let createEntities=(str,pattern)=>{
    return XregExp.exec(str,XregExp(pattern));
};


module.exports=matchPattern;
