#!/usr/bin/env node


//Modules : color commander & inquirer + sqlite + quiz
var colors = require('colors/safe');
var program = require('commander');
//var inquirer = require('inquirer');
const db = require('./db')

var quiz1 = require('./quiz/quiz1');
var quiz2 = require('./quiz/quiz2');
var quiz3 = require('./quiz/quiz3');


console.log(colors.cyan('-------- BIENVENU DANS LE JEU DE QUIZ --------\n'));
console.log(colors.cyan('Il y a 3 niveaux différents de quiz'));


//Promise, commander, differents difficulties
program
  .version('0.1.0')
  .option('-b, --beginner', 'choose quiz for beginner player')
  .option('-a, --average', 'choose quiz for average player')
  .option('-e, --expert', 'choose quiz for expert player')
  .parse(process.argv)

program.on('--help', function(){
    console.log('');
    console.log('Examples:');
    console.log('  $ custom-help --help');
    console.log('  $ custom-help -h');
});
  
program.parse(process.argv);



console.log(colors.cyan('si vous ne connaissez pas encore le jeu je vous conseil l\'option "--help" ou "-h" pour vous aider.\n'));
 
if (program.beginner) repeatDifficulties(), console.log(colors.green('\t - beginner'));
if (program.average) repeatDifficulties(), console.log(colors.yellow('\t - average'));
if (program.expert) repeatDifficulties(), console.log(colors.red('\t - expert'));

//Function repeat
function repeatDifficulties(){
    console.log(colors.cyan('Vous avez choisi la difficulté :'));
}

 
//Open database in memory

   

//SQLite table answer quiz1 +Create table quiz 1,2,3

db.serialize(() =>{
      db.run("CREATE TABLE IF NOT EXISTS quiz1 (answers)"),
      db.run("CREATE TABLE IF NOT EXISTS quiz2 (answers)"),
      db.run("CREATE TABLE IF NOT EXISTS quiz3 (answers)"),
      
      db.run('INSERT INTO quiz1(answers) VALUES(?)', ['Caduc']),
      db.run('INSERT INTO quiz1(answers) VALUES(?)', ['50']),
      db.run('INSERT INTO quiz1(answers) VALUES(?)', ['bras']),
      db.run('INSERT INTO quiz1(answers) VALUES(?)', ['Le phare']),
      db.run('INSERT INTO quiz1(answers) VALUES(?)', ['Van Gogh']),
      db.run('INSERT INTO quiz1(answers) VALUES(?)', ['un grand singe']),
      db.run('INSERT INTO quiz1(answers) VALUES(?)', ['La madeleine']),
      db.run('INSERT INTO quiz1(answers) VALUES(?)', ['Le tennis'])
}), 
      

//SQLite table answer quiz2

db.serialize(() =>{    
      db.run('INSERT INTO quiz2(answers) VALUES(?)', ['Hamlet']),
      db.run('INSERT INTO quiz2(answers) VALUES(?)', ['Clio']),
      db.run('INSERT INTO quiz2(answers) VALUES(?)', ['URSS']),
      db.run('INSERT INTO quiz2(answers) VALUES(?)', ['Marco Materazzi']),
      db.run('INSERT INTO quiz2(answers) VALUES(?)', ['La croisière s\'amuse']),
      db.run('INSERT INTO quiz2(answers) VALUES(?)', ['Queen']),
      db.run('INSERT INTO quiz2(answers) VALUES(?)', ['Corse']),
      db.run('INSERT INTO quiz2(answers) VALUES(?)', ['Indochine'])
}),

//SQLite table answer quiz3

db.serialize(() =>{    
    db.run('INSERT INTO quiz3(answers) VALUES(?)', ['La Corée']),
    db.run('INSERT INTO quiz3(answers) VALUES(?)', ['L\'ouïe']),
    db.run('INSERT INTO quiz3(answers) VALUES(?)', ['Corneille']),
    db.run('INSERT INTO quiz3(answers) VALUES(?)', ['Râ']),
    db.run('INSERT INTO quiz3(answers) VALUES(?)', ['Les chinois']),
    db.run('INSERT INTO quiz3(answers) VALUES(?)', ['Le Népal']),
    db.run('INSERT INTO quiz3(answers) VALUES(?)', ['Le kaki']),
    db.run('INSERT INTO quiz3(answers) VALUES(?)', ['Les pattes'])
})

//Option choose

if(program.beginner){
    quiz1.function1();
    
}
else if (program.average){
    quiz2.function2();
}
else{
    quiz3.function3();
}
    

//Clean up + err

db.serialize(() =>{
    db.run('DELETE FROM quiz1')
    db.run('DELETE FROM quiz2')
    db.run('DELETE FROM quiz3')
})
    //Close database connection
      db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
    });
