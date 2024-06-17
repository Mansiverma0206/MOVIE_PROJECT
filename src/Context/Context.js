import React, { useContext, useEffect ,useState} from 'react';

const API_URL = `http://www.omdbapi.com/?apikey=a59bb68&s=titanic`;


const AppContext  = React.createContext()

const AppProvider = ({children}) =>{

   const [isLoading,setLoading] = useState(true)
   const [movie,setMovie] = useState([])
   const [isError,setError] = useState({show : "false" , msg : ""})
  const getMovies = async(url) =>{
         try{
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
            if(data.Response === "True"){
               setLoading(false)
               setMovie(data.Search)
            }else{
               setError({
                  show : true,
                  msg :data.error,
               })
            }
         } catch(error){
            console.log(error)
         }
  }

   useEffect(()=>{
      getMovies(API_URL);
   },[])
   return<AppContext.Provider value={{isLoading,movie,isError}}>
      {children}
   </AppContext.Provider>
}

const useGlobalContext =() =>{
   return useContext(AppContext)
}
export {AppContext , AppProvider,useGlobalContext }