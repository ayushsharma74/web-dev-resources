import { File, Folder, Tree } from "@/components/ui/file-tree";
import Link from "next/link";

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
            <File value={"90"}>
              <Link href={"https://www.youtube.com/watch?v=K1naz9wBwKU"}>
                <p>
                  Crash Cource By Sherians Coding School (Highly Recommended)
                </p>
              </Link>
            </File>
            <File value={"8"}>
              <Link href={"https://www.youtube.com/watch?v=uDkjZ-UjgX0&t=198s"}>
                <p>Crash Cource By ByteGrad</p>
              </Link>
            </File>
            <File value={"9"}>
              <Link href={"https://www.youtube.com/watch?v=xN1BkNItTRk"}>
                <p>FlexBox Tutorial By ByteGrad (Recommended)</p>
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
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"
                }
              >
                <p>Chai aur Javascript Playlist (Highly Recommended)</p>
              </Link>
            </File>
            <File value={"13"}>
              <Link href={"https://www.youtube.com/watch?v=lfmg-EJ8gm4"}>
                <p>Bro Code 11 Hr Video (Highly Recommended)</p>
              </Link>
            </File>
            <File value={"14"}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9k5ju1yq9qCDqvtuTVgTr6"
                }
              >
                <p>Web Dev Simplified Playlist (Watch after JS Basics)</p>
              </Link>
            </File>
          </Folder>
          <Folder value="15" element="React">
            <File value={"16"}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
                }
              >
                <p>Chai aur React Playlist (Highly Recommended)</p>
              </Link>
            </File>
            <File value={"17"}>
              <Link href={"https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=23s"}>
                <p>Bro Code 4 Hr Video (Highly Recommended)</p>
              </Link>
            </File>
            <File value={"18"}>
              <Link href={"https://www.youtube.com/watch?v=wIyHSOugGGw"}>
                <p>Code Bootcamp React Concepts Explaination</p>
              </Link>
            </File>
            <File value={"19"}>
              <Link href={"https://www.youtube.com/watch?v=Xe8CkYZvCig"}>
                <p>Sherians Coding School Crash Cource</p>
              </Link>
            </File>
            <File value={"20"}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1"
                }
              >
                <p>Thapa Technical Playlist</p>
              </Link>
            </File>
          </Folder>
        </Folder>
        <Folder value="21" element="Backend">
          <Folder value="22" element="NodeJS + ExpressJS">
            <File value={"23"}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW"
                }
              >
                <p>Chai aur Backend Playlist (Highly Recommended) </p>
              </Link>
            </File>
            <File value={"24"}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo"
                }
              >
                <p>Piyush Garg Playlist </p>
              </Link>
            </File>
            <File value={"25"}>
              <Link href={"https://www.youtube.com/watch?v=Q-icS7yZz5k&t=15s"}>
                <p>
                  Sherians Coding School 4 Hr (Not Recommended for Beginners){" "}
                </p>
              </Link>
            </File>
            <File value={"26"}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH"
                }
              >
                <p>Sherians Coding School Playlist (Recommended) </p>
              </Link>
            </File>
          </Folder>
        </Folder>
        <Folder value="27" element="Database">
          <Folder value="28" element="MongoDB">
            <File value={"25"}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW"
                }
              >
                <p>Chai aur Backend Playlist</p>
              </Link>
            </File>
            <File value={"26"}>
              <Link href={"https://www.youtube.com/watch?v=rU9ZODw5yvU"}>
                <p>Thapa Technical 5Hr Cource</p>
              </Link>
            </File>
            <File value={"27"}>
              <Link href={"https://www.youtube.com/watch?v=ofme2o29ngU"}>
                <p>Web Dev Simplified Tutorial</p>
              </Link>
            </File>
            <File value={"28"}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLRAV69dS1uWQ6CZCehxKy0rjkqhQ2Z88t"
                }
              >
                <p>MongoDB Aggregation Pipelines Playlist</p>
              </Link>
            </File>
          </Folder>
          <Folder value="29" element="Structured Query Language (SQL)">
            <File value={"30"}>
              <Link
                href={"https://www.youtube.com/watch?v=hlGoQC332VM&t=5661s"}
              >
                <p>Apna College 3Hr Crash Cource</p>
              </Link>
            </File>
            <File value={"31"}>
              <Link href={"https://www.youtube.com/watch?v=cnzka7kF5Zk"}>
                <p>PostgreSQL 5Hr Cource </p>
              </Link>
            </File>
          </Folder>
        </Folder>
        <Folder value="32" element="NextJS">
          <File value={"33"}>
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq"
              }
            >
              <p>Chai Aur NextJS Playlist</p>
            </Link>
          </File>
          <File value={"34"}>
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"
              }
            >
              <p>Codevolution Playlist</p>
            </Link>
          </File>
        </Folder>
        <Folder value="35" element="Tools">
          <Folder value="36" element="Tailwind CSS">
          <File value={"37"}>
            <Link href={"https://www.youtube.com/playlist?list=PL8p2I9GklV471sLqkGuf0eKAu9sVNmKFV"}>
            <p>
              Tailwind CSS Playlist
            </p>
            </Link>
          </File>
          </Folder>
          <Folder value="38" element="Postman">
          <File value={"39"}>
            <Link href={"https://www.youtube.com/watch?v=4-DmsxM347k"}>
            <p>
              Postman Tutorial By Hitesh Choudhary (Assuming You know how to use Postman)
            </p>
            </Link>
          </File>
          </Folder>
          <Folder value="40" element="Neovim (Not Beginner Friendly)">
          <File value={"41"}>
            <Link href={"https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn"}>
              <p>Neovim setup Playlist</p>
            </Link>
          </File>
          <File value={"42"}>
            <Link href={"https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn"}>
              <p>Setting Up Lazyvim (I Use it Btw 😎)</p>
            </Link>
          </File>
          <File value={"43"}>
            <Link href={"https://arc.net/"}>
              <p>Arc Browser (I Use this for web dev so added it)</p>
            </Link>
          </File>
        </Folder>
        <Folder value="44" element="TypeScript">
          <File value={"45"}>
            <Link href={"https://www.youtube.com/watch?v=lVzb6pmel_E&t=11995s"}>
              <p> TypeScript Domaination (Highly Recommended)</p>
            </Link>
          </File>
          <File value={"46"}>
            <Link href={"https://www.youtube.com/playlist?list=PLK5U0tyd34tANnRkbFeXUbZl_1n9A33zL"}>
              <p> ByteGrad Typescript Playlist</p>
            </Link>
          </File>
        </Folder>
        <Folder value="47" element="Prisma">
          <File value={"48"}>
            <Link href={"https://www.youtube.com/watch?v=RebA5J-rlwg&t=155s"}>
              <p>Prisma By Web Dev Simplified (Highly Recommended)</p>
            </Link>
          </File>
          <File value={"49"}>
            <Link href={"https://www.youtube.com/watch?v=QXxy8Uv1LnQ&t=195s"}>
              <p>ByteGrad Prisma Tutorial (For NextJS)</p>
            </Link>
          </File>
        </Folder>
        <Folder value="50" element="Zod Validation">
          <File value={"51"}>
            <Link href={"https://www.youtube.com/watch?v=AeQ3f4zmSMs&list=PLK5U0tyd34tANnRkbFeXUbZl_1n9A33zL&index=6"}>
              <p>ByteGrad Zod Tutorial</p>
            </Link>
          </File>
        </Folder>
        </Folder>
        <Folder value="52" element="Docker">
          <File value={"53"}>
            <Link href={"https://www.youtube.com/watch?v=31k6AtW-b3Y"}>
              <p>Docker By Piyush Garg Part 1</p>
            </Link>
          </File>
          <File value={"54"}>
            <Link href={"https://www.youtube.com/watch?v=xPT8mXa-sJg"}>
              <p>Docker By Piyush Garg Part 2</p>
            </Link>
          </File>
        </Folder>
        <Folder value="55" element="Linux">
          <File value={"56"}>
            <Link href={"https://www.youtube.com/watch?v=e01GGTKmtpc&t=990s"}>
              <p>6 Hr Linux One shot cource + DevOps</p>
            </Link>
          </File>
          <File value={"57"}>
            <Link href={"https://www.geeksforgeeks.org/linux-tutorial/"}>
              <p>Geeks for Geeks Linux Resources (Recommended)</p>
            </Link>
          </File>
        </Folder>
        <Folder value="58" element="Open Source">
          <File value={"59"}>
            <Link href={"https://www.youtube.com/playlist?list=PLinedj3B30sBsmRRL8XyTGadjRGkzRPb7"}>
              <p>Open Source Contribution Guide</p>
            </Link>
          </File>
          <File value={"60"}>
            <Link href={"https://github.com/idontknowjs/gsoc-web-projects"}>
              <p>GSOC Web Developemnt Projects List</p>
            </Link>
          </File>
        </Folder>
              
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
