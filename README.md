# Convenience
![aws](https://img.shields.io/badge/AWS-232F3E)
![vue](https://img.shields.io/badge/Vue3-4FC08D)
![django](https://img.shields.io/badge/Django-092E20)
![nginx](https://img.shields.io/badge/Nginx-009639)
![mysql](https://img.shields.io/badge/MySQL-4479A1)
<br />
편의점 조합 사이트 ([DEMO](http://54.180.193.83:8080))

![image](https://user-images.githubusercontent.com/43946794/201859818-607a7446-e919-4f53-b9a4-91cc3a13a9cf.png)

사이드 프로젝트(FrontEnd - 윤영민, BackEnd - 장준호)

프로젝트 기간 : (2022.05 ~ 2022.08)


## 목차
* <a href="#개발도구">개발도구</a>
* <a href="#프로젝트-소개">프로젝트 소개</a>
  * <a href="#시나리오">시나리오</a>
  * <a href="#프로젝트-목표">프로젝트 목표</a>
  * <a href="#요구사항">요구사항</a>
* <a href="#이후의-계획">이후의 계획</a>


## 개발도구
* FrontEnd - Vue3
* BackEnd - Django(Python)
* bundler - Vite
* DataBase - MySQL
* server - AWS EC2, Nginx

## 프로젝트 소개
> #### 시나리오

BackEnd쪽에서 편의점 항목들을(CU, GS, MINISTOP)셀레니움을 통해 크롤링 해와서 API로 만든다음<br />
FrontEnd쪽에서 레이아웃을 만든다음 해당 API를 기능에 맞게 사용한다 

> #### 프로젝트 목표

처음으로 사이드 프로젝트를 해보면서 각자 깃허브에 브랜치를 만들어 서로 커밋하며 현업에서의 느낌을 받아보고,<br />
Vue를 사용하는 첫 프로젝트인 만큼 Vue에 대한 문법이해와 axios를 통한 API 통신에 대한 개념이 익숙해지도록 사용해본다

> #### 요구사항
* 로그인 기능을 구현한다(토큰)
* 스켈레톤 ui를 적용한다
* axios로 편의점 정보가 들어있는 API와 통신하여 데이터를 가져온다
* MySQL로 데이터를 관리한다



## 이후의 계획

