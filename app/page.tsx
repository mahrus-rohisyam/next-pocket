import { INotes, NoteResponse } from "@/models/notes";
import HTTP from "@/service/HTTP";

async function getNotes() {
  try {
    const res = await HTTP.get("api/collections/notes/records");
    return res.data;
  } catch (error) {
    console.log("Error getting notes", error);
  }
}

export default async function HomePage() {
  const notes: NoteResponse = await getNotes();

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {notes &&
          notes.items.map((note, index) => {
            return (
              <div key={index}>
                <h3>{note.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: note.content }}></p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
