import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";

async function Bootstrap() {
  const app=await NestFactory.create<NestExpressApplication>(AppModule)
  await app.listen(3000)
}
Bootstrap()