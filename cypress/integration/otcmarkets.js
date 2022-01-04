import home from "../fixtures/home.json";
import stocks from "../fixtures/stocks.json";
import quote from "../fixtures/quote.json";
import details from "../fixtures/details.json";

describe("OTC test", () => {

  const companies = [
    {symbol: "OTCM",
    name: "OTC Markets Group Inc."
    },
    {symbol: "RHHBY",
    name: "Roche Holding Ltd"
    },
    {symbol: "ADBCF",
    name: "ADBRI Limited"
    }
  ]

  beforeEach(() => {
    cy.visit("https://www.otcmarkets.com");
    cy.contains("OTC Markets", { timeout: 10000 });
    cy.get(home.accept_btn).click()
  });

  companies.forEach((company) => {
    it(`Search for ${company["symbol"]} companies`, () => {
      cy.get(home.search_fld)
        .eq(0)
        .clear()
        .type(company["symbol"])
        .wait(2000)
      cy.contains(company["name"]).click({force: true})
      cy.url().should('include', `/stock/${company["symbol"]}/overview`)
      cy.xpath(stocks.quote_btn).click()
      cy.url().should('include', `/stock/${company["symbol"]}/quote`)
      cy.wait(1000)
      // Capture screenshots
      cy.xpath(quote.open_price_fld, { timeout: 50000 }).eq(0).screenshot(`open_price_${company["symbol"]}`, { padding: 20 })
      cy.xpath(quote.market_cap_fld).eq(0).screenshot(`market_cap_${company["symbol"]}`, { padding: 20 })
      // Assert Company name and symbol
      cy.get("h1").should("contain", company["name"])
      cy.get("h1").should("contain", company["symbol"])
      // Assert Market caps
      cy.xpath(quote.market_cap_fld).eq(0).then(($elem) => {
        const quote_market_cap = $elem.text()
        cy.xpath(stocks.security_details_btn).click()
        cy.xpath(details.market_cap_fld).eq(0).then(($elem) => {
          const security_market_cap = $elem.text()
          expect(quote_market_cap).to.equal(security_market_cap)
        })
        // Print "Market Cap $x on $date"
        cy.xpath(details.date_fld).eq(0).then(($elem) => {
          const date = $elem.text()
          cy.log("Market Cap: $", quote_market_cap, "on", date)
        })
      })
    });
  });
});
