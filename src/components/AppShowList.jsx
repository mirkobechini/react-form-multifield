export default function AppShowList({ items, delItem }) {

    function handleTrash(id) {
        delItem(id)
        console.log(`L'articolo con id ${id} è stato cancellato`);
    }

    function labelColor(category) {
        let bg_color = "primary"

        switch (category) {

            case "FrontEnd":
                bg_color = "primary"
                break;
            case "BackEnd":
                bg_color = "warning"
                break;
            case "UI/UX":
                bg_color = "danger"
                break;
        }
        
        return bg_color
    }



    return (
        <>

            <div className="col-8">
                <div className="card">
                    <div className="card-header">
                        <h2>Articles</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                items.map(item =>
                                    <li className={`list-group-item d-flex flex-column gap-2 position-relative border border-${labelColor(item.category)} bg-${labelColor(item.category)}-subtle rounded mb-4`} key={item.id}>
                                        <h3 className="d-inline" >{item.title}</h3>
                                        <p>
                                            {item.content}
                                        </p>
                                        <strong>{item.author}</strong>
                                        <label className={`badge position-absolute top-0 end-0 bg-${labelColor(item.category)}`} > {item.category} </label>
                                        <button className="btn btn-danger align-self-start" onClick={() => handleTrash(item.id)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}