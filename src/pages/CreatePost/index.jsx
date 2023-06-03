import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { CreateFormStyleConteiner } from "./styles";

const CreatePost = () => {

  // Setando estados
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  // Importando o usuario do contexto 
  const { user } = useAuthValue();

  // Hook para navegação
  // Nesse caso ele e usado para retornar ao home do app assim que o post for bem sucedido
  const navigate = useNavigate();

  // Importando as funçoes do hook useInsertDocument
  const { insertDocument, response } = useInsertDocument("posts");

  // Função executada no envio do formulario
  const handleSubmit = (e) => {
    // Previne a atualização da pagina
    e.preventDefault();

    // Zera os erros na constante que mostra os erros
    setFormError("");

    // validate image
    try {
      







      // A classe URL serve para manipular url e pode extrair varias informaçoes como ip, dominio, portam etc
      // Nesse caso se o valor passado como parametro "(image)" nao for uma url valida ele cai no bloco Cath que vai tratar o erro
      new URL(image);
 


    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
    /**const tagsArray =

    Aqui, estamos declarando uma constante chamada tagsArray para armazenar o array resultante das tags.
    tags.split(",")

    A função split(",") é aplicada à variável tags, que é uma string contendo as tags 
    separadas por vírgulas. Essa função divide a string em várias substrings com base no 
    caractere de vírgula e retorna um array contendo essas substrings.
    .map((tag) => tag.trim().toLowerCase())

    Em seguida, o método map() é aplicado ao array resultante do passo anterior. 
    Esse método itera sobre cada elemento do array e executa uma função de callback para cada elemento.
    (tag) => tag.trim().toLowerCase()

    A função de callback passada para o map() é uma função arrow que recebe um parâmetro tag. 
    Essa função é usada para transformar cada elemento do array, removendo quaisquer espaços 
    em branco extras antes e depois da tag usando o método trim(), e convertendo todas as letras 
    para minúsculas usando o método toLowerCase().
    Portanto, o resultado final é um array chamado tagsArray contendo todas as tags individuais 
    convertidas em letras minúsculas e sem espaços extras. Por exemplo, se a variável tags for 
    "Tag1, Tag2, Tag3", o tagsArray será ["tag1", "tag2", "tag3"]. */

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return;


    // Envia para o Hook os dados tratados
    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

  return (
    <CreateFormStyleConteiner>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </CreateFormStyleConteiner>
  );
};

export default CreatePost;