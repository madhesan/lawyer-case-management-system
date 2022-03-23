const router = require("express").Router();
const { User, validate } = require("../models/user");
const Client = require('../models/client');
const bcrypt = require("bcrypt");
const Appointment = require("../models/appointment");
const cases = require("../models/cases");

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

//client
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
//appointment
	router.post('/addappoint', async (req,res) => {
		const savepost=new Appointment(req.body);
		console.log(savepost);
		try{
			await savepost.save();
			res.send("inserted data");
		 }catch(err){ 
			 console.log(err)
		 }
		});

router.get('/readappoint/:id',async (req,res) => {
		
			Appointment.find({lawyer:req.params.id},(err,data) => {
				
				if(err){
		
					res.send(err)
				}
				res.send(data);
				// console.log("aaa",data);
			})
		});
	
//case dropdown

	router.get('/read/:id',async (req,res) => {
		
		Client.find({lawyer:req.params.id},(err,data) => {
			
			if(err){
	
				res.send(err)
			}
			res.send(data);
			// console.log("aaa",data);
		})
	});

//addcase
router.post('/addcase', async (req,res) => {

    const savepost=new cases(req.body);
    console.log(savepost);
    try{
        await savepost.save();
        res.send("inserted data");
     }catch(err){ 
         console.log(err)
     }
    });

	router.get('/client/:id', async (req, res) => {
		Client.find({lawyer:req.params.id}, (err,data) =>{
			if (err) {
				console.log(err)
			}
			// Pass the DB result to the template
			res.send(data)
		});
	});
	



module.exports = router;