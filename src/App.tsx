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
      <h4>publicacoes</h4>
      <div>
        <button onClick={escutarpublicacoes}>Atualizar lista de tarefas</button>
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




type User = {
  id: number,
  name: string;
  username: string;
  email: string;
  adress: object;
  phone: string;
  website: string;
  company: object;
};


const ListaDeUsuarios = () => {
  const [usuarios, setuser] = useState([]);
  const escutaruser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number;  name: string;  username: string;  email: string;  adress: string;  phone: string;  website: string;  company: string; }) => {
        return {
          id: item.id,
          Name: item.name,
          Username: item.username,
          Email: item.email,
          Adress: item.adress,
          Phone: item.phone,
          Website: item.website,
          Company: item.company,
        };
      });
      setuser(dados);
    });
  };
  
  return (
    <div>
      <h4>Usuarios</h4>
      <div>
        <button onClick={escutaruser}>Atualizar lista de tarefas</button>
      </div>
      <ul>
        {
          usuarios.map((item: User) => {
            return <ItemUser key={item.id} name={item.name} />
          })
        }
      </ul>
    </div>);
}
const ItemUser = (props: {name: string} - {username: string} - {email: string} - {adress: string} - {phone: string} - {website: string} - {company: string}) => {
  return (<li>{props.name} - {props.username} - {props.email} - {props.adress} - {props.phone} - {props.website} - {props.company}</li>):
};



type Album = {
  id: number,
  titulo: string;
  body: string;
};
const ListaDeAlbuns = () => {
  const [publicacoes, setpublicacoes] = useState([]);
  const escutarpublicacoes = () => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((resposta: AxiosResponse) => {
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
      <h4>publicacoes</h4>
      <div>
        <button onClick={escutarpublicacoes}>Atualizar lista de tarefas</button>
      </div>
      <ul>
        {
          publicacoes.map((item: Album) => {
            return <ItemAlbum key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </div>);
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
const ItemAlbum = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}

export default App;
