function AutomobileList({automobiles}){
    
    return (
        <>
        <h1 className="mb-3 mt-3">Automobiles</h1>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {automobiles.map(automobile => {
            return (
              <tr key={automobile.id}>
                <td>{ automobile.vin }</td>
                <td>{ automobile.color }</td>
                <td>{ automobile.year }</td>
                <td>{ automobile.model.name }</td>
                <td>{ automobile.model.manufacturer.name }</td>
              </tr>
            );
          })}
        </tbody>
      </table>

        
        </>
    )
}
export default AutomobileList;