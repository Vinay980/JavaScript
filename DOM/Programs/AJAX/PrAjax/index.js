let p1=new Promise(function(resolve,reject){
    let xhr=new XMLHttpRequest()
    xhr.open('GET','products.json',true)
    xhr.send();

    xhr.addEventListener('load',()=>{
        if(xhr.statusText=='OK'){
            resolve(xhr.responseText)
        }else{
            reject('Something Went Wrong')
        }
    })
})
p1.then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.error(err);
    
})