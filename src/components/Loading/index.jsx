import React, { useRef, useEffect } from 'react'; // importa o React e os hooks useRef e useEffect
import lottie from 'lottie-web'; // importa a biblioteca Lottie-web
import animationData from '../../assets/LottieJson/J&T.json'; // importa a animação a ser carregada
import { LoadingConteiner } from './styles'; // importa um componente de estilo

function Loading() { // define um componente chamado Loading
  const container = useRef(null); // cria uma referência a um elemento HTML

  useEffect(() => { // usa o hook useEffect para executar um efeito colateral
    const anim = lottie.loadAnimation({ // carrega a animação usando a função loadAnimation da biblioteca Lottie-web
      container: container.current, // especifica o elemento HTML a ser usado como contêiner
      renderer: 'svg', // especifica o tipo de renderizador (SVG)
      loop: true, // especifica se a animação deve ser executada em loop
      autoplay: true, // especifica se a animação deve ser executada automaticamente
      animationData: animationData, // especifica a animação a ser carregada
      rendererSettings: { // especifica as configurações do renderizador
        preserveAspectRatio: 'xMidYMid slice', // especifica o modo de aspecto a ser usado
        scaleMode: 'noScale', // especifica o modo de escala a ser usado
        clearCanvas: false, // especifica se o canvas deve ser limpo
        progressiveLoad: true, // especifica se o carregamento progressivo deve ser usado
        hideOnTransparent: true, // especifica se o elemento deve ser ocultado em fundos transparentes
        // viewBoxSize: '20 20', // especifica o tamanho da viewBox (opcional)
      },
    });

    return () => anim.destroy(); // retorna uma função que é usada para destruir a animação quando o componente é desmontado
  }, []); // o segundo argumento vazio indica que o efeito deve ser executado apenas uma vez (na montagem do componente)

  return ( // retorna um elemento HTML que contém a animação dentro de uma div com a classe 'loadingSVG'
    <LoadingConteiner>
      <div ref={container} className='loadingSVG'></div>
    </LoadingConteiner>
  )
}

export default Loading; // exporta o componente Loading como padrão para que ele possa ser usado em outros arquivos
