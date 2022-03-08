---
title: '웹사이트 레이아웃으로 960픽셀 너비를 권장하는 이유는?'
tags:
  - UI설계
---

## 웹사이트 레이아웃으로 960픽셀을 권장하는 이유

> 1024x768 해상도가 기본 규격이던 시절에 정립된 디자인

![resolution-figure](https://ww.namu.la/s/5f35ff4dbfaf1f21c5f7264233b08de13309a574c83de332f2ccbc5bcd150b81a02e112a9c745fcc11fd17b761c1dee57f861ab706587d3b241982aa84914b5470905286c6824345a15cf38d19985961cd3552e79259dc1d90e417bd317c4afdc11b7ea9ddfb632a453c70b0fa9851f6)

브라우저에서 수직 스크롤바가 생기는 경우, 20픽셀 정도를 사용하게 된다.

따라서 1024x768 해상도 기준, 1000픽셀 정도가 실질적인 웹사이트 너비다.

웹사이트에 표시할 다양한 요소를 구현하기 위해서는 다양한 정수 값으로 나눠지는 정수가 유리하다.

960은 1000이하 정수 중에 가장 다양한 약수를 가지기 때문에 유연하게 그리드 레이아웃을 활용할 수 있다

```
960의 약수:
1  2  3  4  5  6  8  10  12  15  16  20  24  30  32  40  48  60  64  80  96  120  160  192  240  320  480  960

1000의 약수:
1  2  4  5  8  10  20  25  40  50  100  125  200  250  500  1000
```

## 그리드 시스템(Grid System)

> 레이아웃을 돕는 CSS 도구

요소 박스들의 배치와 정렬을 쉽게 처리하기 위해 만든 CSS 도구다

## 2021년 인기있는 해상도 순위

1. 1920×1080 – 21.04%
2. 1366×768 – 20.48%ㄴ
3. 1536×864 – 10.05%
4. 1440×900 – 6.17%
5. 1280×720 – 5.79%
6. 1600×900 – 3.68%

---

### 참고자료

- [Stackoverflow, Why width 960px?](https://stackoverflow.com/questions/7415758/why-width-960px)

- [Blog, What are the best screen sizes for responsive web design in 2022?](https://www.hobo-web.co.uk/best-screen-size/)

- [Docs, Responsive layout grid](https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins)
