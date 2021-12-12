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

export const ACCESS_TOKEN = 'accessToken'

export const COOKIES = {
    ACCESS_TOKEN: 'accessToken',
    USER_ID: 'uid',
    MAX_DAYS_EXPIRE: 365
}

export const STATUS = {
    DEACTIVE: 'deactive',
    DELETED: 'deleted',
    OK: 'ok',
    ARCHIVED: 'archived'
}

export const ADMIN = {
    DASHBOARD: 'dashboard',
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
        TRAFFIC: 'Lưu lượng truy cập',
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