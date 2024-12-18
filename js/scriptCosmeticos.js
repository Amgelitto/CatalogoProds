document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos');
    const filtroCategoria = document.getElementById('filtro-categoria');

    // Función para mostrar los productos
    const mostrarProductos = (productos) => {
        productosContainer.innerHTML = ''; // Limpiar los productos existentes
        productos.forEach(producto => {
            const descuento = Math.round(((producto.precioReal - producto.precio) / producto.precioReal) * 100);

            const tipoprod = producto.tipoDeProducto === 'maquillaje' ? 'Maquillaje' :
                                  producto.tipoDeProducto === 'cuidado' ? 'Cuidado Facial' :
                                  producto.tipoDeProducto === 'cosmetico' ? 'Cosmeticos' :
                                  producto.tipoDeProducto === 'cabello' ? 'Cuidado Capilar' : '';
            const tipo = producto.tipo === 'desmaquillador' ? 'Desmaquillador' :
                        producto.tipo === 'tratamiento' ? 'Tratamiento Facial' :
                        producto.tipo === 'hidrata' ? 'Hidratación Facial' :
                        producto.tipo === 'limpieza' ? 'Limpieza Facial' :
                        producto.tipo === 'oleoC' ? 'Óleo capilar' :
                        producto.tipo === 'cejas' ? 'Maquillaje de ojos' :
                        producto.tipo === 'labial' ? 'Labiales' :
                        producto.tipo === 'balsamo' ? 'Bálsamos labiales' :
                        producto.tipo === 'perlas' ? 'Polvos Faciales' :  '';
            const marca = producto.categoria === 'esika' ? 'Ésika' :
            producto.categoria === 'lbel' ? "L'bel" :
            producto.categoria === 'cyzone' ? 'Cyzone' : '';

            // Manejar imágenes
            const imagenes = [];
            if (producto.imagen1) imagenes.push(producto.imagen1);
            if (producto.imagen2) imagenes.push(producto.imagen2);
            if (producto.imagen3) imagenes.push(producto.imagen3);
            if (producto.imagen4) imagenes.push(producto.imagen4);

            const imagenHTML = imagenes.length > 0
                ? `<img src="${imagenes[0]}" class="card-img-top img-fluid" alt="${producto.nombre}" id="producto-imagen">` // Se usa la primera imagen por defecto
                : `<img src="${producto.imagen}" class="card-img-top img-fluid" alt="${producto.nombre}" id="producto-imagen">`;

            // Crear las burbujas de colores con nombres
            const burbujasColoresHTML = producto.eleccion
                ? `
                <div class="color-nombre-container">
                    <div class="color-actual-nombre" id="color-actual-nombre-${producto.nombre.replace(/\s+/g, '-')}" style="text-align:center; font-weight:bold;">${producto.nombrecolor1}</div>
                </div>
                <div class="color-bubbles"> ${Array.from({ length: producto.colores }, (_, i) => {
                    const colorName = producto[`nombrecolor${i + 1}`] || `Color ${i + 1}`;
                    return `
                        <div class="color-bubble-container">
                            <div class="color-bubble" 
                                 style="background-color: ${producto[`color${i + 1}`]};" 
                                 data-imagen="${producto[`imagen${i + 1}`]}" 
                                 data-nombre="${colorName}">
                            </div>
                        </div>`;
                }).join('')}</div>`
                : '';

            const productoHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card position-relative">
                        <!-- Burbuja de descuento -->
                        <div class="descuento-burbuja">-${descuento}%</div>
                        ${imagenHTML}
                        ${burbujasColoresHTML}
                        <div class="card-body">
                            <p class="text-muted">${marca} > ${tipoprod} > ${tipo}</p> <!-- Categoría añadida aquí -->
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="precio"><s>$${producto.precioReal}</s> $${producto.precio}</p>
                        </div>
                    </div>
                </div>
            `;

            productosContainer.innerHTML += productoHTML;
        });

        // Agregar funcionalidad a las burbujas de colores
        const colorBubbles = document.querySelectorAll('.color-bubble');
        colorBubbles.forEach(bubble => {
            bubble.addEventListener('click', (e) => {
                const imagenSeleccionada = e.target.getAttribute('data-imagen');
                const colorNombreSeleccionado = e.target.getAttribute('data-nombre');
                const card = e.target.closest('.card');
                const productoImagen = card.querySelector('.card-img-top');
                const colorActualNombre = card.querySelector('.color-actual-nombre');
                productoImagen.src = imagenSeleccionada; // Cambiar la imagen del producto
                colorActualNombre.textContent = colorNombreSeleccionado; // Cambiar el nombre del color
            });
        });
    };

    // Función para filtrar productos
    const filtrarProductos = () => {
        const categoriaSeleccionada = filtroCategoria.value;

        if (categoriaSeleccionada === 'todos') {
            mostrarProductos(baseDeDatos); // Mostrar todos si no hay filtro
        } else {
            const productosFiltrados = baseDeDatos.filter(producto =>
                producto.tipoDeProducto === categoriaSeleccionada
            );
            mostrarProductos(productosFiltrados);
        }
    };

    // Evento al cambiar el selector de categoría
    filtroCategoria.addEventListener('change', filtrarProductos);

    // Mostrar todos los productos al cargar la página
    mostrarProductos(baseDeDatos);
});
