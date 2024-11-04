import Image from "next/image";
import db from '../../mongodb/db.js'
import Todo from '../../mongodb/Todo.js'
import Link from "next/link.js";
import TaskComp from "@/components/Task";


export default async function Home() {
        db()
        const tasks = await Todo.find()
        console.log(tasks);
        
  return (
        <main className="px-3 py-3">
            <section className="container mx-auto mt-24 w-full md:w-1/3 lg:w-1/2  ">
           
            <section className=" flex justify-center items-center ">

             <ul className="w-full flex flex-col gap-2">
              {
                    tasks.map (task=> (
                        <TaskComp key={task._id} item={task._id} title={task.title} completed={task.completed}  />
                    ))
                  }
              </ul>
             </section>
            </section>
        </main>
  );
}
