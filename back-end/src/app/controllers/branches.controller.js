const HttpResponse = require('../../util/HttpResponse.util');
const TokenVerify = require('../middleware/tokenVerify')
const dotenv = require('dotenv');
const BranchesModel = require('../models/branches.model');
dotenv.config();
       
/******************************************************************************
 *                              BRANCHES CONTROLLER
 ******************************************************************************/
class BranchesController {
    
    //GET /branches/all
    ListBranchesLogin = async (req, res) => {
        const branches = await BranchesModel.ListBranchesLogin();
        return res.send(new HttpResponse("OK", "success", branches))
    };

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

    // DELETE /branches/:id
    DeleteBranchesById = async (req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await BranchesModel.DeleteBranchesByID( req.params.id );
            return res.send(new HttpResponse("OK", "success", bra))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // POST /branches/create
    CreateBranches = async (req, res) => {
        let { branch_name, branch_address } = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const branches = await BranchesModel.CreateBranches({ branch_name, branch_address });
            return res.send(new HttpResponse("OK", "Insert Branches", branches))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
    // PUT /branches/update
    UpdateBranches = async (req, res)=>{
        const {branch_id, branch_name, branch_address} = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await BranchesModel.UpdateBranches({branch_id, branch_name, branch_address});
           if(!bra || bra.length == 0){
                return res.status(404).send(new HttpResponse("Error", "Branches not found", null));
            }
            return res.send(new HttpResponse("OK", "success", bra[0]))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

}

module.exports = new BranchesController;