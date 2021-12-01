const HttpResponse = require('../../util/HttpResponse.util');
const TokenVerify = require('../middleware/tokenVerify')
const dotenv = require('dotenv');
const AvailablePrescriptionModel = require('../models/available_prescriptions.model');
dotenv.config();
       
/******************************************************************************
 *                              AVAILABLE PRESCRIPTION CONTROLLER
 ******************************************************************************/
class AvailablePrescriptionController {
    
    //POST /available-prescription/list
    ListAvailablePrescription = async (req, res) => {
        const token = req.header('authorization');
        const {ap_disease, ap_symptom} = req.body;
        const data = await AvailablePrescriptionModel.ListAvailablePrescription({ap_disease, ap_symptom});
        return new TokenVerify().Verify(token, data, res);
    };

    // GET /available-prescription/:id
    GetAvailablePrescriptionById = async (req, res) =>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await AvailablePrescriptionModel.GetAvailablePrescriptionByID( req.params.id );
            if(!bra || bra.length == 0){
                return res.status(404).send(new HttpResponse("Error", "Available prescription not found", null));
            }
            return res.send(new HttpResponse("OK", "success", bra[0]))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // DELETE /available-prescription/:id
    DeleteAvailablePrescriptionById = async (req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await AvailablePrescriptionModel.DeleteAvailablePrescription( req.params.id );
            return res.send(new HttpResponse("OK", "Delete success", bra))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // POST  /available-prescription/create
    CreateAvailablePrescription = async (req, res) => {
        let { ap_disease, ap_symptom, ap_dosage_method, ap_number_sold} = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const data = await AvailablePrescriptionModel.InsertAvailablePrescription({ ap_disease, ap_symptom, ap_dosage_method, ap_number_sold});
            return res.send(new HttpResponse("OK", "Insert available prescription success", data))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // PUT  /available-prescription/update
    UpdateAvailablePrescription = async (req, res)=>{
        const {ap_id, ap_disease, ap_symptom, ap_dosage_method, ap_number_sold} = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check){
            const bra = await AvailablePrescriptionModel.UpdateAvailablePrescription({ap_id, ap_disease, ap_symptom, ap_dosage_method, ap_number_sold});
           if(!bra || bra.length == 0){
                return res.status(404).send(new HttpResponse("Error", "Available prescription not found", null));
            }
            return res.send(new HttpResponse("OK", "success", bra[0]))
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

}

module.exports = new AvailablePrescriptionController;