'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')

const TaskHook = exports = module.exports = {}

TaskHook.sendNewTaskMail = async (taskInstance) => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return

  const { email, username } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()
  const { title } = taskInstance

  await Mail.send(
    ['emails.new_task', 'emails.new_task-text'],
    { username, title, hasAttachment: !!file },
    message => {
      message
        .to(email)
        .from('tony.amaral@devalpha.com.br', 'Tony | DevAlpha')
        .subject('Nova tarefa para você')

      if (file) {
        message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
          filename: file.name
        })
      }
    }

  )
}
