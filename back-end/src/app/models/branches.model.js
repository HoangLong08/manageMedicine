const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
class BranchesModel {
    tableBranches = 'branches';

        
        ListBranchesLogin = async ()=>{
            let sql = 
            `
            SELECT * FROM ${this.tableBranches}
            `;
            return await query(sql);
        }

    // LIST BRANCHES
    ListBranches = async ({branch_name, branch_address})=>{
        let sql = 
        `
        SELECT * FROM ${this.tableBranches} 
        WHERE ${this.tableBranches}.branch_name LIKE '%${branch_name}%'
        AND ${this.tableBranches}.branch_address LIKE '%${branch_address}%'
        `;
        return await query(sql);
    }

    // GET BRANCHES BY ID
    GetBranchesByID = async (id)=>{
        let sql = 
        `
        SELECT * FROM ${this.tableBranches} 
        WHERE ${this.tableBranches}.branch_id = ${id}
        `;
        return await query(sql);
    }
    
    // DELETE BRANCHES BY ID
    DeleteBranchesByID = async (id)=>{
        let sql = 
        `
        DELETE FROM ${this.tableBranches}
        WHERE branch_id = ${id}
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tableBranches} 
        `;
        return await query(sql);
    }
    // CREATE BRANCHES BY ID
    CreateBranches = async ({branch_name, branch_address})=>{
        let sql =`
        INSERT INTO ${this.tableBranches} 
        (branch_name, branch_address)
          VALUES ('${branch_name}', '${branch_address}')
        `;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tableBranches} 
        `;
        return await query(sql);
    }
    
    // UPDATE BRANCHES BY ID
    UpdateBranches = async({branch_id, branch_name, branch_address})=>{
        let sql = `
        UPDATE ${this.tableBranches} SET 
        branch_name='${branch_name}',
        branch_address='${branch_address}',
        branch_updated_at=current_timestamp() 
        WHERE branch_id = ${branch_id}`;
        await query(sql);
        sql = 
        `
        SELECT * FROM ${this.tableBranches} 
        WHERE ${this.tableBranches}.branch_id = ${branch_id}
        `;
        return await query(sql);
    }


}

module.exports = new BranchesModel;