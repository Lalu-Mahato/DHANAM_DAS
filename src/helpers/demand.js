const XLSX = require('xlsx');
const emiAction = require('@services/emi/actions/emi');
const loanAction = require('@services/loan/actions/loan');
const prospectAction = require('@services/prospect/actions/prospect');
const productAction = require('../services/product/actions/product');
const bankBranchAction = require('../services/bank/actions/bank-branch');

const splitAndConvertDate = (date) => date.split('/').join('-');

const readExcelFile = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(sheet, {
        defval: null,
        raw: false,
    });
    return data;
};

const filterUniqueBranches = (data) => {
    const uniqueIds = new Set();
    return data.filter((branch) => {
        if (!uniqueIds.has(branch.Branch_Code)) {
            uniqueIds.add(branch.Branch_Code);
            return true;
        }
        return false;
    });
};

const filterUniqueProducts = (data) => {
    const uniqueIds = new Set();
    return data.filter((product) => {
        if (!uniqueIds.has(product.Product_Id)) {
            uniqueIds.add(product.Product_Id);
            return true;
        }
        return false;
    });
};

const saveBankBranches = (banks) => {
    banks.forEach(async (bank) => {
        const existingBank = await bankBranchAction.findByCode(bank.Branch_Code);
        if (!existingBank) {
            await bankBranchAction.create({
                code: bank.Branch_Code,
                name: bank.Branch_Name,
            });
        }
    });
};

const saveProducts = async (products) => {
    products.forEach(async (product) => {
        const existingProduct = await productAction.findByCode(product.Product_Id);
        if (!existingProduct) {
            await productAction.create({
                code: product.Product_Id,
                name: product.Product_Name,
            });
        }
    });
};

const saveProspectDetails = async (data) => {
    const prospect = {
        loan_account_number: data.Loan_Account_Number,
        name: data.Customer_Name,
        address: data.Customer_Address,
        mobile_number: data.Mobile_Number,
    };
    await prospectAction.create(prospect);
};

const saveLoanDetails = async (data) => {
    const disbursementDate = splitAndConvertDate(data.Loan_Disbursement_Date);

    const loan = {
        loan_account_number: data.Loan_Account_Number,
        amount_sanctioned: data.Loan_Amount_Disbursed,
        disbursement_date: new Date(disbursementDate),
        interest_rate: data.Roi,
        total_tenure: data.Total_Tenure,
        cif_id: data.Cif_Id,
        branch_code: data.Branch_Code,
        product_code: data.Product_Id,
    };
    await loanAction.create(loan);
};

const saveEmiDetails = async (data) => {
    const emiDueDate = splitAndConvertDate(data.Emi_Due_Date);
    const lastEmiDate = splitAndConvertDate(data.Last_Emi_Date);
    const lastPaymentDate = splitAndConvertDate(data.Last_Payment_Date);
    const emi = {
        loan_account_number: data.Loan_Account_Number,
        current_tenure: data.Current_Tenure,
        residual_tenure: data.Residual_Tenure,
        emi_amount: data.Emi_Amount,
        principal_amount: data.Principal_Amount,
        interest_amount: data.Interest_Amount,
        emi_due_date: new Date(emiDueDate),
        loan_outstanding: data.Loan_Outstanding,
        principal_outstanding: data.Principal_Outstanding,
        interest_outstanding: data.Interest_Outstanding,
        arrear_amount: data.Arrear_Amount,
        principal_arrear: data.Principal_Arrear,
        interest_arrear: data.Interest_Arrear,
        other_charges: data.Other_Charges,
        total_collection: data.Total_Amount_Collection,
        dpd_days: data.Dpd,
        unpaid_installment: data.UnPaid_Installments,
        total_installment: data.Total_Installments,
        last_payment_date: new Date(lastPaymentDate),
        last_paid_amount: data.Last_Paid_Amount,
        last_emi_date: new Date(lastEmiDate),
        branch_code: data.Branch_Code,
        product_code: data.Product_Id,
    };
    await emiAction.create(emi);
};

module.exports = {
    saveProducts,
    readExcelFile,
    saveEmiDetails,
    saveLoanDetails,
    saveBankBranches,
    filterUniqueBranches,
    filterUniqueProducts,
    saveProspectDetails,
};
