import * as React from "react";
import { fetchTodos } from "@/services/todo.quries";
import ChangeViewer from "@/components/dashboard/change-viewer";

export default async function Page() {
  const todos = await fetchTodos();

  return (
    <React.Fragment>
      <div className="">
        <ChangeViewer todos={todos} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni
          maxime voluptatem porro possimus cumque odit est dolorem perferendis,
          architecto ab nisi repellendus impedit vitae fugiat quasi? Aliquam
          amet a ex, et quam ut minima ipsa delectus, doloribus soluta facere
          numquam modi aliquid perferendis ea quas quibusdam excepturi, officia
          beatae ratione illum culpa quod. Suscipit id libero aliquid distinctio
          nobis laudantium pariatur adipisci excepturi deleniti. Minima minus
          ipsum error repellat hic velit qui nihil consectetur, ducimus tempora
          tenetur rerum earum nostrum vero! Quae consequatur architecto est eius
          autem. Aliquam dolore magni aspernatur! Modi natus accusantium
          excepturi labore, eos quia ipsum vero et soluta odit dolores
          voluptates incidunt ratione? Ad ipsum cum ipsa modi. Amet veniam,
          culpa magnam adipisci consectetur a velit dolorum sapiente. Natus
          recusandae, tenetur distinctio quod repellat quaerat sit laborum eos
          nobis eligendi qui? Et exercitationem alias blanditiis fuga est ipsum
          hic adipisci dolorum repudiandae. Illo minus similique sint corrupti,
          hic eveniet. Unde ipsam labore ab numquam optio. Necessitatibus,
          inventore! Nam placeat maiores nemo, beatae obcaecati voluptate fugit
          dolores quibusdam porro quas quos explicabo ipsa distinctio quia
          perferendis error commodi totam harum officiis, hic recusandae quo!
          Quae, numquam impedit. Rerum accusantium omnis magnam officiis saepe
          iste, ducimus tempore!
        </p>
      </div>
    </React.Fragment>
  );
}
