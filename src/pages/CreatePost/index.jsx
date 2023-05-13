import React, { useState } from 'react'




const CreatePost = () => {
    const [config, setConfig] = useState({
        readonly: false, // torna o editor somente leitura
        toolbar: true, // exibe a barra de ferramentas
        enableDragAndDropFileToEditor: true, // permite arrastar e soltar arquivos no editor
        spellcheck: true, // habilita verificação ortográfica
        showCharsCounter: true, // exibe o contador de caracteres
        askBeforePasteHTML: false, // desabilita o aviso de segurança ao colar conteúdo HTML
        buttons: ['bold', 'italic', 'underline', 'strikethrough', 'image', 'link'] // exibe somente os botões selecionados
    })



    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <JoditEditor
                value={conteudo}
                config={config}
                tabIndex={1}
                onBlur={handleChange}
            />
        </div>
    )
}

export default CreatePost