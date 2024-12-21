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
        "nombrecolor1": "Sol",
        "nombrecolor2": "Doradas",
        "nombrecolor3": "Nude",
        "nombrecolor4": "Coral",
        "color1": "#e4b5a3",
        "color2": "#c37d5a",
        "color3": "#e3a051",
        "color4": "#dd817c",
        "colores": 4
    },
    {
        "nombre": "Labial COLORFIX 24H",
        "precio": 0.0,
        "precioReal": 40000.0,
        "descripcion": "24 horas de color y suavidad, 100% mate ¡sin retoques! Su deliciosa sensación y textura cremosa te dan comodidad todo el día. ¡Deslumbra con su acabado mate irresistible!",
        "imagen1": "img/prods/cf24CoralEncanto.webp",
        "imagen2": "img/prods/cf24CoralExitoso.webp",
        "imagen3": "img/prods/cf24PimientaCaliente.webp",
        "categoria": "esika",
        "tipoDeProducto": "cosmetico",
        "tipo": "labial",
        "eleccion": true,
        "nombrecolor1": "Coral Encanto",
        "nombrecolor2": "Coral Exitoso",
        "nombrecolor3": "Pimienta Caliente",
        "color1": "#cd4c63",
        "color2": "#b54e51",
        "color3": "#922926",
        "colores": 3
    },
    {
        "nombre": "Labial COLORFIX Liquid Tattoo Mate",
        "precio": 0.0,
        "precioReal": 54000.0,
        "descripcion": "Labial COLORFIX Liquid Tattoo de larga duración. 24H 100% mate ultraligero, no transfer** y con aceite de Argán. Acabado: Mate.",
        "imagen1": "img/prods/liquidTattooNudeVersatil.webp",
        "categoria": "esika",
        "tipoDeProducto": "cosmetico",
        "tipo": "labial",
        "eleccion": true,
        "nombrecolor1": "Nude Versátil",
        "color1": "#8d3c41",
        "colores": 1
    },
    {
        "nombre": "Labial COLORFIX Duo Tattoo",
        "precio": 0.0,
        "precioReal": 54000.0,
        "descripcion": "Labial COLORFIX Duo Tattoo. 36H Labial efecto tatuaje. No transfer 100% hidratación.",
        "imagen1": "img/prods/duoTattoPimientaCaliente.webp",
        "imagen2": "img/prods/duoTattoRojoSensacion.webp",
        "categoria": "esika",
        "tipoDeProducto": "cosmetico",
        "tipo": "labial",
        "eleccion": true,
        "nombrecolor1": "Pimienta Caliente",
        "nombrecolor2": "Rojo Sensación",
        "color1": "#810105",
        "color2": "#96000e",
        "colores": 2
    },
    {
        "nombre": "Máscara de Pestañas Max Volume Lash Studio Look",
        "precio": 0.0,
        "precioReal": 42000.0,
        "descripcion": "¡Volumen IMPACTANTE para una mirada IMPONENTE todo el día! Tus pestañas más abundantes que nunca. Expande tus pestañas e intensifica su color gracias a su fórmula ligera con tecnología voluminizadora.\nColor Negro",
        "imagen": "img/prods/slMaxVolumeLash.webp",
        "categoria": "cyzone",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas"
    },
    {
        "nombre": "Máscara Mega Full Volume",
        "precio": 0.0,
        "precioReal": 46000.0,
        "descripcion": "Máscara de pestañas Mega Full Volume. Volumen extremo y sin grumos. Pestañas que no pesan, ¡mirada que impacta! Máscara con efecto volumen extremo a prueba de agua, con sensación ligera y sin grumos.",
        "imagen": "img/prods/megaFullVolume.webp",
        "categoria": "esika",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas"
    },
    {
        "nombre": "Máscara de pestañas Mega Full Curve",
        "precio": 0.0,
        "precioReal": 46000.0,
        "descripcion": "Máscara de pestañas Mega Full Curve. Brinda rizado extremo todo el día y pestañas elevadas desde la primera pasada. A prueba de agua, sin grumos y sin rizador. Color: negro.",
        "imagen": "img/prods/megaFullCurve.webp",
        "categoria": "esika",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas"
    },
    {
        "nombre": "Máscara de Pestañas Magnetic Lash Mystic Star Studio Look",
        "precio": 0.0,
        "precioReal": 42000.0,
        "descripcion": "¡Máscara de pestañas Magnetic Lash de Studio Look te da una mirada con poder MAGNÉTICO! Su tecnología revolucionaria Smart Magnet con esferas magnéticas(*) te brinda mirada magnética: 7 veces más largo, 6 veces mayor volumen de pestañas y 5 más rizadas ¡Duración hasta por 24 horas!",
        "imagen": "img/prods/magneticLash.webp",
        "categoria": "cyzone",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas"
    },
    {
        "nombre": "Mega Multi Benefit Máscara de Pestañas",
        "precio": 0.0,
        "precioReal": 46000.0,
        "descripcion": "Máscara de pestañas a prueba de agua multibeneficios. 5 BENEFICOS 1 MÁSCARA +150% más largo, más volumen, más rizado, más definición, más fortalecimiento. Tono: Negro.",
        "imagen": "img/prods/multiMegaBenefit.webp",
        "categoria": "esika",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas"
    },
    {
        "nombre": "Ice Cream Gloss CyPlay",
        "precio": 0.0,
        "precioReal": 32000.0,
        "descripcion": "Disfruta de una experiencia sensorial única con un gloss inspirado en el sabor de tus helados favoritos, que mantiene tus labios frescos e hidratados durante todo el día.",
        "imagen1": "img/prods/iceCreamWatermelon.webp",
        "categoria": "cyzone",
        "tipoDeProducto": "cosmetico",
        "tipo": "labial",
        "eleccion": true,
        "nombrecolor1": "Watermelon",
        "color1": "#b61d3c",
        "colores": 1
    },
    {
        "nombre": "Creamy Lip Balm CyPlay",
        "precio": 0.0,
        "precioReal": 32000.0,
        "descripcion": "Disfruta de unos labios humectados y protegidos con el bálsamo Creamy Lip Balm de CyPlay. Con FPS 12 e ingredientes naturales, es tu aliado perfecto para lucir una sonrisa radiante, saludable e hidratada.",
        "imagen1": "img/prods/creamyLipBalm.webp",
        "categoria": "cyzone",
        "tipoDeProducto": "cosmetico",
        "tipo": "balsamo",
        "eleccion": true,
        "nombrecolor1": "Fuchsia Creamy",
        "color1": "#a94675",
        "colores": 1
    },
    {
        "nombre": "Labial Mate Studio Look",
        "precio": 0.0,
        "precioReal": 36000.0,
        "descripcion": "¡Tu labial mate favorito de Studio Look ahora con HIDRATACIÓN hasta por 24 horas! Un match perfecto para combinar todos tus looks.",
        "imagen1": "img/prods/mateStudioSummerPeach.webp",
        "imagen2": "img/prods/mateStudioDeepRed.webp",
        "imagen3": "img/prods/mateStudioRedStar.webp",
        "imagen4": "img/prods/mateStudioBerryPop.webp",
        "categoria": "cyzone",
        "tipoDeProducto": "cosmetico",
        "tipo": "labial",
        "eleccion": true,
        "nombrecolor1": "Summer Peach",
        "nombrecolor2": "Deep Red",
        "nombrecolor3": "Red Star",
        "nombrecolor4": "Berry Pop",
        "color1": "#d2695f",
        "color2": "#b10438",
        "color3": "#992531",
        "color4": "#a600b5",
        "colores": 4
    },
    {
        "nombre": "Liner Illimité Delineador Líquido",
        "precio": 0.0,
        "precioReal": 60000.0,
        "descripcion": "Es un delineador líquido de larga duración Y color intenso",
        "imagen1": "img/prods/linerLbelNoir.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas",
        "eleccion": true,
        "nombrecolor1": "Noir",
        "color1": "#000000",
        "colores": 1
    },
    {
        "nombre": "Rouge L'Intense Labial Líquido",
        "precio": 0.0,
        "precioReal": 58000.0,
        "descripcion": "Labial líquido para impactar con tus labios con un intenso acabado mate aterciopleado.",
        "imagen1": "img/prods/rougeLintenseNudeCharme.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cosmetico",
        "tipo": "labial",
        "eleccion": true,
        "nombrecolor1": "Nude Charme",
        "color1": "#a7545b",
        "colores": 1
    },
    {
        "nombre": "Máscara Hypervolume",
        "precio": 0.0,
        "precioReal": 63500.0,
        "descripcion": "Es una máscara que, además de brindar más grosor y volumen gradual capa tras capa, contiene colágeno y omega plus que cuidan tus pestañas. Tono: Negro",
        "imagen": "img/prods/MascaraHypervolume.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas"
    },
    {
        "nombre": "Máscara de Pestañas Supreme Volume",
        "precio": 0.0,
        "precioReal": 58000.0,
        "descripcion": "Atrévete a usar nuestra máscara Supreme Volume, te brinda 18 veces más VOLUMEN INTENSO hasta por 36 horas y engrosamiento de pestañas.",
        "imagen": "img/prods/supremeVolume.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas"
    },
    {
        "nombre": "Delineador Líquido Punta Plumón Eye PRO",
        "precio": 0.0,
        "precioReal": 40000.0,
        "descripcion": "Delineador de ojos líquido punta plumón Eye PRO #1 en ventas de ésika. Delineado perfecto, fija el color intenso a tu mirada. Delineadores a prueba de agua, con alta intensidad de color en una sola pasada para un maquillaje de ojos intenso y audaz.",
        "imagen1": "img/prods/eyeProNegro.webp",
        "categoria": "lbel",
        "tipoDeProducto": "cosmetico",
        "tipo": "cejas",
        "eleccion": true,
        "nombrecolor1": "Negro Extremo",
        "color1": "#000000",
        "colores": 1
    }
];