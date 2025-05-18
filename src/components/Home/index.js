
import {Component} from "react";


class Home extends Component{
    state={movieslist:[]}

    getMovies=async()=>{
        console.log("gettasks()")
        const res = await fetch('https://nxtmovieapp-backend.onrender.com/movies');
        console.log(res.ok)
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        console.log(data)
        this.setState(()=>({movieslist:data}));
      
    }
    render(){
        return <div>
            home
            <button onClick={this.getMovies}>Get</button>
        </div>
    }
}

export default Home;