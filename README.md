## 📲 PJH's Live Chat ⌨️

<p align="center"> 
💡 Intro &nbsp; <strong>|</strong> &nbsp;
📖 Learn & Study &nbsp; <strong>|</strong> &nbsp;
🗓 프로젝트 기간&nbsp; <strong>|</strong> &nbsp;
📎 Link &nbsp; <strong>|</strong> &nbsp;
🍀 나의 개발일지 &nbsp; <strong>|</strong> &nbsp; 
</p>
<p align="center"> 
⚙️ 주요 기능 &nbsp; <strong>|</strong> &nbsp; 
💻 Service Architecture &nbsp; <strong>|</strong> &nbsp; 
📄 Project Architecture &nbsp; <strong>|</strong> &nbsp;
🛠 Tools &nbsp; <strong>|</strong> &nbsp;
🎥 GIF
<br></p>

---

<br>

## 💡 Intro

<strong> Slack을 클론코딩하여 제작한 실시간 채팅 프로젝트입니다. </strong>

<br>
:  3일이라는 짧은 기간 내에 Socket.io를 이용하여 양방향 데이터 통신을 구현해보는 시간을 가졌으며 개발환경 구축, 컴포넌트 구조화, 다양한 라이브러리, 노하우들을 얻은 아주 알찬 프로젝트입니다.

<br>





<br>


## 📖 Learn & Study

- ##### CRA 없이 개발 환경 구축하기
  - Webpack, Babel, TS, Eslint, Prettier 

- ##### CORS를 극복하는 2가지
  - proxy in webpack devServer
  - cors middleware in Server

- ##### Path Customizing
  - Alias설정을 통한 경로 단축 in Webapck config, TS config
  ```
  import {...} from '../../../../../layouts/App'
  import {...} from '@layouts/App'
  ```

- ##### Code Splitting
  - React.lazy + Suspense

- ##### Authentication
  - Session + Cookie 

- ##### <strong>socket.io</strong> in Client
  - socket.on / socket.emit / connect / disconnect / io

- #####  onDrop + onDragOver  in HTML5
  - 이미지 끌어서 업로드하기 

- ##### 다양한 라이브러리
  - `gravatar` : 랜덤 아바타 이미지 생성
  - `react-mentions` : 유저 언급 기능 in input
  - `react-custom-scrollbars-2` : 유연하고 편집 가능한 스크롤 
  - `autosize` : 자동 크기 조정 영역 




<br>

## 🗓 프로젝트 기간

2023.02.03 ~ 2023.02.05

<br>

## 📎 Link



