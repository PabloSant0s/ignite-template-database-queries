import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Game } from '../../games/entities/Game'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text', { nullable: false })
  first_name: string

  @Column('text', { nullable: false })
  last_name: string

  @Column('text', { nullable: false, unique: true })
  email: string

  @ManyToMany(() => Game, (game) => game.users)
  @JoinTable()
  games: Game[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
