let btnTag=document.getElementById('product-btn')

function getProductsData()
{
    // 1. Create XMLHttp Request Object

    let xhr=new XMLHttpRequest()
    

    // 2.Create the request
    xhr.open('GET','products.json',true)


    // 3. send the request to server
    xhr.send()

    // In between sending requestand getting response it may take some time

    xhr.onprogress=function()
    {
        let messageTag=document.getElementById('message')
        messageTag.innerText="Data Loading......"
    }

    // Once data is loaded successfully

    xhr.onload=function()
    {
        let data=JSON.parse(xhr.responseText);
        let {product}=data;
        console.log(product);
    }
}
getProductsData();