// npm init  -y => To initialize the Project
// nppm i express => To install the express framework
// npm i -g nodemon => To install the nodemon Package
//Extensions SaveTyping and SaveCoding
// cntrl c To stop the Server , and to avoid Ctrnl c we downloaded nodemon package 
// import { auth0 } from './auth0';
// const  auth0  = require('./auth0');
const express=require('express');
const router = express.Router();
require ('./db/connection');
const app=express();
const bcrypt = require('bcryptjs');

const cors = require('cors');
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5000', // allow requests from this origin
  credentials: true, // allow credentials (e.g. cookies) to be sent
}));
app.use(express.json());
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// ===============================================================================================================================


const FoodLog = require('./models/foodLog');
const DailyFoodLog = require('./models/dailyFoodLog')
const Users = require('./models/users');
const UsersInfo = require('./models/usersInfo')
// ===============================================================================================================================



app.post('/about',(req,res)=>{
  res.send("hello");
})



// ===============================================================================================================================


app.post('/dailyfoodlog', async (req, res) => {
  try 
  {
    const { meal, ...logFoodItems } = req.body;

    const existingFoodLog = await DailyFoodLog.findOne({ meal });
    // console.log(logFoodItems,existingFoodLog)
    if (!existingFoodLog) {
      const newFoodLog = new DailyFoodLog({ meal, ...logFoodItems });
      await newFoodLog.save();
      
      res.status(201).json({ message: 'Food Logged Successfully' });
    } else {
      // existingFoodLog.logFoodItems = logFoodItems;
      Object.assign(existingFoodLog, logFoodItems);
      // console.log(existingFoodLog);
      await existingFoodLog.save();
      res.status(201).json({ message: 'Food log Updated Successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error Logging Food' });
  }
});



// ===============================================================================================================================


app.post('/newuseraccount', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  // const usersData = req.body;

  // Validate user input
  // if (!name ||!email ||!password ||!confirmPassword) {
  //   return res.status(400).send({ message: 'Please fill in all fields' });
  // }

  // if (password!== confirmPassword) {
  //   return res.status(400).send({ message: 'Passwords do not match' });
  // }

  // Check if user already exists
  const existingUser = await Users.findOne({ email });
  if (existingUser) {
    return res.status(400).send({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  // const user = new Users(usersData);
  const user = new Users({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  });

  try {
    // Save user to database
    await user.save();

    // Generate JWT token
    // const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    //   expiresIn: '1h',
    // });

    // Send response with token and user data
    res.status(201).send({
      message: 'Account created successfully',
      // token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error creating user' });
  }
});


// ===============================================================================================================================


app.post('/userlogin', async (req, res) => 
{


  const { email, password } = req.body;



  // Validate user input



  if (!email || !password) 
  {
   return res.status(400).send({ message: 'Please fill in all fields' });
  }

  // Check if user exists                                                   
  const user = await Users.findOne({ email });                     
  if (!user) 
  {
    return res.status(400).send({ message: 'User not found' });
  }


  // Check if password is correct
  // const isPasswordValid = await bcrypt.compare(password, user.password);
  // if (!isPasswordValid) {
  //   res.status(400).send({ message: 'Invalid password' });
  // }

  // Generate JWT token
  // const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
  //   expiresIn: '1h',
  // });

  // Send response with token and user data
  res.status(201).send({                                          
    message: 'Login successful',
    // token,
    // user: {
    //   // id: user._id,
    //   name: user.name,
    //   email: user.email,
    // },
  });

// catch(err){
//   console.error(err);
//   res.status(500).send({ message: 'Error creating user' });
// }


});

// ===============================================================================================================================



// const auth0 = require('auth0');

// const auth0Config = {
//   domain: 'your-auth0-domain.com',
//   clientId: 'your-client-id',
//   clientSecret: 'your-client-secret',
// };

// const auth0Api = new auth0.ManagementClient({
//   domain: auth0Config.domain,
//   clientId: auth0Config.clientId,
//   clientSecret: auth0Config.clientSecret,
// });

// app.get('/userdata', async (req, res) => {
//   const accessToken = req.headers.authorization;
//   if (!accessToken) {
//     return res.status(401).send({ error: 'Unauthorized' });
//   }

//   try {
//     const tokenInfo = await auth0Api.getTokenInfo(accessToken);
//     const userId = tokenInfo.sub;

//     const userData = await auth0Api.getUser({ id: userId });
//     res.json(userData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Failed to fetch user data' });
//   }
// });
// ===============================================================================================================================

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



// ===============================================================================================================================

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


// ===============================================================================================================================


app.post('/checkusersinfo', async (req, res) => {
  const { userId } = req.body;
  console.log(userId)

  try {
    const isUser = await UsersInfo.findOne({ userId });
    if (isUser) {
      console.log(isUser.users_goal)
      res.status(200).json(isUser);
      // res.send(isUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// ===============================================================================================================================

app.post('/saveusersinfo', async (req, res) => {
  const usersData = req.body;

  const requiredFields = [ 'gender', 'birthdate', 'country'];

  for (const field of requiredFields) {
    if (!usersData[field]) {
      return res.status(400).json({ message: `Please fill out all fields. Missing: ${field}` });
    }
  }

  try {
    const newUser = new UsersInfo(usersData);
    await newUser.save();
    res.status(200).json({ message: 'User details saved successfully' });
  } catch (error) {
    console.error('Error saving user details:', error);
    res.status(500).json({ message: 'Error saving user details', error });
  }
});


// ===============================================================================================================================


const cron = require('node-cron');
const dailyFoodLogMapper = require('./utils/mappers/dailyFoodLogMapper');


async function getDailyFoodLogData() {

    const dailyFoodLogs = await DailyFoodLog.find().exec();
    return dailyFoodLogs;

  }




async function scheduleDailyFoodLog() {
    try {
      const dailyFoodLogData = await getDailyFoodLogData();
      // console.log(dailyFoodLogData)
      const transformedData = dailyFoodLogMapper(dailyFoodLogData);
      console.log("transformedDat",transformedData)

      transformedData.forEach((tranData)=>{
          console.log("tranData : ",tranData)
        const foodLog = new FoodLog(tranData);
        foodLog.save();
      })

      // const foodLog = new FoodLog(transformedData);
      // await foodLog.save();
      console.log('Daily food log saved successfully');
    } catch (error) {
      console.error('Error saving daily food log:', error);
    }
    console.log("Good night")
  }
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  cron.schedule('0 0 0 * * *', scheduleDailyFoodLog, {
    tz: timeZone
  });
  // cron.schedule('* * * * * *', scheduleDailyFoodLog);
// cron.schedule('*/1 * * * *',  () => {
//     scheduleDailyFoodLog();});





// cron.schedule('* * * * * *', () => {
//   console.log('Running scheduling script...');
//   // Your scheduling logic here
// });



// ===============================================================================================================================

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





// ===============================================================================================================================

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
// ===============================================================================================================================

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
// ===============================================================================================================================





app.get('*',(req,resp)=>{
    resp.send("Error page");    


});

// ===============================================================================================================================

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
// ===============================================================================================================================


app.listen(3001,()=>{
    console.log('My server is Running');

});