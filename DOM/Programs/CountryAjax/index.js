// Make Ajax Call

function makeAjaxCall()
{
    let xhr=new XMLHttpRequest()
    xhr.open('GET',`https://restcountries.com/v3.1/name/${country}`,true)
    xhr.send()
    return xhr
}

// Display Country Information


function DisplayCountry(data){
    let HTMLCode=`<div class="col-md-3">
        <div class="card">
          <div class="card-header">
            <img src="${data.flags.png}" alt="" class="img-fluid">
          </div>
          <div class="card-body">
            <h2>${data.name.common}</h2>
            <h2>${data.capital[0]}</h2>
            <h2>${data.population}</h2>
          </div>
        </div>
      </div>`
}

function getData(){
    let req_1=makeAjaxCall('bharat')
    req_1.addEventListener('load',function(){
        let getCountry=JSON.parse(req_1.responseText)
        let [data]=getCountry
        DisplayCountry(data)

        let req_2=makeAjaxCall('usa')
        req_2.addEventListener('load',function(){
            let getCountry=JSON.parse(req_2.responseText)
            let [data]=getCountry
            DisplayCountry(data)

            let req_3=makeAjaxCall('pak')
            req_3.addEventListener('load',function(){
                let getCountry=JSON.parse(req_3.responseText)
                let [data]=getCountry
                DisplayCountry(data)

                let req_4=makeAjaxCall('afg')
                req_4.addEventListener('load',function(){
                let getCountry=JSON.parse(req_4.responseText)
                let [data]=getCountry
                DisplayCountry(data)
                })
            })
        })
    })
}
