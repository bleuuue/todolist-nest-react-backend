import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiResponse({
    status: 201,
    description: '투두 생성',
    type: Todo,
  })
  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.createTodo(createTodoDto);
  }

  @ApiResponse({
    status: 200,
    description: '투두 가져오기',
    type: [Todo],
  })
  @Get()
  async getTodos() {
    return await this.todoService.getTodos();
  }
}
