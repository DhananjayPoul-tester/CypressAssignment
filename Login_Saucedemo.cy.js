describe("Login functionality check",()=>{
beforeEach(()=>{
    cy.visit("https://www.saucedemo.com/");
});
// This is positive test where we log in with correct credentials and we verify logo of"swag lab"
it("should login successfully and verify title -Positive Test",()=>{
cy.get("#user-name").type("standard_user");
cy.get("#password").type("secret_sauce");
cy.get("#login-button").click();
cy.title().should("eq", "Swag Labs"); 
})
// in this we verified error message without entering username 
it("test with empty user-name",()=>{
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("h3[data-test='error']").should('be.visible').and('contain','Epic sadface: Username is required');
});
// in this field we verified error message without entering password 
it("test with empty password",()=>{
    cy.get("#user-name").type("standard_user");
    cy.get("#login-button").click();
    cy.get("h3[data-test='error']").should('be.visible').and('contain',"Epic sadface: Password is required");
})
// this is negative test in which we enter incorrect credentials and verification of error message 
it.only("test with incorrect credentials",()=>{
    cy.get("#user-name").type("standard_use");
    cy.get("#password").type("secret_sace");
    cy.get("#login-button").click();
    cy.get("h3[data-test='error']").should('be.visible').and('contain',"Epic sadface: Username and password do not match any user in this service");

})
})