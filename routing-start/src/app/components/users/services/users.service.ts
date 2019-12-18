import User from '../models/user.model';

export default class UsersService {
    users: User[] = [
        new User(1, 'Fabio')
    ];

    getById(id: number): User {
        return this.users.find(u => u.id === id);
    }
}
