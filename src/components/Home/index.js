
import {Component} from "react";
import Header from "../Header"
import Footer from "../Footer";

class Home extends Component{
    state={movieslist:[]}
    componentDidMount(){
        console.log("didmount")
        this.getMovies()
    }
    getMovies=async()=>{
        console.log("gettasks()")
        const res = await fetch('https://nxtmovieapp-backend.onrender.com/movies');
        console.log(res.ok)
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        console.log(data)
        this.setState(()=>({movieslist:data}));
      
    }

    updatemovie=async()=>{
        console.log("update")
        
    }
    render(){
        const movieslist=this.state.movieslist
        console.log(movieslist)
        return <div>
            <Header />
            <ol>{movieslist.map(each=><li key={each.title}>
<h1>{each.id}.{each.title}</h1>
<p>
{each.director}</p>
<p>{each.genre} </p>
<p>{each.releaseYear}</p>
<p>{each.posterUrl }</p><p>
{each.watched}</p>
<img alt={each.title} src={each.posterUrl}/> </li>)}</ol>
            <button >Get</button>
            <Footer/>
        </div>
    }
}

export default Home;