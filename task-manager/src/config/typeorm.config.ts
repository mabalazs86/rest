import { TypeOrmModuleOptions } from '@nestjs/typeorm';
console.log(__dirname);

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'taskmanager-db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'taskmanager',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
