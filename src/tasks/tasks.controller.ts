import { Body, Controller, Get, Post, Query, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { query } from 'express';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() body): Task {
        return this.tasksService.createTask(body.title, body.description);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) : Task {
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTaskById(@Param() param) : void {
        this.tasksService.deleteTaskById(param.id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body('status') status) : Task {
        return this.tasksService.updateTaskStatus(id, status);
    }
};
