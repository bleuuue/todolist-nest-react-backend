import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { UpdateTodoDto } from './dtos/updateTodo.dto';
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

  @ApiParam({
    name: 'todoId',
    required: true,
    description: '투두리스트 아이디',
  })
  @Put(':todoId')
  async updateTodo(
    @Param() param: { todoId: string },
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return await this.todoService.updateTodo(param, updateTodoDto);
  }

  @ApiParam({
    name: 'todoId',
    required: true,
    description: '투두리스트 아이디',
  })
  @Delete(':todoId')
  async deleteTodo(@Param() param: { todoId: string }) {
    return await this.todoService.deleteTodo(param);
  }
}
