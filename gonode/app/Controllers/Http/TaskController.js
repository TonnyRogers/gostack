'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Task = use('App/Models/Task')
/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, response }) {
    try {
      const tasks = await Task.query().where('project_id', params.projects_id).with('user').fetch()

      return tasks
    } catch (error) {
      return response.status(error.status).json(error)
    }
  }

  /**
   * Create/save a new task.
   * POST tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    try {
      const data = request.only([
        'user_id',
        'title',
        'description',
        'due_date',
        'file_id'
      ])

      const task = await Task.create({
        ...data,
        project_id: params.projects_id
      })

      return task
    } catch (error) {
      console.log(error)
      return response.status(error.status).json({ error: { message: 'Error to create task' } })
    }
  }

  /**
   * Display a single task.
   * GET tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    try {
      const task = await Task.findOrFail(params.id)

      return task
    } catch (error) {
      return response.status(error.status).json({ error: { message: 'Task not found' } })
    }
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const task = await Task.findOrFail(params.id)

      const data = request.only([
        'user_id',
        'title',
        'description',
        'due_date',
        'file_id'
      ])

      task.merge(data)

      await task.save()

      return task
    } catch (error) {
      return response.status(error.status).json({ error: { message: 'Error to update task' } })
    }
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    try {
      const task = await Task.findOrFail(params.id)

      await task.delete()
    } catch (error) {
      return response.status(error.status).json(error)
    }
  }
}

module.exports = TaskController
