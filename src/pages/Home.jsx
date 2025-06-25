// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";

const slides = [
  {
    texto: "Arte que marca para sempre",
    imagem: "https://i.pinimg.com/originals/9a/be/4a/9abe4a6a212932f1f00a219744c39b60.jpg",
  },
  {
    texto: "Profissionalismo e estilo em cada traço",
    imagem: "https://cdna.artstation.com/p/assets/images/images/043/499/320/large/sypru-sypru.jpg?1637445019",
  },
  {
    texto: "Sua tatuagem com identidade única",
    imagem: "https://i.etsystatic.com/46414568/r/il/3c0e08/5728065322/il_1588xN.5728065322_6zuc.jpg",
  },
];

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="slide-container mb-5">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === slideIndex ? "active" : ""}`}
        >
          <div className="row h-100 align-items-center">
            <div className="col-md-6 text-slide">
              <h2>{slide.texto}</h2>
            </div>
            <div className="col-md-6">
              <img
                src={slide.imagem}
                alt={`Slide ${index + 1}`}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    
      {/* Nova seção História e Tendências */}
      <div className="info-section container">
        <div className="info-left">
          <h2>História da Tattoo nas Civilizações</h2>
          <p>
            A tatuagem é uma forma de arte corporal que tem raízes profundas em várias civilizações ao longo da história. Desde os antigos egípcios, que usavam tatuagens como símbolos de proteção e status social, até as tribos polinésias que desenvolveram elaborados padrões de tatuagem para contar histórias e marcar ritos de passagem, essa prática tem sido uma expressão cultural significativa. Na Idade Média, a tatuagem foi adotada por marinheiros como um símbolo de suas viagens e proteção contra perigos. Em diferentes culturas indígenas, as tatuagens serviam para marcar pertencimento, conquistas e conexão espiritual. Com o avanço dos séculos, a tatuagem evoluiu, adaptando-se aos valores, crenças e estéticas de cada época, tornando-se hoje uma forma universal de autoexpressão que une tradição e modernidade.
          </p>
        </div>
        <div className="info-right">
          <h2>Últimas Tendências de Tattoo na Cultura Pop</h2>
          <p>
            Atualmente, a cultura pop influencia fortemente as tendências de tatuagem, trazendo designs que refletem símbolos da música, cinema, videogames e redes sociais. Tatuagens minimalistas, como linhas finas e geométricas, têm ganhado popularidade, assim como as tattoos inspiradas em estilos retrô e vintage. Outra tendência em alta são as tatuagens coloridas e aquareladas, que remetem a obras de arte vivas na pele. Celebridades e influenciadores digitais também têm papel importante na difusão de estilos, fazendo com que temas como tatuagens inspiradas em séries, filmes e memes se tornem comuns. Além disso, há um crescente interesse por tatuagens que promovem mensagens de empoderamento, sustentabilidade e diversidade, refletindo valores contemporâneos na sociedade.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
