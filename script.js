'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'circle',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]



try{
    data.forEach((blockObj,i) => {
        const block = document.createElement(blockObj.tag);
        
        if(!blockObj.id) throw new SyntaxError(`Data does'n with number ${i+1} no id`)

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });

}catch(e){
    if(e.name === 'SyntaxError'){
        console.log(e.message);
    }else throw e;
}