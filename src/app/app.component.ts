import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Easytask';

  users = DUMMY_USERS;

  // Get single user data
  selectedUserId = "u1";
  get SelectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId)!;
  }

  onSelectUser = (id:string) =>{
    this.selectedUserId = id
  }
}
