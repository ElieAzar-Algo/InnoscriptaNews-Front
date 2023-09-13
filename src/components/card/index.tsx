import {Card, 
        CardThumb, 
        CardBody,
        CardCategory,
        CardTitle,
        CardSubtitle,
        CardDescription,
        CardFooter,
        Icon,
        CardSubDate
    } from './card.style'


function ArticleCard({data}:{data:any}) {


    const formattedDate = new Date(data.publishedAt).toLocaleDateString();
    return (
      <Card>
        <CardThumb>
          <img src={data.image_url} alt="Card Thumbnail" />
        </CardThumb>
        <CardBody>
          <CardCategory>
            <a href={data.article_url}>{data.category}</a>
          </CardCategory>
          <CardTitle>
            <a href={data.article_url}>{data.title}</a>
          </CardTitle>
          <CardSubtitle>{data.source}</CardSubtitle>
          <CardSubDate>{formattedDate}</CardSubDate>
          <CardDescription>
          {data.description}
          </CardDescription>
        </CardBody>
        <CardFooter>
        <span>{data.author}</span>
        </CardFooter>
      </Card>
    );
  }
  
  export default ArticleCard;