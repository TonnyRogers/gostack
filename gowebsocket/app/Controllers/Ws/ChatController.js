'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onMessage (data) {
    await this.socket.broadcastToAll('message', data)
  }
}

module.exports = ChatController
