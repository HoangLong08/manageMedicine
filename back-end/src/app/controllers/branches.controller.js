const HttpResponse = require('../../util/HttpResponse.util');
const TokenVerify = require('../middleware/tokenVerify')
const dotenv = require('dotenv');
const BranchesModel = require('../models/branches.model');
dotenv.config();
       
/******************************************************************************
 *                              BRANCHES CONTROLLER
 ******************************************************************************/
class BranchesController {
    
    //POST /branches/list
    ListBranches = async (req, res) => {
        const token = req.header('authorization');
        const { branch_name, branch_address } = req.body;
        const branches = await BranchesModel.ListBranches({ branch_name, branch_address });
        return new TokenVerify().Verify(token, branches, res);
    };

    // GET /branches/:id
    GetBranchesById = async (req, res) =>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await BranchesModel.GetBranchesByID( req.params.id );
            if(!bra || bra.length == 0){
                return res.status(404).send(new HttpResponse("Error", "Branches not found", null));
            }
            return res.send(new HttpResponse("OK", "success", bra[0]))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // //POST /customer/create
    // CreateCustomer = async (req, res) => {
    //     let { customers_name, customers_phone } = req.body;
    //     const token = req.header('authorization');
    //     const check = new TokenVerify().VerifyNoResponse(token);
    //     if(check){
    //         await CustomerModel.InsertCustomer({ customers_name, customers_phone });
    //         customers_name = "";
    //         const customers = await CustomerModel.ListCustomer({ customers_name });
    //         return res.send(new HttpResponse("OK", "Insert Customer success", customers))
    //     }
    //     return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    // }
    // // PUT /customer/update
    // UpdateCustomer = async (req, res)=>{
    //     const { customers_id, customers_name, customers_phone } = req.body;
    //     const token = req.header('authorization');
    //     const check = new TokenVerify().VerifyNoResponse(token);
    //     if(check){
    //         await CustomerModel.UpdateCustomer({ customers_id, customers_name, customers_phone });
    //         const cus = await CustomerModel.CustomerByID( customers_id );
    //         if(!cus || cus.length == 0){
    //             return res.status(404).send(new HttpResponse("Error", "Customer not found", null));
    //         }
    //         return res.send(new HttpResponse("OK", "success", cus[0]))
    //     }
    //     return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    // }

}

module.exports = new BranchesController;