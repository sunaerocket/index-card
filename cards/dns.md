---
title: 'dns란?'
tags:
  - 네트워크
---

DNS는 사람들이 사용하기 편하도록 도메인 이름을 IP 주소로 변환하는 역할을 한다.

## 마스터 파일 방식의 한계

DNS가 등장하기 이전인 1970년대에는 HOSTS.txt 파일로 호스트들의 네트워크 주소를 관리했다. ARPANET NIC(Network Information Center)에서 마스터 파일을 업데이트 하면 FTP로 최신 파일을 내려받는 방식이었다. 1980년대 초반 호스트는 점점 증가하여 500개를 돌파했고 파일을 갱신하여 최신버전을 유지하는 일이 점점 어려워졌다.

## 효과

### 1. 인간 친화적인 주소 사용

숫자로 이뤄진 IP 대신 주소를 사람이 기억하고 사용하기 쉬운 형태로 만들었다.

### 2. 가용성 개선

이전에는 NIC 담당자의 퇴근이나 휴가때 업데이트가 불가능했지만 DNS의 등장으로 24시간 작동하게 만들었다.

또한 역할을 나눈 분산 시스템으로 네임서버를 구성하여 장애 상황에도 다른 서버가 도움을 줄 수 있게 만들었다.

## 용어

### DNS Namespace

전세계의 도메인 이름을 트리 구조로 관리한다.

### Resolver

DNS를 구성하는 서버 중 하나. 클라이언트의 DNS 쿼리 요청을 받아 IP 주소를 제공하는 역할을 담당한다. 도서관의 사서와 유사하다.

### Root Nameserver

DNS를 구성하는 서버 중 하나. Resolver가 첫번째로 문의하는 서버. 요청 도메인을 관리하는 TLD 네임서버들의 이름,주소 정보를 제공하는 역할을 담당한다. 도서관의 섹션 분류와 유사하다.

### TLD Nameserver

DNS를 구성하는 서버 중 하나. Resolver가 두번째로 문의하는 서버. Top Level Domain의 약자로 URL의 마지막 점 뒤에 붙는 도메인에 대한 이름, 주소 정보를 담당한다. 도서관의 책장과 유사하다.

ex) subdomain.google.com 도메인은 .com TLD 네임서버에 쿼리한다

### Authoritative Nameserver

DNS를 구성하는 서버 중 하나. Resolver가 마지막으로 문의하는 서버. 요청 도메인이 가리키는 IP 주소를 반환하는 역할을 담당한다. 도서관에서 찾고자 했던 책이 있는 선반과 유사하다.

### Record

Zone 파일이라고도 부른다. Authoritative Nameserver 내부에 존재하며 도메인, IP 주소, 요청 처리방법 등의 정보를 담고 있다.

#### A record

도메인과 IP 주소를 담고 있는 레코드.

#### CNAME record

도메인을 다른 도메인으로 연결하는 레코드.

---

### 참고자료

- [A Practical Guide to Web App Success, Ch.16 Web technology fundamentals](http://webappsuccess.com/web-technology-fundamentals.html)
- [Youtube, PowerCert Animated Videos
, "How a DNS Server (Domain Name System) works."](https://www.youtube.com/watch?v=mpQZVYPuDGU)
- [Youtube, IBM Technology, "What is DNS (Domain Name System)?"](https://www.youtube.com/watch?v=nyH0nYhMW9M)
- [Youtube, Eye on Tech, "What is DNS and How Does It Work?"](https://www.youtube.com/watch?v=9d0iu2Q6iMU)
- [Youtube, DNS Made Easy Videos, "DNS Explained"](https://www.youtube.com/watch?v=72snZctFFtA)
- [Cloudflare, "What is DNS?"](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [MDN, 웹의 동작방식](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Internet Hall of Fame, Paul Mockapetris](https://internethalloffame.org/inductees/paul-mockapetris)
- [Internet Hall of Fame, "Why Does the Net Still Work on Christmas?"](https://www.internethalloffame.org//blog/2012/07/23/why-does-net-still-work-christmas-paul-mockapetris)
- [ClouDNS, "DNS History. When and why was DNS created?"](https://www.cloudns.net/blog/dns-history-creation-first/)