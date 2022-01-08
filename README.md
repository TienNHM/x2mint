# X2MINT

![GitHub contributors](https://img.shields.io/github/contributors/x2mint/x2mint)
![GitHub issues](https://img.shields.io/github/issues/x2mint/x2mint?color=red)
![GitHub top language](https://img.shields.io/github/languages/top/x2mint/x2mint?color=cyan)
![GitHub repo size](https://img.shields.io/github/repo-size/x2mint/x2mint)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/x2mint/x2mint)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/x2mint/x2mint?color=g)
![GitHub last commit](https://img.shields.io/github/last-commit/x2mint/x2mint?color=yellow)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/x2mint/x2mint)

## Cấu trúc thư mục

<details>
  <summary>Tổng quan</summary>
  
  #### Cấu trúc tổng quan của project:
  
  ```
  x2mint
│   README.md
├───.vscode
│       settings.json
└───clients
    │   .eslintignore
    │   .eslintrc.json
    │   .gitignore
    │   jsconfig.json
    │   package.json
    │   README.md
    │   yarn.lock
    ├───public
    │   │   favicon.ico
    │   │   index.html
    │   │   manifest.json
    │   │   robots.txt
    │   └───assets
    │       ├───avatars
    │       ├───backgrounds
    │       ├───icons
    │       ├───images
    │       └───samples
    └───src
        │   App.js
        │   App.scss
        │   index.css
        │   index.js
        │   reportWebVitals.js
        ├───actions
        │   └───api
        ├───app
        ├───components
        │   ├───account
        │   │   ├───handlePassword
        │   │   ├───login
        │   │   ├───profile
        │   │   └───register
        │   ├───admin
        │   │   ├───AppContent
        │   │   │   ├───Account
        │   │   │   │   ├───AccountGrantPermissions
        │   │   │   │   ├───AccountManagement
        │   │   │   │   └───AccountStatistics
        │   │   │   ├───Contest
        │   │   │   │   ├───ContestArchive
        │   │   │   │   ├───ContestParticipants
        │   │   │   │   └───ContestStatistics
        │   │   │   ├───Dashboard
        │   │   │   └───Revenue
        │   │   ├───AppNavbar
        │   │   └───AppSidebar
        │   ├───common
        │   │   ├───appNavbar
        │   │   ├───browseLibrary
        │   │   ├───confirmModal
        │   │   ├───myImage
        │   │   └───share
        │   ├───contest
        │   │   ├───contestInfo
        │   │   ├───modalCreateContest
        │   │   └───statistics
        │   ├───exam
        │   │   ├───answer
        │   │   ├───panelPreview
        │   │   ├───panelQuestionPicker
        │   │   ├───panelSettings
        │   │   ├───question
        │   │   └───submitResult
        │   ├───payments
        │   └───statistics
        ├───pages
        │   └───home
        ├───reducers
        ├───redux
        └───utils
  ```
</details>

<details>
  <summary>Chi tiết</summary>
  
  #### Project được xây dựng theo cấu trúc như sau:
  
  
  ```
  x2mint
│   README.md
├───.vscode
│       settings.json
└───clients
    │   .eslintignore
    │   .eslintrc.json
    │   .gitignore
    │   jsconfig.json
    │   package.json
    │   README.md
    │   yarn.lock
    ├───public
    │   │   favicon.ico
    │   │   index.html
    │   │   manifest.json
    │   │   robots.txt
    │   └───assets
    │       ├───avatars
    │       ├───backgrounds
    │       ├───icons
    │       ├───images
    │       └───samples
    │               sample_test.xlsx
    └───src
        │   App.js
        │   App.scss
        │   index.css
        │   index.js
        │   logo.svg
        │   reportWebVitals.js
        │   _setting.scss
        ├───actions
        │   │   initialData.js
        │   │   useAxios.js
        │   └───api
        │           AnswerAPI.js
        │           AuthAPI.js
        │           BillAPI.js
        │           ContestAPI.js
        │           QuestionAPI.js
        │           StatisticsAPI.js
        │           TakeTestAPI.js
        │           TestAPI.js
        │           UserAPI.js
        │           VNPayAPI.js
        ├───app
        │       store.js
        ├───components
        │   │   ProtectedRoute.js
        │   ├───account
        │   │   ├───handlePassword
        │   │   │       ChangePassword.js
        │   │   │       ForgotPassword.js
        │   │   │       ForgotPassword.scss
        │   │   │       ResetPassword.js
        │   │   │       ResetPassword.scss
        │   │   ├───login
        │   │   │       Login.js
        │   │   │       Login.scss
        │   │   ├───profile
        │   │   │       ModalUpdateUserInfo.js
        │   │   │       Profile.js
        │   │   │       Profile.scss
        │   │   │       UserTakeTest.js
        │   │   └───register
        │   │           ActivationEmail.js
        │   │           Register.js
        │   │           Register.scss
        │   ├───admin
        │   │   │   Admin.js
        │   │   │   Admin.scss
        │   │   ├───AppContent
        │   │   │   │   AppContent.js
        │   │   │   ├───Account
        │   │   │   │   │   data.js
        │   │   │   │   ├───AccountGrantPermissions
        │   │   │   │   │       AccountGrantPermissions.js
        │   │   │   │   │       AccountGrantPermissions.scss
        │   │   │   │   ├───AccountManagement
        │   │   │   │   │       AccountManagement.js
        │   │   │   │   │       AccountManagement.scss
        │   │   │   │   └───AccountStatistics
        │   │   │   │           AccountStatistics.js
        │   │   │   │           AccountStatistics.scss
        │   │   │   ├───Contest
        │   │   │   │   │   data.js
        │   │   │   │   ├───ContestArchive
        │   │   │   │   │       ContestArchived.js
        │   │   │   │   │       ContestArchived.scss
        │   │   │   │   ├───ContestParticipants
        │   │   │   │   │       ContestParticipants.js
        │   │   │   │   │       ContestParticipants.scss
        │   │   │   │   └───ContestStatistics
        │   │   │   │           ContestStatistics.js
        │   │   │   ├───Dashboard
        │   │   │   │       Dashboard.js
        │   │   │   │       Dashboard.scss
        │   │   │   └───Revenue
        │   │   │           data.js
        │   │   │           Revenue.js
        │   │   ├───AppNavbar
        │   │   │       AppNavbar.js
        │   │   │       AppNavbar.scss
        │   │   └───AppSidebar
        │   │           AppSidebar.js
        │   │           AppSidebar.scss
        │   ├───common
        │   │   ├───appNavbar
        │   │   │       AppNavbar.js
        │   │   │       AppNavbar.scss
        │   │   ├───browseLibrary
        │   │   │       BrowseLibrary.js
        │   │   │       BrowseLibrary.scss
        │   │   ├───confirmModal
        │   │   │       ConfirmModal.js
        │   │   │       ConfirmModal.scss
        │   │   ├───myImage
        │   │   │       MyImage.js
        │   │   │       MyImage.scss
        │   │   └───share
        │   │           Share.js
        │   │           Share.scss
        │   ├───contest
        │   │   │   Contest.js
        │   │   │   Contest.scss
        │   │   ├───contestInfo
        │   │   │       ContestInfo.js
        │   │   │       ContestInfo.scss
        │   │   ├───modalCreateContest
        │   │   │       ModalCreateContest.js
        │   │   │       ModalCreateContest.scss
        │   │   └───statistics
        │   │           StatisticContest.js
        │   │           StatisticTest.js
        │   │           StatisticTest.scss
        │   ├───exam
        │   │   │   MultiChoices.js
        │   │   │   MultiChoices.scss
        │   │   ├───answer
        │   │   │       Answer.js
        │   │   │       Answer.scss
        │   │   ├───panelPreview
        │   │   │       PanelPreview.js
        │   │   │       PanelPreview.scss
        │   │   ├───panelQuestionPicker
        │   │   │       PanelQuestionPicker.js
        │   │   │       PanelQuestionPicker.scss
        │   │   ├───panelSettings
        │   │   │       ModalTestInfo.js
        │   │   │       PanelSettings.js
        │   │   │       PanelSettings.scss
        │   │   ├───question
        │   │   │       Question.js
        │   │   │       Question.scss
        │   │   └───submitResult
        │   │           data.js
        │   │           SubmitResult.js
        │   │           SubmitResult.scss
        │   ├───payments
        │   │       PaymentReturn.js
        │   │       PaymentReturn.scss
        │   │       Payments.js
        │   └───statistics
        │           ContestStatistics.js
        │           TakeTestStatistics.js
        ├───pages
        │   │   Page404.js
        │   │   Page500.js
        │   └───home
        │           About.js
        │           Contact.js
        │           Footer.js
        │           Homepage.js
        │           Homepage.scss
        │           MainBanner.js
        ├───reducers
        │       authReducer.js
        ├───redux
        │       authSlice.js
        └───utils
                colors.js
                constants.js
                dragDrop.js
                EventListener.js
                ExportToExcel.js
                ImportTestData.js
                setAuthToken.js
                sorts.js
                timeUtils.js
                Validation.js
  ```
</details>

## Hướng dẫn cài đặt

- Bước 1: Clone project
```bash
git clone https://github.com/TienNHM/x2mint.git
```

- Bước 2: Install
```bash
npm install
```

Hoặc:
```bash
yarn install
```

- Bước 3: Thêm file `.env` chứa thông tin các biến môi trường

Chuyển đến thư mục `/clients`, tạo mới file `.env` chứa thông tin các biến môi trường:

| Tên biến | Mô tả |
| :---: | :--- |
| CI | Bắt buộc là `False`, dùng để deploy trên vercel.com. |
| REACT_APP_WEBSITE | Domain nơi deploy website, VD: `https://x2mint.vercel.app`. |
| REACT_APP_API_ROOT | Root endpoint gọi API, VD: `http://api-x2mint.herokuapp.com/app/api/v1`. |
| REACT_APP_PEXELS_ID | Pexels ID, đăng ký và tạo mới tài khoản [tại đây](https://www.pexels.com/api/new/), sau đó tạo mới API key. |
| REACT_APP_FB_APP_ID | Facebook App ID, đăng ký vào tạo một ứng dụng trên Facebook [tại đây](https://developers.facebook.com/apps/create/). Sau khi tạo thành công, có thể copy ID tại trang Dashboard của ứng dụng. |
| REACT_APP_GOOGLE_CLIENT_ID | Google Client ID, đăng ký vào tạo mới project. Xem hướng dẫn chi tiết [tại đây](https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a#:~:text=Step%201%3A%20Creating%20a%20Google%20Project). |

- Bước 4: Khởi chạy

Tại thư mục `x2mint`, mở terminal và chạy các lệnh sau:

```bash
cd clients
npm run start
```

Hoặc:

```bash
cd clients
yarn start
```

**Kết quả:**

```
Compiled successfully!

You can now view clients in the browser.

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.56.1:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

Try cập vào [http://localhost:3000](http://localhost:3000) để xem trang web.

## Hướng dẫn deploy

- Bước 1: Tạo tài khoản trên [https://vercel.com/](https://vercel.com/), chọn phương thức đăng nhập với tài khoản `Github`.
- Bước 2: Import project từ `Github` repo, xem hướng dẫn chi tiết [tại đây](https://vercel.com/guides/deploying-react-with-vercel-cra)
- Bước 3: Cấu hình cho ứng dụng:
  + Project Name: Tên ứng dụng (tuy chọn).
  + Framework Preset: Chon `Create React App`.
  + Root Directory: Chọn `clients`.
  + Environment Variables: Thêm tất cả các biến môi trường chứa trong file `.env` (nằm trong thư mục `clients`).
- Bước 4: Bấm `Deploy` và chờ đợi ứng dụng deploy thành công.
- Bước 5: Sau khi deploy thành công, chuyển tới phần `Settings` của ứng dụng. Tại đây, thay đổi lại domain của ứng dụng tại mục `Domain`. Lưu ý: domain này phải tương tự như giá trị lưu tại biến môi trường `REACT_APP_WEBSITE`.
- Bước 6: Truy cập domain ứng dụng (VD: [http://x2mint.vercel.app](http://x2mint.vercel.app/)) để xem ứng dụng.

## Tài liệu liên quan

- [Thanh toán VNPay với tài khoản demo](https://sandbox.vnpayment.vn/apis/vnpay-demo/)
- [Tạo project trên Google Cloud](https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a)

## Contributors

[![](https://avatars.githubusercontent.com/u/33385777?v=4&s=100)](https://fb.com/01.tien) 
[![](https://avatars.githubusercontent.com/u/58748687?v=4&s=100)](https://www.facebook.com/tadeothien)
