import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  users: any[];
  newUser: any = {};
  editingUserId: number | null = null;

  constructor() {
    // Initialize the users array with some sample data
    this.users = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
      { id: 3, name: 'Mike', age: 22 }
    ];
  }

  addUser() {
    this.newUser.id = this.users.length + 1;
    this.users.push({ ...this.newUser });
    this.clearForm();
  }

  editUser(id: number) {
    this.newUser = { ...this.users.find(user => user.id === id) };
    this.editingUserId = id;
  }

  updateUser() {
    const index = this.users.findIndex(user => user.id === this.editingUserId);
    if (index !== -1) {
      this.users[index] = { ...this.newUser };
      this.clearForm();
      this.editingUserId = null;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  clearForm() {
    this.newUser = {};
  }
}
