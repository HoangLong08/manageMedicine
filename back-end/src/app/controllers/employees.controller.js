const EmployeesModel = require('../models/employees.model');
const HttpResponse = require('../../util/HttpResponse.util');
const { validationResult, check } = require('express-validator');
const TokenVerify = require('../middleware/tokenVerify')
const bcrypt = require('bcryptjs');
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

        const { username, password } = req.body;
        const employees = await EmployeesModel.login({ username, password });
        if (!employees || employees.length ==0) {
           return res.status(400).send(new HttpResponse("Error", "Email or password incorrect", null));
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
                return res.status(404).send(new HttpResponse("Error", "Account already exists", null));
            }
            return res.send(new HttpResponse("OK", "Account create success", null));
        }
        return res.status(401).send(new HttpResponse("Error", "jwt not active", null));
    }
    // GET /employees/account/:id
    AccountById = async (req, res)=>{
        const token = req.header('authorization');
        const employees = await EmployeesModel.AccountByID(req.params.id);
        return new TokenVerify().Verify(token, employees[0], res);
    }

    //GET /employees/account/clock/:id
    ClockAccountById = async (req, res)=>{
        const token = req.header('authorization');
        const check = new TokenVerify().VerifyNoResponse(token);
        if(check == true){
            const create = await EmployeesModel.ClockedAccountByID(req.params.id);
            if (!create || create.length ==0) {
                return res.status(404).send(new HttpResponse("Error", "Account not exists", null));
            }
            return res.send(new HttpResponse("OK", "Clocked Account", null));
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
            return res.send(new HttpResponse("OK", "Account updated success", null));
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