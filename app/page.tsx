'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContent, Container } from './stylespage';

const Home: React.FC = () => {
  type BasesType = {
    [key: string]: string;
  };

  type PostType = {
    id: number;
    name: string;
    created_at: string;
    completed_percentage: string;
    weight: number;
  };

  const [bases, setBases] = useState<BasesType>({});
  const [loading, setLoading] = useState(true);
  const [baseData, setBaseData] = useState<{ [key: string]: PostType[] }>({});
  const [expandedBase, setExpandedBase] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [nameFilter, setNameFilter] = useState<string>(''); // Estado para armazenar o valor do filtro de nome
  const [initialLetterFilter, setInitialLetterFilter] = useState<string[]>([]); // State to store the initial letter filter
  const [alertedBases, setAlertedBases] = useState<string[]>([]);
  const [letterFilters, setLetterFilters] = useState<string[]>([]);

  // Função para aplicar o filtro de nome
  const applyNameFilter = () => {
    // Atualiza o filtro e chama a função de buscar os dados novamente
    setBases({});
    setNameFilter(nameFilter.trim());
  };

  // Função para aplicar o filtro de letra inicial
  const applyInitialLetterFilter = () => {
    setInitialLetterFilter([...letterFilters]);
  };

  // Função para tratar seleção/deseleção de letras no filtro
  const handleLetterFilterChange = (selectedLetter: string) => {
    if (letterFilters.includes(selectedLetter)) {
      // Remove a letra do filtro se já estiver selecionada
      setLetterFilters(letterFilters.filter((letter) => letter !== selectedLetter));
    } else {
      // Adiciona a letra ao filtro se não estiver selecionada
      setLetterFilters([...letterFilters, selectedLetter]);
    }
  };

  useEffect(() => {
    async function fetchBaseData() {
      try {
        const apiToken = 'd0NLCpTnvtsY1gQu7S38RyF47fOjnHknynBjGzWxCwpXOJqXaNwWDrGqFomq';

        const response = await axios.get(`https://3c.fluxoti.com/api/v1/campaigns?paused=false&page=1&api_token=${apiToken}`);
        const totalPages = response.data.meta.pagination.total_pages;

        const allBaseData: { [key: string]: PostType[] } = {};
        let audioPlayedInThisUpdate = false;

        for (let page = 1; page <= totalPages; page++) {
          const pageResponse = await axios.get(`https://3c.fluxoti.com/api/v1/campaigns?paused=false&page=${page}&api_token=${apiToken}`);
          const baseList = pageResponse.data.data;

          for (const base of baseList) {
            const baseId = base.id.toString();
            const baseName = base.name;

            // Adicione o filtro para não mostrar bases que começam com 'E' ou 'R' e atendem ao filtro de letra inicial
            if ((letterFilters.length === 0 || letterFilters.some((letter) => baseName.startsWith(letter)))) {
              bases[baseName] = baseId;
            }

            const listResponse = await axios.get(`https://3c.fluxoti.com/api/v1/campaigns/${baseId}/lists?api_token=${apiToken}`);
            const filteredData = listResponse.data.data;

            if (!allBaseData[baseId]) {
              allBaseData[baseId] = filteredData;
            } else {
              allBaseData[baseId].push(...filteredData);
            }

            const temPorcentagemMaiorQue90 = filteredData.some((post: PostType) => parseFloat(post.completed_percentage) >= 90);
            const temPorcentagemMaiorIguala90 = filteredData.some((post: PostType) => parseFloat(post.completed_percentage) === 90);

            if (temPorcentagemMaiorQue90 && !audioPlayedInThisUpdate && !alertedBases.includes(baseName)) {
              audioPlayedInThisUpdate = true;
            }

            if (temPorcentagemMaiorIguala90 && !audioPlayedInThisUpdate && !alertedBases.includes(baseName)) {
              alert(`A base ${baseName} atingiu 90%!`);
              // Adicione um alerta personalizado aqui
              setAlertedBases((prevAlertedBases) => [...prevAlertedBases, baseName]);
            }
          }
        }

        setBases(bases);
        setBaseData(allBaseData);
        setLoading(false);
        setLastUpdate(new Date());
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        setLoading(false);
      }
    }

    fetchBaseData();
    const interval = setInterval(fetchBaseData, 1 * 10 * 1000);

    return () => clearInterval(interval);
  }, [alertedBases, letterFilters]);

  function renderPorcentagem(porcentagem: string) {
    const porcentagemNum = parseFloat(porcentagem);

    if (porcentagemNum === 100) {
      const porcentagemFormatada = porcentagemNum.toFixed(0);
      return <span className="porcentagem-azul">{porcentagemFormatada}%</span>;
    } else if (porcentagemNum >= 90 && porcentagemNum <= 100) {
      const porcentagemFormatada = porcentagemNum.toFixed(0);
      return <span className="porcentagem-vermelha">{porcentagemFormatada}%</span>;
    } else {
      const porcentagemFormatada = porcentagemNum.toFixed(0);
      return <span className="porcentagem-verde">{porcentagemFormatada}%</span>;
    }
  }

  function toggleDetails(id: string) {
    if (expandedBase === id) {
      setExpandedBase(null);
    } else {
      setExpandedBase(id);
    }
  }

  return (
    <CardContent>
      <div className="principalContent">
        <div className="logo">
          <img src="/logo plataforma.png" alt="PH Negócios Plataforma" style={{ width: '400px', height: 'auto', marginTop: '5%', marginBottom: '3%' }} />
        </div>
        <nav>
          <ul className="nav-links">
            <div className='link'>

            <li><a href="/">Bases</a></li>
            <li className="center"><a href="#">Graficos</a></li>
            <li className="upward"><a href="#">Adicionar</a></li>
            <li className="forward"><a href="#">Update</a></li>
            </div>
  <div className='filters'>
        <div className='newfunctionalities'>
          <div>

            <input
              type="text"
              placeholder="Filtrar por nome"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              />
            <button onClick={applyNameFilter}>Aplicar Filtro</button>
              </div>

            {/* Checkbox group for filtering by initial letter */}
            <div className="letter-checkboxes">
      {['S', 'E', 'R', 'G', 'B', 'I', 'C', 'M'].map((letter) => (
        <label key={letter} className="letter-checkbox">
          <input
            type="checkbox"
            value={letter}
            checked={letterFilters.includes(letter)}
            onChange={() => handleLetterFilterChange(letter)}
            className="checkbox-input"
            />
          <span className="custom-checkbox">
            <span className="checkmark">&#10003;</span>
          </span>
          {letter}
        </label>
              ))}
{/*               <button onClick={applyInitialLetterFilter}>Aplicar Filtro</button>
 */}            </div>
          </div>
              </div>
          </ul>
        </nav>
        {loading && <p>Carregando...</p>}
        {!loading && (
          <div className="Cardsalign">
            {Object.keys(bases).map((baseName) => {
              // Check if the base meets the filters
              if (
                baseName.toLowerCase().includes(nameFilter.toLowerCase()) &&
                (letterFilters.length === 0 || letterFilters.some((letter) => baseName.startsWith(letter)))
              ) {
                return (
                  <div
                    key={baseName}
                    className={`campaign-card${expandedBase === bases[baseName] ? ' clicked' : ''}`}
                    onClick={() => toggleDetails(bases[baseName])}
                  >
                    <div className={`base ${baseData[bases[baseName]] && baseData[bases[baseName]].length > 0 && parseFloat(baseData[bases[baseName]][0]?.completed_percentage) >= 90 ? 'com-aviso' : ''}`}>{baseName}</div>
                    {expandedBase === bases[baseName] && (
                      <div className="campaign-percentages">
                        {baseData[bases[baseName]]?.map((post) => (
                          <Container key={post.id}>
                            <div
                              className={`percentage-item ${parseFloat(post.completed_percentage) >= 90 ? 'com-aviso' : ''}`}
                            >
                              <h3>{post.name}</h3>
                              <p>{post.created_at}</p>
                              <h3 className={`porcentagem-${post.completed_percentage === '100.00' ? 'verde' : 'vermelha'}`}>
                                {renderPorcentagem(post.completed_percentage)}
                              </h3>
                              <p>Última atualização: {lastUpdate.toLocaleTimeString()}</p>
                            </div>
                          </Container>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </CardContent>
  );
};

export default Home;
