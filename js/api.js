fetch("http://localhost:5007/categorias")
  .then((response) => response.json())
  .then((data) => {
    const body = document.getElementById("body");
    console.log(data);
    
    data.forEach((e) => {
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      
      div.textContent = e.categoriaNome
      div2.textContent = e.categoriaId 
      body.appendChild(div);
      body.appendChild(div2);
    });
  })
  .catch(console.error(error));
