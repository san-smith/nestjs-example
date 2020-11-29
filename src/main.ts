import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as packageJson from '../package.json'
import { Config } from './config'
import { AppModule } from './internal/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(Config.apiPrefix)

  const options = new DocumentBuilder()
    .setTitle('Blog Application')
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  const swaggerOptions = {
    displayOperationId: true,
    filter: true,
    displayRequestDuration: true,
  }
  SwaggerModule.setup(Config.apiPrefix, app, document, { swaggerOptions })

  await app.listen(Config.port)
}

bootstrap().then(() =>
  Logger.log(
    `OpenAPI is available at http://localhost:${Config.port}/${Config.apiPrefix}`,
    'NestApplication',
  ),
)
