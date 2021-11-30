const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
var md5 = require('md5');
class EmployeesModel {
    tableEmployees = 'employees';
    tableAccount = 'accounts';

    // LOGIN
    login = async ({username, password}) => {
        const _password = md5(password+"GNOLUHP_29112021");
        let sql = `SELECT * FROM ${this.tableAccount} WHERE user_name = '${username}' AND password = '${_password}' AND account_status = 'activity'`;
        return await query(sql);
    }

    // GET LIST ACCOUNT
    listAccount = async () => {
        let sql = `SELECT * FROM ${this.tableAccount} INNER JOIN  ${this.tableEmployees} ON ${this.tableAccount}.id_employee = ${this.tableEmployees}.employees_id;`;
        return await query(sql);
    }

    // CREATE ACCOUNT
    
    CreateAccount = async ({ id_employee, user_name, password}) => {
        const _password = md5(password+"GNOLUHP_29112021");
        let sql = `INSERT INTO ${this.tableAccount}(id_employee, user_name, password, account_status) VALUES ('${id_employee}','${user_name}','${_password}','activity')`;
        return await query(sql);
    }

    // GET ACCOUNT BY ID

    AccountByID = async (id) => {
        let sql = `SELECT * FROM ${this.tableAccount} INNER JOIN  ${this.tableEmployees} ON ${this.tableAccount}.id_employee = ${this.tableEmployees}.employees_id WHERE ${this.tableAccount}.account_id = ${id};`;
        return await query(sql);
    }

    // CLOCKED - UN CLOCK ACCOUNT BY ID
    ClockedAccountByID = async ({id}) => {
        let sql1 = `SELECT * FROM ${this.tableAccount} WHERE ${this.tableAccount}.account_id = ${id}`;
        let data = await query(sql1);
        if(data[0].account_status.toString() == "clocked"){
            let sql = `UPDATE ${this.tableAccount} SET account_status='activity' WHERE  ${this.tableAccount}.account_id = ${id}`;
        await query(sql);
        return "UnClock";
        }
        let sql = `UPDATE ${this.tableAccount} SET account_status='clocked' WHERE  ${this.tableAccount}.account_id = ${id}`;
        await query(sql);
        return "Clocked";
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
        if(data[0].employees_status.toString() == "clocked"){
            let sql = `UPDATE ${this.tableEmployees} SET employees_status='activity' WHERE  ${this.tableEmployees}.employees_id = ${id}`;
        await query(sql);
        return "UnClock";
        }
        let sql = `UPDATE ${this.tableEmployees} SET employees_status='clocked' WHERE  ${this.tableEmployees}.employees_id = ${id}`;
        await query(sql);
        return "Clocked";
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