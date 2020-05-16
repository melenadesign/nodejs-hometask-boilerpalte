const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    getName(userId) {
        const user = this.search(userId);
        if (user) {
          return user.name;
        } else {
          return null;
        }
      }

    setName(userId, userData) {
        const user = this.search(userId);        
        if (!user) {
          return UserRepository.create(userData);
        } else {
          return UserRepository.update(userId, userData);
        }
      }

    deleteUser(userId) {
        const user = UserRepository.delete(userId);
        if(!user) {
            console.log(`User ${userId} not found. Could not delete non-existent user`);
            return null;
        }
        console.log(`User was ${userId} deleted`);
        return user;
    }

    getAll() {
        const allUsers = UserRepository.getAll();
        if(!Array.isArray(allUsers) && !allUsers.length) {
            return null;
        }
        return allUsers;
    }

}

module.exports = new UserService();