// import GoBack from "../../assets/icons/GoBack.astro";

export default () => {
  return (
    <button onClick={() => window.history.back()} className="text-xl rounded-full p-2 border-2 w-fit border-gray-500 flex items-center text-gray-500 hover:text-orange-500 hover:border-orange-500 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/></svg>
    </button>
  )
}