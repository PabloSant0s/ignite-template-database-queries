import { getRepository, Repository } from 'typeorm'

import { User } from '../../../users/entities/User'
import { Game } from '../../entities/Game'

import { IGamesRepository } from '../IGamesRepository'

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>

  constructor() {
    this.repository = getRepository(Game)
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return this.repository
      .createQueryBuilder('games')
      .select('games.id', 'id')
      .addSelect('games.title', 'title')
      .where('games.title Ilike :title', { title: '%' + param + '%' })
      .getRawMany()
    // Complete usando query builder
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query('Select COUNT(*) from games') // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    return this.repository
      .createQueryBuilder('games')
      .select('users.id', 'id')
      .addSelect('users.first_name', 'first_name')
      .addSelect('users.last_name', 'last_name')
      .addSelect('users.email', 'email')
      .innerJoin('games.users', 'users')
      .where('games.id = :id', { id })
      .getRawMany()
    // Complete usando query builder
  }
}
