const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
class AvailablePrescriptionModel {
    tableAvailablePrescription = 'available_prescriptions';

    // LIST Available Prescription
    ListAvailablePrescription = async ({ap_disease, ap_symptom})=>{
        let sql = 
        `
        SELECT * FROM ${this.tableAvailablePrescription}
        WHERE ${this.tableAvailablePrescription}.ap_disease LIKE '%${ap_disease}%'
        AND  ${this.tableAvailablePrescription}.ap_symptom LIKE '%${ap_symptom}%'
        `;
        return await query(sql);
    }

    // GET  Available Prescription BY ID
    GetAvailablePrescriptionByID = async (id)=>{
        let sql = 
        `
        SELECT * FROM ${this.tableAvailablePrescription}
        WHERE ${this.tableAvailablePrescription}.ap_id = ${id}
        `;
        return await query(sql);
    }
    // DELETE  Available Prescription BY ID
    DeleteAvailablePrescription = async (id)=>{
        let sql = 
        `
        DELETE FROM ${this.tableAvailablePrescription}
        WHERE ${this.tableAvailablePrescription}.ap_id = ${id}
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tableAvailablePrescription}
        `;
        return await query(sql);
    }

    // INSERT Available Prescription
    InsertAvailablePrescription = async ({ ap_disease, ap_symptom, 
        ap_dosage_method, ap_number_sold})=>{
        let sql = `
        INSERT INTO available_prescriptions
        (ap_disease, ap_symptom, 
        ap_dosage_method, ap_number_sold)
         VALUES ('${ap_disease}','${ap_symptom}','${ap_dosage_method}',
         '${ap_number_sold}')
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tableAvailablePrescription}
        `;
        return await query(sql);
    }
    // UPDATE Available Prescription
    UpdateAvailablePrescription = async ({ap_id, ap_disease, ap_symptom, 
        ap_dosage_method, ap_number_sold})=>{
        let sql = 
        `
        UPDATE available_prescriptions
         SET ap_disease='${ap_disease}',
         ap_symptom='${ap_symptom}',ap_dosage_method='${ap_dosage_method}',
         ap_number_sold='${ap_number_sold}',
         ap_updated_at=current_timestamp()	 
         WHERE available_prescriptions.ap_id = ${ap_id}
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tableAvailablePrescription}
        WHERE ${this.tableAvailablePrescription}.ap_id = ${ap_id}
        `;
        return await query(sql);
    }

}

module.exports = new AvailablePrescriptionModel;