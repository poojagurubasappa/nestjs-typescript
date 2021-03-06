import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        const task: Task = {
            title,
            description,
            id: '1',
            status: TaskStatus.OPEN
        };
        this.tasks.push(task);
        return task;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    deleteTaskById(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatus) : Task {
        const updatedTask = this.getTaskById(id);
        updatedTask.status = status;
        return updatedTask;
    }
};
