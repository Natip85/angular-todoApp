import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date'])
    console.log(date);
    
  }
tasks: Task[] = [
    new Task('Get Laundry'),
    new Task('Take out trash'),
    new Task('Wash the dishes')
  ]

  add(newTask: string){
    this.tasks.push(new Task(newTask))
  }

  remove(removed:Task){
    var userConfirmed = confirm(`Are you sure you want to remove the following task? \n "${removed.title}"`)

    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != removed)
    }
  }
}

class Task {

  constructor(public title: string){}

  toggleIsDone(){
    this.isDone = !this.isDone
  }

  public isDone = false
  
}

