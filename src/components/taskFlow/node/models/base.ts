export type NodeID = string
export type NodeType = 'task' | 'play' | 'logic'
export class Node {
  id: NodeID
  type: NodeType = 'task'
  prev: NodeID[] = []
  next: NodeID[] = []

  constructor(id: NodeID) {
    this.id = id
  }

  getID(): NodeID {
    return this.id
  }

  addNext(id: NodeID) {
    this.next.push(id)
  }

  addPrev(id: NodeID) {
    this.prev.push(id)
  }
}