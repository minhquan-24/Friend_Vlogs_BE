import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(255))
  declare email: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(255),
    field: 'password_hash',
  })
  declare passwordHash: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(100),
    field: 'display_name',
  })
  declare displayName: string;
}
