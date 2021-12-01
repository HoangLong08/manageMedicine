const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
class MedicinesModel {
    tableMedicines = 'medicines';


    // LIST MEDICINES
    ListMedicines = async ({medicines_name, medicines_ingredient, storage_from, storage_to})=>{
        let sql = 
        `
        SELECT * FROM ${this.tableMedicines} INNER JOIN groups_medicines
        ON  ${this.tableMedicines}.id_group_medicine = groups_medicines.gm_id
        WHERE medicines.medicines_name LIKE '%${medicines_name}%' 
        AND medicines.medicines_ingredient LIKE '%${medicines_ingredient}%'
        AND medicines.medicines_storage >= ${storage_from} AND medicines.medicines_storage <= ${storage_to};
        `;
        return await query(sql);
    }

    // INSERT MEDICINES
    InsertMedicines = async ({id_group_medicine,
        medicines_ingredient, medicines_avatar,
         medicines_name, medicines_information,
          medicines_uses, medicines_method, medicines_advantage,
           medicines_storage, medicines_warning})=>{
        let sql = 
        `
        INSERT INTO ${this.tableMedicines}
        (id_group_medicine,
         medicines_ingredient, medicines_avatar,
          medicines_name, medicines_information,
           medicines_uses, medicines_method, medicines_advantage,
            medicines_storage, medicines_warning)
              VALUES ('${id_group_medicine}','${medicines_ingredient}','${medicines_avatar}',
              '${medicines_name}','${medicines_information}','${medicines_uses}','${medicines_method}',
              '${medicines_advantage}','${medicines_storage}','${medicines_warning}')
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tableMedicines} INNER JOIN groups_medicines
        ON  ${this.tableMedicines}.id_group_medicine = groups_medicines.gm_id
        `;
        return await query(sql);
    }

     // GET MEDICINES BY ID
     GetMedicinesById = async (medicines_id)=>{
        let sql = 
        `
        SELECT * FROM ${this.tableMedicines} INNER JOIN groups_medicines
        ON  ${this.tableMedicines}.id_group_medicine = groups_medicines.gm_id
        WHERE medicines.medicines_id = ${medicines_id} 
        `;
        return await query(sql);
    }
     // DELETE MEDICINES BY ID
     DeleteMedicinesById = async (medicines_id)=>{
        let sql = 
        `
        DELETE FROM medicines
        WHERE medicines.medicines_id = ${medicines_id} 
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tableMedicines} INNER JOIN groups_medicines
        ON  ${this.tableMedicines}.id_group_medicine = groups_medicines.gm_id
        `;
        return await query(sql);
    }

}

module.exports = new MedicinesModel;