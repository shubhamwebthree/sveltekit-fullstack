import { SmartContract, method, prop, assert } from "scrypt-ts"

export class Multiply extends SmartContract {

  @prop()
  product: bigint

  // @prop()
  // diff: bigint

  constructor(value: bigint) {
    super(...arguments)
    this.product = value
    
  }

  @method()
  public unlock(x: bigint, y: bigint) {
    assert(x * y == this.product, 'incorrect mutli')
    // assert(x - y == this.diff, 'incorrect diff')
  }

}