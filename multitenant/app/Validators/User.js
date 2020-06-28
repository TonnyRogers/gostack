'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'requred|email|unique:users',
      password: 'required'
    }
  }
}

module.exports = User
