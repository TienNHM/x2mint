export const TAKE_TEST_STATUS = ['failed', 'passed', 'not submitted']

export function GetStatusNumber(status) {
    return TAKE_TEST_STATUS.indexOf(status)
}