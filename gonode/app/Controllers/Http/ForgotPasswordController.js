'use strict'

const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')

      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forgot_password', 'emails.forgot_password-text'],
        { email, token: user.token, link: `${request.input('redirect_url')}?token=${user.token}` },
        message => {
          message.to(user.email)
            .from('tony.amaral@devalpha.com.br', 'Tony | DevAlpha')
            .subject('Recuperação de senha')
        })
    } catch (error) {
      return response.status(error.status).send({ error: 'Something going wrong, this is a valid email?' })
    }
  }
}

module.exports = ForgotPasswordController
