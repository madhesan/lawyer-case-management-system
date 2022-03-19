const router = require("express").Router();
const { User, validate } = require("../models/user");
const Client = require('../models/client');
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.detail[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Use special character '@'" });
	}
});


router.post('/add', async (req,res) => {

    const savepost=new Client(req.body);
    console.log(savepost);
    try{
        await savepost.save();
        res.send("inserted data");

		
     }catch(err){ 
         console.log(err)
     }
    });


	router.get('/read/:id',async (req,res) => {
		
		Client.find({lawyer:req.params.id},(err,data) => {
			
			if(err){
	
				res.send(err)
			}
			res.send(data);
			// console.log("aaa",data);
		})
	});
	
	router.get('/read1',async (req,res) => {
		
		User.find({},(err,data) => {
			
			if(err){
	
				res.send(err)
			}
			res.send(data);
			// console.log("aaa",data);
		})
	});


module.exports = router;