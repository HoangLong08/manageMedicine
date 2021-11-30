const query = require('../../config/database/db-connection');
const { multipleColumnSet } = require('../../util/common.utils');
class CustomerModel {
    tableCustomer = 'customers';
    tableInvoicesSell = 'invoices_sells';

    // LIST CUSTOMER
    ListCustomer = async ({customer_name})=>{
        let sql = `SELECT ${this.tableCustomer}.*,
        COUNT( ${this.tableInvoicesSell}.id_customer) AS 'number_sell',
         SUM( ${this.tableInvoicesSell}.is_payment) AS 'total_payment' 
         FROM  ${this.tableCustomer} LEFT JOIN  ${this.tableInvoicesSell}
         ON  ${this.tableCustomer}.customers_id =  ${this.tableInvoicesSell}.id_customer
         WHERE ${this.tableCustomer}.customers_name like '%${customer_name}%' 
         GROUP by  ${this.tableCustomer}.customers_id
         UNION
         SELECT ${this.tableCustomer}.*,
         COUNT( ${this.tableInvoicesSell}.id_customer) AS 'number_sell',
         SUM( ${this.tableInvoicesSell}.is_payment) AS 'total_payment' 
         FROM  ${this.tableCustomer} RIGHT JOIN  ${this.tableInvoicesSell}
         ON  ${this.tableCustomer}.customers_id =  ${this.tableInvoicesSell}.id_customer
         WHERE ${this.tableCustomer}.customers_name like '%${customer_name}%' 
         GROUP by  ${this.tableCustomer}.customers_id
         ;`;
         if(customer_name == null){
            sql = `SELECT ${this.tableCustomer}.*,
            COUNT( ${this.tableInvoicesSell}.id_customer) AS 'number_sell',
            SUM( ${this.tableInvoicesSell}.is_payment) AS 'total_payment' 
            FROM  ${this.tableCustomer} LEFT JOIN  ${this.tableInvoicesSell}
            ON  ${this.tableCustomer}.customers_id =  ${this.tableInvoicesSell}.id_customer
            GROUP by  ${this.tableCustomer}.customers_id
            UNION
            SELECT ${this.tableCustomer}.*,
            COUNT( ${this.tableInvoicesSell}.id_customer) AS 'number_sell',
            SUM( ${this.tableInvoicesSell}.is_payment) AS 'total_payment' 
            FROM  ${this.tableCustomer} RIGHT JOIN  ${this.tableInvoicesSell}
            ON  ${this.tableCustomer}.customers_id =  ${this.tableInvoicesSell}.id_customer
            GROUP by  ${this.tableCustomer}.customers_id ;`;
        }
        return await query(sql);
    }

    // GET BY ID
    CustomerByID = async (id)=>{
        let sql = `SELECT ${this.tableCustomer}.*,
        COUNT( ${this.tableInvoicesSell}.id_customer) AS 'number_sell',
        SUM( ${this.tableInvoicesSell}.is_payment) AS 'total_payment' 
        FROM  ${this.tableCustomer} LEFT JOIN  ${this.tableInvoicesSell}
        ON  ${this.tableCustomer}.customers_id =  ${this.tableInvoicesSell}.id_customer
        WHERE ${this.tableCustomer}.customers_id = ${id}
        GROUP by  ${this.tableCustomer}.customers_id
        UNION
        SELECT ${this.tableCustomer}.*,
        COUNT( ${this.tableInvoicesSell}.id_customer) AS 'number_sell',
        SUM( ${this.tableInvoicesSell}.is_payment) AS 'total_payment' 
        FROM  ${this.tableCustomer} RIGHT JOIN  ${this.tableInvoicesSell}
        ON  ${this.tableCustomer}.customers_id =  ${this.tableInvoicesSell}.id_customer
        WHERE ${this.tableCustomer}.customers_id = ${id}
        GROUP by  ${this.tableCustomer}.customers_id ;`;
        return await query(sql);
    }


    // CREATE CUSTOMER
    InsertCustomer = async ({ customers_name, customers_phone })=>{
        let sql = `
        INSERT INTO ${this.tableCustomer}
        (customers_name, customers_phone)
         VALUES ('${customers_name}','${customers_phone}')
        `;
        return await query(sql);
    }


    // UPDATE CUSTOMER
    UpdateCustomer = async ({ customers_id, customers_name, customers_phone })=>{
        let sql = `
        UPDATE customers SET 
        customers_name='${customers_name}',customers_phone='${customers_phone}',
        customers_updated_at=current_timestamp() WHERE customers_id = ${customers_id}`;
        return await query(sql);
    }
    

}

module.exports = new CustomerModel;