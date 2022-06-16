import {Tree} from "./Tree";
import  {TreeNode} from "./TreeNode";   
export class BinaryTree<T> implements Tree<T>{
    root: TreeNode<T> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }
    getSize(): number {
        return this.totalNode;
    }

    inorder(node: TreeNode<T>): void {
        if (node) {
            console.log(node.data)
            if (node.leftNode) {
                this.inorder(node.leftNode)
            }
            if (node.rightNode) {
                this.inorder(node.rightNode)
            }
        }
    }

    insert(data: T): TreeNode<T> {
        if (!this.root) {

            this.root = new TreeNode<T>(data)
            this.totalNode++;
            return this.root;
        }
        else {
            let node = new TreeNode<T>(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.leftNode) {
                        currentNode.leftNode = node;
                        break;
                    }
                    currentNode = currentNode.leftNode;

                } else if (data > currentNode.data) {
                    if (!currentNode.rightNode) {
                        currentNode.rightNode = node;
                        break;
                    }
                    currentNode = currentNode.rightNode;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }

}
