function AutomobileList({automobiles}){
    
    return (
        <>
        <h1 className="mb-3 mt-3">Automobiles</h1>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Automobiles</th>
          </tr>
        </thead>
        <tbody>
          {automobiles.map(automobile => {
            return (
              <tr key={automobile.id}>
                <td>{ automobile.name }</td>
              </tr>
            );
          })}
        </tbody>
      </table>

        
        </>
    )
}
export default AutomobileList;