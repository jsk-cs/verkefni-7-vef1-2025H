
/** @typedef {Object} TodoItem
 * @property {string} text - Texti verkefnis.
 * @property {boolean} finished - Hvort verkefni sé klárað eða ekki.
 * @type {TodoItem[]}
 */
const todoList = [];

//------------------------------------------------------------------------------
// Föll sem vinna með verkefnalistann

/**
 * Búa til verkefni og bæta því aftast í verkefnalistann.
 * @param {unknown} input - Texti verkefnis, ætti að vera strengur.
 * @returns {number} Ný stærð verkefnalistans.
 */
function createTodoItem(input) {
  if (typeof input !== "string" || input.trim() === "") {
    console.error("Villa: Texti verður að vera strengur og ekki tómur.");
    return todoList.length;
  }

  const item = {
    text: input.trim(),
    finished: false,
  };

  todoList.push(item);
  console.log('Verkefni bætt við: "' + item.text + '"');
  return todoList.length;
}

/**
 * Birtir verkefnalistann í console.
 */
function list() {
  if (todoList.length === 0) {
    console.log("Verkefnalisti er tómur.");
    return;
  }

  console.log("Verkefnalisti:");
  todoList.forEach((item, index) => {
    const status = item.finished ? "klárað" : "óklárað";
    console.log(index + ". " + item.text + " — " + status);
  });
}

/**
 * Breytir stöðu verkefnis í „klárað“ eða „óklárað“.
 * @param {unknown} index - Index verkefnis í lista, verður að vera á bilinu
 *   [0, todoList.length], ætti að vera tala
 * @returns {boolean} - `true` ef breyting tókst, annars `false`.
 */
function toggleFinished(index) {
  if (typeof index !== "number" || index < 0 || index >= todoList.length) {
    console.error("Villa: ógilt númer verkefnis.");
    return false;
  }

  const item = todoList[index];
  item.finished = !item.finished;
  const status = item.finished ? "klárað" : "óklárað";
  console.log('Verkefni "' + item.text + '" er núna ' + status + ".");
  return true;
}

/**
 * Skrifar út stöðu verkefnalistans í console.
 */
function stats() {
  const done = todoList.filter(i => i.finished).length;
  const notDone = todoList.length - done;

  console.log("Tölfræði:");
  console.log("Kláruð verkefni: " + done);
  console.log("Ókláruð verkefni: " + notDone);
}

/**
 * Tæma verkefnalistann.
 */
function clear() {
  if (todoList.length === 0) {
    console.log("Verkefnalisti er tómur, ekkert til að eyða.");
    return;
  }

  const hasFinished = todoList.some(item => item.finished === true);
  if (!hasFinished) {
    console.log("Engin kláruð verkefni til að eyða.");
    return
  }

  if (confirm("Viltu eyða öllum kláruðum verkefnum?")) {
    for (let i = todoList.length - 1; i >= 0; i--) {
      if (todoList[i].finished) {
        todoList.splice(i, 1);
      }
    }
    console.log("Kláruð verkefni hafa verið fjarlægð.");
  } 
  
  else {
    console.log("Hætt við að eyða verkefnum.");
  }
}

/**
 * Leiðbeint ferli til að bæta verkefnum við, sýnir síðan lista og stöðu.
 */
function start() {
  while (true) {
    const input = prompt("Sláðu inn texta fyrir nýtt verkefni (hættu með Cancel):");

    if (input === null) {
      console.log("Hætt við að bæta við verkefnum.");
      break;
    }

    if (input.trim() === "") {
      alert("Verkefni verður að hafa texta!");
      continue;
    }

    createTodoItem(input);
  }

  list();
  stats();
}
