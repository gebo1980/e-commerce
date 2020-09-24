const FAKE_DELAY = 2000;
const PRODUCTOS = [];

export const addProduct = (newProduct) => new Promise((resolve, reject) => {
  setTimeout(() => {
      newProduct.id = PRODUCTOS.length + 1;
      PRODUCTOS.push(newProduct);
      return resolve({ok:1});
  }, FAKE_DELAY);
});

export const getProducts = () => new Promise((resolve, reject) => {
    loadProducts().then(data => {
        data.results.forEach(element => {
            PRODUCTOS.push({id: element.id,
                           name: element.name,
                           thumbnail: element.image});   
        });
        return resolve(PRODUCTOS);
    })
});

const loadProducts = async () => {
    try {
        const resp = await fetch('https://rickandmortyapi.com/api/character/');
        return resp.json();

    } catch (error) {
        throw error;
    }
}

const getNombre = async () => {
    try {
        const resp = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1');
        return resp.json();
    } catch (error) {
        throw error;
    }
}

export const getProductDetail = ({idProduct}) => new Promise((resolve, reject) => {
    const producto = PRODUCTOS.find((el) => parseInt(el.id) === parseInt(idProduct));

    if (!producto) return reject({message:"No se ha encontrado del producto."});

    if (producto.description) return resolve(producto);

    return getNombre().then(nombre => {
        producto.description = nombre.join();
        return resolve(producto);
    }).catch(console.error);
});

