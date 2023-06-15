import React, {useContext, useEffect} from 'react'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'

const AppProvider = ({children}) => {

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch('https://randomuser.me/api/')
                const data = await response.json()
                console.log(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return <AppContext.Provider value={
        {
            name: 'John',
            role: 'student'
        }

    }>
    }
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}