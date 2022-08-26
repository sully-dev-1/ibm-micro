import Image from 'next/image';
import React from 'react';
import FormBasica from '../../assets/formacao-basica.webp';
import Form1 from '../../assets/formacao-avancada-1.webp';
import Form2 from '../../assets/formacao-avancada-2.webp';
import Form3 from '../../assets/formacao-avancada-3.webp';
import { FormacoesCard, FormacoesContainer } from './styles';

function Formacoes() {
  return (
    <FormacoesContainer>
        <FormacoesCard>
            <div className='form__img'>
                <Image
                    src={FormBasica}
                    width={300}
                    height={93}
                    alt="Formação Básica"
                />
            </div>
            <p className='p__one'>Será Realizado em 2 Módulos, sendo:  1º Módulo em 6 dias e o 2º Módulo em 6 dias e meio.</p>
            <h3>1º Módulo &#40;A/B/C&#41;</h3>
            <span>Introdução a Microfisioterapia – Todas as teorias científicas da BASE da Micro. Micropalpação e autocorreção.</span>
            <p className='p__two'>Estudos relacionados: Embriologia, Filogênese, Fisiologia, Anatomia, Física Quântica, Epigenética, Memória Celular, Neurociência do Toque, Psiconeuroimunologia, Influências do Ambiente no Organismo &#40;Externo e Interno&#41; e o estudo dos 3 tecidos primários da embriologia: Mesoderma, &#40;Músculo, Ossos, Articulações&#41; Ectoderma
                &#40;SN e Pele&#41;, Circuitos Nervosos, Centros Nervosos, Endoderma – Mucosas &#40;Sistema Visceral e Órgãos&#41;.</p>

            <h3>2º Módulo &#40;NP1/NP2/NP3&#41;</h3>
            <p className='p__one'>Etiologias que afetam nosso organismo no ambiente externo.</p>
            <p className='p__one'>Estudos relacionados: Infecções, lesões tóxicas, contusões traumáticas, lesões obstrutivas, lesões vibratórias &#40;Ondas/Frequências&#41;, toxicidades, emoções, ambiente interno &#40;Geradas/Produzidas&#41;, Existencial, &#40;Relacional, Individualidade&#41;, Essência do Ser, Capacidades e Desejos do Indivíduo com ele mesmo e em Relação aos outros &#40;Mundo&#41;, Terreno &#40;Campo Morfogenético&#41;, Forma dos Genes, História de Nossa Construção &#40;Familiar e com Meio Ambiente&#41;.</p>
            <p className='p__one'>Na formação básica é emitido o certificado para habilitar o aluno ao atendimento, e será por meio de uma prova final que ocorrerá no fechamento do 2º módulo.</p>
            {/* <div className='formCard__infos'>
                <p><strong>Estudos:</strong></p>
                <p>Embriologia/Filogênese/Fisiologia/Anatomia/Física Quântica/Epigenética/Memória Celular/Neurociência do Toque/Psiconeuroimunologia/Influências do Ambiente no Organismo &#40;Externo e Interno&#41;
                </p>
                <ul>
                    <p>Estudos dos 3 tecidos Primários da Embriologia</p>
                    <li>Mesoderma – Músculo/Ossos/Articulações</li>
                    <li>Ectoderma – SN e Pele &#40;Circuitos Nervosos/Centros Nervosos&#41;</li>
                    <li>Endoderma – Mucosas &#40;Sistema Visceral e Órgãos&#41;</li>
                </ul>
            </div> */}
            <a href="whatsapp.com">Acesse o Módulo</a>
        </FormacoesCard>
        <FormacoesCard>
            <div className='form__img'>
                <Image
                    src={Form1}
                    width={300}
                    height={93}
                    alt="Formação Básica 2"
                />
            </div>
            <h3 className='title__solo'>1º Avançado <br />
            P3/P6 (E1-E2) - Novas Etiologias (Etiologias Primárias)</h3>
            <p><strong>Duração:</strong> 6 dias</p>
            <h4>Estudos</h4>
            <ul>
                <li>Entropia: Etiologias que Alteram o Funcionamento do Corpo (Função Geral e Específica).</li>
                <li>Negantropia: Construção do Corpo Físico e do Indivíduo em todas suas Dimensões (Psíquica/Afetiva/Mental/Intelectual)</li>
            </ul>
            <a href="whatsapp.com">Acesse o Módulo</a>
        </FormacoesCard>
        <FormacoesCard>
            <div className='form__img'>
                <Image
                    src={Form2}
                    width={300}
                    height={93}
                    alt="Formação Avançada 1"
                />
            </div>
            <h3>2º Avançado <br />
            P7/P8 (E3) – Proteções </h3>
            <p><strong>Duração:</strong> 3 dias e meio</p>
            <h4>Estudos</h4>
            <ul>
                <li>Adaptações e Mecanismos de Sobrevivência para o Organismo (Forças, Capacidades, Comportamental) em suas proteções em negantropia e entropia, corporal e intracelular.</li>
            </ul>
            <a href="whatsapp.com">Acesse o Módulo</a>
        </FormacoesCard>
        <FormacoesCard>
            <div className='form__img'>
                <Image
                    src={Form3}
                    width={300}
                    height={93}
                    alt="Formação Avançada 2"
                />
            </div>
            <h3>3º Avançado <br />
            P9 (E4-E5)</h3>
            <p><strong>Duração:</strong> 4 dias e meio</p>
            <h4>Estudos</h4>
            <ul>
                <li>Novos Estudos de Etiologias e Proteções. Estudos sobre Xenobióticos e suas possíveis alterações no organismo.</li>
            </ul>
            <a href="whatsapp.com">Acesse o Módulo</a>
        </FormacoesCard>
        
    </FormacoesContainer>
  )
}

export default Formacoes