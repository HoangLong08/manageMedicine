const jwt = require('jsonwebtoken');
const HttpResponse = require('../../util/HttpResponse.util');
const secretKey = "_P_L_eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9_29_11_2021";
       
class TokenVerify{
    Verify = (token, response, res)=>{
        try{
            const data = token.split(" ")[1];
            jwt.verify(data, secretKey, function(err, decoded){
                if(err){
                    return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
                }
                return res.send(new HttpResponse("OK", "success", response));
            });
        }catch(e){}
        return res.status(401).send(new HttpResponse("Error", "jwt not found", null));
    }
    VerifyNoResponse = (token)=>{
        try{
            const data = token.split(" ")[1];
            jwt.verify(data, secretKey, function(err, decoded){
                if(err){
                    return false;
                }
            });
            return true;
        }catch(e){}
        return false;
    }
}

module.exports = TokenVerify;