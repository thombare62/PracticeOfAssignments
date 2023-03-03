class Bank {
    constructor(bankName, location, accountNo, intrestRate) {
      this.bankName = bankName;
      this.location = location;
      this.accountNo = accountNo;
      this.intrestRate = intrestRate;
    }
  }
  
  let axis_bank = new Bank(
    "Axis Bank",
    "KoparKhairane",
    "1215235560",
    "AXIS12345678",
    "12%"
  );
  let sbi_bank = new Bank(
    "SBI Bank",
    "Baramati",
    "2145235560",
    "SBI33345678",
    "17%"
  );
  let icici_bank = new Bank(
    "ICICI Bank",
    "Morgaon",
    "3215235560",
    "ICIC22345678",
    "11%"
  );
  let kotak_bank = new Bank(
    "Kotak Bank",
    "KoparKhairane",
    "4545235560",
    "KOTA44345678",
    "9.5%"
  );
  let hdfc_bank = new Bank(
    "HDFC Bank",
    "Panvel",
    "7845235560",
    "AHDFC77745678",
    "16.70%"
  );
  let panjab_bank = new Bank(
    "Bank of Panjab",
    "Pune",
    "5555235560",
    "PAN88845678",
    "10.75%"
  );
  
  let mapOfBanks = new Map();
  mapOfBanks.set(axis_bank.accountNo, axis_bank);
  mapOfBanks.set(sbi_bank.accountNo, sbi_bank);
  mapOfBanks.set(icici_bank.accountNo, icici_bank);
  mapOfBanks.set(kotak_bank.accountNo, kotak_bank);
  mapOfBanks.set(hdfc_bank.accountNo, hdfc_bank);
  mapOfBanks.set(panjab_bank.accountNo, panjab_bank);
  
  let m = mapOfBanks.forEach((value, key) => {
    console.log(
      `Bank Name==> ${value.bankName}, Acc No==> ${key}, Intrest Rate==> ${value.intrestRate}`
    );
  });
  