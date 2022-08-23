const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts();
        },
        productsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.minPrice, args.maxPrice);
        }
    },
    Mutation: {
        addProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price);
        }
    }
}