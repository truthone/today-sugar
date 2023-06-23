describe('계산기 앱 테스트', () => {
  beforeEach('페이지 방문', () => {
    cy.visit('../../index.html');
  });

  it('디스플레이에 기본적으로 숫자 000이 표시된다.', () => {
    cy.get('#number-display').invoke('text').should('eq', '000');
  });

  describe('- 연산 결과는 최소 000까지만 표기된다.', () => {
    it('숫자 000일때 버튼 -1 클릭하면 000이 표시된다.', () => {
      cy.get('.decrease').first().click();
      cy.get('#number-display').invoke('text').should('eq', '000');
    });

    it('숫자 000일때 버튼 -5 클릭하면 000이 표시된다.', () => {
      cy.get('.decrease').eq(1).click();
      cy.get('#number-display').invoke('text').should('eq', '000');
    });

    it('숫자 000일때 버튼 -10 클릭하면 000이 표시된다.', () => {
      cy.get('.decrease').eq(2).click();
      cy.get('#number-display').invoke('text').should('eq', '000');
    });

    it('숫자 000일때 버튼 -30 클릭하면 000이 표시된다.', () => {
      cy.get('.decrease').eq(3).click();
      cy.get('#number-display').invoke('text').should('eq', '000');
    });
  });

  describe('+ 연산 결과는 최대 999까지만 표기된다.', () => {
    it('버튼 +1을 클릭해 연산한 값은 최대 999까지 표기된다. ', () => {
      cy.get('.increase')
        .first()
        .then((buttonOne) => {
          for (let i = 0; i < 1001; i++) {
            buttonOne.click();
          }
          cy.get('#number-display').invoke('text').should('eq', '999');
        });
    });

    it('버튼 +5을 클릭해 연산한 값은 최대 999까지 표기된다. ', () => {
      cy.get('.increase')
        .eq(1)
        .then((buttonOne) => {
          for (let i = 0; i < 1001; i++) {
            buttonOne.click();
          }
          cy.get('#number-display').invoke('text').should('eq', '999');
        });
    });

    it('버튼 +10을 클릭해 연산한 값은 최대 999까지 표기된다. ', () => {
      cy.get('.increase')
        .eq(2)
        .then((buttonOne) => {
          for (let i = 0; i < 101; i++) {
            buttonOne.click();
          }
          cy.get('#number-display').invoke('text').should('eq', '999');
        });
    });

    it('버튼 +30을 클릭해 연산한 값은 최대 999까지 표기된다. ', () => {
      cy.get('.increase')
        .eq(3)
        .then((buttonOne) => {
          for (let i = 0; i < 34; i++) {
            buttonOne.click();
          }
          cy.get('#number-display').invoke('text').should('eq', '999');
        });
    });
  });
});
