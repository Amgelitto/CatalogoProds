import tkinter as tk
from tkinter import ttk, messagebox
import json
import os

# Ruta al archivo JS de la base de datos
ruta_base_datos = r"C:\Users\Angel\OneDrive\Escritorio\CatalogoProds\js\baseDeDatosCosmeticos.js"

# Función para cargar la base de datos desde el archivo JS
def cargar_base_datos():
    if not os.path.exists(ruta_base_datos):
        messagebox.showerror("Error", f"No se encontró el archivo: {ruta_base_datos}")
        return []

    try:
        with open(ruta_base_datos, "r", encoding="utf-8") as archivo:
            contenido = archivo.read()
            contenido_json = contenido.split("const baseDeDatos =")[1].strip().strip(";")
            return json.loads(contenido_json)
    except Exception as e:
        messagebox.showerror("Error", f"Error al cargar la base de datos: {e}")
        return []

# Función para guardar la base de datos en el archivo JS
def guardar_base_datos():
    try:
        with open(ruta_base_datos, "w", encoding="utf-8") as archivo:
            contenido = f"const baseDeDatos = {json.dumps(baseDeDatos, indent=4, ensure_ascii=False)};"
            archivo.write(contenido)
    except Exception as e:
        messagebox.showerror("Error", f"Error al guardar la base de datos: {e}")

# Base de datos inicial
baseDeDatos = cargar_base_datos()

# Función para refrescar la lista
def refrescar_lista():
    lista_productos.delete(0, tk.END)
    for i, producto in enumerate(baseDeDatos):
        lista_productos.insert(tk.END, f"{i + 1}. {producto['nombre']}")

# Función para mostrar detalles del producto seleccionado
def mostrar_detalles(event):
    seleccion = lista_productos.curselection()
    if seleccion:
        indice = seleccion[0]
        producto = baseDeDatos[indice]
        entry_nombre.delete(0, tk.END)
        entry_nombre.insert(0, producto["nombre"])
        entry_precio.delete(0, tk.END)
        entry_precio.insert(0, producto["precio"])
        entry_precio_real.delete(0, tk.END)
        entry_precio_real.insert(0, producto["precioReal"])
        text_descripcion.delete(1.0, tk.END)
        text_descripcion.insert(tk.END, producto["descripcion"])
        entry_imagen.delete(0, tk.END)
        entry_imagen.insert(0, producto["imagen"].replace("img/prods/", ""))
        combo_categoria.set(producto["categoria"])
        combo_tipo_producto.set(producto["tipoDeProducto"])
        entry_tipo.delete(0, tk.END)
        entry_tipo.insert(0, producto["tipo"])

# Función para modificar un producto
def modificar_producto():
    seleccion = lista_productos.curselection()
    if seleccion:
        indice = seleccion[0]
        baseDeDatos[indice] = {
            "nombre": entry_nombre.get(),
            "precio": float(entry_precio.get()),
            "precioReal": float(entry_precio_real.get()),
            "descripcion": text_descripcion.get(1.0, tk.END).strip(),
            "imagen": f"img/prods/{entry_imagen.get()}",
            "categoria": combo_categoria.get(),
            "tipoDeProducto": combo_tipo_producto.get(),
            "tipo": entry_tipo.get()
        }
        guardar_base_datos()
        refrescar_lista()

        # Limpiar los campos después de guardar
        entry_nombre.delete(0, tk.END)
        entry_precio.delete(0, tk.END)
        entry_precio_real.delete(0, tk.END)
        text_descripcion.delete(1.0, tk.END)
        entry_imagen.delete(0, tk.END)
        combo_categoria.set('')
        combo_tipo_producto.set('')
        entry_tipo.delete(0, tk.END)

        messagebox.showinfo("Éxito", "Producto modificado correctamente.")

# Función para añadir un nuevo producto
def añadir_producto():
    nuevo_producto = {
        "nombre": entry_nombre.get(),
        "precio": float(entry_precio.get()),
        "precioReal": float(entry_precio_real.get()),
        "descripcion": text_descripcion.get(1.0, tk.END).strip(),
        "imagen": f"img/prods/{entry_imagen.get()}",
        "categoria": combo_categoria.get(),
        "tipoDeProducto": combo_tipo_producto.get(),
        "tipo": entry_tipo.get()
    }
    baseDeDatos.append(nuevo_producto)
    guardar_base_datos()
    refrescar_lista()

    # Limpiar los campos después de guardar
    entry_nombre.delete(0, tk.END)
    entry_precio.delete(0, tk.END)
    entry_precio_real.delete(0, tk.END)
    text_descripcion.delete(1.0, tk.END)
    entry_imagen.delete(0, tk.END)
    combo_categoria.set('')
    combo_tipo_producto.set('')
    entry_tipo.delete(0, tk.END)

    messagebox.showinfo("Éxito", "Producto añadido correctamente.")

