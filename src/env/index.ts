export default {
  baseUrl: '',
  fatClientSecret: process.env.NEXT_PUBLIC_FAT_CLIENT_SECRET,
  fatClientId: process.env.NEXT_PUBLIC_FAT_CLIENT_ID,
  fatBaseToken: process.env.NEXT_PUBLIC_BASIC_AUTH_TOKEN,
  fatBaseURL: 'https://platform.fatsecret.com/rest/server.api',
  fatOauthConnect: 'https://oauth.fatsecret.com/connect/token',
}
