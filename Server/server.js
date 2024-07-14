// npm init  -y => To initialize the Project
// nppm i express => To install the express framework
// npm i -g nodemon => To install the nodemon Package
//Extensions SaveTyping and SaveCoding
// cntrl c To stop the Server , and to avoid Ctrnl c we downloaded nodemon package 

const express=require('express');
const router = express.Router();
require ('./db/connection');
const app=express();

const cors = require('cors');
app.use(cors());
const FoodLog = require('./models/foodLog');
const DailyFoodLog = require('./models/dailyFoodLog')
app.use(express.json());
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());


app.post('/about',(req,res)=>{
  res.send("hello");
})





app.post('/dailyfoodlog', async (req, res) => {
  try {
    const { meal, ...logFoodItems } = req.body;

    const existingFoodLog = await DailyFoodLog.findOne({ meal });
    if (!existingFoodLog) {
      const newFoodLog = new DailyFoodLog({ meal, logFoodItems });
      await newFoodLog.save();
      
      res.status(201).json({ message: 'Food Logged Successfully' });
    } else {
      existingFoodLog.logFoodItems = logFoodItems;
      await existingFoodLog.save();
      res.status(201).json({ message: 'Food log Updated Successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error Logging Food' });
  }
});

  // app.post('/foodlog',async (req,res)=>{
  //   try{

  //     // const {calories,carbs,fat,id,image,imageType,protein,title}  = req.body;
  //     // const dailyFoodLogItem = new DailyFoodLog(req.body );
  //     // await dailyFoodLogItem.save();
  //     res.status(201).json({ message: 'Yesterdays Data Saved Successfully' });
  //   }catch (err) {
  //     console.error(err);
  //     res.status(500).json({ message: 'Error creating food log item' });
  //   }
  // })




// app.get('/foodLog', (req, res) => {
    // try {
        // res.send(req.body)

 
        // res.send(req.body)
   
    //   const foodLog = new FoodLog(req.body);
  
     
    //   await foodLog.save();
    //   console.log("Data Saved Successfully");
  

    //   res.status(201).send({ message: 'FoodLog created successfully' });
    // } catch (err) {
        
    //   res.status(500).send({ message: 'Error creating ' });
    // }
//   });





// const bodyparser=require('body-parser');
// require ('./db/connection');
//  const user=require('./userSchema/userschema')
//  app.use(bodyparser.json())

//  const bcrypt = require('bcrypt');


// app.get('/home',(req,resp)=>{
//     resp.send("This is Home Page");

// });


// app.get('/about',(req,resp)=>{
//     resp.send("This is About Page");
// });


// app.get('/contact',(req,resp)=>{
//     resp.send("This is Contact Page");
// });






// app.use(bodyparser.json());

// // app.post('/data',(req,res)=>{
// //     console.log(req.body);

// //     if(req.body.password==req.body.cpassword)
// //     {
// //     console.log('Done');
    
// //     }

// //     if(req.body.name=="Pratik" && req.body.password=="138746")
// //     {
// //         console.log('Valid User');
// //         res.send("Valid User");

// //     }
// //     else{
// //         console.log('Invalid User');
// //         res.send("InValid User");
// //     }

// //     var n1=Number(req.body.a);
// //     var n2=Number(req.body.b);
// //     var result=n1+n1;


    
// //     console.log('The result is :'+result);
// //     res.send("The Result is :" + result);


// // });

// app.post('/register',async(req,res)=>{

//     try{
//     const {name,email,password,cpassword}=req.body
//     const hashedpassword = await bcrypt.hash(password , Infinity);
//     console.log("hashed password = "+hashedpassword);

//     console.log(name);
//     console.log(email);
//     console.log(password);
//     console.log(cpassword);
    
//     const template=new user({
//         name,
//         email,
//         password,
//         cpassword
//     })

//     if(!name || !email|| !password|| !cpassword)
//     {
//         res.status(400).json("message : please fill all the details");

//     }
//     else if(password!=cpassword){
//         res.statusCode(401).json("password and confirmPassword is not Matching");
//         res.send("password and confirmPassword is not Matching");
        
        
//     }
//     else{
//         console.log("Details are filled Perfectly");
//         res.send("Details are filled Perfectly");

//         const userexit=user.findOne(email);
//         console.log(userexit);
//     }
//     template.save();

//     }
//     catch(error){
//         console.log("error in saving data in the databases.");
//     }
// })





// app.get('*',(req,resp)=>{
//     resp.send("Error page");    


// });


// app.post('/signup' , async(req,res)=>{
//     try{
//         const {email,password}=req.body
//         console.log(email);
//         console.log(password);

//         //const userpassword = await user.findOne((email))
//         const userEmail =  await user.findOne({email});
//         console.log(userEmail);
//         if(userEmail){
//             const validPass= await bcrypt.compare(password,userEmail.password);
//             res.send({message: "Welcome to our website"});
//         }
//         else{
//             res.send({message : "user does not exist"})
//         }

//         // const template=new user({
//         //     email,
//         //     password
//         // })
//         // if (userpassword && userEmail){
//         //     res.send({message : "you are signed in !"})
//         // }
//         // else{
//         //     res.send({message : "user does not exist"})
//         // }

//     }
//     catch(error){
//         console.log(error);
//     }
// })


app.listen(3001,()=>{
    console.log('My server is Running');

});