import { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";
import axios from "axios";

export default function useTodoApp() {
  const { credential, setCredential } = useAppContext();

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://todoapi-fawn.vercel.app/api/todos", {
        headers: {
          Authorization: credential.token,
        },
      })
      .then(({ data }) => {
        setTodos(data);
      });
  }, [credential.token]);

  return {
    credential,
    setCredential,
    todos,
    setTodos,
  };
}

// export const useBank = () => {
//   const [options, setOptions] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://api.vietqr.io/v2/banks")
//       .then(({ data }) => setOptions(data.data));
//   }, []);

//   return { options };
// };
