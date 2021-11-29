const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
var md5 = require('md5');
class EmployeesModel {
    tableEmployees = 'employees';
    tableAccount = 'accounts';

    // LOGIN
    login = async ({username, password}) => {
        const _password = md5(password+"GNOLUHP_29112021");
        let sql = `SELECT * FROM ${this.tableAccount} WHERE user_name = '${username}' AND password = '${_password}' AND status = ''`;
        return await query(sql);
    }

    // GET LIST ACCOUNT
    listAccount = async () => {
        let sql = `SELECT * FROM ${this.tableAccount} INNER JOIN  ${this.tableEmployees} ON ${this.tableAccount}.id_employee = ${this.tableEmployees}.id;`;
        return await query(sql);
    }

    // CREATE ACCOUNT
    
    CreateAccount = async ({ id_employee, user_name, password}) => {
        const _password = md5(password+"GNOLUHP_29112021");
        let sql = `INSERT INTO ${this.tableAccount}(id_employee, user_name, password, status) VALUES ('${id_employee}','${user_name}','${_password}','')`;
        return await query(sql);
    }

    // GET ACCOUNT BY ID

    AccountByID = async (id) => {
        let sql = `SELECT * FROM ${this.tableAccount} INNER JOIN  ${this.tableEmployees} ON ${this.tableAccount}.id_employee = ${this.tableEmployees}.id WHERE ${this.tableAccount}.id = ${id};`;
        return await query(sql);
    }

    // CLOCKED - UN CLOCK ACCOUNT BY ID
    ClockedAccountByID = async (id) => {
        let sql1 = `SELECT * FROM ${this.tableAccount} WHERE ${this.tableAccount}.id = ${id}`;
        let data = await query(sql1);
        if(data[0].status.toString() == "clocked"){
            let sql = `UPDATE ${this.tableAccount} SET status='' WHERE  ${this.tableAccount}.id = ${id}`;
        return await query(sql);
        }
        let sql = `UPDATE ${this.tableAccount} SET status='clocked' WHERE  ${this.tableAccount}.id = ${id}`;
        return await query(sql);
    }

    // UPDATE ACCOUNT
    UpdateAccount = async ({user_name, password, id }) =>{
        const _password = md5(password+"GNOLUHP_29112021");
        let sql = `UPDATE ${this.tableAccount} SET
         user_name= '${user_name}',
         password= '${_password}',
         updated_at=CURRENT_TIMESTAMP() WHERE ${this.tableAccount}.id = ${id}`;
        return await query(sql);
    }


    // GET LIST EMPLOYEES 
    // ListEmployees = async () =>{
    //     let sql = 
    // }

}

module.exports = new EmployeesModel;