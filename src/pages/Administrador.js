import './Administrador.css'
import { Outlet, Link } from "react-router-dom";

const Administrador = () => {
    return (

        <section className='features2'>
            <h1>O QUE QUER FAZER?</h1>

                <div class="box-container2">
                    <div class="box2">
                        <img src='https://th.bing.com/th/id/OIP.SfU8uLrkVKlj0VEjVJ9w3AAAAA?pid=ImgDet&rs=1'></img>
                        <li>
                        <Link to="/cadastro">Adicionar</Link>
                        </li>
                    </div>
                    <div class="box2">
                        <img src='https://th.bing.com/th/id/R.f33455cf649d5f6c7f66dc01d1d2f68c?rik=GJIauZ0TcaQhCw&pid=ImgRaw&r=0&sres=1&sresct=1'></img>
                        <li>
                        <Link to="/busca">Procurar, editar e deletar</Link>
                        </li>
                    </div>
                </div>

        </section>
    )
  };
  
  export default Administrador;