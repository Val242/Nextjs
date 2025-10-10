import Link from "next/link";

export default function NewsArticle({
    params, searchParams
}: {
    params: {articleId: string}
    searchParams: {lang?: "en" | "es" | "fr"}
}){
    const {articleId} =  params;
    const {lang = "en" } =  searchParams;


    return<div>
        <h1>News article {articleId}</h1>
        <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    </div>
}