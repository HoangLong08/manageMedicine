const HttpResponse = require('../../util/HttpResponse.util');
const TokenVerify = require('../middleware/tokenVerify')
const dotenv = require('dotenv');
const MedicinesModel = require('../models/medicines.model');
dotenv.config();
       
/******************************************************************************
 *                              BRANCHES CONTROLLER
 ******************************************************************************/
class MedicinesController {
    
    //POST /medicines/list
    ListMedicines = async (req, res) => {
        const token = req.header('authorization');
        const {medicines_name, medicines_ingredient, storage_from, storage_to} = req.body;
        const branches = await MedicinesModel.ListMedicines({medicines_name, medicines_ingredient, storage_from, storage_to});
        return new TokenVerify().Verify(token, branches, res);
    };

    // GET /medicines/:id
    GetMedicinesById = async (req, res) =>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await MedicinesModel.GetMedicinesById( req.params.id );
            if(!bra || bra.length == 0){
                return res.status(404).send(new HttpResponse("Error", "Medicines not found", null));
            }
            return res.send(new HttpResponse("OK", "success", bra[0]))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // DELETE /medicines/:id
    DeleteMedicinesById = async (req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await MedicinesModel.DeleteMedicinesById( req.params.id );
            return res.send(new HttpResponse("OK", "Delete success", bra))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // POST /branches/create
    CreateMedicines = async (req, res) => {
        let {id_group_medicine,
            medicines_ingredient, medicines_avatar,
             medicines_name, medicines_information,
              medicines_uses, medicines_method, medicines_advantage,
               medicines_storage, medicines_warning} = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const data = await MedicinesModel.InsertMedicines({id_group_medicine,
                medicines_ingredient, medicines_avatar,
                 medicines_name, medicines_information,
                  medicines_uses, medicines_method, medicines_advantage,
                   medicines_storage, medicines_warning});
            return res.send(new HttpResponse("OK", "Insert Medicines", data))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
    // // PUT /branches/update
    // UpdateBranches = async (req, res)=>{
    //     const {branch_id, branch_name, branch_address} = req.body;
    //     const token = req.header('authorization');
    //     const check = new TokenVerify().VerifyNoResponse(token);
    //     if(check){
    //         const bra = await BranchesModel.UpdateBranches({branch_id, branch_name, branch_address});
    //        if(!bra || bra.length == 0){
    //             return res.status(404).send(new HttpResponse("Error", "Branches not found", null));
    //         }
    //         return res.send(new HttpResponse("OK", "success", bra[0]))
    //     }
    //     return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    // }

}

module.exports = new MedicinesController;