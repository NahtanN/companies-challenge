import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { entities } from './database_entities';

const typeormOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT || 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_SCHEMA,
  entities,
  synchronize: false,
  logging: true,
  migrations: ['dist/providers/typeorm/migrations/*.js'],
};

export default new DataSource(typeormOptions);
