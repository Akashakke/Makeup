







const getData = async () => {
  let response = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );

  const data = await response.json();
  console.log(data);
  for (let i = 0; data.length; i++) {
  if(data[i].image_link && data[i].brand && data[i].name && data[i].price) {
    var ele = document.getElementById("card");
    ele.innerHTML += `
           <div class="col">
    <div class="card">
           <div class="card-type">
<img src="${data[i].image_link}" class="card-img-top" alt="">
<div class="card-body">
  <p class="card-text">Brand: ${data[i].brand}
  Name: ${data[i].name}
  Price: ${data[i].price}</p>
</div>
</div>`;
}
  }
};
getData();

