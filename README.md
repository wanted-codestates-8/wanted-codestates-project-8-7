## 📑 프로젝트 소개

WANTED & CODESTATES 프리온보딩 코스

TEAM 8 팀기업과제 7번 입니다.

<br>

### < 데이터블 >

PROJECT PERIOD: 2022.03.03 ~ 2022.03.04

<br>

[배포링크](https://wanted-8-7-i7.netlify.app/)

<br>

## ✨ 주요 기능

- 구글 설문지와 같은 자체 폼 서비스입니다.
- 사용자가 원하는 형식으로 폼 생성이 가능하며 사용자에게 폼을 전달하여 데이터를 입력받을 수 있습니다.
- 생성한 폼 목록을 볼 수 있으며 폼 생성하기를 누르면 폼 생성 화면으로 넘어갑니다.
- 폼 생성 페이지에서는 필드를 자유롭게 추가할 수 있습니다.
- 드래그 앤 드랍 기능이 구현됩니다.
- 파일 첨부 시, 프로그레스 바를 출력합니다.
- 배송지는 카카오 우편번호 서비스를 이용해 검색할 수 있습니다.
- 폼에서 생성된 필드를 기준으로 사용자가 입력한 데이터를 일괄 확인할 수 있습니다.

<br>

### 🧔 메인

![무제-2](https://user-images.githubusercontent.com/85816029/156785027-0fbc1d20-4d29-43e3-bd2a-413514fa906c.png)


<br>

### 구현한 기능 목록 및 어려웠던 점

<br>

1. 생성된 폼 목록 / 입력된 데이터 목록

<br>

[ 김혜영 ]

- 구현 내용 & 방법
    - Create Form page / View Result page 레이아웃 구현
- 구현하면서 어려웠던 점
    - View Result 페이지 구현시 안의 회색박스가 내용물의 크기에 따라 줄어들고 늘어나는 기능을 찾으려고 flex에 대해서 자료를 많이 읽었는데, 결국 부모컴포넌트의 height와 min-height가 설정되어 있어서 되지 않았던 거였다. flex에 대해 더 확실히 공부해야 할 것 같다.


<br>

2. 폼 생성 페이지


<br>

[ 김희진 ]

- 구현 내용 & 방법
    - forms page 레이아웃 구현
    - option tags 구현
- 구현하면서 어려웠던 점
    - 작성한 form들을 저장을 할 때 redux persist로 저장을 했는데, 그 로직을 이해하지 못했다. 다시 공부해 볼 생각이다.


<br>

[ 최우철 ]

- 구현 내용 & 방법
    - form 생성 페이지에서 변동 데이터 구조 및 drag & drop 구현과 최종 병합, 버그픽스를 하였습니다.
- 구현하면서 어려웠던 점
    - typescript가 아직 미숙한 터라 타입정의를 하는 것이 어려웠습니다.
    - drag & drop을 제대로 잘 구현하지 못하였습니다. (라이브러리를 사용하지 않고 해보려고 하였다가 결국 성공하지 못하였고 급하게 팀원분이 사용한 라이브러리를 보고 공부하였습니다)
    - 최종 병합을 할 때에 리덕스의 상태구조의 수정이 어려웠기에 다음 프로젝트는 상태가 명확하게 정의되야 함을 필요하다고 생각했습니다.


<br>

[ 이승우 ]

- 구현 내용 & 방법
    - forms 페이지 로직 구현
    - Form 컴포넌트 로직 구현
    - 드래그 앤 드롭 기능 구현
- 구현하면서 어려웠던 점
    - 드래그 앤 드롭 기능을 구현할 때 지정된 영역을 드래그할 때만 드래그가 동작하도록 하는 부분에서 어려움을 겪었습니다
    - 생성된 필드에서 타입을 추가할 때 폼의 형태가 바뀌는 부분의 로직을 어떻게 처리할지 시행착오를 겪었습니다.

<br>

3. 생성된 폼 페이지

<br>

[ 김진기 ]

- 구현 내용 & 방법
    - 카카오 우편번호 서비스를 이용한 주소검색 구현
    - 설문 응답 데이터 기록을 위한 데이터 타입 정의 및 리듀서 구성
    - 설문 응답 데이터 목록 페이지와 리덕스 스토어 연동
- 구현하면서 어려웠던 점
    - 데이터 구조가 정해져 있지 않고 유동적으로 변해서 여러 케이스를 다뤄야하는 것이 힘들었습니다. 데이터가 어떤 타입인지에 따라 보여주는 방식도 바뀌고 같은 탕빙
    - 카카오 우편번호 서비스가 패키지 형태가 아니라 글로벌 스코프에 선언되는 형태여서 직접 타입 정의 파일을 만드는 것이 쉽지 않았습니다. npm에 타입 선언 패키지가 있기는 했지만 일부 타입 정의가 제대로 되지 않은 부분이 있어 오류가 나서 이 패키지는 사용하지 않았습니다.


<br>

[ 박성현 ]

- 구현 내용 & 방법
    - 이미지 첨부 구현
    - 이미지 첨부시 Progress Bar 구현
- 구현하면서 어려운점
    - 이미지 로딩에 맞춰 실시간으로 Progress 를 움직여야 하는데 실시간으로 값을 받는점이 어려웠다.
    - 로딩이 끝나고 Progress가 이미지 위에서 사라지게 만드는 점이 어려웠다.


<br>

[ 변건오 ]

- 구현 내용 & 방법
    - 생성된 폼 각각 컴포넌트 레이아웃 구현 및 병합
    - 컴포넌트 별 데이터 가져오기
- 구현하면서 어려웠던 점
    - redux 구조를 제대로 파악하지 못해 데이터를 불러오는데 힘들었다.
    - 타입 스크립트의 타입을 하나하나 다 지켜야해서 어려웠다.
    - 팀원들과 변수명을 맞춰서 했어야 했는데 나 혼자 따로 변수명을 지어서 시간을 허비했다




<br>

## 🗂 프로젝트 구조

```
 ┣ component
 ┃ ┣ GeneratedForm
 ┃ ┃ ┣ Address.tsx
 ┃ ┃ ┣ AgreementModalView.tsx
 ┃ ┃ ┣ Attchments.tsx
 ┃ ┃ ┣ DropDown.tsx
 ┃ ┃ ┣ Name.tsx
 ┃ ┃ ┣ PhoneNum.tsx
 ┃ ┃ ┗ Policy.tsx
 ┃ ┣ Progress
 ┃ ┃ ┗ ProgressBar.tsx
 ┃ ┣ Editor.tsx
 ┃ ┣ Form.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ PostCodeModal.tsx
 ┃ ┗ SingleFormList.tsx
 ┣ pages
 ┃ ┣ api
 ┃ ┃ ┗ hello.ts
 ┃ ┣ dataList
 ┃ ┃ ┗ [i].tsx
 ┃ ┣ viewForm
 ┃ ┃ ┗ [id].tsx
 ┃ ┣ _app.tsx
 ┃ ┣ _document.tsx
 ┃ ┣ forms.tsx
 ┃ ┗ index.tsx
 ┃ ┣ redux
 ┃ ┃ ┣ slice.ts
 ┃ ┃ ┗ store.ts
 ┃ ┣ types
 ┃ ┃ ┣ address.d.ts
 ┃ ┃ ┣ daum.d.ts
 ┃ ┃ ┣ image.d.ts
 ┃ ┃ ┗ styled.d.ts
 ┃ ┣ utils
 ┃ ┃ ┣ debounce.ts
 ┃ ┃ ┣ findBlank.ts
 ┃ ┃ ┣ makeStructure.ts
 ┃ ┃ ┗ useForms.js
 ┣ .babelrc
 ┣ .eslintrc.json
 ┣ next-env.d.ts
 ┣ next.config.js
 ┣ package.json
 ┣ README.md
 ┣ tsconfig.json
 ┗ yarn.lock 
```

<br>

## 🛠 사용 기술

front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

dev-ops

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

community

![Discord](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Apple](https://img.shields.io/badge/-APPLE-black?style=for-the-badge&logo=apple)
![Ubuntu](https://img.shields.io/badge/-UBUNTU-gray?style=for-the-badge&logo=Ubuntu)

## 팀원소개

|     이름     | 포지션 |                                                                  깃헙                                                                   |
| :----------: | :----: | :-------------------------------------------------------------------------------------------------------------------------------------: |
| 김희진(팀장) | Front  |  [![github](https://img.shields.io/badge/김희진-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chloe41297)   |
| 김혜영(팀원) | Front  | [![github](https://img.shields.io/badge/김혜영-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hit-that-drum) |
| 김진기(팀원) | Front  |   [![github](https://img.shields.io/badge/김진기-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hatoba29)    |
| 최우철(팀원) | Front  | [![github](https://img.shields.io/badge/최우철-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chltjdrhd777/) |
| 변건오(팀원) | Front  |    [![github](https://img.shields.io/badge/변건오-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/guno517)    |
| 박성현(팀원) | Front  |   [![github](https://img.shields.io/badge/박성현-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/psh9408p)    |
| 이승우(팀원) | Front  |   [![github](https://img.shields.io/badge/이승우-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/starhn87)    |
