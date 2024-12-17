import tkinter as tk
from tkinter import messagebox, simpledialog
import json
import os

# Obtener la ruta del archivo baseDeDatos.js
js_file_path = r'C:\Users\Angel\OneDrive\Escritorio\CatalogoProds\js\baseDeDatos.js'

# Función para cargar los datos de la base de datos
def cargar_datos():
    try:
        with open(js_file_path, 'r') as file:
            data = file.read()
            # Evaluar el contenido como JavaScript (convertir a formato Python)
            start = data.find('[')  # Buscar el inicio de la lista
            end = data.rfind(']') + 1  # Buscar el final de la lista
            json_data = data[start:end]  # Extraer solo la parte de la lista de productos
            productos = json.loads(json_data)
            return productos
    except Exception as e:
        messagebox.showerror("Error", f"No se pudo cargar la base de datos: {e}")
        return []

# Función para mostrar los productos en la lista de selección
def mostrar_productos():
    productos = cargar_datos()
    if productos:
        lista_productos.delete(0, tk.END)  # Limpiar la lista antes de llenarla
        for producto in productos:
            lista_productos.insert(tk.END, producto['nombre'])

# Función para mostrar la información del producto seleccionado
def mostrar_info_producto():
    selected_index = lista_productos.curselection()
    if selected_index:
        productos = cargar_datos()
        producto = productos[selected_index[0]]
        info_label.config(text=f"Nombre: {producto['nombre']}\n"
                              f"Precio: {producto['precio']}\n"
                              f"Precio Real: {producto['precioReal']}\n"
                              f"Descripción: {producto['descripcion']}\n"
                              f"Categoría: {producto['categoria']}\n"
                              f"Tipo de Producto: {producto['tipoDeProducto']}\n"
                              f"Género: {producto['genero']}")

# Función para editar la información del producto
def editar_producto():
    selected_index = lista_productos.curselection()
    if selected_index:
        productos = cargar_datos()
        producto = productos[selected_index[0]]

        # Crear una ventana de edición
        ventana_edicion = tk.Toplevel(root)
        ventana_edicion.title(f"Editar {producto['nombre']}")
        ventana_edicion.configure(bg="#f0f0f0")
        ventana_edicion.state('zoomed')  # Maximiza la ventana

        # Función para crear una etiqueta y un campo de entrada
        def crear_campo(ventana, texto, valor_default):
            label = tk.Label(ventana, text=texto, bg="#f0f0f0", font=('Arial', 12))
            label.pack(padx=20, pady=5, anchor="w")
            entry = tk.Entry(ventana, font=('Arial', 12))
            entry.insert(tk.END, valor_default)
            entry.pack(padx=20, pady=5)
            return entry

        # Campos de edición
        nombre_entry = crear_campo(ventana_edicion, "Nombre:", producto['nombre'])
        precio_entry = crear_campo(ventana_edicion, "Precio:", producto['precio'])
        precio_real_entry = crear_campo(ventana_edicion, "Precio Real:", producto['precioReal'])
        descripcion_entry = crear_campo(ventana_edicion, "Descripción:", producto['descripcion'])

        # Selección de categoría
        categoria_label = tk.Label(ventana_edicion, text="Categoría (esika, lbel, cyzone):", bg="#f0f0f0", font=('Arial', 12))
        categoria_label.pack(padx=20, pady=5, anchor="w")
        categoria_var = tk.StringVar(value=producto['categoria'])
        categoria_dropdown = tk.OptionMenu(ventana_edicion, categoria_var, "esika", "lbel", "cyzone")
        categoria_dropdown.config(font=('Arial', 12), relief="flat", width=15)
        categoria_dropdown.pack(padx=20, pady=5)

        # Selección de género
        genero_label = tk.Label(ventana_edicion, text="Género (Femenino, Masculino):", bg="#f0f0f0", font=('Arial', 12))
        genero_label.pack(padx=20, pady=5, anchor="w")
        genero_var = tk.StringVar(value=producto['genero'])
        genero_dropdown = tk.OptionMenu(ventana_edicion, genero_var, "femenino", "masculino")
        genero_dropdown.config(font=('Arial', 12), relief="flat", width=15)
        genero_dropdown.pack(padx=20, pady=5)

        # Selección del tipo de producto
        tipo_label = tk.Label(ventana_edicion, text="Tipo de Producto (Fragancia, Facial):", bg="#f0f0f0", font=('Arial', 12))
        tipo_label.pack(padx=20, pady=5, anchor="w")
        tipo_var = tk.StringVar(value=producto['tipoDeProducto'])
        tipo_dropdown = tk.OptionMenu(ventana_edicion, tipo_var, "fragancia", "facial")
        tipo_dropdown.config(font=('Arial', 12), relief="flat", width=15)
        tipo_dropdown.pack(padx=20, pady=5)

        # Ingreso del nombre del archivo y su extensión
        imagen_label = tk.Label(ventana_edicion, text="Nombre del archivo de la imagen (con la extensión):", bg="#f0f0f0", font=('Arial', 12))
        imagen_label.pack(padx=20, pady=5, anchor="w")

        # Mostrar la ruta predeterminada antes del campo de entrada
        imagen_ruta_label = tk.Label(ventana_edicion, text="Ruta predeterminada: img/prods/", bg="#f0f0f0", font=('Arial', 12))
        imagen_ruta_label.pack(padx=20, pady=5, anchor="w")

        imagen_entry = tk.Entry(ventana_edicion, font=('Arial', 12))
        imagen_entry.insert(tk.END, producto['imagen'].replace("img/prods/", ""))
        imagen_entry.pack(padx=20, pady=5)

        # Función para guardar los cambios del producto
        def guardar_edicion():
            categoria = categoria_var.get().lower()  # Convertir a minúsculas
            if categoria not in ["esika", "lbel", "cyzone"]:
                messagebox.showerror("Error", "La categoría debe ser 'esika', 'lbel' o 'cyzone'.")
                return

            # Capitalizar las opciones de género y tipo de producto
            genero = genero_var.get().capitalize()
            tipo_de_producto = tipo_var.get().capitalize()

            # Actualizar el producto con los nuevos valores
            producto['nombre'] = nombre_entry.get()
            producto['precio'] = int(precio_entry.get())
            producto['precioReal'] = int(precio_real_entry.get())
            producto['descripcion'] = descripcion_entry.get()
            producto['categoria'] = categoria
            producto['tipoDeProducto'] = tipo_de_producto
            producto['genero'] = genero
            producto['imagen'] = f"img/prods/{imagen_entry.get()}"

            # Guardar los cambios en el archivo
            try:
                with open(js_file_path, 'r') as file:
                    data = file.read()

                start = data.find('[')
                end = data.rfind(']') + 1
                json_data = data[start:end]
                productos = json.loads(json_data)

                productos[selected_index[0]] = producto

                with open(js_file_path, 'w') as file:
                    data = data[:start] + json.dumps(productos, indent=4) + data[end:]
                    file.write(data)

                messagebox.showinfo("Éxito", "Producto actualizado correctamente")
                ventana_edicion.destroy()
                mostrar_productos()
                mostrar_info_producto()

            except Exception as e:
                messagebox.showerror("Error", f"No se pudo guardar la base de datos: {e}")

        # Botón para guardar cambios
        guardar_button = tk.Button(ventana_edicion, text="Guardar Cambios", command=guardar_edicion, bg="#4CAF50", fg="white", font=('Arial', 12), relief="flat", padx=10, pady=5)
        guardar_button.pack(pady=20)

