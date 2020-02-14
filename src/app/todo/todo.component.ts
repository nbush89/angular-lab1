import { Component, OnInit } from "@angular/core";

import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  toDoArray: Todo[] = [
    { task: "Do dishes", complete: true },
    { task: "Fold laundry", complete: false },
    { task: "Do homework", complete: false },
    { task: "Pay bills", complete: true }
  ];

  constructor() {}

  ngOnInit(): void {}
}
