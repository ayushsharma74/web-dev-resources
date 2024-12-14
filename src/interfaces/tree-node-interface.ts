export interface TreeNode {
    id: string;
    type: "folder" | "file";
    name: string;
    link?: string;
    children?: TreeNode[];
  }