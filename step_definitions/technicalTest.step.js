const { I, technicalTestPage } = inject();
const { WaitTask } = require("puppeteer");

//User Create Order
Given('I am on login page', () => {
  // From "features\technicalTest.feature" {"line":6,"column":5}
  I.amOnPage('https://www.jamtangan.com/login');
  I.wait(10);
});

When('I input valid email on login page', () => {
  // From "features\technicalTest.feature" {"line":7,"column":5}
  technicalTestPage.fillLogin('baypark2494@gmail.com');
  I.wait(5);
});

When('I input valid password', () => {
  // From "features\technicalTest.feature" {"line":7,"column":5}
  technicalTestPage.fillPassword('2494B@ypark');
  I.wait(5);
});

When('I click button Masuk on login page', () => {
  // From "features\technicalTest.feature" {"line":8,"column":5}
  technicalTestPage.clickLogin();
  I.wait(10);
});

// When('I click button Kirim Via SMS on verification method', () => {
//   // From "features\technicalTest.feature" {"line":9,"column":5}
//   technicalTestPage.clickOtpSms();
//   I.wait(10);
// });

When('I input Alexandre Christie AC 9205 MC LBRBA Chronograph Men on search field', () => {
  // From "features\technicalTest.feature" {"line":10,"column":5}
  technicalTestPage.fillSearchingProduct('Alexandre Christie AC 9205 MC LBRBA Chronograph Men');
  I.wait(3);
});

When('I click button search', () => {
  // From "features\technicalTest.feature" {"line":11,"column":5}
  technicalTestPage.clickSearchProduct();
  I.Wait(8)
});

When('I click product detail', () => {
  // From "features\technicalTest.feature" {"line":12,"column":5}
  technicalTestPage.clickProductdetail();
});

When('I click button beli sekarang', () => {
  // From "features\technicalTest.feature" {"line":13,"column":5}
  technicalTestPage.clickBeli();
});

When('I click button lanjutkan', () => {
  // From "features\technicalTest.feature" {"line":14,"column":5}
  technicalTestPage.clickLanjutkan();
});

When('I selected pilih pengiriman', () => {
  // From "features\technicalTest.feature" {"line":15,"column":5}
  technicalTestPage.clickPilihPengiriman();
});

When('I choose JNE reg', () => {
  // From "features\technicalTest.feature" {"line":16,"column":5}
  technicalTestPage.clickPilihEkspedisi();
});

When('I click button pilih voucher', () => {
  // From "features\technicalTest.feature" {"line":17,"column":5}
  technicalTestPage.clickPilihVoucher();
});

When('I input voucher code BEBAS10', () => {
  // From "features\technicalTest.feature" {"line":18,"column":5}
  technicalTestPage.fillSearchingVoucher('BEBAS10');
  I.wait(3);
});

When('I click button cari voucher', () => {
  // From "features\technicalTest.feature" {"line":19,"column":5}
  technicalTestPage.clickCariVoucher();
});

When('I click button pakai voucher', () => {
  // From "features\technicalTest.feature" {"line":20,"column":5}
  technicalTestPage.clickPakaiVoucher();
});

When('I click button Pilih Pembayaran', () => {
  // From "features\technicalTest.feature" {"line":21,"column":5}
  technicalTestPage.clickPilihPembayaran();
});

When('I click virtual account metode', () => {
  // From "features\technicalTest.feature" {"line":22,"column":5}
  technicalTestPage.clickMetodeVA();
});

When('I choose permata virtual account', () => {
  // From "features\technicalTest.feature" {"line":23,"column":5}
  technicalTestPage.clickPilihVA();
});

When('I click button order sekarang', () => {
  // From "features\technicalTest.feature" {"line":24,"column":5}
  technicalTestPage.clickOrderButton();
  I.wait(8);
});

Then('I will see order success page with total amount', () => {
  // From "features\technicalTest.feature" {"line":25,"column":5}
  I.see('Rp1.892.750');
});

When('I click button cek pesanan saya', () => {
  // From "features\technicalTest.feature" {"line":26,"column":5}
  technicalTestPage.clickPesananSaya();
  I.wait(8);
});

When('I click button cek rincian', () => {
  // From "features\technicalTest.feature" {"line":27,"column":5}
  technicalTestPage.clickRincianPesanan();
});

Then('I will go to page rincian pesanan page with total amount', () => {
  // From "features\technicalTest.feature" {"line":28,"column":5}
  I.see('Rp1.892.750');
});