import { File, Folder, Tree } from "@/components/ui/file-tree";
import Link from "next/link";
import { TreeNode } from "@/interfaces/tree-node-interface";
import { RESOURCE_TREE } from "@/lib/ResourcesTree";



const renderTree = (node: TreeNode) => {
    if (node.type === "folder") {
      return (
        <Folder key={node.id} value={node.id} element={node.name}>
          {node.children && node.children.map(renderTree)}
        </Folder>
      );
    } else if (node.type === "file") {
      return (
        <File key={node.id} value={node.id} className="bg-zinc-900">
          {node.link ? (
            <Link href={node.link} target="_blank" rel="noopener noreferrer">
              <p>{node.name}</p>
            </Link>
          ) : (
            <p>{node.name}</p>
          )}
        </File>
      );
    }
    return null;
  };

  export function FileTree() {
    return (
      <div className="relative flex h-[600px] w-[370px] md:w-[600px] lg:w-[700px] flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-700 bg-black md:shadow-xl">
        <div className="bg-zinc-900 text-gray-300 text-3xl font-bold border-b border-slate-700 flex items-center justify-center w-full h-14 py-5">
          <p className="text-xl text-center sm:text-xl md:text-2xl lg:text-3xl">
            Web Development Resources
          </p>
        </div>
        <Tree
          className="px-7 py-3 overflow-hidden rounded-md bg-zinc-900 text-gray-300 font-semibold"
          initialSelectedId="7"
          initialExpandedItems={["1", "2", "3", "4", "5", "6", "7"]}
        >
          {RESOURCE_TREE.children?.map(renderTree)}
        </Tree>
      </div>
    );
  }