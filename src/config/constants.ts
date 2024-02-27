// API
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

//쿠키
const COOKIE_BASE_NAME = 'jeju';

export const COOKIE_ACCESS_TOKEN = `${COOKIE_BASE_NAME}_accs`;
export const COOKIE_REFRESH_TOKEN = `${COOKIE_BASE_NAME}_rfrs`;
