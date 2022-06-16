"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
const TreeNode_1 = require("./TreeNode");
class BinaryTree {
    constructor() {
        this.root = null;
        this.totalNode = 0;
    }
    getSize() {
        return this.totalNode;
    }
    inorder(node) {
        if (node) {
            console.log(node.data);
            if (node.leftNode) {
                this.inorder(node.leftNode);
            }
            if (node.rightNode) {
                this.inorder(node.rightNode);
            }
        }
    }
    insert(data) {
        if (!this.root) {
            this.root = new TreeNode_1.TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            let node = new TreeNode_1.TreeNode(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.leftNode) {
                        currentNode.leftNode = node;
                        break;
                    }
                    currentNode = currentNode.leftNode;
                }
                else if (data > currentNode.data) {
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
exports.BinaryTree = BinaryTree;
