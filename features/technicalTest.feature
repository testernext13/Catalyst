Feature: Order flow

    As a new user, I want to be able to order with voucher new member

Scenario: User success order with voucher
    Given I am on login page
    And I input valid email on login page
    And I input valid password
    And I click button Masuk on login page
    # And I click button Kirim Via SMS on verification method
    And I input Alexandre Christie AC 9205 MC LBRBA Chronograph Men on search field
    And I click button search
    And I click product detail
    And I click button beli sekarang
    And I click button lanjutkan
    And I selected pilih pengiriman
    And I choose JNE reg
    And I click button pilih voucher
    And I input voucher code BEBAS10
    And I click button cari voucher
    And I click button pakai voucher
    And I click button Pilih Pembayaran
    And I click virtual account metode
    And I choose permata virtual account
    And I click button order sekarang
    And I will see order success page with total amount
    And I click button cek pesanan saya
    And I click button cek rincian
    Then I will go to page rincian pesanan page with total amount


