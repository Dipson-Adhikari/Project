import Product from "../model/Product.js";
const getProducts = async (req, res) => {
    const products = await Product.find().populate("user", "fullname email -_id" );
    res.send(products);
};

const addProduct = async (req, res) => {
  const newProduct = 
  {
    name:'Sample Product',
    description:'This is a sample product',
    price:0,
    brand:'Sample Brand',
    category:'Sample Category',
    user: req.user._id,

  }
  const product = await Product.create(newProduct);
  res.send({message: "Product added successfully"});
};

const getProductByID = async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ error: "Product not found" });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const{name,description,price,brand,category,image} = req.body;
    const product = await Product.findById(id);
    if (!product) return res.status(404).send({ error: "Product not found" });
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.image = image || product.image;
    await product.save();
    res.send({ message: "Product updated successfully" });
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).send({ error: "Product not found" });
    res.send({ message: "Product deleted successfully" });
}

export {getProducts,addProduct,getProductByID,updateProduct,deleteProduct};