describe('계산기 앱 테스트', () => {
  beforeEach('페이지 방문', () => {
    cy.visit('../../index.html');
  });

  it('디스플레이에 기본적으로 숫자 000이 표시된다.', () => {
    cy.get('#number-display').invoke('text').should('eq', '000');
  });

  // 숫자 감소 버튼 테스트
  it('숫자 000일때 버튼 -1 클릭하면 000이 표시된다.', () => {
    cy.get('.decrease').first().click();
    cy.get('#number-display').invoke('text').should('eq', '000');
  });

  it('숫자 000일때 버튼 -5 클릭하면 000이 표시된다.', () => {
    cy.get('.decrease').eq(1).click();
    cy.get('#number-display').invoke('text').should('eq', '000');
  });

  // it('숫자 000일때 버튼 -10 클릭하면 000이 표시된다.', () => {
  //   cy.get('.decrease').eq(2).click();
  //   cy.get('#number-display').invoke('text').should('eq', '000');
  // });

  // it('숫자 000일때 버튼 -30 클릭하면 000이 표시된다.', () => {
  //   cy.get('.decrease').eq(3).click();
  //   cy.get('#number-display').invoke('text').should('eq', '000');
  // });
  //숫자 증가 버튼 테스트
  it('숫자 999일 때 버튼 +1 클릭하면 999가 표시된다.', () => {
    cy.get('.increase')
      .first()
      .click(() => {
        cy.get('#number-display').should(($num) => {
          expect($num.text()).to.eq('999');
        });
      });
    // cy.get('button')
    //   .then(($btn) => {
    //     const cls = $btn.attr('class');

    //     cy.wrap($btn).click().should('not.have.class', cls).find('i');
    //     // since there is no explicit return
    //     // the last Cypress command's yield is yielded
    //   })
    //   .should('have.class', 'spin'); // assert on i element
  });

  // it('숫자 999일때 버튼 +5 클릭하면 000이 표시된다.', () => {
  //   cy.get('#number-display').invoke('text', '990');
  //   cy.get('.increase').eq(1).click();
  //   cy.get('#number-display').invoke('text').should('eq', '995');
  // });

  // it('숫자 999일때 버튼 +10 클릭하면 000이 표시된다.', () => {
  //   cy.get('#number-display').invoke('text', '999');
  //   cy.get('.increase').eq(2).click();
  //   cy.get('#number-display').invoke('text').should('eq', '999');
  // });

  // it('숫자 999일때 버튼 +30 클릭하면 000이 표시된다.', () => {
  //   cy.get('#number-display').invoke('text', '999');
  //   cy.get('.increase').eq(3).click();
  //   cy.get('#number-display').invoke('text').should('eq', '999');
  // });
});
