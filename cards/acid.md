---
title: 'ACID란?'
tags:
  - 데이터베이스
---

## ACID(Atomicity, Consistency, Isolation, Durability)

> 트랜잭션의 안전한 수행을 보장하기 위한 원칙

![acid-properties-figure](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191121102921/ACID-Properties.jpg)

### 원자성(Atomicity)

트랜잭션은 부분 작업으로 쪼갤 수 없어야 한다

작업 전체가 커밋/롤백되는 속성을 의미한다

### 일관성(Consistency)

트랜잭션 전/후로 데이터베이스의 상태는 일관적이어야 한다

예시: 트랜잭션 전에 게시글 제목의 글자수 제한이 255자였다면 트랜잭션 후에도 동일해야 한다

### 고립성(Isolation)

정확한 동작을 보장하기 위해 트랜잭션은 서로 간섭받지 않아야 한다

예시: 사용자 두명이 거의 동시에 게시판에 글을 올린다면, 한 사용자의 트랜잭션 처리가 끝나고 나서 다른 사용자의 트랜잭션이 처리된다

### 지속성(Durability)

트랜잭션 완료로 발생한 변경사항은 시스템 오류가 나도 유지되어야 한다

따라서 비휘발성 메모리에 기록하여 시스템 장애에 대응한다

---

### 참고자료

- [Github, brave-people/brave-tech-interview - ACID란?](https://github.com/brave-people/brave-tech-interview/blob/main/contents/database.md)

- [Blog, ACID properties in DBMS](https://www.geeksforgeeks.org/acid-properties-in-dbms/)
