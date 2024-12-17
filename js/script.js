document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos');
    const filtroGenero = document.getElementById('filtro-genero');

    // Función para mostrar los productos
    const mostrarProductos = (productos) => {
        productosContainer.innerHTML = ''; // Limpiar los productos existentes
        productos.forEach(producto => {
            const descuento = Math.round(((producto.precioReal - producto.precio) / producto.precioReal) * 100);

            const categoriaHTML = producto.categoria === 'cyzone' ? 'Cyzone' : 
                                  producto.categoria === 'esika' ? 'Ésika' : 
                                  producto.categoria === 'lbel' ? "L'bel" : '';

            const tipoYMarcaHTML = producto.tipoDeProducto === 'Fragancia' ? 
                                   `Fragancia > ${categoriaHTML}` : 
                                   producto.tipoDeProducto === 'Cuidado facial' ? 
                                   `Facial > ${categoriaHTML}` : '';

            const productoHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card position-relative">
                        <!-- Burbuja de descuento -->
                        <div class="descuento-burbuja">-${descuento}%</div>
                        <img src="${producto.imagen}" class="card-img-top img-fluid" alt="${producto.nombre}">
                        <div class="card-body">
                            <p class="text-muted">${tipoYMarcaHTML}</p> <!-- Categoría y marca añadida aquí -->
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="precio"><s>$${producto.precioReal}</s> $${producto.precio}</p>
                        </div>
                    </div>
                </div>
            `;
            productosContainer.innerHTML += productoHTML;
        });
    };

    // Función para filtrar productos
    const filtrarProductos = () => {
        const generoSeleccionado = filtroGenero.value;

        if (generoSeleccionado === 'todos') {
            mostrarProductos(baseDeDatos); // Mostrar todos si no hay filtro
        } else {
            const productosFiltrados = baseDeDatos.filter(producto =>
                producto.genero === generoSeleccionado || producto.genero === 'Unisex'
            );
            mostrarProductos(productosFiltrados);
        }
    };

    // Evento al cambiar el selector de género
    filtroGenero.addEventListener('change', filtrarProductos);

    // Mostrar todos los productos al cargar la página
    mostrarProductos(baseDeDatos);
});
