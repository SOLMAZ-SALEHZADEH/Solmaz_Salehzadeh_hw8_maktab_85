function setterGenerator(prop) {
    return function (name) {
      user[prop] = name;
      return user;
    };
  }
  
  const user = {};
  const setterGeneratorBind = setterGenerator.bind(user)
  const nameSetter = setterGeneratorBind("name");
  nameSetter("solmaz");
  console.log(user);