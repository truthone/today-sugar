# today-sugar

- 당신의 하루 당 섭취량을 기록해보세요! 생각보다 많은 양에 놀라실거에요.

## [🧨데모링크🧨](https://truthone.github.io/today-sugar/)

---
## 1주차 미션: 핵심 기능 및 테스트 명세

- proto 
- <img src="https://file.notion.so/f/s/ed0b5537-3ded-4cbb-99f2-4a5abcdcfc8f/Untitled.png?id=ced47843-fa41-46cb-8f18-e7fa8315d2de&table=block&spaceId=9d7f77b9-5b66-4153-b88c-edecfb1fb153&expirationTimestamp=1687576085862&signature=wCke5AcgIORI2_1qyghjC0725Kc0hRhEK91CUj9Tjn8&downloadName=Untitled.png" width="150px"></img>
```
1. 사이드 프로젝트: 하루슈가

2. 핵심 기능 정의
    1. 사용자는 오늘 하루 당 섭취량을 정수로 입력할 수 있다.
   2. 로그인이 가능하며 유저마다 데이터를 저장할 수 있다.
   3. 입력 받은 섭취량을 권장량까지 얼마나 도달했는지 (%) 게이지로 보여준다. (25g 을 기준으로 온도계 게이지처럼 올라간다.)
   4. (섭취양, 섭취시간, 섭취음식이름)을 저장 할 수 있다.
   5. 입력은 하루에 여러번 가능하다.
   6. 캘린더 형태로 하루총섭취 당이 표기 된다. 
   7. 캘린더 날짜 클릭시, 기록표가 표시된다.

3. 테스트 명세
    - 첫 페이지에 현재 오늘 입력 저장한 당 g 숫자가 표시된다.
   - 첫 입력시 0g으로 표시한다.
   - 입력은 정수만 가능하다.
   - 입력할 때마다 입력시간, 섭취당, 섭취식품이름이 저장된다.
   - 섭취당은 필수값이다.
   - 섭취 식품 이름은 옵션이다.
   - 입력시간은 자동기록되며 기록된다.
   - 입력시간 표시는 24시표기법으로 분까지 표기된다.
   - 00:00가 되면 오늘 섭취 당은 0g 이된다.
   - 저장된 값은 입력시간,섭취당, 섭취식품이름 수정 가능하다.
   - 캘린더는 한달 단위로 표시된다.
   - 캘린더를 클릭하면 클릭한 날짜의 데이터가 표시된다.
   - 캘린더엔 어제까지 기록이 표기된다.
   - 캘린더에 그날 입력한 총 량이 숫자g 으로 표시된다.
   - 입력을 하지 않은 날은 캘린더에 빈칸으로 표시한다.
```