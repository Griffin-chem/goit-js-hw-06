"use strict"
import {
  default as users
} from './users.js';

// task-01
const getUserNames = users => users.map(({name}) => name);

console.log(getUserNames(users));

// task-02
const getUsersWithEyeColor = (users, color) => users.filter(({eyeColor}) => eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));

// task-03
const getUsersWithGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .map(({name}) => name);
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
const getUsersWithAge = (users, min, max) => users.filter(({age}) => age >= min && age <= max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// task-07
const calculateTotalBalance = users => users.reduce((totalBalance, {balance}) => (totalBalance + balance), 0);
console.log(calculateTotalBalance(users));

// task-08
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(({name}) => name);
};
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// task-09
const getNamesSortedByFriendsCount = users => {
  return users
    .sort((user1, user2) => user1.friends.length - user2.friends.length)
    .map(({name}) => name);
};
console.log(getNamesSortedByFriendsCount(users));

// task-10
const getSortedUniqueSkills = users => {
  return users
    .reduce((usersSkills, user) => [...usersSkills, ...user.skills], [])
    .sort()
    .filter((skill, index, usersSkills) => usersSkills.indexOf(skill) === index);
};
console.log(getSortedUniqueSkills(users));