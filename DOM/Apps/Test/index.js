let minusIconBtn=document.getElementById('minus-icon');
let plusIconBtn=document.getElementById('plus-icon');
let displayQtyTag=document.getElementById('display-qty');

let qty=0;
function incQty()
{
    ++qty;
    displayQtyTag.textContent=qty;
}

plusIconBtn.addEventListener('click',function()
{
    incQty();
})

function decQty()
{
    if(qty>1)
    {
        --qty;
        displayQtyTag.textContent=qty;
    }
    else 
    {
        displayQtyTag.textContent=1;
    }
}

minusIconBtn.addEventListener('click',function()
{
    decQty();
})