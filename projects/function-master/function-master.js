function objectValues(obj) {
    return Object.values(obj);
    }
    

function keysToString(obj) {
    var arr = Object.keys(obj);
    return arr.join(" ");
}

function valuesToString(obj) {
    var arr = Object.values(obj);
    var str = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string")
        str.push(arr[i]);
    }
   
   return str.join(" ");
}

function arrayOrObject(arg) {
  if (Array.isArray(arg)) return 'array';
  if(arg === null) return 'null';
  if(arg instanceof Date) return 'Date';
  if(typeof arg === 'object') return 'object';
}
   
function capitalizeWord(str) {
      str = str[0].toUpperCase() + str.slice(1);
      return str;
}

function capitalizeAllWords(str) {
 /*   var splitStr = str.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = capitalizeWord(splitStr[i]);
    }
    return splitStr.join(" "); */
    
    return str.replace(/\b\w/g, capitalizeWord);
}

function welcomeMessage(obj) {
  if (obj.name) {
    return "Welcome " + capitalizeWord(obj.name) + "!";
  }
}

function profileInfo(obj) {
  if (obj.name && obj.species) {
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
  }
}

function maybeNoises(obj) {
    if (Array.isArray(obj.noises) && obj.noises[0] !=undefined) {
        return valuesToString(obj.noises)
    } else {
        return 'there are no noises';
    }
}

function hasWord(str, word) {
     if (str.includes(word)){
         return true;
     } else {
         return false;
     }
}

function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj) {
    var answer;
    if (Array.isArray(obj.friends)) {
        for (var i = 0; i < obj.friends.length; i++) {
            if (obj.friends[i] !== name) {
                answer = false;
            } else {
                 return true;
            }
        }
        return answer;
    } else {
        return false;
    }
}

function nonFriends(name, people) {
    let arrName = [];
    let arrFriends;
        for (let i = 0; i < people.length; i++) {
            if (people[i].name !== name) {
                arrName.push(people[i].name);
            } else if (people[i].name === name){
                arrFriends = (people[i].friends);
            }
        }
        for (let i = 0; i<arrFriends.length; i++) {
             let arrlen = arrName.length;
            for (let j = 0; j<arrlen; j++) {
                if (arrFriends[i] == arrName[j]) {
                    arrName = arrName.slice(0, j).concat(arrName.slice(j+1, arrlen));
                }
            }
        }
  return arrName;
//   console.log(arrName);
//   console.log(arrFriends);
}

function updateObject(obj, key, val) {
  for (var prop in obj) {
    if (!!obj[key]){
      obj[key] = val;
    } else {
      obj[key] = val;
    }
  }
  return obj;
}

function removeProperties(obj, arr) {
  for (let i = 0; i<arr.length; i++) {
    for (var key in obj) {
      if (arr[i] === key) {
        delete obj[key];
      }
    }
  }
  return obj;
}

function dedup(arr){
  let finalArr = [];
  let obj = {};
  for (let i = 0; i<arr.length; i++) {
    obj[arr[i]]=arr[i];
  }
  for (let key in obj){
    finalArr.push(obj[key]);
  }
  return finalArr;
}