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

    getName(user) {

        if (user) {
          return user.name;
        } else {
          return null;
        }
      };
}

module.exports = new UserService();