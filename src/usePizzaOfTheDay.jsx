import { useEffect, useState, useDebugValue } from 'react'

export function usePizzaOfTheDay() {
    const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null)

    useEffect(() => {
        async function fetchPizzaOfTheDay() {
            const response = await fetch('/api/pizza-of-the-day')
            const data = await response.json()
            setPizzaOfTheDay(data)
        }

        fetchPizzaOfTheDay()
    }, [])

    useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : 'Loading...')

    return pizzaOfTheDay
}
