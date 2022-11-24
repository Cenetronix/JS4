// за дома:
// Имате две низи:
// var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
// var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
// направете нова низа во која што ќе ги ставите сите имиња кој двете низи ги делат (Jill, Kate)
// објаснување за првата вежба:
// Имате две низи во кои се чуваат имиња во стрингови. Направете нова низа во која ќе ги има само имињата што ги има и во едната и во другата низа (во случајов Kate, Jill). Испечатете ја во конзолата таа низа.
//
// 2. Со помош на for loop креирајте ја кулата на Марио со помош на hashtags (#)
// output во конзолата :
// #
// ##
// ###
// ####
// #####
// ######
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18")
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

//
var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var followers =[];

for (var i = 0; i < JohnFollowers.length; i++) {
    for (var j = 0; j < JaneFollowers.length; j++) {
        if (JohnFollowers[i]===JaneFollowers[j]) {
            followers.push(JohnFollowers[i])
        }
    }
    
}
console.log(followers)



//Tower of Mario
var towerofMario= "", a = '';
for (var i = 0; i < 5; i++) {
  towerofMario += (a += '#') + "";
  console.log(towerofMario);
}

// Write a for loop + Bonus
var multi = 9;
for (var i = 0; i <= 10; i++) {
    var result = multi * i;
    console.log(multi + ' * ' + i + ' = ' + result);
}


for (var multi = 0; multi <= 10; multi++) {
 for (var i = 0; i <= 10; i++) {
   var result = multi * i;
   console.log(multi + ' * ' + i + ' = ' + result);
 }
}
