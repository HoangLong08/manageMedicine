const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
var md5 = require('md5');
class EmployeesModel {
    tableEmployees = 'employees';
    tableAccount = 'accounts';

    // LOGIN
    login = async ({username, password, id_branch}) => {
        const _password = md5(password+"GNOLUHP_29112021");
        try{
            let sql = `SELECT * FROM ${this.tableAccount} 
            INNER JOIN employees ON accounts.id_employee = employees.employees_id 
            WHERE accounts.user_name = '${username}'
             AND accounts.password = '${_password}' 
             AND employees.id_branch = ${id_branch}
             AND accounts.account_status = 'activity'`;
            return await query(sql);
        }catch(e){
            return null
        }
       
    }

    // GET LIST ACCOUNT
    listAccount = async () => {
        try{
            let sql = `SELECT * FROM ${this.tableAccount} INNER JOIN  ${this.tableEmployees} ON ${this.tableAccount}.id_employee = ${this.tableEmployees}.employees_id;`;
            return await query(sql);
        }catch{
            return [];
        }
    }

    // CREATE ACCOUNT
    
    CreateAccount = async ({ id_employee, user_name, password}) => {
        const _password = md5(password+"GNOLUHP_29112021");
        try{
            let sql = `INSERT INTO ${this.tableAccount}(id_employee, user_name, password, account_status) VALUES ('${id_employee}','${user_name}','${_password}','activity')`;
            return await query(sql);
        }catch(e){
            return null;
        }
        
    }

    // GET ACCOUNT BY ID

    AccountByID = async (id) => {
        try{
            let sql = `SELECT * FROM ${this.tableAccount} INNER JOIN  ${this.tableEmployees} ON ${this.tableAccount}.id_employee = ${this.tableEmployees}.employees_id WHERE ${this.tableAccount}.account_id = ${id};`;
            return await query(sql);
        }catch(e){
            return null;
        }
       
    }

    // CLOCKED - UN CLOCK ACCOUNT BY ID
    ClockedAccountByID = async ({id}) => {
        let sql1 = `SELECT * FROM ${this.tableAccount} WHERE ${this.tableAccount}.account_id = ${id}`;
        let data = await query(sql1);
        if(data[0].account_status.toString() == "closed"){
            let sql = `UPDATE ${this.tableAccount} SET account_status='activity' WHERE  ${this.tableAccount}.account_id = ${id}`;
        await query(sql);
        return "UnClose";
        }
        let sql = `UPDATE ${this.tableAccount} SET account_status='closed' WHERE  ${this.tableAccount}.account_id = ${id}`;
        await query(sql);
        return "Closed";
    }

    // UPDATE ACCOUNT
    UpdateAccount = async ({user_name, password, id }) =>{
        const _password = md5(password+"GNOLUHP_29112021");
        let sql = `UPDATE ${this.tableAccount} SET
         user_name= '${user_name}',
         password= '${_password}',
         account_updated_at=CURRENT_TIMESTAMP() WHERE ${this.tableAccount}.account_id = ${id}`;
        return await query(sql);
    }


    // GET LIST EMPLOYEES 
    ListEmployees = async ({employees_name, employees_status}) =>{
        let sql = `SELECT * FROM ${this.tableEmployees}
         INNER JOIN groups_employees ON ${this.tableEmployees}.id_group_employee = groups_employees.ge_id
         INNER JOIN branches ON employees.id_branch = branches.branch_id
         WHERE ${this.tableEmployees}.employees_name LIKE '%${employees_name}%'
         OR ${this.tableEmployees}.employees_status = '%${employees_status}%'
         `;
        console.log(sql);
        return await query(sql);
    }

    // GET EMPLOYEES BY ID
    EmployeesById = async (id) =>{
        let sql = `SELECT * FROM ${this.tableEmployees}
        INNER JOIN groups_employees ON ${this.tableEmployees}.id_group_employee = groups_employees.ge_id
        INNER JOIN branches ON employees.id_branch = branches.branch_id
        WHERE ${this.tableEmployees}.employees_id = ${id}
        `;
        return await query(sql);
    }

    // CLOCKED - UN CLOCK EMPLOYEES BY ID
    ClockedEmployeesByID = async ({id}) => {
        let sql1 = `SELECT * FROM ${this.tableEmployees} WHERE ${this.tableEmployees}.employees_id = ${id}`;
        let data = await query(sql1);
        if(data[0].employees_status.toString() == "closed"){
            let sql = `UPDATE ${this.tableEmployees} SET employees_status='activity' WHERE  ${this.tableEmployees}.employees_id = ${id}`;
        await query(sql);
        return "UnClose";
        }
        let sql = `UPDATE ${this.tableEmployees} SET employees_status='closed' WHERE  ${this.tableEmployees}.employees_id = ${id}`;
        await query(sql);
        return "Closed";
    }

    // INSERT EMPLOYEES 
    InsertEmployees = async ({id_branch, id_group_employee, employees_name, employees_avatar,
        employees_address, employees_phone, id_card})=>{
        let sql =  `INSERT INTO  ${this.tableEmployees}
        (id_branch, id_group_employee, employees_name, employees_avatar,
             employees_address, employees_phone, id_card,
              employees_status
               ) 
               VALUES ('${id_branch}','${id_group_employee}',
               '${employees_name}','${employees_avatar}','${employees_address}','${employees_phone}',
               '${id_card}','activity')`;
               await query(sql);
               sql = `SELECT * FROM ${this.tableEmployees}
               INNER JOIN groups_employees ON ${this.tableEmployees}.id_group_employee = groups_employees.ge_id
               INNER JOIN branches ON employees.id_branch = branches.branch_id`;
        return await query(sql);
    }

    // UPDATE EMPLOYEES BY ID
    UpdateEmployees = async ({employees_id, id_branch, id_group_employee, employees_name, employees_avatar,
        employees_address, employees_phone, id_card})=>{
            let sql = `
                UPDATE employees SET 
                id_branch='${id_branch}',id_group_employee='${id_group_employee}',
                employees_name='${employees_name}',employees_avatar='${employees_avatar}'
                ,employees_address='${employees_address}',employees_phone='${employees_phone}',
                id_card='${id_card}',
                employees_updated_at=CURRENT_TIMESTAMP() WHERE employees_id = ${employees_id}
            `;
            await query(sql);
            sql = `SELECT * FROM ${this.tableEmployees}
            INNER JOIN groups_employees ON ${this.tableEmployees}.id_group_employee = groups_employees.ge_id
            INNER JOIN branches ON employees.id_branch = branches.branch_id
            WHERE employees_id = ${employees_id}
            `;
            return await query(sql);
    }




}

module.exports = new EmployeesModel;