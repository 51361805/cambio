const compraReal = document.getElementById('compra-real');
const ventaReal = document.getElementById('venta-real');
const compraEuro = document.getElementById('compra-euro');
const ventaEuro = document.getElementById('venta-euro');
const ventaDolares = document.getElementById('venta-dolares');
const compraDolares = document.getElementById('compra-dolares');
const compraArgentino = document.getElementById('compra-argentino');
const ventaArgentino = document.getElementById('venta-argentino');

compraReal.addEventListener('input', function () {
  const valorCompraReal = (compraReal.value);
  localStorage.setItem('compraReal', JSON.stringify(valorCompraReal));
});

ventaReal.addEventListener('input', function () {
  const valorVentaReal = (ventaReal.value);
  localStorage.setItem('ventaReal', JSON.stringify(valorVentaReal));
});

compraEuro.addEventListener('input', function () {
  const valorCompraEuro = (compraEuro.value);
  localStorage.setItem('compraEuro', JSON.stringify(valorCompraEuro));
});

ventaEuro.addEventListener('input', function () {
  const valorVentaEuro = (ventaEuro.value);
  localStorage.setItem('ventaEuro', JSON.stringify(valorVentaEuro));
});

compraDolares.addEventListener('input', function () {
  const valorCompraDolares = (compraDolares.value);
  localStorage.setItem('compraDolares', JSON.stringify(valorCompraDolares));
});

ventaDolares.addEventListener('input', function () {
  const valorVentaDolares = (ventaDolares.value);
  localStorage.setItem('ventaDolares', JSON.stringify(valorVentaDolares));
});

compraArgentino.addEventListener('input', function () {
  const valorCompraArgentino = (compraArgentino.value);
  localStorage.setItem('compraArgentino', JSON.stringify(valorCompraArgentino));
});

ventaArgentino.addEventListener('input', function () {
  const valorVentaArgentino = (ventaArgentino.value);
  localStorage.setItem('ventaArgentino', JSON.stringify(valorVentaArgentino));
});



//guarda los valores en el mostrador
window.addEventListener('load', function () {
  const valorCompraRealJSON = localStorage.getItem('compraReal');
  if (valorCompraRealJSON !== null) {
    const valorCompraReal = JSON.parse(valorCompraRealJSON);
    compraReal.value = valorCompraReal;
  }

  const valorVentaRealJSON = localStorage.getItem('ventaReal');
  if (valorVentaRealJSON !== null) {
    const valorVentaReal = JSON.parse(valorVentaRealJSON);
    ventaReal.value = valorVentaReal;
  }

  const valorCompraEuroJSON = localStorage.getItem('compraEuro');
  if (valorCompraEuroJSON !== null) {
    const valorCompraEuro = JSON.parse(valorCompraEuroJSON);
    compraEuro.value = valorCompraEuro;
  }

  const valorVentaEuroJSON = localStorage.getItem('ventaEuro');
  if (valorVentaEuroJSON !== null) {
    const valorVentaEuro = JSON.parse(valorVentaEuroJSON);
    ventaEuro.value = valorVentaEuro;
  }

  const valorCompraDolaresJSON = localStorage.getItem('compraDolares');
  if (valorCompraDolaresJSON !== null) {
    const valorCompraDolares = JSON.parse(valorCompraDolaresJSON);
    compraDolares.value = valorCompraDolares;
  }

  const valorVentaDolaresJSON = localStorage.getItem('ventaDolares');
  if (valorVentaDolaresJSON !== null) {
    const valorVentaDolares = JSON.parse(valorVentaDolaresJSON);
    ventaDolares.value = valorVentaDolares;
  }

  const valorCompraArgentinoJSON = localStorage.getItem('compraArgentino');
  if (valorCompraArgentinoJSON !== null) {
    const valorCompraArgentino = JSON.parse(valorCompraArgentinoJSON);
    compraArgentino.value = valorCompraArgentino;
  }

  const valorVentaArgentinoJSON = localStorage.getItem('ventaArgentino');
  if (valorVentaArgentinoJSON !== null) {
    const valorVentaArgentino = JSON.parse(valorVentaArgentinoJSON);
    ventaArgentino.value = valorVentaArgentino;
  }
});
