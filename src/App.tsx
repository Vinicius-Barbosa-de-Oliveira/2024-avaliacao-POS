import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";


/*ype Usuario = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: object,
  phone: string,
  website: string,
  company: object;
};

type Publicacao = {
  id: number,
  titulo: string,
  body: string;
};

type Album = {
  id: number,
  titulo: string;
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
    <>
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
    </>
  );
}

const ItemTarefa = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}

const ListaDePublicacoes = () => {
  const [publicacoes, setPublicacoes] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((resposta: AxiosResponse) => {
      const posts = resposta.data.map((post: { id: number; title: string; body: string; }) => {
        return {
          id: post.id,
          titulo: post.title,
          conteudo: post.body,
        };
      });
      setPublicacoes(posts);
    });
  };  
  return (
    <>
      <h4>Publicações</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar publicações</button>
      </div>
      <ul>
        {
          publicacoes.map((item: Publicacao) => {
            return <ItemPublicacao key={item.id} titulo={item.titulo} body={item.body} />
          })
        }
      </ul>
    </>
  );
}
const ItemPublicacao = (props: {titulo: string; body: string}) => {
  return (<li>{props.titulo} - {props.body}</li>);
}

const ListaDeUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((resposta: AxiosResponse) => {
      const users = resposta.data.map((user: { id: number; name: string; username: string; email: string;  address: object; phone: string; website: string; company: object;}) => {
        return {
          id: user.id,
          nome: user.name,
          usuario: user.username,
          email: user.email,
          endereco: user.address,
          telefone: user.phone,
          site: user.website,
          companhia: user.company,
        };
      });
      setUsuarios(users);
    });
  };  
  return (
    <>
      <h4>Usuários</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar usuários</button>
      </div>
      <ul>
        {
          usuarios.map((item: Usuario) => {
            return <ItemUsuario key={item.id} name={item.name} username={item.username} email={item.email} address={item.address} phone={item.phone} website={item.website} company={item.company} />
          })
        }
      </ul>
    </>
  );
}
const ItemUsuario = (props: {name: string; username: string; email: string; address: object; phone: string; website: string; company: object}) => {
  return (<li>{props.name} - {props.username} - {props.email} - {props.address} - {props.phone} - {props.website} - {props.company}</li>);
}

const ListaDeAlbuns = () => {
  const [albuns, setAlbuns] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((resposta: AxiosResponse) => {
      const albuns = resposta.data.map((album: { id: number; title: string;}) => {
        return {
          id: album.id,
          titulo: album.title,
        };
      });
      setAlbuns(albuns);
    });
  };  
  return (
    <>
      <h4>Albuns</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar albuns</button>
      </div>
      <ul>
        {
          albuns.map((item: Album) => {
            return <ItemAlbum key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
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

export default App;*/



//----------------------------------------------------------------------------------------------------------


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
        <button onClick={escutaruser}>Atualizar lista de tarefas</button>
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
        <button onClick={escutaralbuns}>Atualizar lista de tarefas</button>
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
