function calculateBill (price, vat, tip) {
    
    if ((price, vat, tip) === null) {
        return "error";
    }

    const total = price + vat + tip;

    if (isNaN(total)) {
        return "error";
    } else {
        return "£" + JSON.stringify(total);
    }
};

module.exports = calculateBill;