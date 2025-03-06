describe("Add and Checkout of Product", () => {
    beforeEach(() => {
        cy.login("standard_user", "secret_sauce");  // 
    });
    it("Add product to cart ",()=>{
        const expectedProductName = "Sauce Labs Backpack" ;
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get(".shopping_cart_badge", { timeout: 5000 }) 
          .should("be.visible")
          .and("contain", "1")
        cy.get(".shopping_cart_link").click() ;
        cy.get(".inventory_item_name").should("have.text", expectedProductName);
  
        cy.get("#checkout").click();
        cy.get("#first-name").type("Dhananjay");
        cy.get("#last-name").type("Poul");
        cy.get("#postal-code").type("123456");
         cy.get("#continue").click();
         cy.get("#finish").click();
        });

});