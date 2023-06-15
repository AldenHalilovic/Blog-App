import data from "../../Data/users.json"

export default function handler (req,res){
    console.log(data)
    const johnToken = "QpwL5tke4Pnpja7X4"
    if(req.method == "POST")
    {
        if(req.body.email=="Steve@gmail.com" && req.body.password=="1003141")
        {
            res.status(200).json({
                ...data,
                accessToken:johnToken
            })
        }
        else{
            res
            .status(422)
            .json({message:"Incorrect credentials"});
        }
    }
}