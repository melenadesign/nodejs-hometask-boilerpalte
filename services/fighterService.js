const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    getName(fighterId) {
        const fighter = this.search(fighterId);
        if (fighter) {
          return fighter.name;
        } else {
          return null;
        }
      }

    setName(fighterId, fighterData) {
        const fighter = this.search(fighterId);        
        if (!fighter) {
          return FighterRepository.create(fighterData);
        } else {
          return FighterRepository.update(fighterId, fighterData);
        }
      }

    deleteUser(fighterId) {
        const fighter = FighterRepository.delete(fighterId);
        if(!fighter) {
            console.log(`Fighter ${fighterId} not found. Could not delete non-existent Fighter`);
            return null;
        }
        console.log(`Fighter was ${fighterId} deleted`);
        return fighter;
    }

    getAll() {
        const allFighters = FighterRepository.getAll();
        if(!Array.isArray(allFighters) && !allFighters.length) {
            return null;
        }
        return allFighters;
    }
}

module.exports = new FighterService();