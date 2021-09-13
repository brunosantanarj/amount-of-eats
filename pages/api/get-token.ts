import env from '@/env'
import request from 'request'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const options = {
    method: 'POST',
    url: env.fatOauthConnect,
    auth: {
      user: env.fatClientId,
      password: env.fatClientSecret,
    },
    headers: { 'content-type': 'application/json' },
    form: {
      grant_type: 'client_credentials',
      scope: 'basic',
    },
    json: true,
  }

  request(options, (error, _, body) => {
    if (error) {
      res.status(500)
      return
    }

    if (body) {
      res.status(200).json(body)
    }
  })

  res.status(500)
}
