/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
  })

        //Test if the main page is loaded
  it('Navigate to Despe noi page', () => {
        //Click on the link to Despre noi page
    cy.get('a[href*="/about"]').click()
        //Check if the url is correct
    cy.url().should('contains','/about')
        //Check if the title is correct
    cy.get('.mb-5 h3.card-title').should('have.text', 'Despre noi')
  })

})

describe('Test Case 1', () => {

  // Testul numarul 1
  it('Verify that all header’s elements navigate to the correct page', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-bank').click({force:true});
      cy.get('.icon-square-pin').click();
      cy.get('.icon-bag-16').click();
      cy.get('.icon-paper').click();
      cy.get('.icon-email-85').click();
      cy.get('.icon-delivery-fast').click();
      cy.get('.icon-single-02').click();
      
  })

})

describe('Test Case 2', () => {

  // Testul numarul 2
  it('Verify that on “Top Voluntari” page the map and at least one volunteer is displayed.', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-square-pin').click();
      cy.get(':nth-child(1) > .card > .card-body').should('exist');
      
      
  })

})

describe('Test Case 3', () => {

  // Testul numarul 3
  it('Verify the user is able to Zoom in or out the map', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-square-pin').click();
      cy.get('[aria-label="Zoom in"]').type('{enter}');
      cy.get('[aria-label="Zoom out"]').type('{enter}');
  })

})

describe('Test Case 4', () => {

  // Testul numarul 4
  it('Verify that Login functionality works with valid credentials.', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();   
  })

})

describe('Test Case 5', () => {

  // Testul numarul 5
  it('Verify that Login functionality works with invalid credentials', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018689');
      cy.get('input[name=password]').type('testaremanuala');
      cy.get('.btn-primary').click();   
  })

})


describe('Test Case 6', () => {

    // Testul numarul 6
    it('Verify that a user is able to add a new Nevoie recomandata.', () => {
        cy.visit('https://iwanttohelp.bim.assistcloud.services/auth/login');
        cy.get('.icon-single-02').click();
        cy.get('input[name=phone_number]').type('0752599018');
        cy.get('input[name=password]').type('testareautomata');
        cy.get('.btn-primary').click();
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get('.btn').click({force:true});
        cy.get('.col-md-8').should('exist');
        cy.get('[name="contact_first_name"]').type('Logofatu');
        cy.get('[name="contact_last_name"]').type('Iuliana');
        cy.get('[name="contact_phone_number"]').type('0752599018');
        cy.get('[class="vs__search"]').click();
        cy.get('#vs1__option-2').click();
        cy.get('[name="description"]').type('Boli cronice');
        cy.get('[class="form-control pac-target-input"]').type('Principala');
        cy.get('[name="details"]').type('Numarul 1069');
        cy.get('[name="county"]').type('Suceava');
        cy.get('[name="city"]').type('Suceava');
        cy.get('[name="postal_code"]').type('727225');
        cy.get('[class="btn btn-primary"]').click();
        cy.get('.alert').should('exist');
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get(':nth-child(3) > .nav-link > p').should('exist');
    })

})

describe('Test Case 7', () => {

  // Testul numarul 7
  it('Verify that the Descriere field is required.', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
      cy.get(':nth-child(3) > .nav-link > p').click();
      cy.get('.icon-simple-add').click();
      cy.get('input[name=contact_first_name]').type('Iuliana');
      cy.get('input[name=contact_last_name]').type('Logofatu');
      cy.get('input[name=contact_phone_number]').type('0752599018');
      cy.get('.vs__open-indicator').click().get('#vs1__option-1').click();
      cy.get('input[placeholder="Nume strada, numar ..."]').type('Principala, 1069');
      cy.get('input[name=details]').type('Etaj 2, Apartament 6');
      cy.get('input[name=county]').type('Suceava');
      cy.get('input[name=city]').type('Dumbraveni');
      cy.get('input[name=postal_code]').type('727225');
      cy.get('.btn').click();
      cy.get(':nth-child(3) > .nav-link > p').click();
      cy.get('.errors > .text-left').should('exist');
  })

})

describe('Test Case 8', () => {

  // Testul numarul 8
  it('Verify that the user is able to use “Vizualizeaza” functionality', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
      cy.get(':nth-child(3) > .nav-link > p').click();
      cy.get(':nth-child(1) > [aria-colindex="6"] > div > .fa-eye').click();
      cy.get('.title').should('exist');
      cy.get('.card-header > p').should('exist');
  })

})

describe('Test Case 9', () => {

  // Testul numarul 9
  it('Verify that the user is able to use “Sterge” functionality', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
      cy.get(':nth-child(3) > .nav-link > p').click();
      cy.get(':nth-child(1) > [aria-colindex="6"] > div > .fa-trash-alt').click();
      cy.get('#delete_modal___BV_modal_header_').should('exist');
      cy.get('#delete_modal___BV_modal_footer_ > .btn-primary').click();
      })
})

