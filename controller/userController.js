import User from "../model/user.js"


export const createAdmin = async(req,res)=>{
    try {
     const { name,email,password}= req.body;
 
     const user =  new User({
           name,
           email,
           password,
           role: "Admin"
       })
   
       const savedUser = await user.save();
   
       res.json({
        user:savedUser,
        message:"Admin created successfully"
    })

  } catch (error) {
    res.json({
        message:"error Occurred"
    })

    console.log(error)

    }
};
 
export const createAlumni = async (req, res) => {
        try {
            const { name, email, password } = req.body;
    
            const alumni = new User({
                name,
                email,
                password,
                role: "Alumni"
            });
    
            const savedAlumni = await alumni.save();
    
            res.json({
                savedAlumni,
                message: "Alumni created successfully"
            });
    
        }
        catch (error) {
            res.json({
                message:"error Occurred"
            })
        
            console.log(error)
        
        }
    };
    

    export const createStudent = async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const student = new User({
                name,
                email,
                password,
                role: "Student"
            });
    
            const savedStudent = await student.save();
    
            res.json({
                savedStudent,
                message: "Student created successfully"
            });
    
        } catch (error) {
            res.json({
                message:"error Occurred"
            })
        
            console.log(error)
        
        }
    };
 
    export const getAllusers =async(req,res)=>{
        try {
         const getusers = await User.find()
         res.json({
            getusers
         })
        } catch (error) {
            res.json({
                error:"Cannot fetch data"
            })
            console.log(error)
        }
    }