# Función para agregar un nuevo producto (fragancia)
def agregar_producto():
    # Crear una ventana de entrada para el nuevo producto
    ventana_agregar = tk.Toplevel(root)
    ventana_agregar.title("Agregar Nueva Fragancia")
    ventana_agregar.configure(bg="#f0f0f0")
    ventana_agregar.state('zoomed')  # Maximiza la ventana

    # Función para crear una etiqueta y un campo de entrada
    def crear_campo(ventana, texto, valor_default=""):
        label = tk.Label(ventana, text=texto, bg="#f0f0f0", font=('Arial', 12))
        label.pack(padx=20, pady=5, anchor="w")
        entry = tk.Entry(ventana, font=('Arial', 12))
        entry.insert(tk.END, valor_default)
        entry.pack(padx=20, pady=5)
        return entry

    # Campos de entrada para los detalles del producto
    nombre_entry = crear_campo(ventana_agregar, "Nombre:")
    precio_entry = crear_campo(ventana_agregar, "Precio:")
    precio_real_entry = crear_campo(ventana_agregar, "Precio Real:")
    descripcion_entry = crear_campo(ventana_agregar, "Descripción:")

    # Selección de categoría
    categoria_label = tk.Label(ventana_agregar, text="Categoría (esika, lbel, cyzone):", bg="#f0f0f0", font=('Arial', 12))
    categoria_label.pack(padx=20, pady=5, anchor="w")
    categoria_var = tk.StringVar()
    categoria_dropdown = tk.OptionMenu(ventana_agregar, categoria_var, "esika", "lbel", "cyzone")
    categoria_dropdown.config(font=('Arial', 12), relief="flat", width=15)
    categoria_dropdown.pack(padx=20, pady=5)

    # Selección de género
    genero_label = tk.Label(ventana_agregar, text="Género (Femenino, Masculino):", bg="#f0f0f0", font=('Arial', 12))
    genero_label.pack(padx=20, pady=5, anchor="w")
    genero_var = tk.StringVar()
    genero_dropdown = tk.OptionMenu(ventana_agregar, genero_var, "femenino", "masculino")
    genero_dropdown.config(font=('Arial', 12), relief="flat", width=15)
    genero_dropdown.pack(padx=20, pady=5)

    # Selección del tipo de producto
    tipo_label = tk.Label(ventana_agregar, text="Tipo de Producto (Fragancia, Facial):", bg="#f0f0f0", font=('Arial', 12))
    tipo_label.pack(padx=20, pady=5, anchor="w")
    tipo_var = tk.StringVar()
    tipo_dropdown = tk.OptionMenu(ventana_agregar, tipo_var, "fragancia", "facial")
    tipo_dropdown.config(font=('Arial', 12), relief="flat", width=15)
    tipo_dropdown.pack(padx=20, pady=5)

    # Ingreso del nombre del archivo y su extensión
    imagen_label = tk.Label(ventana_agregar, text="Nombre del archivo de la imagen (con la extensión):", bg="#f0f0f0", font=('Arial', 12))
    imagen_label.pack(padx=20, pady=5, anchor="w")

    imagen_ruta_label = tk.Label(ventana_agregar, text="Ruta predeterminada: img/prods/", bg="#f0f0f0", font=('Arial', 12))
    imagen_ruta_label.pack(padx=20, pady=5, anchor="w")

    imagen_entry = tk.Entry(ventana_agregar, font=('Arial', 12))
    imagen_entry.pack(padx=20, pady=5)

    # Función para guardar el nuevo producto
    def guardar_nuevo_producto():
        categoria = categoria_var.get().lower()
        if categoria not in ["esika", "lbel", "cyzone"]:
            messagebox.showerror("Error", "La categoría debe ser 'esika', 'lbel' o 'cyzone'.")
            return

        genero = genero_var.get().capitalize()
        tipo_de_producto = tipo_var.get().capitalize()

        nuevo_producto = {
            'nombre': nombre_entry.get(),
            'precio': int(precio_entry.get()),
            'precioReal': int(precio_real_entry.get()),
            'descripcion': descripcion_entry.get(),
            'categoria': categoria,
            'tipoDeProducto': tipo_de_producto,
            'genero': genero,
            'imagen': f"img/prods/{imagen_entry.get()}"
        }

        # Guardar el nuevo producto en el archivo
        try:
            with open(js_file_path, 'r') as file:
                data = file.read()

            start = data.find('[')
            end = data.rfind(']') + 1
            json_data = data[start:end]
            productos = json.loads(json_data)

            productos.append(nuevo_producto)

            with open(js_file_path, 'w') as file:
                data = data[:start] + json.dumps(productos, indent=4) + data[end:]
                file.write(data)

            messagebox.showinfo("Éxito", "Producto agregado correctamente")
            ventana_agregar.destroy()
            mostrar_productos()

        except Exception as e:
            messagebox.showerror("Error", f"No se pudo guardar la base de datos: {e}")

    # Botón para guardar el nuevo producto
    guardar_button = tk.Button(ventana_agregar, text="Agregar Producto", command=guardar_nuevo_producto, bg="#4CAF50", fg="white", font=('Arial', 12), relief="flat", padx=10, pady=5)
    guardar_button.pack(pady=20)

