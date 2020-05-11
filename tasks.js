"use strict"
import {
  default as users
} from './users.js';

// task-01
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));

// task-02
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'blue'));

// task-03
const getUsersWithGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .map(user => user.name);
};
console.log(getUsersWithGender(users, 'male'));

// task-04
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};
console.log(getInactiveUsers(users));

// task-05
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
}
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// task-06
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => (user.age >= min) & (user.age <= max));
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// task-07
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
console.log(calculateTotalBalance(users));

// task-08
const getUsersWithFriend = (users, friendName) => {
  return users
  .filter(user => user.friends.includes(friendName))
  .map(user=>user.name);
};
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// task-09
const getNamesSortedByFriendsCount = users => {
  return users
    .sort((user1, user2)=>user1.friends.length-user2.friends.length)
    .map(user=>user.name);
};
console.log(getNamesSortedByFriendsCount(users));

// task-10
const getSortedUniqueSkills = users => {
  const makeUniqueSkills = (uniqueSkills, skill) => {
    if (!uniqueSkills.includes(skill)) {
      uniqueSkills.push(skill);
    }
    return uniqueSkills;
  };
  return users
  .reduce((usersSkills, user) => {
    usersSkills.push(...user.skills);

    return usersSkills
  }, [])
  .sort()
  .reduce(makeUniqueSkills, []);
};
console.log(getSortedUniqueSkills(users));