describe('Test Case 10', () => {

  // Testul numarul 10
  beforeEach(() => {
    //Navigate to main mage
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
})
  it('Verify the search functionality ', () => {
      cy.get(':nth-child(3) > .nav-link > p').click();
      cy.get('#__BVID__155').click();
      cy.get('input[placeholder="Type here to search"]').type('boli cronice').type('{enter}');
      cy.get(".table")
      .find('tr').its('length').should('be.gt', 3);
      cy.get('input[placeholder="Type here to search"]').clear().type('iuliana').type('{enter}');
      cy.get(".table")
      .find('tr').its('length').should('be.gt', 3);
      cy.get('input[placeholder="Type here to search"]').clear().type('principala').type('{enter}');
      cy.get(".table")
      .find('tr').its('length').should('be.gt', 3);
      cy.get('input[placeholder="Type here to search"]').clear().type('0752').type('{enter}');
      cy.get(".table")
      .find('tr').its('length').should('be.gt', 3);
      })
})



describe('Test Case 11', () => {

  // Testul numarul 11
  beforeEach(() => {
    //Navigate to main mage
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
})
  it('Verify that the user is able to use “Vizualizeaza” functionality', () => {
      cy.get(':nth-child(3) > .nav-link > p').click();
      cy.get(':nth-child(30) > [aria-colindex="2"] > div').click();
      cy.get(':nth-child(30) > [aria-colindex="6"] > div > .fa-eye').click();
      cy.get('.col-md-8').should('exist');
      cy.get('.title').should('exist');
      cy.get('.card-header > :nth-child(2)').should('exist');
      })
})

describe('Test Case 12', () => {

  // Testul numarul 12
  beforeEach(() => {
    //Navigate to main mage
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
})
  it('Verify “Aplica” functionality ', () => {
    cy.get('.nav > :nth-child(2) > .nav-link').click();
    cy.get('#__BVID__155').type('sda').type('{enter}');
    cy.get(':nth-child(1) > [aria-colindex="5"] > div > .fa-user-check').click();
    cy.get('#apply_modal___BV_modal_body_').should('exist');
    cy.get('.btn-primary').click();
    cy.get('.alert').should('exist');

      })
})

describe('Test Case 13', () => {

  // Testul numarul 13
  beforeEach(() => {
    //Navigate to main mage
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
})
  it('Verify “Completeaza” functionality', () => {
    cy.get('.nav > :nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > [aria-colindex="5"] > div > .fa-check').click({force: true});
    cy.get('[class="vue-star-rating-star"]').click({multiple: true});
    cy.get('[name="comment"]').type('Bravo');
    cy.get('.btn-primary').click().wait(3000);
  })
})

describe('Test Case 14', () => {

  // Testul numarul 14
  beforeEach(() => {
    //Navigate to main mage
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
})
  it('Verify that the user is able to properly logout.', () => {
    cy.get(':nth-child(9) > .nav-link').click();
  })
})

describe('Test Case 18', () => {

  // Testul numarul 18
  beforeEach(() => {
    //Navigate to main mage
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
})
  it('Check that the user is able to see the person they helped to, form.', () => {
    cy.get(':nth-child(5) > .nav-link > p').click();
    cy.get(':nth-child(2) > [aria-colindex="6"] > div > .fas').click();
    cy.get('.col-md-8 > .card > .card-body').should('exist');
  })
})

describe('Test Case 19', () => {

  // Testul numarul 19
  beforeEach(() => {
    //Navigate to main mage
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
})
  it('Verify that the user is able to create a "Special Case".', () => {
    cy.get(':nth-child(4) > .nav-link > p').click();
    cy.get('.btn').click();
    cy.get('#__BVID__187').type("Persoana cu handicap");
    cy.get('.btn').click(); 
    cy.get('.alert').should('exist');
  })
})

describe('Test Case 20', () => {

  // Testul numarul 20
  beforeEach(() => {
    //Navigate to main mage
      cy.visit('https://iwanttohelp.bim.assistcloud.services/');
      cy.get('.icon-single-02').click();
      cy.get('input[name=phone_number]').type('0752599018');
      cy.get('input[name=password]').type('testareautomata');
      cy.get('.btn-primary').click();
})
  it('Verify that the user is able to delete a "Special Case".', () => {
    cy.get(':nth-child(4) > .nav-link > p').click();
    cy.get(':nth-child(1) > [aria-colindex="4"] > div > .fa-trash-alt').click();
    cy.get('#delete_case_modal___BV_modal_footer_ > .btn-primary').click();
  })
})







