const express = require("express");

const router = express.Router();


router.post("/", (req, res, next) => {
    res.send({
        msg: "Product Created successfully",
        status: true
    });
});

router.get("/getProduct", (req, res, next) => {
    res.send({
        product : {
            name_of_product: "IPAD",
            model: "IPAD 23434ml",
            image: "https/image",
            address: "no , Ajika Street"
        }
    });
});



module.exports = router