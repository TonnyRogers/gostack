/* eslint-disable camelcase */
'use strict'

const Request = require('@adonisjs/framework/src/Request')
const { resource } = require('@adonisjs/framework/src/Route/Manager')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Project = use('App/Models/Project')
const User = use('App/Models/User')

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const projects = await Project.query().with('user').fetch()

    return projects
  }

  /**
   * Create/save a new project.
   * POST projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    try {
      const data = request.only(['title', 'description'])

      const project = await Project.create({ ...data, user_id: auth.user.id })

      return project
    } catch (error) {
      return response.status(error.status).json({ error: { message: 'Error to create project' } })
    }
  }

  /**
   * Display a single project.
   * GET projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    try {
      const project = await Project.findOrFail(params.id)

      await project.load('user')
      await project.load('tasks')

      return project
    } catch (error) {
      return response.status(error.status).json({ error: { message: 'Project not found' } })
    }
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const project = await Project.findOrFail(params.id)

      const data = request.only(['title', 'description'])

      project.merge(data)

      await project.save()

      return project
    } catch (error) {
      return response.status(error.status).json({ error: { message: 'Project not found' } })
    }
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    try {
      const project = await Project.findOrFail(params.id)

      project.delete()
    } catch (error) {
      return response.status(error.status).json({ error: { message: 'Error do delete project' } })
    }
  }
}

module.exports = ProjectController
