interface User {
    type: 'user' | "Admin";
    name?: string;
    age?: number;
    occupation?: string;
  }

  const user : User = {
    type: 'user'
  }
  const admin : User = {
    type: 'Admin'
  }
  function getType(user: User){
    console.log(user.type)
  }

  getType(user);
  getType(admin);