# Crear la ventana principal
root = tk.Tk()
root.title("Gestión de Productos")
root.geometry("900x600")
root.configure(bg="#f5f5f5")

# Estilo personalizado
style = ttk.Style()
style.theme_use("clam")
style.configure(
    "TLabel",
    background="#f5f5f5",
    font=("Arial", 10, "bold"),
    foreground="#333",
)
style.configure(
    "TButton",
    background="#4CAF50",
    foreground="white",
    font=("Arial", 10, "bold"),
    padding=6,
)
style.map("TButton", background=[("active", "#45a049")])

style.configure("TCombobox", padding=6, font=("Arial", 10))
style.configure("TEntry", font=("Arial", 10))

# Encabezado
header = tk.Label(root, text="Gestión de Productos Cosméticos", bg="#4CAF50", fg="white", font=("Arial", 16, "bold"))
header.pack(fill=tk.X, pady=5)

# Lista de productos
frame_lista = tk.Frame(root, bg="#f5f5f5")
frame_lista.pack(side=tk.LEFT, fill=tk.BOTH, padx=10, pady=10)

scroll_lista = tk.Scrollbar(frame_lista)
scroll_lista.pack(side=tk.RIGHT, fill=tk.Y)

lista_productos = tk.Listbox(frame_lista, yscrollcommand=scroll_lista.set, width=50, height=25, font=("Arial", 10))
lista_productos.pack(side=tk.LEFT, fill=tk.BOTH, padx=5, pady=5)
lista_productos.bind("<<ListboxSelect>>", mostrar_detalles)

scroll_lista.config(command=lista_productos.yview)

# Formulario de detalles
frame_formulario = tk.Frame(root, bg="#f5f5f5")
frame_formulario.pack(side=tk.RIGHT, fill=tk.BOTH, padx=10, pady=10)

# Campos del formulario
ttk.Label(frame_formulario, text="Nombre:").grid(row=0, column=0, sticky=tk.W, padx=5, pady=5)
entry_nombre = ttk.Entry(frame_formulario, width=40)
entry_nombre.grid(row=0, column=1, padx=5, pady=5)

ttk.Label(frame_formulario, text="Precio:").grid(row=1, column=0, sticky=tk.W, padx=5, pady=5)
entry_precio = ttk.Entry(frame_formulario, width=40)
entry_precio.grid(row=1, column=1, padx=5, pady=5)

ttk.Label(frame_formulario, text="Precio Real:").grid(row=2, column=0, sticky=tk.W, padx=5, pady=5)
entry_precio_real = ttk.Entry(frame_formulario, width=40)
entry_precio_real.grid(row=2, column=1, padx=5, pady=5)

ttk.Label(frame_formulario, text="Descripción:").grid(row=3, column=0, sticky=tk.NW, padx=5, pady=5)
text_descripcion = tk.Text(frame_formulario, width=30, height=5, font=("Arial", 10))
text_descripcion.grid(row=3, column=1, padx=5, pady=5)

ttk.Label(frame_formulario, text="Imagen:").grid(row=4, column=0, sticky=tk.W, padx=5, pady=5)
entry_imagen = ttk.Entry(frame_formulario, width=40)
entry_imagen.grid(row=4, column=1, padx=5, pady=5)

ttk.Label(frame_formulario, text="Categoría:").grid(row=5, column=0, sticky=tk.W, padx=5, pady=5)
combo_categoria = ttk.Combobox(frame_formulario, values=["esika", "lbel", "cyzone"], state="readonly", width=37)
combo_categoria.grid(row=5, column=1, padx=5, pady=5)

ttk.Label(frame_formulario, text="Tipo de Producto:").grid(row=6, column=0, sticky=tk.W, padx=5, pady=5)
combo_tipo_producto = ttk.Combobox(frame_formulario, values=["cuidado", "cosmetico"], state="readonly", width=37)
combo_tipo_producto.grid(row=6, column=1, padx=5, pady=5)

ttk.Label(frame_formulario, text="Tipo:").grid(row=7, column=0, sticky=tk.W, padx=5, pady=5)
entry_tipo = ttk.Entry(frame_formulario, width=40)
entry_tipo.grid(row=7, column=1, padx=5, pady=5)

# Botones
btn_modificar = ttk.Button(frame_formulario, text="Modificar Producto", command=modificar_producto)
btn_modificar.grid(row=8, column=0, padx=5, pady=10, sticky=tk.EW)

btn_añadir = ttk.Button(frame_formulario, text="Añadir Producto", command=añadir_producto)
btn_añadir.grid(row=8, column=1, padx=5, pady=10, sticky=tk.EW)

# Inicializar la lista
refrescar_lista()

# Iniciar la aplicación
root.mainloop()
