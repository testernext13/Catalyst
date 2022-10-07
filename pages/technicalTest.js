const { I } = inject();

module.exports = {

  // insert your locators and methods here
  loginPhoneNumberField:{
    PhoneNumber: {name: 'username'}
  },

  loginPasswordField:{
    Password: {name: 'password'}
  },

  // loginButton:{
  //   buttonLogin: {css: 'button.mw-ripple-effect.btn.rounded.text-sm.relative.overflow-hidden.w-full.btn-filled.text-neutral-1000.bg-primary-1.uppercase.qa-login-button'}
  // },

  otpSmsButton:{
    buttonOtpSms: {css: '.qa-otp-.text-xs.text-primary-1.cursor-pointer.qa-otp-sms-button-button'}
  },

  searchingField:{
    fieldSearch: {css: 'input.tracking-wide.border-none.bg-transparent.w-full.relative.text-sm.placeholder-neutral-500.text-neutral-300.search-bar.h-10.pt-6.pb-2'}
  },

  searchButton:{
    buttonSearch: {css: 'fieldset[class="text-input border-none relative p-0"] div[class="option-wrapper"]'}
  },

  productDetailCard:{
    detailProductCard: {css: '[data-testid="product-card-test"]'}
  },

  beliButton:{
    buttonBeli: {css: 'button.Beli sekarang'}
  },

  lanjutkanButton:{
    buttonLanjutkan: {css: 'button.Lanjutkan'}
  },

  pilihPengirimanButton:{
    buttonPilihPengiriman: {css: '.uppercase tracking-wider'}
  },

  pilihEkspedisi:{
    chooseEkspedisi: {css: '.li:nth-child(1)'}
  },

  pilihVoucherButton:{
    buttonPilihVoucher: {css: '.flex.items-center.justify-self-center.justify-center'}
  },

  searchingVoucherField:{
    fieldSearchVoucher: {css: 'input[placeholder=Masukan kode voucher]'}
  },

  cariVoucherButton:{
    buttonCariVoucher: {css: 'button[type=submit]'}
  },

  pakaiVoucherButton:{
    buttonPakaiVoucher: {Xpath: '//button[normalize-space()="PAKAI VOUCHER"]'}
  },

  pilihPembayaranButton:{
    buttonPilihPembayaran: {Xpath: '//button[normalize-space()="Pilih Pembayaran"]'}
  },

  metodeVirtualAccountButton:{
    buttonMetodeVA: {Xpath: '//p[normalize-space()="Virtual Account"]'}
  },

  pilihMetodePermataVA:{
    buttonPermataVA: {id: 'bank-VAPERMATA'}
  },

  orderSekarangButton:{
    buttonOrderSekarang: {Xpath: '//button[normalize-space()="order sekarang"]'}
  },

  cekPesananSayaButton:{
    buttonCekPesananSaya: {Xpath: '//button[normalize-space()="CEK PESANAN SAYA"]'}
  },

  cekRincianButton:{
    buttonCekRincian: {id: 'btn-order-detail'}
  },

  fillSearchingProduct(value){
    I.fillField(this.searchingField.fieldSearch, value);
    },

  fillSearchingVoucher(value){
    I.fillField(this.searchingVoucherField.fieldSearchVoucher, value);
    },
  
  fillLogin(value){
    I.fillField(this.loginPhoneNumberField.PhoneNumber, value);
  },

  fillPassword(value){
    I.fillField(this.loginPasswordField.Password, value);
  },

  clickLogin(){
    const login = locate('button').withText('Masuk');
    I.waitForElement({ xpath: login.value }, 30);
    I.click({ xpath: login.value });
  },

  clickOtpSms(){
    I.click(this.otpSmsButton);
    I.wait(10);
  },

  clickSearchProduct(){
    I.click(this.searchButton);
    I.wait(2);
  },

  clickProductdetail(){
    I.click(this.productDetailCard);
    I.wait(2);
  },

  clickBeli(){
    I.click(this.beliButton);
    I.wait(2);
  },

  clickLanjutkan(){
    I.click(this.lanjutkanButton);
    I.wait(2);
  },

  clickPilihPengiriman(){
    I.click(this.pilihPengirimanButton);
    I.wait(2);
  },

  clickPilihEkspedisi(){
    I.click(this.pilihEkspedisi);
    I.wait(2);
  },

  clickPilihVoucher(){
    I.click(this.pilihVoucherButton);
    I.wait(2);
  },

  clickCariVoucher(){
    I.click(this.cariVoucherButton);
    I.wait(2);
  },

  clickPakaiVoucher(){
    I.click(this.pakaiVoucherButton);
    I.wait(2);
  },

  clickPilihPembayaran(){
    I.click(this.pilihPembayaranButton);
    I.wait(2);
  },

  clickMetodeVA(){
    I.click(this.metodeVirtualAccountButton);
    I.wait(2);
  },

  clickPilihVA(){
    I.click(this.pilihMetodePermataVA);
    I.wait(2);
  },

  clickOrderButton(){
    I.click(this.orderSekarangButton);
    I.wait(5);
  },

  clickPesananSaya(){
    I.click(this.cekPesananSayaButton);
    I.wait(5);
  },

  clickRincianPesanan(){
    I.click(this.cekRincianButton);
    I.wait(5);
  },
}
