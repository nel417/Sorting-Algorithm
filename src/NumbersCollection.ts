import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  //gets length
  get length(): number {
    return this.data.length;
  }
  // compares left and right node
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  //swaping function with temp var
  swap(leftIndex: number, rightIndex: number): void {
    const left = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = left;
  }
}
