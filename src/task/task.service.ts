import { Injectable } from "@nestjs/common"
import { TaskDto } from "./task.dto"

@Injectable()
export class TaskService {
  private TASKS = [
    {
      name: "Record a video",
      isDone: false
    }
  ]

  getAll() {
    return this.TASKS
  }

  create(dto: TaskDto) {
    this.TASKS.push({
      name: dto.name,
      isDone: false
    })

    return this.TASKS
  }
}
