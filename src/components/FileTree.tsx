import { File, Folder, Tree } from "@/components/ui/file-tree";
import Link from "next/link";

export function FileTree() {
  return (
    <div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
        <Folder value="1" element="Frontend">
          <Folder value="2" element="HTML">
            <File value={"3"}>
              <Link href={"https://www.youtube.com/watch?v=HcOc7P5BMi4"}>
                <p>Crash Cource By Apna College</p>
              </Link>
            </File>
            <File value={"4"}>
              <Link href={"https://www.youtube.com/watch?v=BsDoLVMnmZs"}>
                <p>Crash Cource By Code With Harry</p>
              </Link>
            </File>
            <File value={"5"}>
              <Link href={"https://www.youtube.com/watch?v=qz0aGYrrlhU"}>
                <p>Crash Cource By Code With Mosh</p>
              </Link>
            </File>
          </Folder>
          <Folder value="6" element="CSS">
            <File value={"7"}>
              <Link href={"https://www.youtube.com/watch?v=K1naz9wBwKU"}>
                <p>Crash Cource By Sherians Coding School (Recommended)</p>
              </Link>
            </File>
            <File value={"7"}>
              <Link href={"https://www.youtube.com/watch?v=uDkjZ-UjgX0&t=198s"}>
                <p>Crash Cource By ByteGrad</p>
              </Link>
            </File>
            <File value={"9"}>
              <Link href={"https://www.youtube.com/watch?v=xN1BkNItTRk"}>
                <p>FlexBox Tutorial By ByteGrad (Highly Recommended)</p>
              </Link>
            </File>
            <File value={"10"}>
                <Link href={"https://www.youtube.com/watch?v=nSst4-WbEZk"}>
                <p>Box Model Tutorial</p>
                </Link>
            </File>
          </Folder>
          <Folder value="11" element="JavaScript">
            <File value={"12"}>
              <Link href={"https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"}>
              <p>Chai aur Code Playlist (Highly Recommended)</p>
              </Link>
            </File>
          </Folder>
        </Folder>
        {/* <Folder value="2" element="Backend"></Folder>
        <Folder value="3" element="Database"></Folder> */}

        
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
