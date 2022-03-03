---
title: '동기/비동기, 블록/넌블록 개념이란?'
tags:
  - 프로그래밍
  - 운영체제
---

## 동기/비동기 실행(Synchronous/Asynchronous Operation)

어플리케이션이 작업을 처리하는 방식을 제어권과 작업 결과 관점으로 구분하는 개념

동기식은 작업 호출 주체가 작업 처리 주체에게 제어권을 넘기며 처리 결과와 제어권을 동시에 받는다

비동기식은 작업 호출 주체가 제어권을 유지하며 바로 다음 로직을 처리한다. 작업 처리 주체는 처리 결과가 나왔을 때, 콜백으로 작업 호출 주체에게 알린다 따라서 제어권과 처리결과를 받는 시기가 맞기가 어렵다

## 블록/넌블록 실행(Block/Non-Block Operation)

어플리케이션이 작업을 처리하는 방식을 CPU-Main Memory 조합의 IO 관점으로 구분하는 개념

블록 방식은 IO작업이 끝날 때까지 어플리케이션의 다른 작업이 막힌다

넌블록 방식은 작업에 관계없이 어플리케이션이 다른 작업을 할 수 있다

## 블록/동기식 실행 (Block/Synchronous Operation)

- 개발자 입장에서 단순한 작동 제어로 응답 값을 받아 순차적인 처리를 하기 쉽다
- 사용자 입장에서 응답 시간이 느려질 수 있다
- 컴퓨터 입장에서 자원 사용이 비효율 적일 수 있다

## 넌블록/비동기식 실행(Non-Block/Asynchronous Operation)

- 개발자 입장에서 작동 제어가 복잡해진다(응답 대기, 응답 완료, 오류, etc.)
- 사용자 입장에서 빠른 응답 시간을 기대할 수 있다
- 컴퓨터 입장에서 자원을 효율적으로 사용할 수 있다

---

### 참고자료

- [동기, 비동기에 대해 설명해보고 장단점을 각각 설명해보세요](https://github.com/brave-people/brave-tech-interview/blob/main/contents/language.md)
- [멍토의 Blocking vs Non-Blocking, Sync vs Async](https://www.youtube.com/watch?v=oEIoqGd-Sns)
- [[네트워크] - Blocking I/O & Non-Blocking I/O](https://rok93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-Blocking-IO-Non-Blocking-IO)