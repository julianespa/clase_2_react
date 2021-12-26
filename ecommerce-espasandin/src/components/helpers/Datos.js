const productos = [
    {id:1, name: "remera S", precio: 100, img:"https://http2.mlstatic.com/D_NQ_NP_695323-MLA45717147916_042021-W.jpg", categoria: "remeras", stock: 10},
    {id:2, name: "remera M", precio: 100, img:"https://http2.mlstatic.com/D_NQ_NP_695323-MLA45717147916_042021-W.jpg", categoria: "remeras", stock: 10},
    {id:3, name: "remera L", precio: 100, img:"https://http2.mlstatic.com/D_NQ_NP_695323-MLA45717147916_042021-W.jpg", categoria: "remeras", stock: 10},
    {id:4, name: "campera S", precio: 100, img:"https://www.newbalance.com.ar/media/catalog/product/c/a/campera-new-balance-hombre-essentials-brushed-hoodie-mj83513bk_nb_40_i.jpg", categoria: "camperas", stock: 10},
    {id:5, name: "campera M", precio: 100, img:"https://www.newbalance.com.ar/media/catalog/product/c/a/campera-new-balance-hombre-essentials-brushed-hoodie-mj83513bk_nb_40_i.jpg", categoria: "camperas", stock: 10},
    {id:6, name: "campera L", precio: 100, img:"https://www.newbalance.com.ar/media/catalog/product/c/a/campera-new-balance-hombre-essentials-brushed-hoodie-mj83513bk_nb_40_i.jpg", categoria: "camperas", stock: 10},
]

export const getFetch = new Promise((res, rej) => {
    setTimeout(() => {
        res(productos)    
    }, 2000);
})

