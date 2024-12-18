const baseDeDatos = [
    {
        "nombre": "Loción Desmaquillante Bifásica",
        "precio": 0.0,
        "precioReal": 60000.0,
        "descripcion": "Es una loción desmaquillante bifásica con efecto détox y potente activo antioxidante que detoxifica la piel que remueve el maquillaje a prueba de agua y de larga duración. Este producto es como un aceite limpiador facial, pero sin dejar residuos grasos.",
        "imagen": "img/prods/desmaquilladorBifasicoLbel.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "limpieza"
    },
    {
        "nombre": "Essential Agua Micelar Efecto Antiedad",
        "precio": 0.0,
        "precioReal": 60000.0,
        "descripcion": "El Agua Micelar Efecto Antiedad de la Línea Essential tiene una poderosa fórmula con ácido hialurónico que limpia profundamente la piel y remueve todo de manera amable y eficaz. Además, este limpiador facial y desmaquillante previene líneas de expresión.",
        "imagen": "img/prods/aguaMiscelar.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "limpieza"
    },
    {
        "nombre": "\n\n\n\nSerum de Acido Hialurónico Hidratante y Antiarrugas",
        "precio": 0.0,
        "precioReal": 130000.0,
        "descripcion": "El serum con ácido hialurónico, reduce líneas de expresión, le devuelve la hidratación a la piel y rellena arrugas con 3% hyaluronic complex\n ayudando a rejuvenecer y regenerar la piel.",
        "imagen": "img/prods/serumAntiArrugas15HC.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "tratamiento"
    },
    {
        "nombre": "Gel Hidratante Facial con Ácido Hialurónico",
        "precio": 0.0,
        "precioReal": 120000.0,
        "descripcion": "El gel hidratante facial con ácido hialurónico penetra profundamente en la piel, asegurando una hidratación duradera y mejorando la elasticidad.",
        "imagen": "img/prods/gelHidratante.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "hidrata"
    },
    {
        "nombre": "Bio Resist Espuma de Limpieza Facial",
        "precio": 0.0,
        "precioReal": 122000.0,
        "descripcion": "La exquisita espuma limpiadora facial limpia tu piel sin agredirla y respeta el PH de tu piel, dejándola suave y fresca.",
        "imagen": "img/prods/bioFacial.jpg",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "limpieza"
    },
    {
        "nombre": "Spécialiste Pro-Adapt Hidratante Efecto Cooling",
        "precio": 0.0,
        "precioReal": 86000.0,
        "descripcion": "Es un hidratante efecto cooling para la piel en la menopausia que te dejará la piel más luminosa y radiante al instante. Es compatible con el maquillaje y se puede reaplicar en cualquier momento del día según tu necesidad.",
        "imagen": "img/prods/hidratanteMorado.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "tratamiento"
    },
    {
        "nombre": "\n\n\nLigne Experte Elixir",
        "precio": 0.0,
        "precioReal": 78000.0,
        "descripcion": "Poderoso tratamiento capilar multibeneficios en óleo para todo tipo de cabello que repara hasta 6 meses de daño desde la primera aplicación. La combinación de los 10 óleos de Elixir de Luxe fortalecen el cabello con vitaminas y minerales, devolviéndole vitalidad.",
        "imagen": "img/prods/experteCabello.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cabello",
        "tipo": "oleoC"
    },
    {
        "nombre": "Suero Facial Efecto Relleno de la Apariencia de Arrugas",
        "precio": 0.0,
        "precioReal": 130000.0,
        "descripcion": "Es un suero facial con alta concentración de ácido hialurónico que brinda un efecto relleno de la apariencia de arrugas y una reducción dramática de ellas.",
        "imagen": "img/prods/serum3hc.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "tratamiento"
    },
    {
        "nombre": "\n\n\n\n\nSerum Anti imperfecciones para piel grasa Spécialiste Antioleosidad",
        "precio": 0.0,
        "precioReal": 136000.0,
        "descripcion": "Spécialiste Suero Antioleosidad es un serum facial para piel grasa o mixta, diseñado especialmente para reducir eficazmente el brillo, minimizar los poros abiertos y las imperfecciones, este serum facial garantiza una piel 100% libre de brillo y aborda las principales problemáticas de la piel grasa.",
        "imagen": "img/prods/21AHAserum.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "tratamiento"
    },
    {
        "nombre": "Specialisté Crema Facial Matificante Anti-Oleosidad",
        "precio": 0.0,
        "precioReal": 146000.0,
        "descripcion": "Nuestra Crema Facial Specialisté te ofrece 24H de piel matificada** e hidratada al reducir la apariencia de los poros hasta en un 42%*, logrando una piel cada vez más libre de poros",
        "imagen": "img/prods/concentradoPoros.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "tratamiento"
    },
    {
        "nombre": "Serum con Niacinamida para Piel Sensible y Reparación Concentré",
        "precio": 0.0,
        "precioReal": 136000.0,
        "descripcion": "Es un suero hidratante facial con efecto calmante, que contiene 10% Sensitive Complex ideal para la piel sensible o delicada que se enroje fácilmente. 1er. Suero Especializado para Piel Sensible.",
        "imagen": "img/prods/10sensitive.png",
        "categoria": "lbel",
        "tipoDeProducto": "cuidado",
        "tipo": "tratamiento"
    },
    {
        "nombre": "Estuche Perfeccionador de Cejas y Ojos",
        "precio": 0.0,
        "precioReal": 100000.0,
        "descripcion": "Es un kit de cejas perfectas y maquillaje de ojos profesional que enmarca y define las cejas y los ojos para una mirada impactante. Idea para todo tipo de cejas.",
        "imagen": "img/prods/effetParfait.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas"
    },
    {
        "nombre": "Perlas Bronze PRO\n\n",
        "precio": 0.0,
        "precioReal": 76000.0,
        "descripcion": "Perlas Bronze PRO #1 en ventas de polvos ésika. Acabados satinados y mates, para un look bronceado con color natural y luminosidad.",
        "imagen1": "img/prods/perlasSol.webp",
        "imagen2": "img/prods/perlasDoradas.webp",
        "imagen3": "img/prods/perlasNude.webp",
        "imagen4": "img/prods/perlasCoral.webp",
        "categoria": "esika",
        "tipoDeProducto": "cosmetico",
        "tipo": "perlas",
        "eleccion": true,
        "nombrecolor1":"Sol",
        "nombrecolor2":"Doradas",
        "nombrecolor3":"Nude",
        "nombrecolor4":"Coral",
        "color1": "#e4b5a3",
        "color2": "#c37d5a",
        "color3": "#e3a051",
        "color4": "#dd817c",
        "colores": 4
    }
];