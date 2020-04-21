import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

const charCollection = new CharCollection("EbJuLcHeSAbCvlM");
const numbersCollection = new NumbersCollection([100, 55, 470, -3, 0, 88]);
const linkedList = new LinkedList();

linkedList.add(1000);
linkedList.add(0);
linkedList.add(53);
linkedList.add(7777);
linkedList.add(-654);

charCollection.sort();
linkedList.sort();
numbersCollection.sort();

console.log(numbersCollection.data);
console.log(charCollection.data);
linkedList.print();
