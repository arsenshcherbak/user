class User{

  constructor(name, surname){
    this.name = name
    this.surname = surname
    
  }

  getFullName(){
    return this.name + ` `+ this.surname
  }
}

class Student extends User{

  constructor(year){
    super(name, surname)
    this.year = year
  }
  getCourse(){
    let coursee = 2021 - this.year
    return coursee
  }
}

const arsen = new Student('Arsen', 'Shcherbaak', 2018);