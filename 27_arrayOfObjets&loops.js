class Bank {
    constructor(bankName, location, ifscCode, branchCode) {
      this.bankName = bankName;
      this.location = location;
      this.ifscCode = ifscCode;
      this.branchCode = branchCode;
    }
  }
  let yesBank = new Bank("Yes Bank", "Masalwadi", "YES000145114", 8850);
  let sbiBank = new Bank("State Bank of India", "Morgaon", "SBI000145114", 6584);
  let mahBank = new Bank("Bank Of Maharashtra","Masalwadi","MAHB000145114",7584);
  let kotakBank = new Bank("Kotak Bank", "Surat", "KOTA000145114", 1455);
  
  let arrayOfBanks= [yesBank, sbiBank, mahBank, kotakBank];
  console.log(`=============================================================================================================`);
  for (const bank of arrayOfBanks) {
      console.log(`Bank name: ${bank.bankName} and its location: ${bank.location}`);
  }
  console.log(`=============================================================================================================`);
  for (const bank of arrayOfBanks) {
      if (bank===kotakBank) {
          console.log(kotakBank);
      }
  }
  console.log(`=============================================================================================================`);
  for (let index = 0; index < arrayOfBanks.length; index++) {
      const element = arrayOfBanks[index];
      console.log(element);
  }
  console.log(`=============================================================================================================`);