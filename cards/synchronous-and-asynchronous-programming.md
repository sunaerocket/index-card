---
title: '동기/비동기, 블록/넌블록 개념이란?'
tags:
  - 프로그래밍
  - 운영체제
---

## 동기/비동기 실행(Synchronous/Asynchronous Operation)

> 실행 주체의 메인 루틴이 서브루틴의 동작이 끝날 때까지 기다리는 것

동기식은 메인 루틴에서 서브 루틴으로 제어권을 넘기며 처리 결과와 제어권을 동시에 받는다

비동기식은 메인 루틴에서 제어권을 유지하며 바로 다음 로직을 처리한다. 서브 루틴의 처리 결과가 나왔을 때, 콜백으로 작업 호출 주체에게 알린다 따라서 제어권과 처리결과를 받는 시기가 다르다(우연히 일치는 가능)

## 블록/넌블록 실행(Block/Non-Block Operation)

> 어플리케이션이 작업을 처리하는 방식을 CPU-Main Memory 조합의 IO 관점으로 구분하는 개념

블록 방식은 IO작업이 끝날 때까지 어플리케이션의 다른 작업이 막힌다

넌블록 방식은 작업에 관계없이 어플리케이션이 다른 작업을 할 수 있다

## 블록/동기식 실행 (Block/Synchronous Operation)

- 개발자가 정확한 동작성을 보장하기가 편하다
- 사용자 입장에서 응답 시간이 느려질 수 있다
- 컴퓨터 입장에서 자원 사용이 비효율 적일 수 있다(busy waiting)

## 넌블록/비동기식 실행(Non-Block/Asynchronous Operation)

- 개발자가 정확한 동작성을 보장하기가 어렵다
- 사용자 입장에서 빠른 응답 시간을 기대할 수 있다
- 컴퓨터 입장에서 자원을 효율적으로 사용할 수 있다

---

### 참고자료

- [Github, brave-people/brave-tech-interview - 동기, 비동기에 대해 설명해보고 장단점을 각각 설명해보세요](https://github.com/brave-people/brave-tech-interview/blob/main/contents/language.md)
- [Youtube, 우아한Tech - Blocking vs Non-Blocking, Sync vs Async](https://www.youtube.com/watch?v=oEIoqGd-Sns)
- [Blog, 티끌모아 로키산맥 - [네트워크] - Blocking I/O & Non-Blocking I/O](https://rok93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-Blocking-IO-Non-Blocking-IO)
