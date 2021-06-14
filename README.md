# CBNU QROrder

2021-1학기 오픈소스웹소프트웨어 팀 프로젝트

충북대학교 맛집 QRCode 주문 시스템

[데모사이트](http://qrorder.jaryapp.kro.kr/)


## ✋ Team Members
* ![조정제](https://img.shields.io/badge/충북대학교_소프트웨어학과-조정제-blue)

* ![노기진](https://img.shields.io/badge/충북대학교_경영정보학과-노기진-blue)

* ![김동용](https://img.shields.io/badge/충북대학교_소프트웨어학과-김동용-blue)

## ⚡ Quick Start

### Client

```
cd frontend
npm install
npm start
access "http://localhost:3000"
```

### Server

```
cd backend
npm install
npm start
access "http://localhost:8080"
```

### config file

src/components/MenuBoard/Store 폴더 내에 있는 `api.key.example.json`과 같은 형식으로(아래참고)

src/components/MenuBoard/Store 폴더 내에 `api.key.json` 파일 제작

google에서 발급받은 토큰 값 삽입

```
{
  "key": ""
}

```

