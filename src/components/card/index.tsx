import {Card, 
        CardThumb, 
        CardDate, 
        CardDateDay,
        CardDateMonth,
        CardBody,
        CardCategory,
        CardTitle,
        CardSubtitle,
        CardDescription,
        CardFooter,
        Icon
    } from './card.style'


function ArticleCard() {
    return (
      <Card>
        <CardThumb>
          <img src="http://lorempicsum.com/futurama/370/235/2" alt="Card Thumbnail" />
        </CardThumb>
        <CardDate>
          <CardDateDay>12</CardDateDay>
          <CardDateMonth>Mai</CardDateMonth>
        </CardDate>
        <CardBody>
          <CardCategory>
            <a href="#">Photos</a>
          </CardCategory>
          <CardTitle>
            <a href="#">Bender Should Not Be Allowed on TV</a>
          </CardTitle>
          <CardSubtitle>A Head In The Polls</CardSubtitle>
          <CardDescription>
            With a warning label this big, you know they gotta be fun! This is the worst part. The calm before the battle.
            No! The cat shelter's on to me. Yes, I saw. You were doing well, until everyone died. Daylight and everything.
          </CardDescription>
        </CardBody>
        <CardFooter>
          <Icon className="icon--time"><i className="fa fa-hourglass-o fa-lg" aria-hidden="true"></i></Icon>6 min
          <Icon className="icon--comment"><i className="fa fa-commenting fa-lg"></i></Icon>
          <a href="#">39 comment</a>
        </CardFooter>
      </Card>
    );
  }
  
  export default ArticleCard;