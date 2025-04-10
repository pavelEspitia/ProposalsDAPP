import { useState } from "react";

interface Proposal {
  title: string;
  description: string;
  createdBy: string;
}

export default function Home() {
  // states to handle form data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [proposals, setProposals] = useState<Proposal[]>([]);

  // handle isLoading for user's feedback
  const [isLoading, setIsLoading] = useState(false);

  // function to handle form submit and proposal creation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      //need to call proposals contract in order to add the new proposal to the list

      setIsLoading(false);
    } catch (error) {
      console.error(`Error submitting proposal ${title} -- ERROR: ${error}`);
    }
  };

  // For UI we'll have to sections, onw for submitting new proposals and another one to list the proposals created
  return (
    <>
      <div id="create-proposal">
        {" "}
        <h1>Create Proposal</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Proposal Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Proposal Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <button type="submit">
            {isLoading ? "Submitting Proposal" : "Submit Proposal"}
          </button>
        </form>
      </div>
      <div id="list-proposals">
        <ul>
          {proposals.map((p) => (
            <li key={`${p.title}-${p.createdBy}`}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p>{p.createdBy}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
