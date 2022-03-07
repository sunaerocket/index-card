---
title: '트랜잭션이란?'
tags:
  - 데이터베이스
---

## 트랜잭션(Transaction)

> 데이터베이스의 상태 변화를 만드는 작업의 단위

따라서 write 작업은 트랜잭션이고, read 작업은 아니다

### 커밋/롤백(Commit/Rollback)

> 트랜잭션을 종결하는 명령어

- 커밋: DB 상태 변화 `반영`
- 롤백: DB 상태 변화 `취소`

### 트랜잭션 격리 수준(Isolation Level of Transaction)

> 트랜잭션 중 다른 요청을 처리하는 정책

데이터 일관성과 동시성을 어느 수준으로 보장할 것인지 결정

- Level 0: Read Uncommitted
  - 커밋되지 않은 데이터도 읽기 허용
  - 가장 낮은 데이터 일관성, 가장 높은 동시성
  - `Dirty Read` 문제
    - 롤백될 데이터를 도중에 읽어서 처리하는 경우를 의미
- Level 1: Read Committed
  - 커밋된 데이터만 읽기 허용
  - 덜 낮은 데이터 일관성, 덜 높은 동시성
  - `Non-Repeatable Read` 문제
    - 한 트랜잭션 안에서 동일한 쿼리를 여러번 사용하는 경우, 다른 트랜잭션에서 커밋된 데이터 변경 때문에 쿼리 결과가 달라지는 현상
- Level 2: Repeatable Read
  - 트랜잭션 내에서는 하나의 스냅샷만 사용
  - 중위 수준의 일관성과 동시성
  - `Phantom Read` 문제
    - 트랜잭션 내부에서 먼저 읽은 데이터와 나중에 읽은 데이터 사이에 데이터 생성이나 제거가 발생하여 데이터 일관성이 깨지는 현상
- Level 3: Serializable Read
  - 작업의 동시 진행을 금지
  - 가장 높은 수준의 일관성, 가장 낮은 수준의 동시성

---

### 참고자료

- [트랜잭션이란?](https://github.com/brave-people/brave-tech-interview/blob/main/contents/database.md)
- [16. Isolation Level에 따른 트랜잭션 처리 방법](https://mysqldba.tistory.com/334)
- [[DB] 트랜잭션 격리 수준(Transaction Isolation Level)](https://dar0m.tistory.com/225)
