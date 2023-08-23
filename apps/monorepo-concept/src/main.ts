// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */

// import { Logger } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import * as dotenv from 'dotenv';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 
// dotenv.config();

// import db = require('./database/models/index');

// db.sequelize.authenticate().then(() => {
//   Logger.log('🚀 Database connection has been established successfully.');
// }).catch((err: any) => {
//   Logger.error('Unable to connect to the database:', err);
// });

// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3000;
//   await app.listen(port);
//   Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
// }

// bootstrap();


import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // Import these
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';
dotenv.config();

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Create Swagger options using DocumentBuilder
  const config = new DocumentBuilder()
    .setTitle("NESTJS API")
    .setDescription(
      'This is a sample API created using NestJS and Swagger with JWT Authentication.'
    )
    .setVersion('1.0')
    .addTag('your-tag') // Add tags if needed
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger UI route
  SwaggerModule.setup('docs', app, document);

  // ... (rest of your code)

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();

