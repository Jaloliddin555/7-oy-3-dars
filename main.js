const box = document.querySelector("#list")

fetch("https://fakestoreapi.com/products?limit=10")
.then(lavash => lavash.json())
.then(lavashKeldi => {
    lavashKeldi.map(obyektlar => {
        box.innerHTML += `
    <li class="w-[300px] bg-green-500 rounded p-5 flex flex-col items-center m-5">
    <h2>${obyektlar.title}</h2>
    <p>${obyektlar.description}</p>
    </li>  
     `
    })
})
