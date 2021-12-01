const HttpResponse = require('../../util/HttpResponse.util');
const TokenVerify = require('../middleware/tokenVerify')
const dotenv = require('dotenv');
const GroupMedicinesModel = require('../models/groups_medicines.model');
dotenv.config();
       
/******************************************************************************
 *                              GROUP MEDICINES CONTROLLER
 ******************************************************************************/
class GroupMedicinesController {
    
    //POST /group-medicines/list
    ListGroupMedicines = async (req, res) => {
        const token = req.header('authorization');
        const {gm_name} = req.body;
        const gm = await GroupMedicinesModel.ListGroupMedicines({gm_name});
        return new TokenVerify().Verify(token, gm, res);
    };
    //GET /group-medicines/:id
    GetGroupMedicinesById = async (req, res) =>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await GroupMedicinesModel.GetByIdGroupMedicines( req.params.id );
            if(!bra || bra.length == 0){
                return res.status(404).send(new HttpResponse("Error", "Group Medicines not found", null));
            }
            return res.send(new HttpResponse("OK", "success", bra[0]))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // DELETE /group-medicines/:id
    DeleteGroupMedicinesById = async (req, res) =>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await GroupMedicinesModel.DeleteByIdGroupMedicines( req.params.id );
            return res.send(new HttpResponse("OK", "success", bra))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
    //POST /group-medicines/create
    InsertGroupMedicines = async (req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const {gm_name, gm_description} = req.body;
            const bra = await GroupMedicinesModel.InsertGroupMedicines({gm_name, gm_description});
            return res.send(new HttpResponse("OK", "Update success", bra))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
    //PUT /group-medicines/update
    UpdateGroupMedicines = async (req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const {gm_id, gm_name, gm_description} = req.body;
            const bra = await GroupMedicinesModel.UpdateGroupMedicines( {gm_id, gm_name, gm_description} );
            return res.send(new HttpResponse("OK", "Insert success", bra))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
}

module.exports = new GroupMedicinesController;