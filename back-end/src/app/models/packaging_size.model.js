const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
class PackagingSizeModel {
    tablePackingSize = 'packaging_size';

    // LIST PACKAGING SIZE
    ListPackingSize = async ()=>{
        let sql = 
        `
        SELECT * FROM ${this.tablePackingSize} 
        `;
        return await query(sql);
    }

    // GET  PACKAGING SIZE BY ID
    GetPackingSizeByID = async (id)=>{
        let sql = 
        `
        SELECT * FROM ${this.tablePackingSize} 
        WHERE ${this.tablePackingSize}.ps_id = ${id}
        `;
        return await query(sql);
    }
    // DELETE PACKAGING SIZE BY ID
    DeletePackagingSize = async (id)=>{
        let sql = 
        `
        DELETE FROM packaging_size
        WHERE ${this.tablePackingSize}.ps_id = ${id}
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tablePackingSize} 
        `;
        return await query(sql);
    }
    // INSERT PACKAGING SIZE
    InsertPackagingSize = async ({ps_type_quantitative})=>{
        let sql = `
        INSERT INTO  ${this.tablePackingSize}
        ( ps_type_quantitative) 
        VALUES ('${ps_type_quantitative}')
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tablePackingSize} 
        `;
        return await query(sql);
    }
    // UPDATE PACKAGING SIZE
    UpdatePackagingSize = async ({ps_id, ps_type_quantitative})=>{
        let sql = 
        `
        UPDATE packaging_size SET 
        ps_type_quantitative='${ps_type_quantitative}',
        ps_updated_at=current_timestamp() WHERE packaging_size.ps_id = ${ps_id}
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tablePackingSize} 
        WHERE ${this.tablePackingSize}.ps_id = ${ps_id}
        `;
        return await query(sql);
    }

}

module.exports = new PackagingSizeModel;