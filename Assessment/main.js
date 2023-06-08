

//const apikey = "https://fakestoreapi.com/products";
                
//fetch('https://fakestoreapi.com/products')
//.then(response =>{
   // return response.json();
//}).then(data =>{
   // const cardAssessment =document.querySelector('Assessment')
    //data.forEach(product => {
       // const productElement = cardAssessment(product);
        //cardAssessment.appendChild(productElement);
    })
   // console.log(data);
//})


const body = document.body;
const container = document.createElement("div");

const fetchProduct = async() => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  
  data.map(element => {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    card.classList.add("card");

    img.setAttribute("src", element.image);
    h3.textContent = element.title;
    card.append(img, h3, p);
    container.append(card);
  });


}

container.classList.add("container")

fetchProduct()
body.append(container)
