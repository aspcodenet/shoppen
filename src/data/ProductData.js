// fetch / axios


const url = 'http://localhost:3000/products';

export const fetchProducts = async () => {
  const response = await fetch(url)
  const json = await response.json()

  return  json
}

// UNG SÅ HÄR Kolla mer i andra projektet
// export const updateNewProduct = async (id, product) => {
//   const request = new Request(url + '/' + id, {
//       method: "PUT",
//       body: JSON.stringify(product),
//     });
    
//     const response1 = await fetch(request);
//     console.log(response1.status);
// }



export const saveNewProduct = async (product) => {
  const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(product),
    });
    
    const response1 = await fetch(request);
    console.log(response1.status);
}


