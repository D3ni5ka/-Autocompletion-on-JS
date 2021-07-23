let counrtyList = ['Belarus', 'Belgium', 'Bulgaria'];
let input = document.querySelector('#elem');
let list = document.querySelector('#list');


input.addEventListener('keyup', function (event) {
    let {value} = event.target;
    let result = counrtyList.filter((elem) => 
        elem.toLowerCase().startsWith(value.toLowerCase())
    );
    list.innerHTML = '';


    result.forEach((countryName) => {
        if (value && value.toLowerCase() !== countryName.toLowerCase()) {
            let li = document.createElement('li');
            li.innerHTML = countryName;
            list.appendChild(li);



            li.addEventListener('click', function () {
                input.value = this.innerHTML;
                list.innerHTML = '';
            })
        }
    })

})