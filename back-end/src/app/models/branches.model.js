const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
class BranchesModel {
    tableBranches = 'branches';

    // LIST BRANCHES
    ListBranches = async ({branch_name, branch_address})=>{
        let sql = 
        `
        SELECT * FROM ${this.tableBranches} 
        WHERE ${this.tableBranches}.branch_name LIKE '%${branch_name}%'
        OR ${this.tableBranches}.branch_address LIKE '%${branch_address}%'
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
  
    

}

module.exports = new BranchesModel;