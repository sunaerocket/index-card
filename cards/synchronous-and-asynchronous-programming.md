---
title: '동기 / 비동기 프로그래밍이란?'
tags:
  - 프로그래밍
---

## 동기식

함수 호출 후, 다른 주체(ex: kernel, api)의 작업이 완료되길 기다렸다가 다음 로직을 실행한다

- 개발자 입장에서 응답 값을 받아 순차적인 처리를 하기 쉽다
- 블록타임으로 컴퓨터 자원 사용이 비효율 적일 수 있다

## 비동기식

함수 호출 후, 다른 주체의 작업에 관계없이 다음 로직을 실행

- 개발자가 고려해야 할 사례가 많아진다(응답 대기, 응답 완료, 오류, etc.)
- 블록타임 없이 컴퓨터 자원을 효율적으로 사용할 수 있다

---

### 참고자료

- [동기, 비동기에 대해 설명해보고 장단점을 각각 설명해보세요](https://github.com/brave-people/brave-tech-interview/blob/main/contents/language.md)
- [멍토의 Blocking vs Non-Blocking, Sync vs Async](https://www.youtube.com/watch?v=oEIoqGd-Sns)
