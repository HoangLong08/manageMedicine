const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
class GroupsMedicinesModel {
    tableGroupsMedicines = 'groups_medicines';

    // LIST GROUP MEDICINES
    ListGroupMedicines = async ({gm_name})=>{
        let sql = 
        `
        SELECT ${this.tableGroupsMedicines}.*,
        COUNT(medicines.medicines_id)
        AS number_medicines FROM ${this.tableGroupsMedicines} 
        LEFT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        WHERE ${this.tableGroupsMedicines}.gm_name LIKE '%${gm_name}%'
        GROUP BY ${this.tableGroupsMedicines}.gm_id 
        UNION
        SELECT ${this.tableGroupsMedicines}.*, 
        COUNT(medicines.medicines_id) AS number_medicines
        FROM ${this.tableGroupsMedicines} RIGHT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        WHERE ${this.tableGroupsMedicines}.gm_name LIKE '%${gm_name}%'
        GROUP BY ${this.tableGroupsMedicines}.gm_id
        `;
        return await query(sql);
    }

    // GET GROUP MEDICINES BY ID
    GetByIdGroupMedicines = async (gm_id)=>{
        let sql = 
        `
        SELECT ${this.tableGroupsMedicines}.*,
        COUNT(medicines.medicines_id)
        AS number_medicines FROM ${this.tableGroupsMedicines} 
        LEFT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        WHERE ${this.tableGroupsMedicines}.gm_id = ${gm_id}
        GROUP BY ${this.tableGroupsMedicines}.gm_id 
        UNION
        SELECT ${this.tableGroupsMedicines}.*, 
        COUNT(medicines.medicines_id) AS number_medicines
        FROM ${this.tableGroupsMedicines} RIGHT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        WHERE ${this.tableGroupsMedicines}.gm_id = ${gm_id}
        GROUP BY ${this.tableGroupsMedicines}.gm_id
        `;
        return await query(sql);
    }
    // DELETE GROUP MEDICINES BY ID
    DeleteByIdGroupMedicines = async (gm_id)=>{
        let sql = 
        `
        DELETE FROM groups_medicines WHERE gm_id = ${gm_id}
        `;
        await query(sql);
        sql = 
        `
        SELECT ${this.tableGroupsMedicines}.*,
        COUNT(medicines.medicines_id)
        AS number_medicines FROM ${this.tableGroupsMedicines} 
        LEFT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        GROUP BY ${this.tableGroupsMedicines}.gm_id 
        UNION
        SELECT ${this.tableGroupsMedicines}.*, 
        COUNT(medicines.medicines_id) AS number_medicines
        FROM ${this.tableGroupsMedicines} RIGHT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        GROUP BY ${this.tableGroupsMedicines}.gm_id
        `;
        return await query(sql);
    }
    // INSERT GROUP MEDICINES
    InsertGroupMedicines = async({gm_name, gm_description})=>{
        let sql = `
        INSERT INTO ${this.tableGroupsMedicines}
        (gm_name, gm_description)
          VALUES ('${gm_name}','${gm_description}')
        `;
        await query(sql);
        sql = 
        `
        SELECT ${this.tableGroupsMedicines}.*,
        COUNT(medicines.medicines_id)
        AS number_medicines FROM ${this.tableGroupsMedicines} 
        LEFT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        GROUP BY ${this.tableGroupsMedicines}.gm_id 
        UNION
        SELECT ${this.tableGroupsMedicines}.*, 
        COUNT(medicines.medicines_id) AS number_medicines
        FROM ${this.tableGroupsMedicines} RIGHT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        GROUP BY ${this.tableGroupsMedicines}.gm_id
        `;
        return await query(sql);
    }
    // UPDATE GROUP MEDICINES BY ID
    UpdateGroupMedicines = async ({gm_id, gm_name, gm_description})=>{
        let sql = `
        UPDATE ${this.tableGroupsMedicines} SET
         gm_name='${gm_name}',
         gm_description='${gm_description}',
         gm_updated_at=current_timestamp() WHERE ${this.tableGroupsMedicines}.gm_id = ${gm_id}
        `;
        await query(sql);
        sql = 
        `
        SELECT ${this.tableGroupsMedicines}.*,
        COUNT(medicines.medicines_id)
        AS number_medicines FROM ${this.tableGroupsMedicines} 
        LEFT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        WHERE ${this.tableGroupsMedicines}.gm_id = ${gm_id}
        GROUP BY ${this.tableGroupsMedicines}.gm_id 
        UNION
        SELECT ${this.tableGroupsMedicines}.*, 
        COUNT(medicines.medicines_id) AS number_medicines
        FROM ${this.tableGroupsMedicines} RIGHT JOIN medicines 
        ON medicines.id_group_medicine = ${this.tableGroupsMedicines}.gm_id
        WHERE ${this.tableGroupsMedicines}.gm_id = ${gm_id}
        GROUP BY ${this.tableGroupsMedicines}.gm_id
        `;
        return await query(sql);
    }


}

module.exports = new GroupsMedicinesModel;