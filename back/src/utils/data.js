const products = [
    {
        id: 1,
        name: "Carry-On",
        description:  "Equipaje giratorio rígido para viajes de trabajo, escapadas de fin de semana o como equipaje de mano internacional.",
        price: 10,
        colors: ["rojo", "azul", "verde"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814364/imagenes%20henry/maleta_de_viaje_Henry_juye8n.png",
        category: "Equipaje",
        stock: 3 
      },
      {
        id: 2,
        name: "Remera",
        description:  "Remera Lisa Algodón Jersey Peinado Premium.",
        price: 5,
        colors: ["blanco", "gris", "amarillo","negro"],
        sizes: ["S", "M", "L","XL","XXL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682800364/imagenes%20henry/remera_manga_larga0_ynqelb.png",
        category: "Vestimenta",
        stock: 4 
      },
      {
        id: 3,
        name: "Buzo",
        description:  "Buzo Algodón  Premium..",
        price: 15,
        colors: ["negro","gris", "blanco", "amarillo"],
        sizes: ["S", "M", "L","XL","XXL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682800363/imagenes%20henry/buzo_blanco0_sjhbmz.png",
        category: "Vestimenta",
        stock: 3 
      },
      {
        id: 4,
        name: "Carry-On",
        description:  "Equipaje giratorio rígido para viajes de trabajo, escapadas de fin de semana o como equipaje de mano internacional.",
        price: 10,
        colors: ["negro", "blanco", "amarillo"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682800364/imagenes%20henry/maletadeviaje0_ha2i4z.png",
        category: "Equipaje",
        stock: 3 
      },
      {
        id: 5,
        name: "Gorra",
        description:  "Gorra lisa con estanpado de Henry.",
        price: 8,
        colors: ["blanco", "amarillo", "negro"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682800363/imagenes%20henry/gorra_blanca0_agodsi.png",
        category: "Vestimenta",
        stock: 3 
      },
      {
        id: 6,
        name: "Producto 6",
        description:  "Piluso liso con estanpado de Henry.",
        price: 5,
        colors: ["negro", "amarillo", "blanco"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682875784/imagenes%20henry/Piluso_negro_-_Henry_azfv2j.jpg",
         
      },
      {
        id: 7,
        name: "Producto 7",
        description:  "Campera lisa con estanpado de Henry.",
        price: 14,
        colors: ["negro", "blanco"],
        sizes: ["S", "M", "L","XL","XXL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682875803/imagenes%20henry/Campera_chorizera_negra_-_Henry_klgsdd.jpg",
         
      },
      {
        id: 8,
        name: "Producto 8",
        description:  "Pantalon largo liso con estanpado de Henry.",
        price: 10,
        colors: ["negro", "blanco", "amarillo"],
        sizes: ["S", "M", "L","XL","XXL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814588/imagenes%20henry/Pantalon_largo_blanco_-_Henry_nqlrdz.jpg",
         
      },
      {
        id: 9,
        name: "Producto 9",
        description:  "Pantalon corto liso con estanpado de Henry.",
        price: 10,
        colors: ["amarillo", "negro", "blanco"],
        sizes: ["S", "M", "L","XL","XXL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814588/imagenes%20henry/Pantalon_corto_negro_-_Henry_d3b0c9.jpg",
         
      },
      {
        id: 10,
        name: "Producto 10",
        description:  "Buzo negro estanpado de Henry.",
        price: 10,
        colors: ["negro", "blanco"],
        sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814587/imagenes%20henry/Buzo_negro_-_Henry_ruophm.jpg",
         
      },
      {
        id: 11,
        name: "Producto 11",
        description:  "Campera blanca mujer con estampado de Henry.",
        price: 5,
        colors: ["blanco", "negro"],
        sizes: ["S", "M", "L","XL","XXL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682800364/imagenes%20henry/buzo_mujer0_gefrb6.png",
         
      },
      {
        id: 12,
        name: "Producto 12",
        description:  "Guantes para el frio con estanpado de Henry.",
        price: 9,
        colors: ["negro", "blanco", "amarillo"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814588/imagenes%20henry/Guantes_negros_-_Henry_spcmie.jpg",
         
      },
      {
        id: 13,
        name: "Producto 13",
        description:  "Malla lisa con un estanpado de Henry",
        price: 7,
        colors: ["blanco", "negro", "amarillo"],
        sizes: ["S", "M", "L","XL","XXL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682876905/imagenes%20henry/Malla_amarillo_-_Henry_gbjjhv.jpg",
         
      },
      {
        id: 14,
        name: "Producto 14",
        description:  "Gorrito para el frio liso con un estanpado de Henry.",
        price: 8,
        colors: ["negro", "blanco", "amarillo"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814588/imagenes%20henry/Gorrito_negro_-_Henry_c4hngd.jpg",
         
      },
      {
        id: 15,
        name: "Producto 15",
        description:  "Zapatillas urbanas con logo Henry unisex.",
        price: 23,
        colors: ["blanco", "negro"],
        sizes: ["N36", "N37", "N38","N42","N43"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814588/imagenes%20henry/Zapatillas_urbanas_negras_-_Henry_avfali.jpg",
         
      },
      {
        id: 16,
        name: "Producto 16",
        description:  "Bolso de gran espacio liso con estanpado Henry.",
        price: 20,
        colors: ["amarillo", "blanco"],
        sizes: ["S", "M", "L","XL"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814587/imagenes%20henry/Bolso_blanco_-_Henry_ra9eqt.jpg",
         
      },
      {
        id: 17,
        name: "Producto 17",
        description:  "Morral basico liso con el logo de Henry.",
        price: 10,
        colors: ["negro", "amarillo"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682877062/imagenes%20henry/Morral_negro_-_Henry_lr8iql.jpg",
         
      },
      {
        id: 18,
        name: "Producto 18",
        description:  "Gorra estilo tenis con el logo de Henry.",
        price: 7,
        colors: ["amarillo", "blanco", "negro"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814588/imagenes%20henry/Gorra_tenis_negra_-_Henry_vieopf.jpg",
         
      },
      {
        id: 19,
        name: "Producto 19",
        description:  "Cartuchera para utiles con el logo Henry.",
        price: 15,
        colors: ["negro", "azul", "amarillo"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682875724/imagenes%20henry/Cartuchera_azul_-_Henry_kfn5rr.jpg",
         
      },
      {
        id: 20,
        name: "Producto 20",
        description:  "Engrapadora con el logo de Henry.",
        price: 3,
        colors: ["amarillo", "azul", "negro"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814424/imagenes%20henry/Engrapador_azul_-_Henry_ql8fpq.jpg",
         
      },
      {
        id: 21,
        name: "Producto 21",
        description:  "Cesto para basura con el logo de Henry.",
        price: 5,
        colors: ["amarillo", "azul", "negro"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682877234/imagenes%20henry/Cesto_azul_-_Henry_cpmrrh.jpg",
         
      },
      {
        id: 22,
        name: "Producto 22",
        description:  "Termo de acero.",
        price: 20,
        colors: ["blanco", "negro"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814364/imagenes%20henry/Termo_blanco_Henry_kfldxr.png",
         
      },
      {
        id: 23,
        name: "Producto 23",
        description:  "Mate termico con el logo de Henry.",
        price: 11,
        colors: ["amarillo", "blanco"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682815666/imagenes%20henry/Mate_termico_-_Henry_gchq0a.jpg",
         
      },
      {
        id: 24,
        name: "Producto 24",
        description:  "Porta celular con el logo de Henry.",
        price: 5,
        colors: ["negro", "blanco", "azul"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682815663/imagenes%20henry/Porta_celular_-_Henry_bperih.jpg",
         
      },
      {
        id: 25,
        name: "Producto 25",
        description:  "Bolso para notebook con alta proteccion.",
        price: 5,
        colors: ["negro", "azul", "blanco"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814487/imagenes%20henry/Bolso_Notebook_N_Henry_Blanco_txikb3.jpg",
         
      },
      {
        id: 26,
        name: "Producto 26",
        description:  "Mouse para computador de alta calidad con el logo Henry.",
        price: 10,
        colors: ["violeta", "blanco", "negro"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682800364/imagenes%20henry/mouse-inalambrico0_med6pw.png",
         
      },
      {
        id: 27,
        name: "Producto 27",
        description:  "Teclado para computador con el logo de Henry.",
        price: 15,
        colors: ["negro"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814488/imagenes%20henry/Teclado_A_y_N_Henry_Blanco_t8slql.jpg",
         
      },
      {
        id: 28,
        name: "Producto 28",
        description:  "Pendrive Henry con capacidad de 64/128 GB.",
        price: 15,
        colors: ["amarillo", "negro", "blanco"],
        sizes: ["S", "M"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682815360/imagenes%20henry/Pendrive_Am_Logo_w78wcq.jpg",
         
      },
      {
        id: 29,
        name: "Producto 29",
        description:  "Auriculares amarillos de alta calidad con el logo de Henry.",
        price: 13,
        colors: ["blanco", "negro", "amarillo"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814486/imagenes%20henry/Auri_A_Logo_gvkymz.jpg",
         
      },
      {
        id: 30,
        name: "Producto 30",
        description:  "Auriculares negros de alta gama Henry.",
        price: 14,
        colors: ["negro", "amarillo", "verde"],
        sizes: ["S", "M", "L"],
        image: "https://res.cloudinary.com/dyeknjnsi/image/upload/v1682814487/imagenes%20henry/Auriculares_Negros_keda2v.jpg",
         
      },
  ]

module.exports = {products}