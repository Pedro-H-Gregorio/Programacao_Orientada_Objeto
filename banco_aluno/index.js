const Controller = require("./controller/controller");
const AlunoController = require("./controller/AlunoController");
const EstagioCotroller = require("./Controller/EstagioController");
const ProfessorController = require("./controller/ProfessorController");
const TurmaController = require("./controller/TurmaController");
const Aluno = require("./Entidades/Aluno");

const estagios = require("./json/Estagios.json");

// Comandos do controller do Estagio
/* EstagioCotroller.addEstagio(estagios);
EstagioCotroller.readEstagio9();
EstagioCotroller.deleteEstagio();
EstagioCotroller.createTableEstagio();
*/

// Comandos do controller do Aluno
/* AlunoController.addAluno();
AlunoController.readAluno();
AlunoController.deleteAluno();
AlunoController.createTableAluno(); */

// Comandos do controller do Professor
/* ProfessorController.addProfessor();
ProfessorController.readProfessor();
ProfessorController.deleteProfessor();
ProfessorController.createTableProfessor(); */

// Comandos do controller do Aluno
/* TurmaController.addTurma();
TurmaController.readTurma();
TurmaController.deleteTurma();
TurmaController.createTableTurma(); */

// Abistração maior do Controller, exemplos
/* Controller.createTable(Aluno);
Controller.delete(Aluno);
Controller.read(Aluno);
Controller.add(Aluno, obj);
Controller.updated(Aluno, obj); */
