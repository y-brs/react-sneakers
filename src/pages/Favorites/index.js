import { useContext } from "react"
import { AppContext } from "../../App"

import Card from "../../components/Card"
import Empty from "../Empty"

function Favorites() {
  const { favorites } = useContext(AppContext)

  return (
    <main className="main">
      {favorites.length > 0 ? (
        <>
          <div className="section">
            <h1>My favorites</h1>
          </div>

          <div className="card-list">
            {favorites.map((item, index) =>
              <Card
                key={index}
                favorited={true}
                {...item}
              />
            )}
          </div>
        </>
      ) : (
        <Empty
          title="Favorite is empty :-("
          description="You don't add anything sneakers."
          image="/images/smile-empty.svg"
        />
      )}
    </main>
  )
}

export default Favorites
