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
                <div class="col-md-6 col-lg-4 mb-3 d-flex">  <!-- Usar d-flex para asegurarnos de que todas las tarjetas sean iguales -->
                    <div class="card position-relative flex-fill" style="padding: 10px; font-size: 0.85rem; display: flex; flex-direction: column;">
                        <!-- Burbuja de descuento -->
                        <div class="descuento-burbuja" style="font-size: 0.75rem; padding: 5px 10px;">-${descuento}%</div>
                        <img src="${producto.imagen}" class="card-img-top img-fluid" alt="${producto.nombre}" style="max-height: 180px;">
                        <div class="card-body" style="padding: 10px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                            <p class="text-muted" style="font-size: 0.85rem;">${tipoYMarcaHTML}</p>
                            <h5 class="card-title" style="font-size: 1rem; font-weight: bold;">${producto.nombre}</h5>
                            <p class="card-text" style="font-size: 0.85rem;">${producto.descripcion}</p>
                            <div style="margin-top: auto;">
                                <p class="precio" style="font-size: 1.3rem; font-weight: bold;">
                                    <s style="font-size: 0.9rem;">$${producto.precioReal}</s> $${producto.precio}
                                </p>
                            </div>
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
