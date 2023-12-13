// Icones
import logo from '../../assets/principal/logo.jpeg';
import follow from '../../assets/icons/follow.png';
import balao from '../../assets/icons/balao.png';
import aviao from '../../assets/icons/aviao.png';
import lupa from '../../assets/icons/lupa.png';

// Principal
import perfil1 from '../../assets/principal/postInsta/perfil1.jpg';
import perfil2 from '../../assets/principal/postInsta/perfil2.jpg';
import perfil3 from '../../assets/principal/postInsta/perfil3.jpg';
import perfil4 from '../../assets/principal/postInsta/perfil4.jpg';
import perfil5 from '../../assets/principal/postInsta/perfil5.jpg';
import perfil6 from '../../assets/principal/postInsta/perfil6.jpg';

import post1 from '../../assets/principal/postInsta/post1.jpeg';
import post2 from '../../assets/principal/postInsta/post2.jpg'
import post3 from '../../assets/principal/postInsta/post3.jpg';
import post4 from '../../assets/principal/postInsta/post4.jpeg';
import post5 from '../../assets/principal/postInsta/post5.jpeg';
import post6 from '../../assets/principal/postInsta/post6.jpg';

// Explorar 
import busca1 from '../../assets/principal/explorar/anuncios1.jpeg';
import busca2 from '../../assets/principal/explorar/anuncios2.jpeg';
import busca3 from '../../assets/principal/explorar/anuncios3.jpeg';
import busca4 from '../../assets/principal/explorar/anuncios4.jpeg';

// Perfil
import perfil from '../../assets/principal/perfil/perfil.jpg';
import newPost from '../../assets/principal/perfil/new.png';
import config from '../../assets/principal/perfil/config.png';

const componentes = {
    topo:{
        logo: logo,
        nome: 'InstaIF',
        follow: follow,
        balao: balao,
    },

    posts:{
        post:[
            {
                perfil: perfil1,
                nome: "carlos.salazar.1123",
                postU: post1,
                follow: follow,
                balao: balao,
                aviao: aviao,
            },
            {
                perfil: perfil2,
                nome: "ifsudestemgmanhuacu",
                postU: post2,
                follow: follow,
                balao: balao,
                aviao: aviao,
            },
            {
                perfil: perfil3,
                nome: "filipefernandesphd",
                postU: post3,
                follow: follow,
                balao: balao,
                aviao: aviao,
            },
            {
                perfil: perfil4,
                nome: "lohamsilva15",
                postU: post4,
                follow: follow,
                balao: balao,
                aviao: aviao,
            },
            {
                perfil: perfil5,
                nome: "larback_",
                postU: post5,
                follow: follow,
                balao: balao,
                aviao: aviao,
            },
            {
                perfil: perfil6,
                nome: "robsonsouzamusic",
                postU: post6,
                follow: follow,
                balao: balao,
                aviao: aviao,
            },
        ]
    },

    explorar:{
        busca:{
            lupa: lupa,
        },

        anuncio:[
            {
                img: busca1,
                desc: 'Campanha de Natal do IF Solidário: já é possível fazer doações',
            },
            {
                img: busca2,
                desc: 'Nittec participa de evento em comemoração aos 20 anos da Rede Mineira de Propriedade Intelectual (RMPI)',
            },
            {
                img: busca3,
                desc: 'II Jornada de Educação do IF Sudeste MG: Submeta seu relato até 21 de fevereiro',
            },
            {
                img: busca4,
                desc: 'Avaliação institucional está aberta a estudantes e servidores',
            },
            
        ],
    }, 

    perfil:{
        topo:{
            user: '@pmoraizz',
            newPost: newPost,
            config: config,
        },        
        
        dados:{
            img: perfil,
            publicacaoN: '2',
            publicacao: 'Publicações',
            seguidoresN: '42',
            seguidores: 'Seguidores',
            seguindoN: '51',
            seguindo: 'Seguindo',
            nome: 'Pedro Augusto Morais Carvalho',
            desc: 'Instituição: IFSEMG - Manhuaçu\nAluno: Sistemas de Informação \nPeriodo: 4/8',
        },
    },

}

export default componentes;