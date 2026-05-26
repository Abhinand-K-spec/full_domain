// function step1(callback){
//     console.log('step 1');
//     callback();
// }

// function step2(callback){
//     console.log('step 2');
//     callback();
// }

// function step3(callback){
//     console.log('step 3');
//     callback();
// }


// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log('finished')
//         })
//     })
// })




function step1(){
    return new Promise((res)=>{
        console.log('step1')
        res();
    })
}

function step2(){
    return new Promise((res)=>{
        console.log('step2')
        res();
    })
}

function step3(){
    return new Promise((res)=>{
        console.log('step3')
        res();
    })
}


// step1()
// .then(()=>step2())
// .then(()=>step3())
// .then(()=>console.log('finished'));



async function datas(){
    await step1()
    await step2()
    await step3()
    console.log('finshed')
}

datas()