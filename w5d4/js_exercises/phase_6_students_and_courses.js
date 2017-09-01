function Student(firstname, lastname) {
  this.name = {
    first: firstname,
    last: lastname,
  };
  this.name.full = this.fullname()

  this.courses = [];

}

Student.prototype.fullname = function() {
  console.log(this);
  return `${this.name.first} ${this.name.last}`;
};

david.eats = function() {
  return `${this.name.first} eats a pizza!`;
}

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    return true;
  } else {
    return false;
  }
}



function Course(name, department, credits, timeBlock, days) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.timeBlock = timeBlock;
  this.days = []

  this.students = [];
}

Course.prototype.addStudent = function(student) {
  if (student.enroll(this)) {
    this.students.push(student);
  }
}

Course.prototype.conflictsWith = function(otherCourse) {
  this.days.forEach( function(day) {
    if (otherCourse.days.includes(day)) {

      if (this.timeBlock === otherCourse.timeBlock) {
        return true;
      }
    }
  });
  return false;
};


course = new Course('Donkey Cooking', 'Equine Culinary Dept.', 5, 3, ['mon','wed','fri']);
course2 = new Course('Donkey Cooking2', 'Equine Culinary Dept.', 5, 3, ['mon','wed','fri']);
course.conflictsWith(course2)

var wyatt = new Student('Donkey','Dude');
course.addStudent(wyatt);
course.addStudent(wyatt);
console.log(course);
console.log(wyatt);
