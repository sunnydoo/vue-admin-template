import request from '@/utils/request'
import qs from 'qs'

export function login(data) {
  return request({
    baseURL: '/api',
    url: '/user/login',
    method: 'post',
    params: data
  })
}

export function getInfo(token) {
  return request({
    baseURL: '/api',
    url: '/user/info',
    method: 'post',
    data: qs.stringify({ 'Token': token })
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
