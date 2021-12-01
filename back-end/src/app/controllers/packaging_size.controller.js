const HttpResponse = require('../../util/HttpResponse.util');
const TokenVerify = require('../middleware/tokenVerify')
const dotenv = require('dotenv');
const PackagingSizeModel = require('../models/packaging_size.model');
dotenv.config();
       
/******************************************************************************
 *                              PACKAGING SIZE CONTROLLER
 ******************************************************************************/
class BranchesController {
    
    //GET /packing-size/list
    ListPackingSize = async (req, res) => {
        const token = req.header('authorization');
        const data = await PackagingSizeModel.ListPackingSize();
        return new TokenVerify().Verify(token, data, res);
    };

    // GET /packing-size/:id
    GetPackingSizeById = async (req, res) =>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await PackagingSizeModel.GetPackingSizeByID( req.params.id );
            if(!bra || bra.length == 0){
                return res.status(404).send(new HttpResponse("Error", "Packing size not found", null));
            }
            return res.send(new HttpResponse("OK", "success", bra[0]))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // DELETE /branches/:id
    DeletePackagingSizeById = async (req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await PackagingSizeModel.DeletePackagingSize( req.params.id );
            return res.send(new HttpResponse("OK", "Delete success", bra))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // POST /branches/create
    CreatePackagingSize = async (req, res) => {
        let { ps_type_quantitative } = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const data = await PackagingSizeModel.InsertPackagingSize({ ps_type_quantitative });
            return res.send(new HttpResponse("OK", "Insert Packaging size success", data))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // PUT /packaging-size/update
    UpdatePackagingSize= async (req, res)=>{
        const {ps_id, ps_type_quantitative} = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await PackagingSizeModel.UpdatePackagingSize({ps_id, ps_type_quantitative});
           if(!bra || bra.length == 0){
                return res.status(404).send(new HttpResponse("Error", "Packaging size not found", null));
            }
            return res.send(new HttpResponse("OK", "success", bra[0]))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

}

module.exports = new BranchesController;