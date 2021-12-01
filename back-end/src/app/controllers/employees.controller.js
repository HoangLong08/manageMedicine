const EmployeesModel = require('../models/employees.model');
const HttpResponse = require('../../util/HttpResponse.util');
const { validationResult, check } = require('express-validator');
const TokenVerify = require('../middleware/tokenVerify')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secretKey = "_P_L_eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9_29_11_2021";
        
/******************************************************************************
 *                              EMPLOYEES CONTROLLER
 ******************************************************************************/
class EmployeesController {

    //POST /employees/login
    Login = async (req, res) => {
        this.checkValidation(req);

        const { username, password, id_branch } = req.body;
        const employees = await EmployeesModel.login({ username, password, id_branch});
        if (!employees || employees.length ==0) {
           return res.status(400).send(new HttpResponse("Error", "Login Failed", null));
        }
        const token = jwt.sign({ employees_id: employees[0].id_employee.toString(), employees_username:employees[0].user_name.toString() }, secretKey, {
            expiresIn: '24h'
        });

        return res.send(new HttpResponse("OK", "Login success", {token:token}));
    };

    //GET /employees/account/list
    ListAccount = async (req, res) => {
        const token = req.header('authorization');
        const employees = await EmployeesModel.listAccount();
        return new TokenVerify().Verify(token, employees, res);
    }
    // POST /employees/account/create
    CreateAccount = async (req, res) =>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        const {  id_employee, user_name, password } = req.body;
        if(check == true){
            const create = await EmployeesModel.CreateAccount({ id_employee, user_name, password});
            if (!create || create.length ==0) {
                return res.status(400).send(new HttpResponse("Error", "Account already exists", null));
            }
            const acc = await EmployeesModel.listAccount();
            return res.send(new HttpResponse("OK", "Account create success", acc));
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
    // GET /employees/account/:id
    AccountById = async (req, res)=>{
        const token = req.header('authorization');
        const employees = await EmployeesModel.AccountByID(req.params.id);
        if(!employees || employees.length == 0){
            return res.status(404).send(new HttpResponse("Error", "Account not found", null));
        }
        return new TokenVerify().Verify(token, employees[0], res);
    }

    //GET /employees/account/clock/:id
    ClockAccountById = async (req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check == true){
            const id = req.params.id;
            const clock = await EmployeesModel.ClockedAccountByID({id});
            if (!clock || clock.length ==0) {
                return res.status(404).send(new HttpResponse("Error", "Account not exists", null));
            }
            const acc = await EmployeesModel.AccountByID(req.params.id);
            return res.send(new HttpResponse("OK",  `${clock}`, acc));
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
    // PUT /employees/account/update
    UpdateAccount = async(req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        const {user_name, password, id} = req.body;
        if(check == true){
            const update = await EmployeesModel.UpdateAccount({user_name, password, id});
            if (!update || update.length ==0) {
                return res.status(404).send(new HttpResponse("Error", "Account not exists", null));
            }
            const acc = await EmployeesModel.AccountByID(id);
            return res.send(new HttpResponse("OK", "Account updated success", acc));
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
    
    // POST /employees/list
    ListEmployees = async(req, res)=>{
        const {employees_name, employees_status} = req.body
        const token = req.header('authorization');
        const employees = await EmployeesModel.ListEmployees({employees_name, employees_status});
        if(employees.length == 0){
            return new TokenVerify().Verify(token, [], res);
        }
        return new TokenVerify().Verify(token, employees, res);
    }

    // GET /employees/:id
    EmployeesByID = async(req, res)=>{
        const token = req.header('authorization');
        const employees = await EmployeesModel.EmployeesById(req.params.id);
        if(employees.length == 0){
            return res.status(404).send(new HttpResponse("Error", "Employees not found", null));
        }
        return new TokenVerify().Verify(token, employees[0], res);
    }
    // GET /employees/clock/:id
    EmployeesClockById = async (req, res) =>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check == true){
            const id = req.params.id;
            const clock = await EmployeesModel.ClockedEmployeesByID({id});
            if (!clock || clock.length ==0) {
                return res.status(404).send(new HttpResponse("Error", "Employees not exists", null));
            }
            const employees = await EmployeesModel.EmployeesById(req.params.id);
            return res.send(new HttpResponse("OK",  `${clock}`, employees[0]));
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // POST /employees/create
    EmployeesCreate = async(req, res)=>{
        const {id_branch, id_group_employee, employees_name, employees_avatar,employees_address, employees_phone, id_card} = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check == true){
            const insert_ = await EmployeesModel.InsertEmployees({id_branch, id_group_employee, employees_name, employees_avatar,
                employees_address, employees_phone, id_card});
            if(!insert_){
                return res.status(400).send(new HttpResponse("Error", "Insert employees error", null));
            }
            return res.send(new HttpResponse("OK", 'Insert employees success', insert_));
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }

    // PUT /employees/update
    EmployeesUpdate = async (req, res)=>{
        const {employees_id, id_branch, id_group_employee, employees_name, employees_avatar,
            employees_address, employees_phone, id_card} = req.body;
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check == true){
            const update_ = await EmployeesModel.UpdateEmployees(
                {employees_id, id_branch, id_group_employee, employees_name, employees_avatar,
                    employees_address, employees_phone, id_card}
            );
            if(!update_){
                return res.status(400).send(new HttpResponse("Error", "Update employees error", null));
            }
            const up = await EmployeesModel.EmployeesById(employees_id);
            return res.send(new HttpResponse("OK", 'Update employees success', up[0]));
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }


    


    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).send(new HttpResponse("400", "Validation failed", errors));
        }
    }
}

module.exports = new EmployeesController;