**Notion**
👉 [Notion Portfolio](https://www.notion.so/PJH-s-Live-Chat-4c0db424a4134431a91b7cc134599b07)


> 참고 : 강의를 보며 진행하였으며, 서버, DB는 구현이 완료된 상태에서 프론트엔드 개발을 진행하였으며 CSS는 slack의 실제 디자인을 클론하였습니다. (인프런  제로초님 : Sleact 클론 코딩)

<br>

## 🍀 나의 개발일지

<strong>✏️ 프로젝트를 개발하며 작성한 개발블로그입니다.</strong>

- [Start & Setting](https://velog.io/@pjh1011409/PJHs-live-chat-Start-Setting)
- [SignUp / LogIn](https://velog.io/@pjh1011409/PJHs-live-chat-Start-Setting-230nn1ol)
- [Menu](https://velog.io/@pjh1011409/PJHs-live-chat-SignUp-LogIn)
- [Modal](https://velog.io/@pjh1011409/PJHs-live-chat-Menu-Modal-2nx59m4c)
- [Socket.io](https://velog.io/@pjh1011409/PJHs-live-chat-Socket.io)
- [Chat Box](https://velog.io/@pjh1011409/PJHs-live-chat-Menu-Modal)

- [Chat List](https://velog.io/@pjh1011409/PJHs-live-chat-Channel)
- [Code Splitting](https://velog.io/@pjh1011409/React-Code-Splitting)

<br>

## ⚙️ 주요 기능

- ##### User Auth 🔓 🔑
  - 회원가입 / 로그인 / 로그아웃
- #####  toggle / modal  🗂
  - 워크스페이스 / 채널 / DM &nbsp; 리스트
  - 생성 /  초대  &nbsp; 모달

- ##### User mention 👤

  - `@유저이름` 으로 상대방 언급하기

- ##### Image Drag & Drop  🏞

  - 이미지 드래그, 드랍으로 간편 업로드하기

- ##### Reverse InfiniteScroll
  - 최신 내용 ~ 과거 내용 순으로 무한스크롤

- ##### Group by Date
   - 날짜별 채팅 그룹화 

- ##### WorkSpace / Channel / DM 📲
   - 그룹별 채팅 기능
   - 1 대 1 채팅 기능



  <br>

<br>

## 💻 Service Architecture

<img width="1052" alt="스크린샷 2023-02-07 오후 5 01 10" src="https://user-images.githubusercontent.com/81337674/217186431-9dc7e6d8-e2a3-4baf-98b6-415d10ef2e38.png">


<br>

## 📄 Project Architecture

<details>
<summary> <strong> Client </strong> </summary>

```
⭐️ src
|
├── 🗂 pages
│   ├── 🗂 Channel
│   │     ├── 📄 index.tsx
│   │     └── 📄 styles.tsx
│   ├── 🗂 DirectMessage
│   │     ├── 📄 index.tsx
│   │     └── 📄 styles.tsx
│   ├── 🗂 SignUp
│   │     ├── 📄 index.tsx
│   │     └── 📄 styles.tsx
│   └── 🗂 LogIn
│         └── 📄 styles.tsx
│    
├── 🗂 components
│   ├── 🗂 ChannelList
│   ├── 🗂 EachChannel
│   ├── 🗂 DMList
│   ├── 🗂 EachDM
│   ├── 🗂 ChatList
│   ├── 🗂 Chat
│   ├── 🗂 ChatBox
│   ├── 🗂 Menu
│   ├── 🗂 Modal
│   ├── 🗂 CreateWorkSpaceModal
│   ├── 🗂 CreateChanneleModal
│   ├── 🗂 InviteWorkSpaceModal
│   ├── 🗂 InviteWorkSpaceModal
│   └── 🗂 LoadSpinner
│
├── 🗂 hooks
│     ├──  📄 useInput.ts
│     └──  📄 useSocket.ts
│
├── 🗂 utils
│     ├── 📄 fetcher.tsx
│     └── 📄 makeSection.tsx
│
├── 🗂 layouts
│     ├── 📄 app.tsx
│     └── 📄 workspace.tsx
│ 
└── 🗂 typings - db.ts
```

</details>


<br>

## 🛠 Tools

<p>
  
   <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> 
   <img src="https://img.shields.io/badge/SWR-6332F6?style=for-the-badge&logo=Swiper&logoColor=white"> 
 
  
<br>
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white"> 
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> 
     <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=Babel&logoColor=white"> 
    
   
  <img src="https://img.shields.io/badge/Socker.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">

  <br>
   <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=Apollo GraphQL&logoColor=white">
     <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&&logo=Prettier&logoColor=orange">
        <img src="https://img.shields.io/badge/Emotion-ED1F35?style=for-the-badge&logo=Embarcadero&logoColor=white">
         <br>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">

  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
     <br>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">




<br>

## 🎥 GIF

|**SignUp**|**LogIn / LogOut**|
|:----: | :------: |
|![회원가입기능](https://user-images.githubusercontent.com/81337674/216837368-9fc49e88-c75c-4027-bc2a-f91fb54a6a58.gif)|  ![로그인 로그아웃](https://user-images.githubusercontent.com/81337674/216837370-a4c9c062-54e9-4f92-a881-d25014d9eac2.gif) |
|**Create Workspace / channel **|**Invite User** |                                                   |
| ![워크스페이스, 채널 생성](https://user-images.githubusercontent.com/81337674/216837397-04dca83e-cfca-4259-9cbf-1e737be10029.gif)    | ![사용자 초대](https://user-images.githubusercontent.com/81337674/216837403-0122b7a0-d4cc-452b-af2c-b909a07292ae.gif) |
|**Chatting**|**Image Drag & Drop** |
| ![채팅하기](https://user-images.githubusercontent.com/81337674/216837416-6d704290-b612-4c01-afff-b3b016a2fc50.gif) |    ![이미지 업로드](https://user-images.githubusercontent.com/81337674/216837422-e4166ad0-7ce9-40c0-aac7-ff789c46e68e.gif)     |
|**Reverse Scroll / Date grouping**| |
| ![리버스스크롤, 날짜](https://user-images.githubusercontent.com/81337674/216837420-d71ad390-febb-41b3-af90-b01870603dcf.gif)      |          |

<br>

