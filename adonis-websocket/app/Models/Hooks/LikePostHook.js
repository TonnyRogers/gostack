'use strict'

const Ws = use('Ws')
const Like = use('App/Models/LikePost')
const Notification = use('App/Models/Notification')

const LikePostHook = exports = module.exports = {}

LikePostHook.method = async (modelInstance) => {
}

LikePostHook.sendWs = async likeInstance => {
  const topic = Ws.getChannel('posts').topic('posts')
  if(topic) {
    const [{count}] = await Like.query()
      .where('post_id',likeInstance.post_id)
      .count()

    topic.broadcast('like', { count, id:likeInstance.post_id })
  }
}

LikePostHook.notifyUser = async likeInstance => {
  const post = await likeInstance.post().fetch()

  if(post.user_id !== likeInstance.user_id) {
    const user = await likeInstance.user().fetch()

    await Notification.create({
      user_id: post.user_id,
      content: `<b>${user.name}</b> curtiu seu post`
    })
  }
}
