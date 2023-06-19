describe('계산기 앱 테스트', () => {
  beforeEach('페이지 방문', () => {
    cy.visit('../../index.html');
  })

  it('디스플레이에 기본적으로 숫자 000이 표시된다.', () => {
    cy.get('#number-display').invoke('text').should('eq', '000');

  });
})