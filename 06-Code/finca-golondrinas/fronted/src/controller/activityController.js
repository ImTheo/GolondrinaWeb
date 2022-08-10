import React, { useState, createContext, useEffect, useContext } from 'react';
import axios from 'axios';

const activityContext = createContext();

export const useActivity = () => {
    const context = useContext(activityContext)
    return context;
}


export const ActivityProvider = ({ children }) => {
    const [activities, setActivities] = useState([])

    const getActivities= async () => {
        const res = await axios.get("/api/activities")
        setActivities(res.data)
    }

    const createActivity = async (values, actions) => {
        const result = await axios.post('/api/activity', values);
        actions.resetForm();
        console.log(result)
    }

    useEffect(() => {
        getActivities()
    }, [])

    return (<activityContext.Provider
        value={{ 
            activities,getActivities, createActivity
        }}
    >
        {children}
    </activityContext.Provider>
    );
};