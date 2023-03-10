import { getRepository, Repository } from 'typeorm'

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos'
import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User | undefined> {
    // Complete usando ORM
    return this.repository.findOne({
      relations: ['games'],
      where: { id: user_id },
    })
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query('Select * from users order by first_name') // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(
      'Select * from "users" WHERE LOWER(first_name) like LOWER($1) and LOWER(last_name) like LOWER($2)',
      [first_name, last_name],
    ) // Complete usando raw query
  }
}
