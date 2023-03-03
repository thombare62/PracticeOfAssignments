class Bank {
    constructor(bankName, accNO, location, ifscCode, interestRate) {
      this.bankName = bankName;
      this.accNO= accNO;
      this.location = location;
      this.ifscCode = ifscCode;
      this.interestRate = interestRate;
    }
  }
  let yesBank = new Bank("Yes Bank",17841645646749, "Masalwadi", "YES000145114", 5);
  let sbiBank = new Bank("State Bank of India",2784155645649, "Morgaon", "SBI000145114", 10);
  let mahBank = new Bank("Bank Of Maharashtra",37844471645649,"Masalwadi","MAHB000145114",11);
  let kotakBank = new Bank("Kotak Bank",4784114645649, "Surat", "KOTA000145114", 15);

  let mapOfBanks= new Map()
  mapOfBanks.set(yesBank.accNO, yesBank)
  mapOfBanks.set(sbiBank.accNO, sbiBank)
  mapOfBanks.set(mahBank.accNO, mahBank)
  mapOfBanks.set(kotakBank.accNO, kotakBank)

  const keysOfBank = mapOfBanks.keys();
  for (const iterator of keysOfBank) {
    const element = mapOfBanks.get(iterator);
    console.log(`Bank Name==> ${element.bankName}, Account No==> ${element.accNO}, Intrest Rate==> ${element.interestRate}`);
  }