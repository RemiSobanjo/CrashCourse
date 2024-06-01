const usersRoute = require("../routes/users");
const productRoute = require("../routes/product");


module.exports = (app) => {
   
    //set cors
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
        );

        if(req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, GET, PATCH, DELETE");
            return res.status(200).json({});
        }

        next();
    });
    
    app.use("/users", usersRoute);
    app.use("/products", productRoute);
};