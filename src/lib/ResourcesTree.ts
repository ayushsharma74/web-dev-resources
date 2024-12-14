import { TreeNode } from "@/interfaces/tree-node-interface";
export const RESOURCE_TREE: TreeNode = {
    id: "root",
    type: "folder",
    name: "Web Development Resources",
    children: [
      {
        id: "1",
        type: "folder",
        name: "Frontend",
        children: [
          {
            id: "2",
            type: "folder",
            name: "HTML",
            children: [
              {
                id: "3",
                type: "file",
                name: "Crash Cource By Apna College",
                link: "https://www.youtube.com/watch?v=HcOc7P5BMi4",
              },
              {
                id: "4",
                type: "file",
                name: "Crash Cource By Code With Harry",
                link: "https://www.youtube.com/watch?v=BsDoLVMnmZs",
              },
              {
                id: "5",
                type: "file",
                name: "Crash Cource By Code With Mosh",
                link: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
              },
            ],
          },
          {
            id: "6",
            type: "folder",
            name: "CSS",
            children: [
              {
                id: "90",
                type: "file",
                name: "Crash Cource By Sherians Coding School (Highly Recommended)",
                link: "https://www.youtube.com/watch?v=K1naz9wBwKU",
              },
              {
                id: "8",
                type: "file",
                name: "Crash Cource By ByteGrad",
                link: "https://www.youtube.com/watch?v=uDkjZ-UjgX0&t=198s",
              },
              {
                  id: "9",
                  type: "file",
                  name: "FlexBox Tutorial By ByteGrad (Recommended)",
                  link:"https://www.youtube.com/watch?v=xN1BkNItTRk"
              },
              {
                  id:"10",
                  type: "file",
                  name:"Box Model Tutorial",
                  link:"https://www.youtube.com/watch?v=nSst4-WbEZk"
              }
            ],
          },
          {
            id: "11",
            type: "folder",
            name: "JavaScript",
            children: [
              {
                id: "12",
                type: "file",
                name: "Chai aur Javascript Playlist (Highly Recommended)",
                link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
              },
              {
                id: "13",
                type: "file",
                name: "Bro Code 11 Hr Video (Highly Recommended)",
                link: "https://www.youtube.com/watch?v=lfmg-EJ8gm4",
              },
              {
                id: "14",
                type: "file",
                name: "Web Dev Simplified Playlist (Watch after JS Basics)",
                link: "https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9k5ju1yq9qCDqvtuTVgTr6",
              },
            ],
          },
          {
            id: "15",
            type: "folder",
            name: "React",
            children: [
              {
                id: "16",
                type: "file",
                name: "Chai aur React Playlist (Highly Recommended)",
                link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
              },
              {
                id: "17",
                type: "file",
                name: "Bro Code 4 Hr Video (Highly Recommended)",
                link: "https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=23s",
              },
              {
                id: "18",
                type: "file",
                name: "Code Bootcamp React Concepts Explaination",
                link: "https://www.youtube.com/watch?v=wIyHSOugGGw",
              },
               {
                  id: "19",
                  type: "file",
                  name: "Sherians Coding School Crash Cource",
                   link: "https://www.youtube.com/watch?v=Xe8CkYZvCig"
              },
              {
                  id:"20",
                  type: "file",
                  name:"Thapa Technical Playlist",
                  link:"https://www.youtube.com/playlist?list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1"
              }
            ],
          },
        ],
      },
      {
        id: "21",
        type: "folder",
        name: "Backend",
        children: [
          {
            id: "22",
            type: "folder",
            name: "NodeJS + ExpressJS",
            children: [
              {
                id: "23",
                type: "file",
                name: "Chai aur Backend Playlist (Highly Recommended)",
                link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",
              },
               {
                id: "24",
                type: "file",
                name: "Piyush Garg Playlist",
                 link: "https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo"
              },
              {
                  id: "25",
                  type: "file",
                  name: "Sherians Coding School 4 Hr (Not Recommended for Beginners)",
                  link: "https://www.youtube.com/watch?v=Q-icS7yZz5k&t=15s"
              },
              {
                   id:"26",
                   type: "file",
                   name: "Sherians Coding School Playlist (Recommended)",
                   link:"https://www.youtube.com/playlist?list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH"
              }
            ],
          },
        ],
      },
      {
        id: "27",
        type: "folder",
        name: "Database",
        children: [
          {
            id: "28",
            type: "folder",
            name: "MongoDB",
            children: [
              {
                id: "25",
                type: "file",
                name: "Chai aur Backend Playlist",
                link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",
              },
               {
                id: "26",
                 type: "file",
                  name: "Thapa Technical 5Hr Cource",
                link: "https://www.youtube.com/watch?v=rU9ZODw5yvU"
              },
              {
                  id: "27",
                  type: "file",
                  name: "Web Dev Simplified Tutorial",
                  link: "https://www.youtube.com/watch?v=ofme2o29ngU"
              },
              {
                  id:"28",
                  type: "file",
                  name: "MongoDB Aggregation Pipelines Playlist",
                  link: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQ6CZCehxKy0rjkqhQ2Z88t"
              }
            ],
          },
          {
              id: "29",
              type: "folder",
              name:"Structured Query Language (SQL)",
              children:[
                  {
                    id:"30",
                    type:"file",
                    name:"Apna College 3Hr Crash Cource",
                    link:"https://www.youtube.com/watch?v=hlGoQC332VM&t=5661s"
                  },
                  {
                     id:"31",
                     type:"file",
                      name:"PostgreSQL 5Hr Cource",
                      link:"https://www.youtube.com/watch?v=cnzka7kF5Zk"
                  }
              ]
          }
        ],
      },
      {
        id: "32",
          type: "folder",
          name: "NextJS",
          children:[
              {
                  id:"33",
                   type:"file",
                  name:"Chai Aur NextJS Playlist",
                  link:"https://www.youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq"
              },
              {
                  id:"34",
                   type:"file",
                  name:"Codevolution Playlist",
                  link:"https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"
              }
          ]
      },
       {
          id:"35",
          type: "folder",
           name:"Tools",
           children:[
              {
                  id:"36",
                  type:"folder",
                  name:"Tailwind CSS",
                  children:[
                      {
                          id:"37",
                          type:"file",
                          name: "Tailwind CSS Playlist",
                           link:"https://www.youtube.com/playlist?list=PL8p2I9GklV471sLqkGuf0eKAu9sVNmKFV"
                      }
                  ]
              },
             {
                id: "38",
                type: "folder",
                name:"Postman",
               children:[
                  {
                      id:"39",
                      type:"file",
                       name:"Postman Tutorial By Hitesh Choudhary (Assuming You know how to use Postman)",
                       link:"https://www.youtube.com/watch?v=4-DmsxM347k"
                  }
              ]
             },
             {
               id:"40",
              type: "folder",
              name:"Neovim (Not Beginner Friendly)",
               children:[
                  {
                      id:"41",
                      type:"file",
                      name:"Neovim setup Playlist",
                      link:"https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn"
                  },
                  {
                      id:"42",
                      type:"file",
                      name:"Setting Up Lazyvim (I Use it Btw 😎)",
                      link:"https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn"
                  },
                  {
                      id:"43",
                      type:"file",
                      name: "Arc Browser (I Use this for web dev so added it)",
                      link: "https://arc.net/"
                  }
               ]
             },
             {
                  id: "44",
                  type:"folder",
                  name:"TypeScript",
                  children:[
                      {
                          id:"45",
                           type:"file",
                           name:" TypeScript Domaination (Highly Recommended)",
                           link:"https://www.youtube.com/watch?v=lVzb6pmel_E&t=11995s"
                      },
                      {
                          id:"46",
                          type:"file",
                          name:" ByteGrad Typescript Playlist",
                           link:"https://www.youtube.com/playlist?list=PLK5U0tyd34tANnRkbFeXUbZl_1n9A33zL"
                      }
                  ]
             },
             {
              id:"47",
              type:"folder",
               name:"Prisma",
              children:[
                  {
                      id:"48",
                      type:"file",
                      name:"Prisma By Web Dev Simplified (Highly Recommended)",
                      link:"https://www.youtube.com/watch?v=RebA5J-rlwg&t=155s"
                  },
                  {
                       id:"49",
                       type:"file",
                       name:"ByteGrad Prisma Tutorial (For NextJS)",
                      link:"https://www.youtube.com/watch?v=QXxy8Uv1LnQ&t=195s"
                  }
              ]
             },
              {
                id:"50",
                 type:"folder",
                  name:"Zod Validation",
                  children:[
                      {
                          id:"51",
                           type:"file",
                          name:"ByteGrad Zod Tutorial",
                          link:"https://www.youtube.com/watch?v=AeQ3f4zmSMs&list=PLK5U0tyd34tANnRkbFeXUbZl_1n9A33zL&index=6"
                      }
                  ]
              }
           ]
      },
      {
          id:"52",
          type:"folder",
          name:"Docker",
          children:[
              {
                  id:"53",
                   type:"file",
                   name:"Docker By Piyush Garg Part 1",
                   link:"https://www.youtube.com/watch?v=31k6AtW-b3Y"
              },
              {
                  id:"54",
                  type:"file",
                   name:"Docker By Piyush Garg Part 2",
                    link:"https://www.youtube.com/watch?v=xPT8mXa-sJg"
              }
          ]
      },
       {
          id:"55",
          type: "folder",
          name: "Linux",
          children:[
              {
                 id:"56",
                  type:"file",
                  name:"6 Hr Linux One shot cource + DevOps",
                   link:"https://www.youtube.com/watch?v=e01GGTKmtpc&t=990s"
              },
              {
                 id:"57",
                   type:"file",
                   name:"Geeks for Geeks Linux Resources (Recommended)",
                   link:"https://www.geeksforgeeks.org/linux-tutorial/"
              }
          ]
      },
       {
          id:"58",
          type:"folder",
          name:"Open Source",
          children:[
               {
                  id:"59",
                  type:"file",
                   name:"Open Source Contribution Guide",
                    link:"https://www.youtube.com/playlist?list=PLinedj3B30sBsmRRL8XyTGadjRGkzRPb7"
               },
              {
                  id:"60",
                  type:"file",
                  name:"GSOC Web Developemnt Projects List",
                  link:"https://github.com/idontknowjs/gsoc-web-projects"
              }
          ]
       }
    ],
  };