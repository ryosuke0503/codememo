import {
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    JsonController,
    NotFoundError,
  } from "routing-controllers";
  import { User } from "../entity/User";
  import { Info } from "../entity/User";
  import { Result } from "../entity/User";
  import { getRepository, Repository } from "typeorm";
  import { EntityFromParam } from "typeorm-routing-controllers-extensions";
  
  @JsonController()
  export class UserController {
    userRepository: Repository<User> = getRepository(User);
  
    @Get("/users")
    getAll() {
      return this.userRepository.find();
    }
  
    @Get("/users/:id")
    async getOne(@EntityFromParam("id") user: User) {
      if (!user) {
        throw new NotFoundError("User was not found !");
      }
      return user;
    }
  
    @Post("/users")
    async post(@Body() user: any) {
      return await this.userRepository.save(user);
    }
  
    @Put("/users/:id")
    async put(@Param("id") id: number, @Body() user: any) {
      return await this.userRepository.update(id, user);
    }
  
    @Delete("/users/:id")
    async remove(@EntityFromParam("id") user: User) {
      if (!user) {
        throw new NotFoundError("User was not found !");
      }
      return await this.userRepository.remove(user);
    }
  }
  
  @JsonController()
  export class InfoController {
    infoRepository: Repository<Info> = getRepository(Info);
  
    @Get("/info")
    getAll() {
      return this.infoRepository.find();
    }
  
    @Get("/info/:index")
    async getOne(@EntityFromParam("index") info: Info) {
      if (!info) {
        throw new NotFoundError("Info was not found !");
      }
      return info;
    }
  
    @Post("/info")
    async post(@Body() info: any) {
      return await this.infoRepository.save(info);
    }
  
    @Put("/info/:index")
    async put(@Param("index") index: number, @Body() info: any) {
      return await this.infoRepository.update(index, info);
    }
  
    @Delete("/info/:index")
    async remove(@EntityFromParam("index") info: Info) {
      if (!info) {
        throw new NotFoundError("Info was not found !");
      }
      return await this.infoRepository.remove(info);
    }
  }

  @JsonController()
  export class ResultController {
    resultRepository: Repository<Result> = getRepository(Result);
  
    @Get("/result")
    getAll() {
      return this.resultRepository.find();
    }
  
    @Get("/result/:index")
    async getOne(@EntityFromParam("index") result: Result) {
      if (!result) {
        throw new NotFoundError("Result was not found !");
      }
      return result;
    }
  
    @Post("/result")
    async post(@Body() result: any) {
      return await this.resultRepository.save(result);
    }
  
    @Put("/result/:index")
    async put(@Param("index") index: number, @Body() result: any) {
      return await this.resultRepository.update(index, result);
    }
  
    @Delete("/result/:index")
    async remove(@EntityFromParam("index") result: Result) {
      if (!result) {
        throw new NotFoundError("Result was not found !");
      }
      return await this.resultRepository.remove(result);
    }
  }