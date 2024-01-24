import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { TaskService } from "./task.service"
import { TaskDto } from "./task.dto"

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks() {
    return this.taskService.getAll()
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: TaskDto) {
    console.log("Received request payload:", dto)
    return this.taskService.create(dto)
  }
}
