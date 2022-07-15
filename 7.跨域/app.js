const data = {
    name: '尚硅谷'
};

console.log(data);

function handle(data){
    const result  = document.getElementById('result');
    result.innerHTML = data.name;
}

handle(data);