import products from "../model/products.js";
const getProducts = (req,res)=>
{
    res.send(products);
};

const addProduct = (req,res)=>
{
    const data = req.body
    products.push(data);
    res.send({message: "product added"})
};

const getProductByID = (req, res) => {
    const id = req.params.id;
    //console.log(id);
    const product = products.find((product) => product.id == id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ error: "product not found" });
    }
};
export {getProducts,addProduct,getProductByID};