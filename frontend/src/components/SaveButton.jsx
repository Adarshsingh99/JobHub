import  {useState} from "react";
function SaveButton()
{
    const[saved,setSaved]  = useState(false);
    return(
          <button
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            onClick={() => setSaved((currentSaved) => !currentSaved)}
          >
            {saved ? "Saved" : "Save job"}
          </button>
    );
}
export default SaveButton;