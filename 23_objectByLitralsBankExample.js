console.log(`Creating objects for various banks`);
const sbiBank= {
    bankName: "State Bank of India",
    location: "Masalwadi",
    accNo: 885095625854,
    ifsc: "SBI000145114",
    intrestRate: "5%",
    showDetails: function(){
        console.log(` Bank Name= ${sbiBank.bankName}\n Location= ${sbiBank.location}\n Acc. No= ${sbiBank.accNo}\n IFSC= ${sbiBank.ifsc}\n Intrest Rate= ${sbiBank.intrestRate}`);
    }
}
console.log(`========================= SBI Bank Details ===============================`);
sbiBank.showDetails()

const axisBank= {
    bankName: "Axis Bank",
    location: "Morgaon",
    accNo: 885095625854,
    ifsc: "AXIS000145114",
    intrestRate: "10%",
    showDetails: function(){
        console.log(` Bank Name= ${axisBank.bankName}\n Location= ${axisBank.location}\n Acc. No= ${axisBank.accNo}\n IFSC= ${axisBank.ifsc}\n Intrest Rate= ${axisBank.intrestRate}`);
    }
}
console.log(`========================= Axis Bank Details ===============================`);
axisBank.showDetails()


const hdfcBank= {
    bankName: "HDFC Bank",
    location: "Morgaon",
    accNo: 885095625854,
    ifsc: "HDFC000145114",
    intrestRate: "16%",
    showDetails: function(){
        console.log(` Bank Name= ${hdfcBank.bankName}\n Location= ${hdfcBank.location}\n Acc. No= ${hdfcBank.accNo}\n IFSC= ${hdfcBank.ifsc}\n Intrest Rate= ${hdfcBank.intrestRate}`);
    }
}
console.log(`========================= HDFC Bank Details ===============================`);
hdfcBank.showDetails()


const yesBank= {
    bankName: "Yes Bank",
    location: "Baramati",
    accNo: 885095625854,
    ifsc: "YES000145114",
    intrestRate: "26%",
    showDetails: function(){
        console.log(` Bank Name= ${yesBank.bankName}\n Location= ${yesBank.location}\n Acc. No= ${yesBank.accNo}\n IFSC= ${yesBank.ifsc}\n Intrest Rate= ${yesBank.intrestRate}`);
    }
}
console.log(`========================= YES Bank Details ===============================`);
yesBank.showDetails()
