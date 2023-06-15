import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
const AppContext = React.createContext()



const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'

const AppProvider = ({children}) => {

    const fetchMeals = async (url) =>{
        try{
            const response = await axios(url)

            console.log(response.data)
        }catch(error){
            console.log(error.response)
        }
    }

    useEffect(()=>{
        fetchMeals(allMealsUrl)
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