# Configuración de la ventana principal
root = tk.Tk()
root.title("Gestión de Productos")
root.geometry("1000x600")  # Tamaño predeterminado
root.state('zoomed')  # Maximizar ventana al inicio

# Lista de productos
lista_productos = tk.Listbox(root, width=50, height=20, font=('Arial', 12))
lista_productos.pack(padx=20, pady=20)

# Botón para mostrar información del producto seleccionado
info_button = tk.Button(root, text="Mostrar Información", command=mostrar_info_producto, font=('Arial', 12), relief="flat", bg="#007bff", fg="white", padx=10, pady=5)
info_button.pack(padx=20, pady=10)

# Botón para agregar un nuevo producto
agregar_button = tk.Button(root, text="Agregar Producto", command=agregar_producto, font=('Arial', 12), relief="flat", bg="#28a745", fg="white", padx=10, pady=5)
agregar_button.pack(padx=20, pady=10)

# Botón para editar un producto existente
editar_button = tk.Button(root, text="Editar Producto", command=editar_producto, font=('Arial', 12), relief="flat", bg="#ffc107", fg="white", padx=10, pady=5)
editar_button.pack(padx=20, pady=10)

# Etiqueta para mostrar la información del producto
info_label = tk.Label(root, text="", font=('Arial', 12), bg="#f0f0f0", anchor="w")
info_label.pack(padx=20, pady=10, anchor="w")

# Mostrar los productos en la lista
mostrar_productos()

root.mainloop()
