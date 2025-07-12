fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('products');
    products.forEach(product => {
      const productEl = document.createElement('div');
      productEl.className = 'product';
      productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      `;
      productList.appendChild(productEl);
    });
  });
