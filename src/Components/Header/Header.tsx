import { TopHeader } from "./styled.js"

export  function Header() {
    const logged = false

    {!logged ? 
        <TopHeader>
            <h1>CBank</h1>  <a href="/login">Login</a>
        </TopHeader> 
      :
        <TopHeader>
            <h1>CBank</h1>  <a href="/login">Davi</a>
        </TopHeader>
    }
     
}
