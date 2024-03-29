/* Sulla base della lezione odierna, e utilizzando l'array di oggetti esposto alla fine di questo documento, svolgere i seguenti esercizi:

### Esercizio 1

Eseguire sull'array riportato sotto:

- un metodo forEach che stampi in console.log i soli ID di ogni singolo elemento
- un metodo map che memorizzi in una variabile tutti gli userId di ogni singolo elemento e quindi richiamarli con un console.log a parte
- un metodo filter che stampi in console.log i soli ID di ogni singolo elemento i cui valori siano maggiori o uguali a 4


*/

const todos = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: false,
    userId: 4,
  },
  {
    id: 4,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48,
  },
  {
    id: 5,
    todo: "Solve a Rubik's cube",
    completed: false,
    userId: 31,
  },
  {
    id: 6,
    todo: "Bake pastries for me and neighbor",
    completed: false,
    userId: 39,
  },
  {
    id: 7,
    todo: "Go see a Broadway production",
    completed: false,
    userId: 32,
  },
  {
    id: 8,
    todo: "Write a thank you letter to an influential person in my life",
    completed: true,
    userId: 13,
  },
  {
    id: 9,
    todo: "Invite some friends over for a game night",
    completed: false,
    userId: 47,
  },
  {
    id: 10,
    todo: "Have a football scrimmage with some friends",
    completed: false,
    userId: 19,
  },
  {
    id: 11,
    todo: "Text a friend I haven't talked to in a long time",
    completed: false,
    userId: 39,
  },
  {
    id: 12,
    todo: "Organize pantry",
    completed: true,
    userId: 39,
  },
  {
    id: 13,
    todo: "Buy a new house decoration",
    completed: false,
    userId: 16,
  },
  {
    id: 14,
    todo: "Plan a vacation I've always wanted to take",
    completed: false,
    userId: 28,
  },
  {
    id: 15,
    todo: "Clean out car",
    completed: false,
    userId: 33,
  },
  {
    id: 16,
    todo: "Draw and color a Mandala",
    completed: true,
    userId: 24,
  },
  {
    id: 17,
    todo: "Create a cookbook with favorite recipes",
    completed: false,
    userId: 1,
  },
  {
    id: 18,
    todo: "Bake a pie with some friends",
    completed: false,
    userId: 1,
  },
  {
    id: 19,
    todo: "Create a compost pile",
    completed: true,
    userId: 5,
  },
  {
    id: 20,
    todo: "Take a hike at a local park",
    completed: true,
    userId: 43,
  },
  {
    id: 21,
    todo: "Take a class at local community center that interests you",
    completed: false,
    userId: 22,
  },
  {
    id: 22,
    todo: "Research a topic interested in",
    completed: false,
    userId: 4,
  },
  {
    id: 23,
    todo: "Plan a trip to another country",
    completed: true,
    userId: 37,
  },
  {
    id: 24,
    todo: "Improve touch typing",
    completed: false,
    userId: 45,
  },
  {
    id: 25,
    todo: "Learn Express.js",
    completed: false,
    userId: 49,
  },
  {
    id: 26,
    todo: "Learn calligraphy",
    completed: false,
    userId: 50,
  },
  {
    id: 27,
    todo: "Have a photo session with some friends",
    completed: false,
    userId: 14,
  },
  {
    id: 28,
    todo: "Go to the gym",
    completed: false,
    userId: 15,
  },
  {
    id: 29,
    todo: "Make own LEGO creation",
    completed: false,
    userId: 30,
  },
  {
    id: 30,
    todo: "Take cat on a walk",
    completed: false,
    userId: 15,
  },
];

//-----------------metodo forEach------------------

//qui ho creato una funzione che stampa in console l'argomento della funzione stessa, questa funzione viene richiamata all'interno del metodo forEach che applica tale funzione ad ogni singolo elemento.
//come risultato verrà stampata in console il valore della chiave todo dell'oggetto i-esimo dell'array todos.

function todoExtraction(item) {
  console.log(item);
}

todos.forEach((todo) => todoExtraction(todo.todo));

//questa versione è più sintetica

//todos.forEach((todo) => console.log(todo.todo));

console.log("----------------------------");

//------------------metodo map--------------------

// all'interno della costante todouserId salvo il valore della chiave userId del signolo elemento di todos usando il metodo map che ha come return proprio i valori delle chiavi.

const todoUserId = todos.map((todo) => todo.userId);

//stampo in console todoUserId

console.log(todoUserId);

console.log("----------------------------");

//------------------metodo filter--------------------

//il metodo filter in questo caso prende tutti i valori di userId maggiori o uguali a 4, tali valori sono salvati dentro la costante filTodoUserId

const filTodoUserId = todos.filter((todo) => todo.userId >= 4);

//stampo in console filTodoUserId
console.log(filTodoUserId);

//### Avanzato

//Crare una todo list personale, con logica in linea a quanto visto a lezione e applicando lo stile preferito

const daFare = [
  {
    id: 1,
    fare: "leggi un libro al mese",
    completato: true,
  },
  {
    id: 2,
    fare: "vai a trovare i nonni",
    completato: false,
  },
  {
    id: 3,
    fare: "fai la spesa",
    completato: true,
  },
  {
    id: 4,
    fare: "esercitati nel weekend con javascript",
    completato: true,
  },
  {
    id: 5,
    fare: "vai in palestra tre volte a settimana",
    completato: false,
  },
  {
    id: 6,
    fare: "aggiorna linkedIn",
    completato: true,
  },
  {
    id: 7,
    fare: "guarda un film al cinema",
    completato: false,
  },
];

const todoGenerator = (todoId, todoText, isCompleted, parent) => {
  const todoEl = document.createElement("div");
  const isCompletedEl = document.createElement("div");
  const textEl = document.createElement("p");
  const bttnEl = document.createElement("button");

  todoEl.setAttribute("id", todoId);
  todoEl.className = "todo";
  bttnEl.className = "button";
  bttnEl.textContent = "x";

  isCompletedEl.className = "circle-check";
  isCompleted ? isCompletedEl.classList.add("completed") : null;
  textEl.textContent = todoText;
  todoEl.append(isCompletedEl, textEl, bttnEl);

  isCompletedEl.addEventListener("click", () => {
    isCompletedEl.classList.toggle("completed");
  });

  parent.appendChild(todoEl);
};

const bodyEl = document.querySelector("body");
const todoListEl = document.createElement("div");
const todoListTitleEl = document.createElement("h1");

todoListEl.className = "todo-list";
todoListTitleEl.textContent = "Cose da Fare";

bodyEl.append(todoListTitleEl, todoListEl);

daFare.map((todo) =>
  todoGenerator(todo.id, todo.fare, todo.completato, todoListEl)
);

function eraseTodo() {
  document.querySelector(".todo").remove();
  return console.log("elemento rimosso con successo");
}

const btnClickEl = document.querySelector(".button");

btnClickEl.addEventListener("click", eraseTodo);
