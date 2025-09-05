import { Injectable } from "@nestjs/common"

@Injectable()
export class ProductService {
  private tasks = [
    {
      id: 1,
      title: "Test1",
      isComplite: true
    },
    {
      id: 2,
      title: "Test2",
      isComplite: false
    }
  ]
  findAll() {
    return this.tasks
  }
}
