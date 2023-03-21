var User = require('../model/user')


exports.addUser = async (req,res,next)=>{
    const userName = req.body.userName;
    const userEmail= req.body.userEmail;
   
    
    console.log(req.body.userName);
    // res.status(201).json({message:"connected"});
    try{    
           
        const user= await User.create({
            name: userName,
            email:userEmail
           
        });
        
        res.status(201).json({message: "user created"})
        
       
        
    }
    catch(e){
        console.error(e);
        res.status(500).json({error : e})
    }
}

