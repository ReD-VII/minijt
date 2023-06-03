import { useState, useEffect, useReducer } from "react";
import { db } from "../services/firebase/configs";
import { collection, addDoc, Timestamp } from "firebase/firestore";


// Estado inicial do Reducer
const initialState = {
  loading: null, // Indica se o processo de inserção está ocorrendo
  error: null, // Armazena o erro, caso ocorra
};


// Função do REDUCER
const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null }; // Ativa o estado de loading, limpa o erro
    case "INSERTED_DOC":
      return { loading: false, error: null }; // Desativa o estado de loading, limpa o erro
    case "ERROR":
      return { loading: false, error: action.payload }; // Desativa o estado de loading, armazena o erro
    default:
      return state;
  }
};

// Hook personalizado para inserir um documento no Firebase
export const useInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  // Lida com o vazamento de memória
  const [cancelled, setCancelled] = useState(false);

  // Verifica se o cancelamento ocorreu antes de despachar uma ação
  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  // Função para inserir um documento no Firebase
  const insertDocument = async (document) => {

    // Verifica o cancelamento antes de despachar a ação de loading
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      // Adiciona o documento à coleção no Firebase
      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      // Verifica o cancelamento antes de despachar a ação de documento inserido
      checkCancelBeforeDispatch({
        type: "INSERTED_DOC",
        payload: insertedDocument,
      });
    } catch (error) {
      // Verifica o cancelamento antes de despachar a ação de erro
      checkCancelBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  // Efeito para lidar com o cancelamento
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertDocument, response };
};