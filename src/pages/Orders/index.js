import { useEffect, useState } from "react"
import axios from "axios"

import Card from "../../components/Card"

import { BASE_URL } from "../../App"


function Orders() {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/orders`)
        setOrders(data.reduce((prev, obj) => [ ...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        console.log("Error with orders request!");
      }
    })()
  }, [])

  return (
    <>
      <main className="main">
        <div className="section">
          <h1>My orders</h1>
        </div>

        <div className="card-list">
          {(isLoading ? [...Array(4)] : orders).map((item, index) =>
            <Card
              key={index}
              loading={isLoading}
              {...item}
            />
          )}
        </div>
      </main>
    </>
  )
}

export default Orders
