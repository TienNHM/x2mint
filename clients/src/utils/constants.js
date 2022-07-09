export const MAX = {
    QUESTION_LENGTH: 200,
    ANSWER_LENGTH: 120,
    PHOTOS_PER_PAGE: 20,
    PHOTOS_IN_RESULTS: 80
}

export const MODAL_ACTION = {
    CONFIRM: 'MODAL_ACTION_CONFIRM',
    CLOSE: 'MODAL_ACTION_CLOSE',
    RETRY: 'MODAL_ACTION_RETRY'
}

export const ROLE = {
    ADMIN: 'admin',
    CREATOR: 'creator',
    USER: 'user'
}

export const ACCOUNT_TYPES = {
    LITE: '04ece1b35ef07bc838cc466a556bfcc5d3ce2f98',
    PRO: '38f6e20fe91bd2ad0afc80acf3c1a179d5678487'
}

export const COOKIES = {
    ACCESS_TOKEN: 'accessToken',
    USER_ID: 'uid',
    MAX_DAYS_EXPIRE: 365,
    REGISTER_STATUS: 'registerStatus',
    LOGIN_GOOGLE_SUCCESS: 'loginSuccess',
    FACE_DETECTION_INTERVAL: 'faceDetectionInterval'
}

export const STATUS = {
    DEACTIVE: 'deactive',
    DELETED: 'deleted',
    OK: 'ok',
    ARCHIVED: 'archived',
    NOT_SUBMITTED: 'not submitted',
    PASSED: 'passed',
    FAILED: 'failed',
    SUCCESS: 'success',
    UPGRADE_PENDING: 'pending'
}

export const ADMIN = {
    DASHBOARD: 'Dashboard',
    REVENUE: 'Doanh thu',
    ACCOUNT: {
        MANAGE: 'Quản lý người dùng',
        GRANT_PERMISSIONS: 'Cấp quyền tài khoản',
        REPORT: 'Tài khoản bị báo cáo',
        STATISTICS: 'Thống kê người dùng'
    },
    CONTEST: {
        STATISTICS: 'Thống kê cuộc thi',
        PARTICIPANT: 'Lượt dự thi',
        LEADERBOARD: 'Bảng xếp hạng',
        TRAFFIC: 'Lượng truy cập',
        ARCHIVE: 'Lưu trữ'
    },
    RESOURCES: {
        STATISTICS: 'Thống kê tài nguyên',
        SAMPLE_QUESTION: 'Câu hỏi mẫu',
        IMAGE: 'Hình ảnh',
        VIDEO: 'Video',
        MUSIC: 'Âm thanh'
    },
    SETTINGS: {
        ACCOUNT: 'Tài khoản',
        THEME: 'Theme',
        NOTIFICATION: 'Thông báo'
    }
}

export const STATISTICS = {
    ACCOUNT: {
        STT: 'STT',
        USERNAME: 'Username',
        FULLNAME: 'Họ tên',
        EMAIL: 'Email',
        ROLE: 'Phân quyền',
        ADDRESS: 'Địa chỉ',
        DOB: 'Ngày sinh',
        SCHOOL: 'Trường',
        PHONE: 'SĐT',
        AVATAR: 'Ảnh đại diện',
        STATUS: 'Trạng thái',
        TYPE: 'Loại tài khoản',
        _AVATAR: 'Ảnh',
        _ROLE: 'Quyền',
        _STATUS: 'Status',
        _TYPE: 'Cấp'
    },
    TAKE_TEST: {
        STT: 'STT',
        TEST_NAME: 'Tên bài thi',
        TEST_URL: 'Link bài test',
        EXAMINEE: 'Thí sinh',
        EXAMINEE_FULLNAME: 'Họ tên thí sinh',
        EXAMINEE_USERNAME: 'Username',
        POINTS: 'Điểm',
        SUBMIT_TIME: 'Thời gian nộp bài',
        STATUS: 'Trạng thái',
        IS_PASSED: 'Pass/Fail',
        _TEST_URL: 'Link bài thi',
        _DETAIL: 'Chi tiết'
    },
    CONTEST: {
        STT: 'STT',
        NAME: 'Tên cuộc thi',
        START_TIME: 'Thời gian bắt đầu',
        END_TIME: 'Thời gian kết thúc',
        CREATOR: 'Người tạo cuộc thi',
        URL: 'Link cuộc thi',
        STATUS: 'Trạng thái',
        _CREATOR: 'Người tạo',
        _URL: 'Link',
        _STATUS: 'Status'
    },
    BILL: {
        STT: 'STT',
        USER: 'Khách hàng',
        USERNAME: 'Username',
        TIME: 'Thời gian',
        STATUS: 'Status',
        AMOUNT: 'Đơn giá',
        _STATUS: 'Trạng thái',
        _USER: 'Người dùng'
    }
}

export const TAKE_TEST_LOGS = {
    MAX_EXIT_FULLSCREEN: 3,
    MAX_NO_FACE_DETECTED: 3
}

export const TEST_DATA = {
    BASIC_INFO: {
        NAME: 'Tên cuộc thi',
        DESCRIPTION: 'Mô tả',
        PIN: 'Mã PIN',
        START_DATE: 'Ngày bắt đầu',
        START_TIME: 'Giờ bắt đầu',
        END_DATE: 'Ngày kết thúc',
        END_TIME: 'Giờ kết thúc',
        MAX_POINTS: 'Điểm tối đa'
    },
    QUESTION: {
        CONTENT: 'Câu hỏi',
        STT: 'STT',
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        CORRECT_ANSWERS: 'Đáp án đúng',
        EMBEDED_MEDIA: 'Ảnh minh họa'
    }
}

export const QUESTION_TYPE = {
    MULTICHOICE: 'MULTICHOICE'
}