import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { single } from 'rxjs';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

type Tuser = {
  id: string,
  name: string,
  avater?: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: Tuser;

  @Output() select = new EventEmitter()

  get imagePath(){
    return 'assets/users/' + this.user.avater
  }

  onSelectUser() {
    this.select.emit(this.user?.id)
  }
}
