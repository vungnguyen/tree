import {TreeNode} from "./TreeNode";

export interface Tree<T> {
    insert(data: T): TreeNode<T>;
    inorder(node: TreeNode<T>): void;
    getSize(): number;
}