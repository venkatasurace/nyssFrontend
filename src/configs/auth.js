var backendUrl = process.env.NEXT_PUBLIC_JWT_BACKEND_URL

export default {
  loginEndpoint: `${backendUrl}/api/auth/login`,
  RegisterEndpoint: `${backendUrl}/api/auth/register`,
  userData: `${backendUrl}/api/userData/all`,
  rememberEndpoint: `${backendUrl}/api/auth/remember`,
  storageTokenKeyName: 'NyssAccessToken',
  onTokenExpiration: 'logout' // logout | refreshToken
}
