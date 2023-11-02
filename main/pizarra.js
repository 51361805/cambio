setInterval(function() {
    const valorCompraReal = JSON.parse(localStorage.getItem('compraReal'));
    const valorVentaReal = JSON.parse(localStorage.getItem('ventaReal'));
    const valorCompraEuro = JSON.parse(localStorage.getItem('compraEuro'));
    const valorVentaEuro = JSON.parse(localStorage.getItem('ventaEuro'));
    const valorCompraDolares = JSON.parse(localStorage.getItem('compraDolares'));
    const valorVentaDolares = JSON.parse(localStorage.getItem('ventaDolares'));
    const valorCompraArgentino = JSON.parse(localStorage.getItem('compraArgentino'));
    const valorVentaArgentino = JSON.parse(localStorage.getItem('ventaArgentino'));
  
    // Actualizar los elementos de la tabla con los valores del LocalStorage
    document.getElementById('compra-real-pizarra').textContent = valorCompraReal ;
    document.getElementById('venta-real-pizarra').textContent = valorVentaReal ;
    document.getElementById('compra-euro-pizarra').textContent = valorCompraEuro; 
    document.getElementById('venta-euro-pizarra').textContent = valorVentaEuro ;
    document.getElementById('compra-dolares-pizarra').textContent = valorCompraDolares; 
    document.getElementById('venta-dolares-pizarra').textContent = valorVentaDolares ;
    document.getElementById('compra-argentino-pizarra').textContent = valorCompraArgentino;
    document.getElementById('venta-argentino-pizarra').textContent = valorVentaArgentino ;
  }, 1000); // Actualizar cada 1000ms (1 segundo)
  