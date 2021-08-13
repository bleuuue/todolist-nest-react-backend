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
  @ApiResponse({
    status: 200,
    description: '투두 수정',
    type: Todo,
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
  @ApiResponse({
    status: 200,
    description: '투두 삭제',
    type: Todo,
  })
  @Delete(':todoId')
  async deleteTodo(@Param() param: { todoId: string }) {
    return await this.todoService.deleteTodo(param);
  }

  @ApiParam({
    name: 'todoId',
    required: true,
    description: '투두리스트 아이디',
  })
  @ApiResponse({
    status: 200,
    description: '투두 완료 처리',
    type: Todo,
  })
  @Put('complete/:todoId')
  async toggleComplete(@Param() param: { todoId: string }) {
    return await this.todoService.toggleComplete(param);
  }
}
