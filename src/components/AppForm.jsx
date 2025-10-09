import { useState } from 'react'

const initialArticle = {
    title: "",
    author: "",
    content: "",
    category: "FrontEnd",
    is_published: false
}

export default function AppForm({ newId, setArticles }) {

    const [newArticle, setNewArticle] = useState(initialArticle)


    function handleChange(e) {
        const value = (e.target.type === "checkbox") ? e.target.checked : e.target.value
        console.log(value);
        setNewArticle({
            ...newArticle,
            [e.target.name]: value
        })

    }


    function handleSubmit(e) {
        e.preventDefault()
        if (validateTitle(newArticle.title)) {
            setNewArticle({
                ...newArticle,
                id: newId
            })
            setArticles(newArticle)
            console.log(`L'articolo ${newArticle.title} è stato aggiunto`);
        } else {
            alert("Il titolo è troppo corto, inserirne uno di almeno 5 caratteri")
        }
        setNewArticle("")
    }

    function validateTitle(title) {
        return (title.length >= 5)
    }

    return (
        <>
            <div className="col-4">
                <div className="card p-0">
                    <div className="card-header">
                        Aggiungi articolo
                    </div>
                    <div className="card-body">
                        <form action="submit" onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="title" className="col-form-label">Titolo</label>
                                <input type="text" className="form-control" id="title" name='title' value={newArticle.title} onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="author" className="col-form-label">Autore</label>
                                <input type="text" className="form-control" id="author" name='author' value={newArticle.author} onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="content" className="col-form-label">Contenuto</label>
                                <input type="textarea" className="form-control" id="content" name='content' value={newArticle.content} onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="category" className="col-form-label">Categoria</label>
                                <select className='form-select' id="category" name="category" onChange={handleChange}>
                                    <option value="FrontEnd">FrontEnd</option>
                                    <option value="BackEnd">BackEnd</option>
                                    <option value="UI/UX">UI/UX</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    <input type="checkbox" className="form-check-input" id="is_published" name='is_published' value={newArticle.author.is_published} onChange={handleChange} />
                                </div>
                                <label htmlFor="is_published" className="col-form-label form-control">Pubblicato</label>
                            </div>
                            <button type="submit" className="btn btn-primary d-block mt-3">
                                Aggiungi
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}