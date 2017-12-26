export class ArrayUtils {
  static removeFromArray(array: any[], object:any) : any[]{
    const index: number = array.indexOf(object);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
}
