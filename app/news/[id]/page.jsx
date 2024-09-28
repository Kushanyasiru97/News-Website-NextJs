export default function NewsDetailPage({params}){

    const newsID = params.id

    return(
        <>
        <h1>This is News Detail Page</h1>
        <p> News ID : {newsID}</p>

        </>
    )
}