---
title: '브라우저에서 웹문서를 로드하는 과정을 설명해보기'
tags:
  - 브라우저
---

## 브라우저 로딩 과정

> 브라우저가 웹문서를 표시하는 과정: 다운로드 -> 파싱 -> 스타일 -> 레이아웃 -> 페인트 -> 합성

![browser-loading-process-figure](https://user-images.githubusercontent.com/35218826/59728726-3553ee80-9276-11e9-9c6e-ac1ff99a01ee.png)

### 1: 다운로드(Download)

웹문서를 표현하기 위한 HTML 파일을 서버에서 다운로드 한다

### 2: 파싱(Parsing)

> HTML을 해석하여 DOM(Document Object Model), CSSOM(CSS Object Model) 생성

- 다운로드 한 HTML 파일을 순차적으로 읽고 리소스를 요청 `<script>`, `<link>`, `<img>`
- DOM 객체 생성: HTML 요소간 관계를 트리 데이터 구조로 표현
- CSSOM 객체 생성: 선택자 간의 관계를 트리 데이터 구조로 표현

### 3: 스타일(Style)

> DOM & CSSOM을 매칭하여 렌더 트리(Render Tree) 구성

웹문서(DOM) 노드 구조에 스타일을 적용한다

### 4: 레이아웃(Layout)

> 웹문서 노드의 정확한 위치와 크기를 계산하여 렌더 트리에 반영

루트부터 노드를 순회하면서 연산 후, 각 노드의 위치와 크기를 픽셀값으로 렌더 트리에 반영한다

### 5: 페인트(Paint)

> 레이아웃 이외의 스타일 속성들을 화면상의 픽셀로 변환하고 레이어로 분리

- 대표적인 스타일 속성은 색상, 투명도
- 모든 엘리먼트가 레이어화 되진 않는다

### 6: 합성(Composite)

> 페인트 작업에서 생성된 레이어를 조립하여 스크린 갱신

### 렌더(Render)

> 스타일-레이아웃-페인트-합성 작업을 합쳐서 부르는 용어

#### 리플로우(Reflow)

![reflow-figure](https://user-images.githubusercontent.com/35218826/59728728-3553ee80-9276-11e9-92ee-b0901ec3f98a.jpg)

Javascript가 DOM/CSSOM 변경할 때 렌더 트리를 재구성하면 레이아웃을 포함한 렌더 과정을 거친다

### 리페인트(Repaint)

![repaint-figure](https://user-images.githubusercontent.com/35218826/59728729-35ec8500-9276-11e9-99aa-85d13c354846.jpg)

위치/크기와 관련없는 스타일 변경은 레이아웃 과정을 제외한 렌더 과정을 거친다

따라서 상대적으로 작업 부담이 큰 리플로우를 최소화 하는 것이 성능 최적화 관점에서 유리하다

---

### 참고자료

- [Blog, TOAST UI - 성능최적화](https://ui.toast.com/fe-guide/ko_PERFORMANCE)
