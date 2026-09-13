import 'dotenv/config';

export const config = {
    baseUrl: process.env.BASE_URL || 'https://practice.expandtesting.com/notes/api/',
    name: process.env.NAME || 'Jon Doe',
    password: process.env.PASSWORD || 'Demo1234',
    newPassword: process.env.NEW_PASSWORD || 'Demo9999'
};

export const endpoints = {
    register: 'users/register',
    login: 'users/login',
    logout: 'users/logout',
    profile: 'users/profile',
    forgotPassword: 'users/forgot-password',
    changePassword: 'users/change-password',
    deleteAccount: 'users/delete-account'
};
