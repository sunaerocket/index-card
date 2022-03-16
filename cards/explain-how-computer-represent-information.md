---
title: '컴퓨터에서 정보를 어떤 식으로 표현하는가?'
tags:
  - 컴퓨터과학
---

## 데이터 재현(Data Representation)

> 컴퓨터에서 데이터를 저장/연산/변조하는 양식을 의미

### 바이너리(Binary)

> 컴퓨터 세계에서는 모든 정보를 비트(bit)의 조합으로 표현

- 컴퓨터 내부 집적회로(IC)에는 수억~수십억개의 스위치(트랜지스터)가 존재
- 전기 저장(store) 여부에 따라 on/off 상태 표현
- 사람은 손가락을 활용하여 십진법이 친숙
- 컴퓨터는 트랜지스터의 on/off 상태를 활용하여 이진법 기반

### 글자(Letters)

> 숫자에 대응되는 글자를 매핑(mapping)

#### 아스키(ASCII, American Standard Code for Information Interchange)

- 컴퓨터 세계에서 문자를 표현하기 위해 8bit(0~127)에 매핑
- prefix 기준으로 숫자/문자 구분

#### 유니코드(UNICODE)

- ASCII코드의 상위집합(superset)
- 숫자, 글자, 이모지 등을 32bit에 매핑(약 40억가지)
- 유니코드 컨소시엄이 어떤 표현을 매핑할지 결정
- 기기 제조사마다 다른 결과물

### 색상(Colors)

> 숫자에 대응되는 색상을 매핑

#### 알쥐비(RGB, Red Green Blue)

- 적/녹/청 색을 조합하여 색상을 표현
- 적/녹/청은 각자 0~255 값에 매핑된 색상 존재

### 이미지(Image)

> 픽셀마다 색상을 배치하여 표현

### 비디오(Video)

> 이미지에 시간 개념을 더한 것

### 오디오(Audio)

#### 미디(MIDI, Musical Instrument Digital Interface)

> 특정 타이밍에 악기의 음을 출력하여 표현

---

### 참고자료

- [Youtube, CS50 2021 in HDR - Lecture 0 - Scratch](https://www.youtube.com/watch?v=1tnj3UCkuxU)
