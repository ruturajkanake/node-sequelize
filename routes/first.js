const db = require('../models/index');
const Order = require('../models/order')(db.sequelize, db.Sequelize);
const User = require("../models/user")(db.sequelize, db.Sequelize);
const express = require('express');
const router = new express.Router();

const { Op } = require("sequelize");

router.post('/create', async(req, res) => {
    try {
        const user1 = await User.create({
            name: "Jess",
            age: 18
        });
        const user2 = await User.create({
            name: 'Mike',
            age: 21
        })
        const order = await Order.create({
            orderName: 'First',
            userId: user1.id
        });
        res.status(200).send({user1, user2, order});
    }
    catch(err) {
        res.status(500).send({"ERROR": err});
    }
})

router.get('/get', async(req, res) => {
    try{
        const order = await Order.findOne({
            where: {
                id: 1
            },
            include: [User]
        })
        res.status(200).send(order);
    } catch(err) {
        res.status(200).send({"ERROR": err})
    }
})

module.exports = router;