import { MainBtn } from "../../component/Button.styled"
import { Img } from "../../component/Img.styled"
import { Paragraph, Text, Title } from "../../component/Text.styled"
import { Card } from './../../component/Card.styled'
import image from './../../Rectangle.jpg'


export function CardComponent() {
    return (
        <Card>
            <Img src={image} />
            <Text>
                <Title>Headline</Title>
                <Paragraph>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.
                </Paragraph>
            </Text>
            <MainBtn btnType={'primary'}>See more</MainBtn>
            <MainBtn btnType={'outlined'}>Save</MainBtn>
        </Card>
    )
}