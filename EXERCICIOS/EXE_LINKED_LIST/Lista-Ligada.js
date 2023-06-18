class LinkedList{
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;     
    }

    get getHead() {
        return this.head;
    }
    get getTail() {
        return this.tail;
    }
    set setHead(head) {
        this.head = head;
    }
    set setTail(tail) {
        this.tail = tail;
    }
    toString() {
        console.log(`LinkedList -> HEAD --> data: ${this.head.data} HEAD --> next: ${this.head.next.data} | TAIL --> data: ${this.tail.data} TAIL --> next: ${this.tail.next}`);
    }
}

class LinkedListNode{
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    get getData() {
        return this.data;
    }
    get getNext() {
        return this.next;
    }
    set setData(data) {
        this.data = data;
    }
    set setNext(next) {
        this.next = next;
    }
    toString() {
        console.log(`LinkedListNode -> DATA: ${this.data} | LinkedListNode --> NEXT: ${this.next.data}`);
    }

}

/**
 * Esta função add um novo no na lista ligada
 * 
 * @param {*} value 
 * @param {*} LinkedList 
*/
function add(value, LinkedList) {
    const no = new LinkedListNode(value);
    if(LinkedList.getHead === null) {
        LinkedList.head = no;
        LinkedList.tail = no;
    }else{
        //a cauda atual aponta para o no que vai ser torna o ultimo no
        LinkedList.tail.next = no;
        //a cauda atual e substituida para novo no add
        LinkedList.tail = no;
    }
}

/**
 * Essa função muda o no cabeça da lista
 * 
 * @param {*} value 
 * @param {*} LinkedList 
 */
function prepend(value, LinkedList) {
    const no = new LinkedListNode(value);
    //o novo no aponta para a cabeça da lista
    no.next = LinkedList.getHead;
    //a cabeça da lista e atualizada com novo no
    LinkedList.setHead = no;
    //se não tiver calda
    if(LinkedList.getTail === null) {
       LinkedList.setTail = no; 
    }
}

/**
 * 
 * Esta função pesquisa se um no existe e contém dentro da lista ligada
 * 
 * @param {*} head 
 * @param {*} value 
 * @returns 
 */
function contains(head, value) {
    let no = head;
    //percorre a lista por nos diferentes do valor procurado
    while(no != null && no.getData != value) {
        //chama o proximo no
        no = no.getNext;
    }
    //o no não existe na lista, verdadeira a condição de no === null, while
    if(no === null) {
        return false;
    }else{
        //no encontrado e valor existe
        return true;
    }
}

/**
 * 
 * * Esta função remove um no da LinkedList
 * 
 * @param {*} head 
 * @param {*} value 
 * @param {*} LinkedList 
 * @returns 
 */
function remove(head, value, LinkedList) {
    //LinkedList não existe
    if(head === null) {
        return false;
    }
    let no = head;
    //verifica se o no a ser removido e o cabeça e calda ao mesmo tempo, sendo assim a lista so possui um no
    if(no.getData === value) {
        if(no.getData === LinkedList.tail.getData && no.getNext === null) {
            //lista vazia, unico no removido
            LinkedList.setData= null;
            LinkedList.setTail = null;
        }else{
            //calda e cabeça são nos diferentes e proximo no existe, isso e LinkedList e mais de um no,
            //no caso so dois nos, cabeça e calda, remove a cabeça atual, fazendo a calda se tornar a nova cabeça
            LinkedList.head = LinkedList.head.getNext;
        }
        return true; 
    }
    //se o no a ser removido não e a cabeça,
    //verifica se o proximo no e diferente de null(se o proximo no existe e se o valor do data do proximo no e diferente do que tem que procurar a remover), continua percorrendo a lista encadeada, até econtrar, quando encontrar o laço de repetição para
    while(no.getNext != null && no.getNext.getData != value) {
        //vai pausar no no antecessor em relação ao que ira remover
        no = no.getNext; 
    }
    //o no encontrado, possui o proximo no ? se sim, e porque o no a ser removido esta no meio de dois nos 
    if(no.getNext != null) {
        //o data do proximo no e igual ao data do no da calda,
        //se sim e porque o no a ser removido e o penultimo no da linked list um antes da calda
        if(no.getNext.getData === LinkedList.tail.getData) {
            //então a calda e atualizada com o novo no antecessor ao que ira ser removido, o no antepenultimo
            LinkedList.tail = no;
        }
        //o proximo no do antecessor ao no a ser removido e atualizando com o no
        //sucessor do no a ser removido, exlcuindo o no a ser removido da ligação, 
        //fazendo o no antecessor apontar a ligação para o no sucessor
        no.setNext = no.getNext.getNext;
        return true;
    }
    //o no não foi encontrado
    return false;
}

/**
 * Esta função percorre a lista ligada
 *  
 * @param {*} head 
 */
function traverse(head) {
    let no = head;
    while(no != null) {
        console.log(no.getData);
        no = no.getNext;
    }
}

function inicializa() {
    let list = new LinkedList();
    add(1, list); //no 1
    add(4, list); //no 4
    add(-2, list); //no -2
    list.toString();
    console.log("Modificando a cabeça da lista");
    prepend('Cabeça', list);
    list.toString();
    console.log(`Nó com data: ${0} contém na LinkedList? = ${contains(list.getHead, 0)}. Nó com data: ${-2} contém na LinkedList = ${contains(list.getHead, -2)}`);
    traverse(list.getHead);
    console.log(`A remoção do nó ${-2} foi efetuada: ${remove(list.getHead, -2, list)}`);
    traverse(list.getHead);
    console.log(`A remoção do nó ${1} foi efetuada: ${remove(list.getHead, 1, list)}`);
    traverse(list.getHead);
    add(-9, list); //no -9
    add('Nome', list); //no Nome
    add(['Café', 'Soja', 'Agua'], list); //no array
    list.toString();
    traverse(list.getHead);
}

inicializa();



