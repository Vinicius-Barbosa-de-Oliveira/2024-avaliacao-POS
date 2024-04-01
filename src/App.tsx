import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";


type Tarefa = {
  id: number,
  titulo: string;
  concluido: boolean;
};
const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; completed: boolean; }) => {
        return {
          id: item.id,
          titulo: item.title,
          concluido: item.completed,
        };
      });
      setTarefas(dados);
    });
  };
    return (
    <div>
      <h4>Tarefas</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de tarefas</button>
      </div>
      <ul>
        {
          tarefas.map((item: Tarefa) => {
            return <ItemTarefa key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </div>
  );
}
const ItemTarefa = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}




type Publ = {
  id: number,
  titulo: string;
  body: string;
};
const ListaDePublicacoes = () => {
  const [publicacoes, setpublicacoes] = useState([]);
  const escutarpublicacoes = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; body: string; }) => {
        return {
          id: item.id,
          titulo: item.title,
          body: item.body,
        };
      });
      setpublicacoes(dados);
    });
  };
  
  return (
    <div>
      <h4>Publicações</h4>
      <div>
        <button onClick={escutarpublicacoes}>Atualizar lista de Publicações</button>
      </div>
      <ul>
        {
          publicacoes.map((item: Publ) => {
            return <Itempubl key={item.id} titulo={item.titulo} body={item.body} />
          })
        }
      </ul>
    </div>);
    
}
const Itempubl = (props: {titulo: string; body: string}) => {
  return (<li>{props.titulo}</li>);
}




type Usuario = {
  id: number,
  nome: string;
  usuario: string;
  email: string;
};


const ListaDeUsuarios = () => {
  const [usuarios, setuser] = useState([]);
  const escutaruser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; name: string; username: string; email: string; }) => {
        return {
          id: item.id,
          nome: item.name,
          usuario: item.username,
          email: item.email
        };
      });
      setuser(dados);
    });
  };
  
  return (
    <div>
      <h4>Usuarios</h4>
      <div>
        <button onClick={escutaruser}>Atualizar lista de Usuarios</button>
      </div>
      <ul>
        {
          usuarios.map((item: Usuario) => {
            return <ItemUsuario key={item.id} nome={item.nome}  usuario={item.usuario} email={item.email}/>
          })
        }
      </ul>
    </div>);
}
const ItemUsuario = (props: {nome: string; usuario: string; email: string}) => {
  return (<li>{props.nome} - {props.usuario} - {props.email}</li>);
}



type Album = {
  id: number,
  titulo: string;
  body: string;
};
const ListaDeAlbuns = () => {
  const [albuns, setalbuns] = useState([]);
  const escutaralbuns = () => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; body: string; }) => {
        return {
          id: item.id,
          titulo: item.title,
          body: item.body,
        };
      });
      setalbuns(dados);
    });
  };
  
  return (
    <div>
      <h4>Albuns</h4>
      <div>
        <button onClick={escutaralbuns}>Atualizar lista de Albuns</button>
      </div>
      <ul>
        {
          albuns.map((item: Album) => {
            return <ItemAlbum key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </div>);
}
const ItemAlbum = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}

const App = () => {
  return (
    <div className="avaliacao">
      <h1>Infoweb - React</h1>
      <ListaDeTarefas />
      <ListaDePublicacoes />
      <ListaDeAlbuns />
      <ListaDeUsuarios />
    </div>
  );
}


export default App;
