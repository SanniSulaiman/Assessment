

const apikey = "https://fakestoreapi.com/products";
                
fetch('https://fakestoreapi.com/products')
.then(response =>{
    return response.json();
}).then(data =>{
    const cardAssessment =document.querySelector('Assessment')
    data.forEach(product => {
        const productElement = cardAssessment(product);
        cardAssessment.appendChild(productElement);
    })
    console.log(data);
})



